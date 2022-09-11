const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const add_new = document.getElementById("add_new");
const login_in = document.getElementById("login_in");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "L64m53i6") {
      add_new.style.visibility = 'visible';
      login_in.style.visibility = 'hidden';
    } else {
      loginErrorMsg.style.opacity = 1;
    }
})