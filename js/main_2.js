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




var  title = document.getElementById('add_txt_input');
var txt_input = title.value;

function test_input()
{
  txt_input = title.value;
  document.getElementById('user_title').innerHTML = txt_input;
}
document.getElementById('add_txt_complete').addEventListener("click", test_input);



var  textarea = document.getElementById('add_txt_textarea');
var txt_textarea = textarea.value;

function test()
{
  txt_textarea = textarea.value;
  document.getElementById('user_text').innerHTML = txt_textarea;
}
document.getElementById('add_txt_complete').addEventListener("click", test);



//var  input_img = document.getElementById('add_input_img');
// var add_input_img = input_img.value;
//function add_img()
//{
//  add_input_img = input_img.value;
//  document.getElementById('user_img').innerHTML = add_input_img;
//}
//document.getElementById('add_txt_complete').addEventListener("click", add_img);

