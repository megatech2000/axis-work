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

const popupButton = document.getElementById("popupButton");
const popupImg = document.getElementById("popupImg");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const backgroundOverlay = document.getElementById("backgroundOverlay");

function togglePopup() {
  if (popup.style.display === "block") {
    popup.style.display = "none";
    backgroundOverlay.style.display = "none";
  } else {
    popup.style.display = "block";
    backgroundOverlay.style.display = "block";
  }
}

popupButton.addEventListener("click", function (event) {
  event.preventDefault();

  togglePopup();
});

popupImg.addEventListener("click", function (event) {
  event.preventDefault();

  togglePopup();
});

closePopup.addEventListener("click", function () {
  popup.style.display = "none";
  backgroundOverlay.style.display = "none";
});

const myForm = document.getElementById("myForm");
myForm.addEventListener("click", function (event) {
  event.stopPropagation();
});

window.addEventListener("click", function (event) {
  if (
    event.target !== popupButton &&
    event.target !== popupImg &&
    event.target !== popup &&
    event.target !== closePopup
  ) {
    popup.style.display = "none";
    backgroundOverlay.style.display = "none";
  }
});

window.addEventListener("scroll", () => {
  console.log("scrolled!!!!");
});
