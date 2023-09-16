import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState('');

  const handleAddToCart = tshirt => {
    const newCart = [...cart, tshirt];
    setCart(newCart);
  }

  const handleRemoveFromCart = id => {
    // console.log(id);
    const remaining = cart.filter((ts) => ts._id != id);
    setCart(remaining);
  }

  return (
    <div>
      <h2>{tshirts.length}</h2>
      <div className="home-container">
        {/* t-shirts-container  */}
        <div className="t-shirts-container">
          {
            tshirts.map((tshirt) => {
              return <TShirt
                key={tshirt._id}
                tshirt={tshirt}
                handleAddToCart={handleAddToCart} />
            })
          }
        </div>
        {/* cart container  */}
        <div className="cart-container">
          <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
        </div>
      </div>
    </div>
  )
}

export default Home