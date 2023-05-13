window.onload = () => {
  const apiKey = '799169150d9342378d1990ab3e44402e';
  const url = `https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=${apiKey}`;


  let mealTitle;
  const urlSearch = `https://api.spoonacular.com/recipes/complexSearch?query=${mealTitle}&apiKey=${apiKey}`;
  
  let currentDate = new Date();
  let days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'];
  let dayOfWeek = days[currentDate.getDay()];
  let day = currentDate.getDate();
  let months = ['Січенья', 'Лютого', 'Березеня', 'Квітеня', 'Травня', 'Червеня', 'Липеня', 'Серпеня', 'Вересеня', 'Жовтеня', 'Листопада', 'Груденя'];
  let month = months[currentDate.getMonth()];
  
  let dateText = dayOfWeek + ', ' + day + ' ' + month;
  document.querySelector('.card-title').innerHTML = dateText;

/////

function showRecipe() {

 mealTitle = document.querySelectorAll('h2').value

  fetch(urlSearch)
  .then(response => response.json())
  .then(data => {

    console.log(mealTitle)
    
  })
}

  ///// Створення меню
  let out = document.querySelector('.output');
  let weekMealPlan = [];
  
  document.querySelector('.addMenu').onclick = () => {
    function fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          weekMealPlan.push(data.week);
          displayAllWeek(weekMealPlan);
          console.log(data)
          document.querySelector('.savePlan').onclick = () => {
            localStorage.setItem('weekMealPlan', JSON.stringify(weekMealPlan));
          }
        })
        .catch(error => {
          console.log('Сталася помилка:', error);
        });
    }
  function displayAllWeek(weekMealPlan) {
    weekMealPlan.forEach((week) => {
      Object.entries(week).forEach(([day, data]) => {
        let dayCard = document.createElement('div');
        dayCard.className = 'dayCard';
  
        let dayOfWeek = document.createElement('h1');
        dayOfWeek.innerHTML = `Day: ${day}`;
  
        let meals = document.createElement('div');
        meals.className = 'mealCards';
  
        data.meals.forEach((meal) => {
          let mealsTitle = document.createElement('h2');
          mealsTitle.innerHTML = meal.title;
          mealsTitle.addEventListener('click', () => showRecipe(mealsTitle));
          meals.appendChild(mealsTitle);
  
          let timeForCooking = document.createElement('p');
          timeForCooking.innerHTML = `Ready in: ${meal.readyInMinutes} minutes`;
          meals.appendChild(timeForCooking);


        });

        let caloriesPerDay = document.createElement('p')
        caloriesPerDay.innerHTML = `- Calories: ${data.nutrients.calories}`
        

        dayCard.appendChild(dayOfWeek);
        dayCard.appendChild(caloriesPerDay)
        dayCard.appendChild(meals);
        
        out.appendChild(dayCard);
      });
    });
  }
  
    fetchData(url);
  }
  
}