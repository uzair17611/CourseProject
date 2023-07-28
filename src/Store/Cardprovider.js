import React from 'react'
import CardContext from './Card-context'
import { useReducer } from 'react';


const defaultCardstate = {
  items:[],
  totalamount:0
}

const cartReducer =(state , action)=>{
  if(action.type === 'ADD'){
    const updatedItem=state.items.concat(action.item);
    const updatedAmount=state.totalamount + action.item.price * action.item.amount;
    
    
    return{
      items:updatedItem,
      totalamount:updatedAmount
    };
  }
  return defaultCardstate;
};

const Cardprovider = (props) => {
  const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCardstate);

  const addItemToCartHandler =(item)=>{
    dispatchCartAction({type:'ADD' ,item:item})
  };

  const removeItemToCartHandler =(id)=>{
    dispatchCartAction({type:'remove' ,id:id})
  };
  const cardContext ={
    items:cartState.items,
    totalamount:cartState.totalamount,
    additems:addItemToCartHandler,
    removeitems:removeItemToCartHandler 
  }

  return (
    <CardContext.Provider value={cardContext}>{props.children}</CardContext.Provider>
  
  )
}

export default Cardprovider