const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  formData.append("name", "Leïla");
  for (let pair of formData) {
    console.log(pair);
  }
  fetch("/test", {
    method: "POST",
    body: FormData,
  });
});
