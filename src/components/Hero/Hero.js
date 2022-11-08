import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero__container'>
        <div className='hero__content'>
        <div >
            <h1 className='tagline'>We build stuff to make your online presence <span className='blue'>awwwesome.</span></h1>
        </div>
        <button className='hero__btn'>Contact Now</button>
        </div>
     <div className='previous__client'>
       
        <div class="slide">
          <img src="https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo1.png" />
          </div>
				<div class="slide">
          <img src="https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo2.png" />
          </div>
				<div class="slide">
          <img src="https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo3.png" />
          </div>
          <div class="slide">
            <img src="https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo1.png" />
            </div>
            <div class="slide">
             <img src="https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo2.png" />
            </div>
          <div class="slide">
            <img src="https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/slider-logo3.png" />
            </div>
        

        </div>
    </div>
  )
}

export default Hero