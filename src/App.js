import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals"
import Cart from "./Components/Cart/Cart"

import  CartProvider from "./store/CartProvider"
import { useState } from "react";

function App() {
  const [showCart,setShowCart]=useState(false)

  const renderCart=()=>{
    setShowCart(true)
  }

  const removeCart=()=>{
   setShowCart(false)
  }
   return (
    <CartProvider>
     
     {showCart && <Cart onClose={removeCart}/>}
      <Header cartClick={renderCart}/>
      <main>
      <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
