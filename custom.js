(function () {
  const header = document.querySelector(".c-nav");
  const burger = document.querySelector(".c-nav__burger");

  if (!header || !burger) return;

  burger.addEventListener("click", () => {
    const isOpen = header.classList.toggle("c-nav--open");
    burger.setAttribute("aria-expanded", isOpen);
  });
})();
