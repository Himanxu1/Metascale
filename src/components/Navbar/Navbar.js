import React,{useState} from 'react';
import './Navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  const [showlinks,setShowLinks] = useState(false);
  return (
    <div className='navbar_container'>
        <div>
            <h1 className='logo'><span className='purple'>Meta</span><span className='pink'>Scale</span></h1>
        </div>
        <ul  id={showlinks ? "hidden":""}>
            <li>Services</li>
            <li>Contact US</li>
        </ul>
       <button style={{background:"transparent",border:"none"}} onClick={()=>setShowLinks(!showlinks)}><GiHamburgerMenu style={{fontSize:"30px",color:"white",marginRight:"20px"}}/></button>
    </div>
  )
}

export default Navbar