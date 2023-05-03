const sections = document.querySelectorAll("section");
let currentSectionIndex = 0;
let isScrolling = false;

function scrollToSection(index) {
  if (isScrolling) return;
  if (index >= 0 && index < sections.length) {
    isScrolling = true;
    sections[index].scrollIntoView({ behavior: "smooth" });
    currentSectionIndex = index;
    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  }
}

window.addEventListener("wheel", (event) => {
  event.preventDefault();

  if (isScrolling) return;

  if (event.deltaY > 0) {
    // Scrolling down
    scrollToSection(currentSectionIndex + 1);
  } else if (event.deltaY < 0) {
    // Scrolling up
    scrollToSection(currentSectionIndex - 1);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  body.style.scrollSnapType = "y mandatory";
  body.style.overflowY = "hidden"; // Disable the browser's native scroll
});
