import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Navigation from '../components/Navigation';
import { Col, Row } from 'react-bootstrap';
import '../pages/detail.css';

const Detail = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState();

    useEffect(() => {
        fetch(
            "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
        )
            .then((response) => response.json())
            .then(data => setMeal(data.meals[0]))
    }, [id]);

    return (
        <>
            <Navigation />
            <Row>
                {
                    meal && (
                        <Col md={{ span: 8, offset: 2 }}>
                            <div className='meal-img'>
                                <img src={meal.strMealThumb} alt={meal.strMeal} />
                            </div>
                            <div className='meal-desc'>
                                <h1>{meal.strMeal}</h1>
                                <p className='instruction'>
                                    {meal.strInstructions}
                                </p>
                            </div>
                            <div className='meal-ingredient'>
                                <h1>Ingredients</h1>
                                <ul>
                                {(() => {
                                    let ingredients = [];
                                    for (let i = 1; i <= 20; i++) {
                                        if(meal[`strMeasure${i}`]) {
                                            ingredients.push(<li key={i}> <span className='measure'>{meal[`strMeasure${i}`]} </span>  {meal[`strIngredient${i}`]}</li>)  
                                        }
                                    }
                                    return ingredients;
                                })()}
                                </ul>
                            </div>
                        </Col>
                    )
                }
            </Row>
        </>
    )
}
export default Detail;