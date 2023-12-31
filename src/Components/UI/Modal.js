import React from 'react'
import classes from './Modal.module.css'
import { ReactDOM } from 'react'

const Backdrop =(props) =>{
return <div className={classes.backdrop} onClick={props.onClose}>
</div>
}

const MOdalOverlay =(props)=>{
return (
<div className={classes.modal}>
    <div className={classes.content}>
        {props.children}

    </div>
</div>
);
}
const portalElement =document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
    ReactDOM.createPortal(<Backdrop  onClose={props.onClose}/>,portalElement)
    ReactDOM.createPortal(<MOdalOverlay> {props.children}</MOdalOverlay>,portalElement)
    </>
  )
    
}

export default Modal