document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector("[data-collapse-toggle]");
  const menu = document.getElementById("navbar-dropdown");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !expanded);
      menu.classList.toggle("hidden");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.getElementById("navbar-toggle");
  const openIcon = document.getElementById("open-icon");
  const closeIcon = document.getElementById("close-icon");
  const navbarDropdown = document.getElementById("navbar-dropdown");

  navbarToggle.addEventListener("click", function () {
    const isOpen = navbarToggle.getAttribute("aria-expanded") === "true";
    navbarToggle.setAttribute("aria-expanded", !isOpen);
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    navbarDropdown.classList.toggle("hidden");
  });
});

window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});
