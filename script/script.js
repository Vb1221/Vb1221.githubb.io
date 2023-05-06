window.onload = () => {
  // const APIKey = '799169150d9342378d1990ab3e44402e'
  // const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=799169150d9342378d1990ab3e44402e`;

  let currentDate = new Date();
  let days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'];
  let dayOfWeek = days[currentDate.getDay()];
  let day = currentDate.getDate();
  let months = ['Січенья', 'Лютого', 'Березеня', 'Квітеня', 'Травня', 'Червеня', 'Липеня', 'Серпеня', 'Вересеня', 'Жовтеня', 'Листопада', 'Груденя'];
  let month = months[currentDate.getMonth()];

  let dateText = dayOfWeek + ', ' + day + ' ' + month;
    document.querySelector('.card-title').innerHTML = dateText;



let addBtns = document.querySelectorAll('.addBtn');
addBtns.forEach(addBtn => {
  addBtn.addEventListener('click', () => {
    let menuList = addBtn.previousElementSibling;
    let inputContainer = document.createElement('div');
    inputContainer.innerHTML = `
      <input type="text" class="form-control mb-2" placeholder="Інгредієнт">
      <button type="button" class="btn btn-primary addFoodBtn">Додати</button>
      <button type="button" class="btn btn-secondary cancelBtn">Відмінити</button>
    `;
    menuList.appendChild(inputContainer);
    
    // Обробник події для кнопки "Додати"
    let addFoodBtn = inputContainer.querySelector('.addFoodBtn');
    addFoodBtn.addEventListener('click', () => {
      let input = inputContainer.querySelector('input');
      let ingredient = input.value.trim();
      // Додавання інгредієнту в список
      let listItem = document.createElement('div');
      listItem.classList.add('mb-2');
      listItem.innerHTML = `
        <span class="me-2">${ingredient}</span>
        <button type="button" class="btn btn-danger deleteFoodBtn">x</button>
      `;
      menuList.insertBefore(listItem, inputContainer);
      inputContainer.remove();
    });
    
    // Обробник події для кнопки "Відмінити"
    let cancelBtn = inputContainer.querySelector('.cancelBtn');
    cancelBtn.addEventListener('click', () => {
      inputContainer.remove();
    });
  });
});



 

}




