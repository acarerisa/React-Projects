import React, { useState } from "react";
import Products from './components/Products';
import Cart from './components/Cart';


import "./App.css";

const PAGE_PRODUCT = "products";
const PAGE_CART = "carts";

function App() {
  
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("products");
  const [cost, setCost] = useState(0.0);

  
  const addToCart = (product) => {
    setCart([...cart, {...product }]);
    let price = parseFloat(product.cost);
    
    setCost(cost+price);
  };
  
  const removeFromCart = (item) => {
    const newCart = cart.filter((cartItem)=> cartItem !== item)
    setCart(newCart);
    let price = parseFloat(item.cost);
    
    setCost(cost-price);
  };

  const navigateTo = () => {
    if(document.getElementById('btn').innerHTML==="Go To Your Cart"){
      setPage(PAGE_CART);
      document.getElementById('btn').innerHTML="Back To Books";
    }else{
      setPage(PAGE_PRODUCT);
      document.getElementById('btn').innerHTML="Go To Your Cart";
    }
   
  };

  
  
  return (
    <div className="App">
      <header className="header">
      
        <button id="btn" onClick={() => navigateTo()}>Go To Your Cart</button>

        <p style={{marginRight:"15px"}}>
          Cart subtotal (<strong style={{ color: "red" }}>{cart.length}</strong> items) : $ {cost.toFixed(2)} 
          
        </p >
        
      </header>
      {page === PAGE_PRODUCT && <Products addToCart = {addToCart}/>}
      {page === PAGE_CART && <Cart cart={cart} removeFromCart={removeFromCart} />}
    </div>
  );
}

export default App;
