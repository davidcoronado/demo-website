import React from 'react'
import './Card.css'

const Card = props => (
  <div>
    <div className="CardTitle">
      <div className="Title">
        <p>{props.title}</p>
      </div>
      <div className="Text">
        <p>{props.text}</p>
      </div>
    </div>
    <div className="Card">
      <a href="https://github.com/davidcoronado">
        <img src={props.image} />
      </a>
    </div>
  </div>
)

export default Card
