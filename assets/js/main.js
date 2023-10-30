const nameImput = document.querySelector("#name");
const emailImput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");
const items = document.querySelector(".items");

const errorMessage = document.querySelector(".msg");

submitButton.addEventListener("mousemove", (e) => {
  e.preventDefault();

  submitButton.style.background = "green";
});

submitButton.addEventListener("mouseout", (e) => {
  e.preventDefault();

  submitButton.style.background = "#555";
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const nameValue = nameImput.value;
  const emailValue = emailImput.value;

  if (nameValue === "" || emailValue === "") {
    errorMessage.textContent = "please fill out all the fields!";
    errorMessage.classList = "error";

    setTimeout(() => {
      errorMessage.textContent = "";
      errorMessage.classList = "";
    }, 3000);
    return;
  }

  const li = document.createElement("li");
  li.classList = "item";
  li.innerHTML = `Nome: ${nameValue} <br> email: ${emailValue}`;
  items.appendChild(li);

  nameImput.value = "";
  emailImput.value = "";
});
