import { useParams } from "react-router-dom"
import NavbarChild from "./NavbarChilld"
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

let foodType = ""
function Content(){
    const { food } = useParams();
    const [meals, setMeals] = useState([])
    foodType = food
    useEffect(() => {
        // ini disuruh pakai ajax makanya beda
        // biasanya kan pakai fetch
        $.ajax({
            url: `https://www.themealdb.com/api/json/v1/1/filter.php?c=${food}`,
            method: 'GET',
            dataType: 'json',
            success: function(data) {
              let meals = data.meals.map(function(meal) {
                return {
                  name: meal.strMeal,
                  image: meal.strMealThumb,
                  id: meal.idMeal
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

    const mealElements = meals.map(meal => (
        <div className="content-cards--element" key={nanoid()}>
            <div className="thumb">
                <img src={meal.image} alt="" />
            </div>
            <p>{meal.name}</p>
            <Link 
              className="content-link"
              to={{
                pathname: `/recipe/${meal.id}`,
                state: {data: food}
              }}
            >
              <button className="visit">Make it</button>
            </Link>
        </div>
    ))
    
    return (
        <div className="content">
            <NavbarChild 
              goto = {[{link: "/", name: "Home"}]}
            />
            <h2 className="content-title">Pick Your <span>{food} meals</span></h2>
            <div className="content-cards">
                {mealElements}
            </div>
        </div>
    )
}

export {
  Content, 
  foodType
}