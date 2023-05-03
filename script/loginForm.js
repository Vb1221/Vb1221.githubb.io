window.onload = () => {
  let registerToggle = document.getElementById("register-toggle");
  let registerForm = document.getElementById("register-form");
  let loginForm = document.getElementById("login-form");

registerToggle.addEventListener("click", () => {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
  registerToggle.style.display = "none";

});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // код для реєстрації користувача
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // код для авторизації користувача
});

}