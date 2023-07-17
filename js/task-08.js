const form = document.querySelector(".login-form");

const onhandlerSubmit = event => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === '' || password.value === '') {
    return alert("Please fill in all the fields!");
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};

form.addEventListener("submit", onhandlerSubmit);
