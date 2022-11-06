import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar_container'>
        <div className='logo'>
            <h1><span>Meta</span><span>Scale</span></h1>
        </div>
        <ul>
            <li>Services</li>
            <li>Contact US</li>
        </ul>
    </div>
  )
}

export default Navbar