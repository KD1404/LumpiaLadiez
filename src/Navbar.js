import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import lumpia from "./assets/lumpia.PNG"

function Navbar(){

return (
    <nav className='nav'>
        <div className='navbar-container'>
    <Link to="/" className="site-title">
     <img src={lumpia} alt="LumpiaLadiez" />  
   
     <i className='fab fa-typo3'/>
      </Link>
    </div>
    <ul>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/order">Order</Link>
        </ul>
    </nav>
);

}

export default Navbar