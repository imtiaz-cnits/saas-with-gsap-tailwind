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

document.querySelectorAll('.nav_mobile_menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('nav_mobile_menu--active')) {
        closeMenu();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 767.2) {
        closeMenu();
    }
});


// navbar item animetion start

const links = document.querySelectorAll('.nav_link');

links.forEach(link => {
    const underline = link.querySelector('.underline');

    link.addEventListener('mouseenter', () => {
        gsap.to(underline, { duration: 0.4, scaleX: 1, ease: "power2.inOut" });
    });

    link.addEventListener('mouseleave', () => {
        gsap.to(underline, { duration: 0.4, scaleX: 0, ease: "power2.inOut" });
    });
});


// navbar item animetion End


// navbar animetion start

window.addEventListener("load", () => {
    gsap.from(".nav_logo", {
        y: -30,
        opacity: 0,
        delay: 1,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".nav_links a", {
        y: -30,
        opacity: 0,
        delay: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0
    });

    gsap.to(".nav_links a", {
        y: 0,
        opacity: 1,
        delay: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0
    })

    gsap.from(".nav_cta_btn", {
        y: -30,
        opacity: 0,
        delay: 1,
        duration: 1,
        ease: "power3.out"
    });
});

// navbar animetion End
