function showCvMessage() {
  if (localStorage.getItem("cvButtonClicked") !== "true") {
    return;
  }

  const formMessage = document.getElementById("form-message");

  if (!formMessage) {
    return;
  }

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

  localStorage.removeItem("cvButtonClicked");

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
    return;
  }

  cvButton.addEventListener("click", function (e) {
    e.preventDefault();
    const path = window.location.pathname;
    const href =
      path.endsWith("index.html") || path === "/portfolio/"
        ? "#contact"
        : "/portfolio/index.html#contact";

    localStorage.setItem("cvButtonClicked", "true");

    window.location.hash = "#cv";
    window.location.href = href;
  });
});
