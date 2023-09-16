import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

const Header = () => {
  return (
    <nav>
      <Link className='item' to='/'>Home</Link>
      <Link className='item' to='/review'>Order Review</Link>
      <Link className='item' to='/about'>About</Link>
    </nav>
  )
}

export default Header