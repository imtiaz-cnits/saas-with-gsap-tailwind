const menuBtn = document.querySelector(".nav_mobile-button");
const mobileMenu = document.querySelector(".nav_mobile_menu");
const overlay = document.querySelector(".nav_mobile-overlay");
const closeBtn = document.querySelector(".nav_close-button");
const body = document.body;

function openMenu() {
    mobileMenu.classList.add("nav_mobile_menu--active");
    overlay.classList.add("nav_mobile-overlay--active");
    body.classList.add("body--menu-open");
}

function closeMenu() {
    mobileMenu.classList.remove("nav_mobile_menu--active");
    overlay.classList.remove("nav_mobile-overlay--active");
    body.classList.remove("body--menu-open");
}

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// Close menu when clicking on nav links
document.querySelectorAll('.nav_mobile_menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close menu when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('nav_mobile_menu--active')) {
        closeMenu();
    }
});
