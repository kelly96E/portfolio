const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

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
    } else {
      formMessage.textContent = "Oops! Something went wrong. Please try again.";
      formMessage.style.display = "block";
    }
  };

  request.send(formData);
});
