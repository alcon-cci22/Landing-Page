

document.addEventListener("DOMContentLoaded", function() {
    var hambButton = document.querySelector(".hamb");
    var navContainer = document.querySelector("header .container nav");
    var hambIcon = document.querySelector(".hamb i");
    var navLinks = document.querySelectorAll("header .container nav a");

    hambButton.addEventListener("click", function(e) {
        e.preventDefault();
        navContainer.classList.toggle("open");
        hambIcon.classList.toggle("fa-times");
    });

    navLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            navContainer.classList.remove("open");
            hambIcon.classList.remove("fa-times");

            var target = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(target);
            var targetOffsetTop = targetElement.offsetTop - 76;

            window.scrollTo({
                top: targetOffsetTop,
                behavior: "smooth"
            });
        });
    });
});
