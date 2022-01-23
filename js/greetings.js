const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// user name 유효성
function onLoginSubmit(e){
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);

  printGreetings(userName);
}
function printGreetings(username){
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.textContent = `Hello👋 ${username}`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
// localstorage user정보 유무 확인
if(savedUserName === null){
  // show form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit',onLoginSubmit)
}else{
  // hide form && show greeting
  printGreetings(savedUserName);
}