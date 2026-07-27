// PetVet Home Service Nepal

console.log("PetVet Home Service Nepal Loaded!");

const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your appointment request has been received. We will contact you soon.");
    form.reset();
  });
}
