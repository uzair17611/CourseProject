import React from 'react'
import Card from '../UI/Card';
import classes from './AvailableMeal.module.css'
import Mealitem from './Mealitem/Mealitem';


const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
  
const AvailableMeal = (props) => {
  const mealList=DUMMY_MEALS.map(MEAL=> <Mealitem key={MEAL.id} name={MEAL.name} description={MEAL.description} price={MEAL.price} id={MEAL.id}/>)
  return (
    <section >
         <ul className={classes.meals}>
            {mealList}
            </ul>
    </section>
  )
}

export default AvailableMeal