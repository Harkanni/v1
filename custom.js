(function () {
  const header = document.querySelector(".c-nav");
  const burger = document.querySelector(".c-nav__burger");

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
})();
