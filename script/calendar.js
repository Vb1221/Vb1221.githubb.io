window.onload = () => {
  const APIKey = '799169150d9342378d1990ab3e44402e'

  let currentDate = new Date();
  let days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'];
  let dayOfWeek = days[currentDate.getDay()];
  let day = currentDate.getDate();
  let months = ['Січенья', 'Лютого', 'Березеня', 'Квітеня', 'Травня', 'Червеня', 'Липеня', 'Серпеня', 'Вересеня', 'Жовтеня', 'Листопада', 'Груденя'];
  let month = months[currentDate.getMonth()];

  let dateText = dayOfWeek + ', ' + day + ' ' + month;
    document.querySelector('.card-title').innerHTML = dateText;

    // let plusBtn = document.querySelector('.plusBtn')
    // // let searchFood = document.createElement('input')
    // let menuList = document.querySelector('.menuList')
    // let foodList = document.createElement('p')


    const addFoodBtn = document.querySelector('#addFoodBtn');
    const addFoodModal = new bootstrap.Modal(document.querySelector('#addFoodModal'));

    addFoodBtn.addEventListener('click', () => {
    addFoodModal.show();
});

const saveFoodBtn = document.querySelector('#saveFoodBtn');
const newFoodInput = document.querySelector('#newFoodInput');
const menuList = document.querySelector('.menuList');

saveFoodBtn.addEventListener('click', () => {
  const foodName = newFoodInput.value.trim();
  
  if (foodName !== '') {
    const foodItem = document.createElement('div');
    foodItem.classList.add('foodItem');
    foodItem.textContent = foodName;
    
    menuList.appendChild(foodItem);
    addFoodModal.hide();
  }
});


}