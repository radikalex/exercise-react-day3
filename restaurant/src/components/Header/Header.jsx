import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <nav>
          <span><Link to="/">Home</Link></span>
          <span><Link to="/reserve">Reserve</Link></span>
          <span><Link to="/about">About us</Link></span>
        </nav>
    </header>
  )
}

export default Header