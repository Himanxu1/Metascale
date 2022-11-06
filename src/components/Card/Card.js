import React from 'react'
import './Card.css';

const Card = ({title,description}) => {
  return (
    <div className='card'>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Card