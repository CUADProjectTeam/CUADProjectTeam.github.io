
document.addEventListener("DOMContentLoaded", function () {
    const smoothScrollLinks = document.querySelectorAll(".smooth-scroll");

    smoothScrollLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
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
});
