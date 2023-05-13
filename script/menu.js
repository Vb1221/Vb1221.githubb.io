window.onload = () => {
  let body = document.querySelector('body')


  let currentDate = new Date();
  let days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'];
  let dayOfWeek = days[currentDate.getDay()];
  let day = currentDate.getDate();
  let months = ['Січенья', 'Лютого', 'Березеня', 'Квітеня', 'Травня', 'Червеня', 'Липеня', 'Серпеня', 'Вересеня', 'Жовтеня', 'Листопада', 'Груденя'];
  let month = months[currentDate.getMonth()];
  
  let dateText = dayOfWeek + ', ' + day + ' ' + month;
  document.querySelector('.card-title').innerHTML = dateText;


  let out = document.querySelector('.output');
  let weekMealPlan = [];

  const savedWeekMealPlan = localStorage.getItem('weekMealPlan');
  if (savedWeekMealPlan) {
  const weekMealPlan = JSON.parse(savedWeekMealPlan);

  displayAllWeek(weekMealPlan);
}



function displayAllWeek(weekMealPlan){

  weekMealPlan.forEach((week) => {
    Object.entries(week).forEach(([day, data]) => {

      let dayCard = document.createElement('div');
      dayCard.className = 'dayCard';

      let dayOfWeek = document.createElement('h1');
      dayOfWeek.innerHTML = `${day.toUpperCase()}`;

      let meals = document.createElement('div');
      meals.className = 'mealCards';

      data.meals.forEach((meal, index) => {
        let arr = ['Сніданок','Обід','Вечеря']

        let foodDiv = document.createElement('div')
        foodDiv.className = 'foodBlock'

        let additionalData = document.createElement('p');
        additionalData.innerHTML = arr[index];
        foodDiv.appendChild(additionalData);

        let mealsTitle = document.createElement('h2');
        mealsTitle.innerHTML = meal.title;
        foodDiv.appendChild(mealsTitle);

        let timeForCooking = document.createElement('p');
        timeForCooking.innerHTML = `Ready in: ${meal.readyInMinutes} minutes`;
        foodDiv.appendChild(timeForCooking);

        meals.appendChild(foodDiv)
      });

      let caloriesPerDay = document.createElement('p')
      caloriesPerDay.className = 'calories'
      caloriesPerDay.innerHTML = `- Calories: ${data.nutrients.calories}`
      

      dayCard.appendChild(dayOfWeek);
      dayCard.appendChild(meals);
      dayCard.appendChild(caloriesPerDay)

      out.appendChild(dayCard);

    });
  });
}



// console.log(currentDate.getDay())
// console.log(dayArr)


}