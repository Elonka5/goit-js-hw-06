const form = document.querySelector(".login-form");

const onhandlerSubmit = event => {
  event.preventDefault();
  const { email, password } = event.target.elements;
  if (!email.value || !password.value) {
    return alert("Please fill in all the fields!");
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.target.reset();
};

form.addEventListener("submit", onhandlerSubmit);
