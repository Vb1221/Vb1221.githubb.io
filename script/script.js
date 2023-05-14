window.onload = () => {
  const apiKey = '799169150d9342378d1990ab3e44402e';
  const url = `https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=${apiKey}`;
  
  let currentDate = new Date();
  let days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'];
  let dayOfWeek = days[currentDate.getDay()];
  let day = currentDate.getDate();
  let months = ['Січенья', 'Лютого', 'Березеня', 'Квітеня', 'Травня', 'Червеня', 'Липеня', 'Серпеня', 'Вересеня', 'Жовтеня', 'Листопада', 'Груденя'];
  let month = months[currentDate.getMonth()];
  
  let dateText = dayOfWeek + ', ' + day + ' ' + month;
  document.querySelector('.card-title').innerHTML = dateText;


  ///// Створення меню
  let out = document.querySelector('.output');
  let weekMealPlan = [];

  const savedWeekMealPlan = localStorage.getItem('weekMealPlan');
  if (savedWeekMealPlan) {

    const parsedWeekMealPlan = JSON.parse(savedWeekMealPlan);
    displayAllWeek(parsedWeekMealPlan);
  }

  
  document.querySelector('.addMenu').onclick = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const newWeekMealPlan = data.week;
        clearMenu();
        displayAllWeek(newWeekMealPlan);
        // console.log(data);
        localStorage.setItem('weekMealPlan', JSON.stringify(newWeekMealPlan));
      })
      .catch(error => {
        console.log('Сталася помилка:', error);
      });
  };
  
  function clearMenu() {
    out.innerHTML = ''; 
  }

  function displayAllWeek(...weekMealPlanData) {
    weekMealPlanData.forEach((week) => {
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
          mealsTitle.addEventListener('click', () => showRecipe(meal.id));
          foodDiv.appendChild(mealsTitle);
  
          let timeForCooking = document.createElement('p');
          timeForCooking.innerHTML = `Ready in: ${meal.readyInMinutes} minutes`;
          foodDiv.appendChild(timeForCooking);
          
          meals.appendChild(foodDiv)
        });
  
        let caloriesPerDay = document.createElement('p');
        caloriesPerDay.className = 'calories'
        caloriesPerDay.innerHTML = `- Calories: ${data.nutrients.calories}`;
  
        dayCard.appendChild(dayOfWeek);
        dayCard.appendChild(meals);
        dayCard.appendChild(caloriesPerDay);

        out.appendChild(dayCard);
      });
    });
  }
  
  


  function showRecipe(title) {
    const recipeDetails = localStorage.getItem('recipeDetails');
    if (recipeDetails) {

      const [recipeTitle, recipeInstructions, recipeImage] = JSON.parse(recipeDetails);
      displayRecipeModal(recipeTitle, recipeInstructions, recipeImage);
      // console.log('взяли з локал стореджа')
    } else {

      const urlId = `https://api.spoonacular.com/recipes/${title}/information?includeNutrition=false&apiKey=${apiKey}`;
  
      fetch(urlId)
        .then(response => response.json())
        .then(data => {

          const recipeTitle = data.title;
          const recipeInstructions = data.instructions;
          const recipeImage = data.image;
  

          const recipeDetails = [recipeTitle, recipeInstructions, recipeImage];
          localStorage.setItem('recipeDetails', JSON.stringify(recipeDetails));
  
          // console.log('запит був')
          displayRecipeModal(recipeTitle, recipeInstructions, recipeImage);
        })
        .catch(error => {
          console.log('Сталася помилка:', error);
        });
    }
  }
  
  function displayRecipeModal(recipeTitle, recipeInstructions, recipeImage) {

    const modal = document.createElement('div');
    modal.className = 'modal';
  
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
  
    const closeButton = document.createElement('span');
    closeButton.className = 'close-button';
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', () => {
  
      document.body.removeChild(modal);
    });
  
    const recipeTitleElement = document.createElement('h2');
    recipeTitleElement.innerHTML = recipeTitle;
  
    const recipeInstructionsElement = document.createElement('p');
    recipeInstructionsElement.innerHTML = recipeInstructions;
  
    const recipeImageElement = document.createElement('img');
    recipeImageElement.src = recipeImage;
  

    modalContent.appendChild(closeButton);
    modalContent.appendChild(recipeTitleElement);
    modalContent.appendChild(recipeInstructionsElement);
    modalContent.appendChild(recipeImageElement);
    modal.appendChild(modalContent);
  

    document.body.appendChild(modal);
  }
  
  
   let testBtn = document.querySelector('.savePlan')

   testBtn.addEventListener('touchstart', myTouch)

  function myTouch(){
    alert('work')
  }

}