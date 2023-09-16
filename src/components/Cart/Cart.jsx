import React from 'react'

const Cart = ({ cart, handleRemoveFromCart }) => {
  // console.log(cart);
  return (
    <div>
      <h2>Order Summary</h2>
      <h3>{cart.length}</h3>
      {
       Array.isArray(cart) && cart.map((tshirt)=> {
          return <p key={tshirt._id}>{tshirt.name} <button onClick={()=> handleRemoveFromCart(tshirt._id)}>X</button></p>
        })
      }
    </div>
  )
}

export default Cart