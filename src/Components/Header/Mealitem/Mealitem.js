import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React, {  useContext } from 'react'
import CardContext from '../../../Store/Card-context'
import classes from './Mealitem.module.css'
import MealitemForm from './MealitemForm'


const Mealitem = (props) => {
  const Cartctx=useContext(CardContext);
  const AddToCartHandler =(amount)=>{
    Cartctx.additems({
      id:props.id,
      name:props.name,
      price:props.price,
      amount:amount
    })
    
  
  }
  
  
    const price =`$${props.price.toFixed(2)}`;
  return (
    <li>
    <div>
       <h3 > {props.name}</h3>
       <div className={classes.description}>{props.description} </div>
      <div  className={classes.price}>  {props.price} </div>
    </div>
    <div>
       <MealitemForm  AddToCartHandler={AddToCartHandler}/>
    </div>
    
</li>
    
    
  )
}

export default Mealitem