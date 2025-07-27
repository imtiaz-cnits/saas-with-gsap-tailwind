

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


///////////////////////////////////////////// Better Trade Section Start ///////////////////////////////////////

    function startJirJirCloudAnimation() {
    // Glow effect (optional but looks nice)
    gsap.to(".section_card_svg", {
      filter: "drop-shadow(0 0 10px #00C39A)",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Jir Jir Kapa animation (vibration)
    gsap.to(".section_card_svg", {
      x: "+=1",
      y: "-=1",
      duration: 0.05,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  // Start on page load
  window.addEventListener("DOMContentLoaded", startJirJirCloudAnimation);

//////////////////////////////////////////// Better Trade Section End /////////////////////////////////////////

//////////////////////////////////////////// Better Trade Section 1 Start /////////////////////////////////////////


document.addEventListener('DOMContentLoaded', function() {
  const snakePath = document.querySelector('.section_card_svg_1 path');
  const originalFill = snakePath.getAttribute('fill');
  const pathLength = snakePath.getTotalLength();

  function resetToInitial() {
    gsap.set(snakePath, {
      stroke: 'black',
      strokeWidth: 1,
      fill: 'none',
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
      x: 0,
      y: 0,
      opacity: 1,
      transformOrigin: '50% 50%',
    });
  }

  function resetToSecond() {
    gsap.set(snakePath, {
      stroke: 'black',
      strokeWidth: 1,
      fill: 'none',
      strokeDasharray: pathLength,
      strokeDashoffset: 0,
      x: 0,
      y: 0,
      opacity: 1,
      transformOrigin: '50% 50%',
    });
  }

  function playFirstAnimation() {
    resetToInitial();

    const tl1 = gsap.timeline({
      onComplete: playSecondAnimation,
    });

    tl1.to(snakePath, {
      strokeDashoffset: 0,
      duration: 3.5,
      ease: 'power3.inOut',
    })
    .to(snakePath, {
      strokeWidth: 0,
      fill: originalFill,
      duration: 0.7,
      ease: 'power2.out',
    })
    .to(snakePath, {
      x: () => (Math.random() * 2) - 1,
      y: () => (Math.random() * 2) - 1,
      duration: 2,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: 1,
    });
  }

  function playSecondAnimation() {
    resetToSecond();

    gsap.to(snakePath, {
      strokeDashoffset: -pathLength,
      duration: 5,
      ease: 'linear',
      onComplete: playFirstAnimation,
    });
  }

  playFirstAnimation();
});


//////////////////////////////////////////// Better Trade Section 1 End /////////////////////////////////////////

//////////////////////////////////////////// Better Trade Section Counting Start /////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
  const count1 = { val: 0 };
  const count2 = { val: 0 };

  const target1 = 86;
  const target2 = 453;

  const duration = 3; // seconds

  gsap.to(count1, {
    val: target1,
    duration: duration,
    ease: "power1.out",
    onUpdate: () => {
      document.getElementById('count1').textContent = Math.floor(count1.val);
    }
  });

  gsap.to(count2, {
    val: target2,
    duration: duration,
    ease: "power1.out",
    onUpdate: () => {
      document.getElementById('count2').textContent = Math.floor(count2.val);
    }
  });
});

//////////////////////////////////////////// Better Trade Section Counting End /////////////////////////////////////////


////////////////////////////////////////// section start project status Start ////////////////////////////////////////////

function animateMultiplePaths(svgSelector) {
  const paths = document.querySelectorAll(`${svgSelector} path`);
  
  paths.forEach((path, index) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.stroke = "#FFD155";
    path.style.fill = "none";
    path.style.strokeWidth = "2";

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 2,
      delay: index * 0.5,  // delay diye ek ek kore stroke draw hobe
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.8,
    });
  });
}

// Call:
animateMultiplePaths('.section_start_project_svg_1');


///////////////////////////////////////// section start project status End //////////////////////////////////////////


////////////////////////////////// section second part Start /////////////////////////////////////////
 async function animateWaveSequentially(svgSelector) {
  const paths = document.querySelectorAll(`${svgSelector} .wave_path`);
  if (paths.length === 0) {
    console.error("No wave_path elements found inside", svgSelector);
    return;
  }

  while(true) {
    for (const path of paths) {
      await gsap.to(path, {
        x: 10,
        scaleX: 1.05,
        opacity: 0.9,
        duration: 1.3,
        ease: "power1.out",
      }).then(() => 
        gsap.to(path, {
          x: 0,
          scaleX: 1,
          opacity: 1,
          duration: 1.3,
          ease: "power1.in",
        })
      );
    }
  }
}

// Call function
animateWaveSequentially('.section_second_part_svg svg');



  function animateImageSway(selector) {
  const img = document.querySelector(selector);
  if (!img) {
    console.error(`Image not found: ${selector}`);
    return;
  }

  gsap.to(img, {
    duration: 3,
    scale: 1.05,
    y: 5,
    rotation: 1.5,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });
}

// Call korar example:
animateImageSway('.section_second_part_img_wrapper img');

///////////////////////////////// section second part End ///////////////////////////////////////////


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

// gsap.registerPlugin(ScrollTrigger);

// function imageZoomAndCenterWithTextHide() {
//   const imageDiv = document.querySelector(".web_design_image_section");
//   const textDiv = document.querySelector(".web_design_text_section");

//   if (!imageDiv || !textDiv) return;

//   gsap.timeline({
//     scrollTrigger: {
//       trigger: imageDiv,
//       start: "top center",
//       end: "bottom center",
//       scrub: true,
//       markers: false,
//       onEnter: () => gsap.to(textDiv, {autoAlpha: 0, duration: 0.4}),
//       onLeaveBack: () => gsap.to(textDiv, {autoAlpha: 1, duration: 0.4}),
//       onLeave: () => gsap.to(textDiv, {autoAlpha: 1, duration: 0.4}),
//       onEnterBack: () => gsap.to(textDiv, {autoAlpha: 0, duration: 0.4}),
//     }
//   })
//   .to(imageDiv, {
//     scale: 2,
//     marginLeft: "auto",
//     marginRight: "auto",
//     overflow:"hedden",
//     width: "100%",
//     ease: "power2.out"
//   });
// }

// imageZoomAndCenterWithTextHide();




// Web Design Section Animetion End
