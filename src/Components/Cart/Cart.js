import React, { useContext } from 'react'
import CardContext from '../../Store/Card-context'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

const Cart = (props) => {
  const Cartctx=useContext(CardContext);
  const totalAmount=  `${Cartctx.totalAmount}`;
  const hasItem=Cartctx.items.length > 0 ;
  const CartItemRemoveHandler =(id)=>{
  }
  const CartItemAddHandler = (item)=>{}   



    const cartItem=( <ul className={classes['cart-items']}> 
    {Cartctx.items.map((item)=>(
      <li>
       <cartItem key={item.id} amount={item.amount} name={item.name} price={item.price} onRemove={CartItemRemoveHandler.bind(null,item.id)} onAdd={CartItemAddHandler.bind(null,item)}/>
    </li>
   ) )}</ul>
      
    )
  return (
    <Modal onClose={props.onClose}> 
      {cartItem}
    <div className={classes.total}>
    <span >Total  amount</span>
    <span>{totalAmount}</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>close</button>
       {!hasItem && <button className={classes.button}>order</button>}

    </div>
    </Modal>
  )
}

export default Cart