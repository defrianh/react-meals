import React, { useState, useEffect } from 'react';
import Article from '../components/Article';
import Navigation from '../components/Navigation';
import { Row } from 'react-bootstrap';
const Category = () => {
    const [meals, setMeals] = useState();

    useEffect(() => {
        fetch(
            "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        )
        .then((response) => response.json())
        .then(data => setMeals(data.meals))
    }, []);

    return (
        <>
            <Navigation />
            <Row>
                {meals &&
                    meals.map((meal) => (
                        <Article key={meal.idMeal} id={meal.idMeal} name={meal.strMeal} thumb={meal.strMealThumb} />
                    ))}
            </Row>
        </>
        
    );
}
export default Category;