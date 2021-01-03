import React from 'react'
import { v4 as uuidv4 } from "uuid";

function Cart({cart,removeFromCart}) {
    
    return (
        <>
      <h1>Cart</h1>
      <div className="products">
        {cart.map((item) => (
          <div className="product" key={uuidv4()}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <h4>{item.cost}</h4>
            
            <button onClick={() => removeFromCart(item)} className="btn-add-cart">
              Remove from cart
            </button>
          </div>
        ))}
      </div>
    </>
    )
}

export default Cart
