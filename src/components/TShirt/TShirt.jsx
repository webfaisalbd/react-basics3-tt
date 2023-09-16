import React from 'react'
import './TShirt.css'

const TShirt = ({tshirt, handleAddToCart}) => {
    const {picture, name, price} = tshirt;
  return (
    <div className='single-tshirt'>
        <img src={picture} alt="" />
        <h3>{name}</h3>
        <h3>${price}</h3>
        <button onClick={()=> handleAddToCart(tshirt)}>Buy Now</button>
    </div>
  )
}

export default TShirt