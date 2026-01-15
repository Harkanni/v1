(function () {
  const head = document.querySelector("head");
  const header = document.querySelector(".c-nav");
  const burger = document.querySelector(".c-nav__burger");

  const style = document.createElement("style");
  style.textContent = `
    /* Initial state for elements to animate */
    .fade-in-up {
      opacity: 0 !important;
      transform: translateY(20px); /* Start slightly below */
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    /* Active state after DOMContentLoaded */
    .fade-in-up.show {
      opacity: 1 !important;
      transform: translateY(0);
    }  
  `;
  head.appendChild(style);

  if (!header || !burger) return;

  //   SIDE BAR TOGGLE
  burger.addEventListener("click", () => {
    const isOpen = header.classList.toggle("c-nav--open");
    burger.setAttribute("aria-expanded", isOpen);
  });

  //   SCROLL ANIMATION
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // scrolling DOWN
      header.classList.remove("c-nav--scroll-up");
      header.classList.add("c-nav--scroll-down");
    } else {
      // scrolling UP
      header.classList.remove("c-nav--scroll-down");
      header.classList.add("c-nav--scroll-up");
    }

    lastScrollY = currentScrollY;

    if (lastScrollY === 0) {
      header.classList.remove("c-nav--scroll-up", "c-nav--scroll-down");
    }
  });

  //   PAGE ANIMATION
  document.addEventListener("DOMContentLoaded", () => {
        const elements = document.querySelectorAll(".fade-in-up");

        elements.forEach((el, index) => {
          // Optional: stagger animations with a delay
          setTimeout(() => {
            el.classList.add("show");
          }, 0); // 150ms delay between each element
        });
      });
})();
