import React from 'react';
import './Cta.css';
import Fade from 'react-reveal/Fade';

const Cta = () => {
  return (
    <div className='cta_container'>
        <div>
            <Fade bottom >
        <h1>Get in touch</h1>
        <p>Want to Know how we can help your brand to standout? lets Discuss!</p>
        <button>Contact Us</button>
            </Fade>
        </div>
    </div>
  )
}

export default Cta