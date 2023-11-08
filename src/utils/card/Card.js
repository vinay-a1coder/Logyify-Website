import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className='card'>
        <img id='image' src={props.img} alt='' />
        <p className='caption' id='para'>{props.caption}</p>
    </div>
  )
}

export default Card