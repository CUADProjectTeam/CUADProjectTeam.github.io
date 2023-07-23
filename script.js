const root = document.querySelector(':root');
var hamburgerIcon = null

document.addEventListener("DOMContentLoaded", function () {
    const smoothScrollLinks = document.querySelectorAll(".smooth-scroll");


    smoothScrollLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            root.style.setProperty("--show-dropdown", "hidden")
            hamburgerIcon.src = "images/hamburger.svg";

            const target = this.getAttribute("href");
            const samePage = target.startsWith("#");
            console.log(samePage)

            if (samePage) {
                const targetElement = document.querySelector(target);
                targetElement.scrollIntoView({
                    behavior: "smooth",
                });
            } else {
                window.location.href = target;
            }
        });
    });
    const hamburgerButton = document.querySelector('.hamburger');
    hamburgerIcon = hamburgerButton.querySelector('img');

});


function handleDropdown() {

    if (getComputedStyle(root).getPropertyValue('--show-dropdown') == "hidden") {
        root.style.setProperty("--show-dropdown", "visible")
        hamburgerIcon.src = "images/x.svg";

    } else {
        root.style.setProperty("--show-dropdown", "hidden")
        hamburgerIcon.src = "images/hamburger.svg";

    }


}
