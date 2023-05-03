function showCvMessage() {
  console.log("CV button clicked");
  const formMessage = document.getElementById("form-message");

  formMessage.textContent =
    "Interested in my CV? Don't hesitate to send a message and introduce yourself!";
  formMessage.style.display = "block";
  formMessage.style.border = "2px solid #4db6ac";
  formMessage.style.backgroundColor = "transparent";
  formMessage.style.padding = "20px";
  formMessage.style.marginTop = "20px";
  formMessage.style.borderRadius = "5px";
  formMessage.style.color = "#4db6ac";
  formMessage.style.fontSize = "1.1em";
  formMessage.style.fontWeight = "bold";
  formMessage.style.textAlign = "center";
  formMessage.classList.add("message-shadow");


  // Scroll down to the formMessage smoothly
  formMessage.scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    formMessage.style.display = "none";
  }, 15000);
}

document.getElementById("cv-button").addEventListener("click", showCvMessage);
