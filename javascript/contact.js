const form = document.getElementById("myForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const question = document.getElementById("question");
const btn = document.getElementById("button");

const successModal = document.getElementById("successModal");
const errorModal = document.getElementById("errorModal");
const closeButtons = document.querySelectorAll(".close-btn");

// Close Modals
closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    successModal.style.display = "none";
    errorModal.style.display = "none";
  });
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Validate if fields are not empty
  if (
    fullName.value.trim() === "" ||
    email.value.trim() === "" ||
    question.value.trim() === ""
  ) {
    errorModal.style.display = "block"; // Show error modal if fields are empty
    return;
  }

  // Show sending message and disable the button
  btn.value = "Sending...";
  btn.disabled = true;

  const serviceID = "service_zq3dp1j";
  const templateID = "template_3v7zie7";

  emailjs.sendForm(serviceID, templateID, "#myForm", "tPLqQI7thADnkYOGb").then(
    () => {
      btn.value = "Send";
      btn.disabled = false;
      successModal.style.display = "block"; // Show success modal
    },
    (err) => {
      btn.value = "Send";
      btn.disabled = false;
      alert("Failed to send message. Please try again.");
      console.error(err);
    }
  );
});

// Close modal if user clicks outside it
window.onclick = function (event) {
  if (event.target == successModal || event.target == errorModal) {
    successModal.style.display = "none";
    errorModal.style.display = "none";
  }
};
