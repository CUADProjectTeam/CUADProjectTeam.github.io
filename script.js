document.addEventListener('DOMContentLoaded', function () {
    const root = document.querySelector(':root');
    const headerColor = getComputedStyle(root).getPropertyValue('--header');

    function updateHeaderOpacity() {
        const scrollPosition = window.scrollY;
        const windowWidth = window.innerWidth
        const maxScroll = windowWidth < 900 ? 300 : windowWidth * .1;
        const opacity = scrollPosition <= maxScroll ? (scrollPosition / maxScroll) ** 3 : 1;

        document.querySelector('.header-logo').style.opacity = opacity;

        const rgbaColor = headerColor.startsWith('rgba') ? headerColor : `rgba(${parseRGB(headerColor)}, 1)`;
        root.style.setProperty("--header", `${rgbaColor.substring(0, rgbaColor.lastIndexOf(',') + 1).trim()} ${opacity})`)
    }

    function parseRGB(colorString) {
        return colorString.match(/\d+/g).join(', ');
    }
    updateHeaderOpacity()
    window.addEventListener('scroll', updateHeaderOpacity);
    window.addEventListener('resize', updateHeaderOpacity);
});