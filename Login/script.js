function switchForm() {
  var loginForm = document.querySelector(".login-form");
  var registerForm = document.querySelector(".register-form");
  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  }
}
