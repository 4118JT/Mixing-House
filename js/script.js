// Mobile Menu

const menuBtn = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        if (navbar) {
            navbar.classList.remove("nav-hidden");
        }
        const isExpanded = navLinks.classList.toggle("show");
        menuBtn.setAttribute("aria-expanded", String(isExpanded));
    });
}

// Close menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks) {
            navLinks.classList.remove("show");
        }
        if (menuBtn) {
            menuBtn.setAttribute("aria-expanded", "false");
        }
    });
});

// Hide header while scrolling down; show it when scrolling up.

if (navbar) {
    let lastScrollY = window.scrollY;
    const threshold = 8;

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;
        const menuOpen = navLinks ? navLinks.classList.contains("show") : false;

        if (currentScrollY <= 24) {
            navbar.classList.remove("nav-hidden");
        } else if (!menuOpen && currentScrollY > lastScrollY + threshold) {
            navbar.classList.add("nav-hidden");
        } else if (currentScrollY < lastScrollY - threshold) {
            navbar.classList.remove("nav-hidden");
        }

        lastScrollY = currentScrollY;
    }, { passive: true });
}