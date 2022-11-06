import React from 'react';
import './Services.css';
import Data from '../../Data';
import Card from '../Card/Card';

const Services = () => {
  return (
    <div className='section__container'>
       <div className='section_header'>
        <h1>Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nostrum veritatis veniam incidunt nihil numquam.</p>
       </div>
        <div className='card_container'>
          {Data.map((item)=>{
                return  <Card title={item.title} description={item.description} />
          })}
        </div>
       
    </div>
  )
}

export default Services