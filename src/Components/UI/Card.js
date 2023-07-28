import React, { Children } from 'react'
import classes from './Card.module.css'

const Card = (props) => {
  return (
    <div className={classes.Card}>
        {Children.props}
    </div>
   
  )
}

export default Card