import React from 'react';
import './Testimonial.css';
import Carousel from 'nuka-carousel';
import {CgProfile} from 'react-icons/cg';

const Testimonial = () => {
  return (
    <div className='carousel_parentContainer'>
        <h1 className='testimonial_head'>Testimonials</h1>
    <div className='carousel_container'>
        <Carousel className='carousel__container' autoplay={true} renderCenterLeftControls={null} renderCenterRightControls={null}>
            <div>
                <CgProfile style={{fontSize:"40px"}}/>
                <h1>Hello</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, adipisci!</p>
            </div>
            <div>
                <CgProfile style={{fontSize:"40px"}}/>
                <h1>Hello</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, adipisci!</p>
            </div>
            <div>
                <CgProfile style={{fontSize:"40px"}}/> 
                <h1>Hello</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, adipisci!</p>
            </div>
            <div>
              <CgProfile style={{fontSize:"40px"}}/>
                <h1>Hello</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, adipisci!</p>
            </div>
        </Carousel>
        </div>
    </div>
  )
}

export default Testimonial