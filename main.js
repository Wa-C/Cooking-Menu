
const search = document.getElementById("search"),
  submit = document.getElementById("submit"),
  mealBody = document.getElementById("meals"),
  searchResult = document.getElementById("search-result"),
  singleMealBody = document.getElementById("single-meal");
function searchMeal() {  
  searchResult.innerHTML = "";
  const searchItem = search.value;  
  console.log(searchItem);
  if (searchItem) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.meals === null) {
          searchResult.innerHTML = `<p> Opps! There are no search results. Try something Different !</p>`;
        } else {
          mealBody.innerHTML = data.meals.map((meal) => `
            <div class="meal">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
            
            <div>
            <h3>${meal.strMeal}</h3></div>
            <button onclick="mealDetails('${meal.strIngredient1}')"> Get Recipe </button>
            </div>
            `
            )
            .join("");
        }
      });
    search.value = "";  
  } else {
    alert("Please enter keyword in the search bar ");
  }
}
submit.addEventListener("submit", searchMeal);
const mealDetails = name => {
    console.log(name);
}


//<div class="meal-info" data-mealID="${meal.idMeal}">

// 1st 
// const getApiData = Menu => {
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${Menu}`;
//     fetch(url)
//         .then(response => response.json())
//         .then(data => searchMeal(data))
// }

// const searchMeal = Menus => {
//     const term = 
// }
// const searchBtn = document.getElementById('search-button');
// searchBtn.addEventListener('click', () => {
//     const inputApi = document.getElementById('search-box').value;
// 	getApiData(inputApi);
// })





