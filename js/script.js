

/////////////////////// navbar sidebar start ///////////////////////////
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
/////////////////////////// navbar sidebar end /////////////////


// navbar sidebar animetion start

const tl = gsap.timeline({ paused: true });

// Step-by-step Animation
tl.to(".nav_mobile_menu", {
  x: 0,
  duration: 0.6,
  ease: "power3.out"
})

  // Show overlay opacity (optional)
  .to(".nav_overlay", {
    opacity: 1,
    duration: 0.3,
    ease: "power1.out"
  }, "-=0.5")

  // Logo animate
  .from(".logo_sidebar", {
    opacity: 0,
    x: -20,
    duration: 0.5,
    ease: "power2.out"
  })

  // Close button animate
  .from(".nav_close-button", {
    opacity: 0,
    scale: 0.7,
    duration: 0.4,
    ease: "back.out(1.7)"
  }, "-=0.3")

  .from(".nav_menu_list li", {
    x: -40,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2,
    ease: "power2.out"
  })

  // Log in button animation
  .from(".nav_menu_auth", {
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.3")

  .to(".nav_menu_auth", {
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.3")

// Initial position hidden
gsap.set(".nav_mobile_menu", { x: "-100%" });
gsap.set(".nav_overlay", { opacity: 0, display: "none" });

// Show sidebar
menuBtn.addEventListener("click", () => {
  document.querySelector(".nav_overlay").style.display = "block";
  tl.play();
});

// Hide sidebar
function closeSidebar() {
  tl.reverse();
  setTimeout(() => {
    document.querySelector(".nav_overlay").style.display = "none";
  }, 1200); // Match total reverse time
}

closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);
// navbar sidebar animetion end

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
    duration: 2,
    ease: "power3.out"
  });

  gsap.from(".nav_links a", {
    y: -30,
    opacity: 0,
    delay: 1,
    duration: 2,
    ease: "power3.out",
    stagger: 0
  });

  gsap.to(".nav_links a", {
    y: 0,
    opacity: 1,
    delay: 1,
    duration: 2,
    ease: "power3.out",
    stagger: 0
  })

  gsap.from(".nav_cta_btn", {
    y: -30,
    opacity: 0,
    delay: 1,
    duration: 2,
    ease: "power3.out"
  });

  gsap.from(".nav_mobile_btn", {
    y: -30,
    opacity: 0,
    delay: 1,
    duration: 2,
    ease: "power3.out"
  });
});

// navbar animetion End


// hero svg animetion start


const paths = document.querySelectorAll(".hero_svg path");

paths.forEach((path, i) => {
  const length = path.getTotalLength();
  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: length,
    opacity: 0,
    scale: 0.95,
    transformOrigin: "50% 50%",
  });

  gsap.to(path, {
    strokeDashoffset: 0,
    opacity: 1,
    scale: 1.05,
    duration: 1.5,
    delay: i * 0.3,
    ease: "power2.out",
    yoyo: true,
    repeat: -1,
    repeatDelay: 0.5,
  });
});

// hero svg animetion end


// Trusted Customers Logo Animetion Start

function marqueeAnimation() {
  const container = document.querySelector(".trusted_customer_card_items");

  // Duplicate content
  container.innerHTML += container.innerHTML;

  // Wait till DOM is fully rendered
  requestAnimationFrame(() => {
    const items = container.children;
    const itemCount = items.length / 2;

    let totalWidth = 0;
    for (let i = 0; i < itemCount; i++) {
      totalWidth += items[i].offsetWidth;
    }

    let xPos = 0;
    let direction = -1;
    const speed = 100;

    let lastTime = performance.now();

    function animate(time) {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      xPos += direction * speed * delta;

      // Loop back seamlessly
      if (direction === -1 && xPos <= -totalWidth) {
        xPos = 0;
      }
      if (direction === 1 && xPos >= 0) {
        xPos = -totalWidth;
      }

      gsap.set(container, { x: xPos });
      requestAnimationFrame(animate);
    }

    // Scroll direction change on wheel
    window.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) direction = -1;
      else if (e.deltaY < 0) direction = 1;
    });

    requestAnimationFrame(animate);
  });
}

marqueeAnimation();

// Trusted Customers Logo Animetion End


// App Design Section Animetion Start

// App Design Section Animetion End


// Web Design Section Animetion Start

gsap.registerPlugin(ScrollTrigger);

function imageZoomAndCenterWithTextHide() {
  const imageDiv = document.querySelector(".web_design_image_section");
  const textDiv = document.querySelector(".web_design_text_section");

  if (!imageDiv || !textDiv) return;

  gsap.timeline({
    scrollTrigger: {
      trigger: imageDiv,
      start: "top center",
      end: "bottom center",
      scrub: true,
      markers: false,
      onEnter: () => gsap.to(textDiv, {autoAlpha: 0, duration: 0.4}),
      onLeaveBack: () => gsap.to(textDiv, {autoAlpha: 1, duration: 0.4}),
      onLeave: () => gsap.to(textDiv, {autoAlpha: 1, duration: 0.4}),
      onEnterBack: () => gsap.to(textDiv, {autoAlpha: 0, duration: 0.4}),
    }
  })
  .to(imageDiv, {
    scale: 2,
    marginLeft: "auto",
    marginRight: "auto",
    overflow:"hedden",
    width: "100%",
    ease: "power2.out"
  });
}

imageZoomAndCenterWithTextHide();


// Web Design Section Animetion End
