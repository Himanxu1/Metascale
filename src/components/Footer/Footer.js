import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer_container'>
        <div className='newsletter_container'>
          <h1 className='newsletter_h1'>Subscribe to our Newsletter</h1>
          <p className='newsletter_p'>We write about web3 marketing, community building & hacks to grow your social media. We DONT spam.</p>
          <div className='subscribe'>
            <input placeholder='satoshi@bitcoin.com'  type='text'/>
            <button className='newsletter_btn'>Join</button>
          </div>
          <p className='copyright'>© 2022 Blockverse Media</p>
        </div>
        <div className='contact_container'>
          <p>Contact us</p>
          <p>tanishq@blockversemedia.xyz</p>
          <p>Tel: +91 7980066563</p>
        </div>
    </div>
  )
}

export default Footer