function showCvMessage() {
  console.log("showCvMessage called"); // Log when this function is called

  const formMessage = document.getElementById("form-message");

  formMessage.textContent =
    "Interested in my CV? Don't hesitate to send a message and introduce yourself!";
  formMessage.style.display = "block";
  formMessage.style.border = "2px solid #4db6ac";
  formMessage.style.backgroundColor = "rgba(85, 85, 85, 0.74)";
  formMessage.style.padding = "20px";
  formMessage.style.marginTop = "20px";
  formMessage.style.borderRadius = "5px";
  formMessage.style.color = "#4db6ac";
  formMessage.style.fontSize = "1.1em";
  formMessage.style.fontWeight = "bold";
  formMessage.style.textAlign = "center";
  formMessage.classList.add("message-shadow");

  formMessage.scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    formMessage.style.display = "none";
  }, 15000);
}

window.onhashchange = function () {
  if (window.location.hash === "#contact") {
    showCvMessage();
  }
};

window.onload = function () {
  if (window.location.hash === "#contact") {
    showCvMessage();
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const cvButton = document.getElementById("cv-button");
  if (!cvButton) {
    console.log("CV button not found");
    return;
  }

  document.querySelector("#cv-button").addEventListener("click", function (e) {
    e.preventDefault();
    const path = window.location.pathname;
    const href =
      path.endsWith("index.html") || path === "/portfolio/"
        ? "#contact"
        : "/portfolio/index.html#contact";
    console.log("CV button clicked, navigating to", href); // Log when the CV button is clicked

    // Always navigate to the new URL
    window.location.href = href;
  });
});
