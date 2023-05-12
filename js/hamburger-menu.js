document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const barsIcon = document.querySelector(".hamburger-menu .fa-bars");
  const timesIcon = document.querySelector(".hamburger-menu .fa-times");
  const menu = document.querySelector(".hamburger-menu .menu");

  hamburgerMenu.addEventListener("click", () => {
    menu.style.display = menu.style.display === "none" ? "block" : "none";
    barsIcon.style.display = barsIcon.style.display === "none" ? "" : "none";
    timesIcon.style.display = timesIcon.style.display === "none" ? "" : "none";
  });
});
