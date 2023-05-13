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

let createLogin = document.querySelector('.createLogin')
let createEmail = document.querySelector('.createEmail')
let createPass =  document.querySelector('.createPass')
let configPass = document.querySelector('.configPass')
let submitReg = document.querySelector('.form-submitReg')

let users = []


function createUser(){

  let createLoginValue = createLogin.value
  let createPassValue = createPass.value
  let configPassValue = configPass.value

let userData = {}
  userData.login = createLoginValue
  userData.password = createPassValue

  let i = users.length
  users[i] = userData

  if (createPassValue === configPassValue){
    localStorage.setItem('User', JSON.stringify(users))
  }else {alert ('Паролі не збігаються')}
}  

  submitReg.onclick = createUser


  let loginName = document.querySelector('.login')
  let password = document.querySelector('.password')
  let loginSubmit = document.querySelector('.form-submit')

  function loginUser(){
    users = JSON.parse(localStorage.getItem('User'))
    let loginValue = loginName.value
    let passValue = password.value
    let userName = users.find(userName => userName.login == loginValue)
    let userPassword = users.find(userName => userName.password == passValue)

    if (!userName || !userPassword){
      alert('Логін або Пароль не вірні!')
      password.value = ''
      return
    }
    window.location.href = '../index.html'

  }


  loginSubmit.onclick = (e) =>{
    e.preventDefault()
    loginUser()
  }
  
}

