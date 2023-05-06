window.onload = () => {
let loginBlock = document.querySelector('.login-form-wrapper') ;
let registrationBlock = document.querySelector('.form-container');

let switchFormBtn = document.querySelector('.create-account-button');
let switchFormBtnLogin = document.querySelector('.form-switch-button')

switchFormBtn.onclick = () => {
  loginBlock.style.display = 'none'
  registrationBlock.style.display = 'block'
}

switchFormBtnLogin.onclick = () => {
  loginBlock.style.display = 'flex'
  registrationBlock.style.display = 'none'
}
}