import React, { useState, useEffect } from 'react';

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
      .then(response => response.json())
      .then(data => setMeals(data.meals));
  }, []);

  return (
    <div>
      <h1>Canadian Meals</h1>
      <ul>
        {meals.map(meal => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
