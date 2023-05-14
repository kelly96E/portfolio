function showCvMessage() {
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

document
  .getElementById("cv-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let currentURL = window.location.href;

    if (currentURL.endsWith("https://kelly96e.github.io/portfolio/") || currentURL.endsWith("/")) {
      window.location.href = "#contact";
    } else {
      window.location.href = "../index.html#contact";
    }
  });
