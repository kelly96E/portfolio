const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.display = "block";
    formMessage.style.border = "2px solid #e57373";
    formMessage.style.backgroundColor = "rgba(85, 85, 85, 0.74)";
    formMessage.style.padding = "20px";
    formMessage.style.marginTop = "20px";
    formMessage.style.borderRadius = "5px";
    formMessage.style.color = "#e57373";
    formMessage.style.fontSize = "1.1em";
    formMessage.style.fontWeight = "bold";
    formMessage.style.textAlign = "center";
    setTimeout(() => {
      formMessage.style.display = "none";
    }, 5000);
    return;
  }

  const formData = new FormData(form);
  const request = new XMLHttpRequest();

  request.open("POST", form.action);
  request.setRequestHeader("Accept", "application/json");

  request.onreadystatechange = () => {
    if (request.readyState !== XMLHttpRequest.DONE) return;

    if (request.status === 200) {
      form.reset();
      formMessage.textContent = "Email successfully sent!";
      formMessage.style.display = "block";
      formMessage.style.border = "2px solid #81c784";
      formMessage.style.backgroundColor = "rgba(85, 85, 85, 0.74)";
      formMessage.style.padding = "20px";
      formMessage.style.marginTop = "20px";
      formMessage.style.borderRadius = "5px";
      formMessage.style.color = "#81c784";
      formMessage.style.fontSize = "1.1em";
      formMessage.style.fontWeight = "bold";
      formMessage.style.textAlign = "center";
    } else {
      formMessage.textContent = "Oops! Something went wrong. Please try again.";
      formMessage.style.display = "block";
      formMessage.style.border = "2px solid #e57373";
      formMessage.style.backgroundColor = "rgba(85, 85, 85, 0.74)";
      formMessage.style.padding = "20px";
      formMessage.style.marginTop = "20px";
      formMessage.style.borderRadius = "5px";
      formMessage.style.color = "#e57373";
      formMessage.style.fontSize = "1.1em";
      formMessage.style.fontWeight = "bold";
      formMessage.style.textAlign = "center";
    }
    setTimeout(() => {
      formMessage.style.display = "none";
    }, 5000);
  };

  request.send(formData);
});

window.onload = function () {
  if (window.location.hash === "#contact") {
    showCvMessage();
  }
};
