const links = document.querySelectorAll(".top-navbar a");

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.transform = "translateY(-2px)";
    });

    link.addEventListener("mouseleave", () => {
        link.style.transform = "translateY(0)";
    });
});