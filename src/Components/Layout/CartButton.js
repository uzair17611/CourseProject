import React, { useContext } from 'react'
import CardContext from '../../Store/Card-context'
import CartIcon from '../Cart/CartIcon'
import classes  from  './CartIcon.module.css'

const CartButton = (props) => {
  const cardctx= useContext(CardContext);
  const  numberOFItemsToCart = cardctx.items.reduce((crdnumber,item)=>{
    return crdnumber + item.amount;
  },0);

  
  return (
    <button className={classes.button} onClick={props.onClick} >
        <span  className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            <h1>Your Cart</h1>
        </span>
        <span className={classes.badge}>{numberOFItemsToCart}</span>
    


    </button>
  )
}

export default CartButton