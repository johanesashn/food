import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavbarChild from "./NavbarChilld";
import { nanoid } from "nanoid";
import ReactPlayer from 'react-player';
import { foodType } from "./Content";

export default function Recipe() {
  const { foodId } = useParams();
  const [meals, setMeals] = useState([]);
  const [storedFoodType, setStoredFoodType] = useState(() => {
    const storedValue = localStorage.getItem('foodType');
    return storedValue ? JSON.parse(storedValue) : foodType;
  });

  useEffect(() => {
    localStorage.setItem('foodType', JSON.stringify(storedFoodType));
  }, [storedFoodType]);

  useEffect(() => {
    $.ajax({
      url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`,
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        let meals = data.meals.map(function(meal) {
          return {
            name: meal.strMeal,
            instruction: meal.strInstructions,
            image: meal.strMealThumb,
            video: meal.strYoutube,
            area: meal.strArea
          }
        })
        setMeals(meals)
      },
      error: function(xhr, status, error) {
        console.error(error)
      }
    })

    window.scrollTo({
      top: 0,
      behavior: "instant"
    })
  }, [])

  const instruction = meals.map((meal) => (
    <div className="recipe-content" key={nanoid()}>
      <div className="recipe-header">
        <img className="recipe-image" src={meal.image} alt="" />
        <div className="recipe-title">
          <h2>Instructions to make <span>{meal.name}</span></h2>
          <p>{meal.area} Culinary</p>
        </div>
      </div>
      <div className="recipe-instruction">
        <h3>Steps: </h3>
        {meal.instruction}
      </div>
      {meal.video && <div className="recipe-video">
        <h3>Video Tutorial</h3>
        <div className="video">
          <ReactPlayer url={meal.video} controls width="100%" />
        </div>
      </div>}
    </div>
  ))

  console.log(storedFoodType);

  return (
    <div>
      <NavbarChild
        goto={[
          { link: "/", name: "Home" },
          { link: `/content/${storedFoodType}`, name: "Back" },
        ]}
      />
      {instruction}
    </div>
  );
}
