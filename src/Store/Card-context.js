import React from 'react'

const CardContext=React.createContext({
    items:[],
    totalAmount:0,
    additems:()=>{},
    remove:()=>{}
})
export default CardContext