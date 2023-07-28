import React,{useState}from 'react';
import Header from './Components/Layout/Header';
import Meal from './Components/Header/Meal';
import Cart from './Components/Cart/Cart';
import Cardprovider from './Store/Cardprovider';


function App() {
  const [showCart,setCartIsShown] =useState(false);
  const showCartHandler=()=>{
    setCartIsShown(true)
  }
  const hideCartIsshown=()=>{
    setCartIsShown(false)
  }
  return (
    <Cardprovider>
     {showCart && <Cart onClose={hideCartIsshown}/>}
    <Header onShowCart={showCartHandler}/>
    <main>
      <Meal/>
    </main>
    </Cardprovider>
  );
}

export default App;
