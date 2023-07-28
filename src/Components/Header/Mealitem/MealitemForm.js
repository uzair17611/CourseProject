import React,{useRef,useState} from 'react'
import Input from '../../UI/Input.js'
import classes from './MealitemForm.js'



const MealitemForm = (props) => {
  const Inputamounthandler=useRef();
  const [inValidinput,setinValidinput] =useState(true);

  const SubmitHandler =(e)=>{
    e.preventDefault();
    const enteredAmount=Inputamounthandler.current.value;
    const enteredAmountNumber= +enteredAmount;
   
    if( enteredAmount.trim().length === 0 || enteredAmountNumber < 1  || enteredAmountNumber > 5){
      setinValidinput(false);
      return 
    }
   
    props.AddToCartHandler(enteredAmountNumber);
  }

  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <Input 
      ref={Inputamounthandler}
      label='amount' 
       input={{
         id:'amount' + props.id,
        type:"text",
        min:'1',
        max:'2',
        step:'1',
        defaultValue:'1'
     }}/>
        <button>+ ADD</button>
        {!inValidinput && <p>please Enter valid amount between (1-5)</p>}

    </form>
  )
}

export default MealitemForm