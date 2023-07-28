import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import CartButton from './CartButton'
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <>
    <header className={classes.header}>
        <h1 >lets Eat</h1>
          <CartButton  onClick={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt='this is image' />


    </div>
    </>
  )
}

export default Header