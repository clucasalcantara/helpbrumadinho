import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ data: { id, name, image, location, accepts } }) => (
  <div key={id} className="column">
    <Link className="ui card" to={`location/${id}`}>
      <div className="content">
        <img
          src={image}
          alt={`${name}, ponto de coleta helpbrumadinho`}
          className="ui mini right floated image"
        />
        <div className="header">{name}</div>
        <div className="meta">{location}</div>
        <div className="description">{accepts}</div>
      </div>
    </Link>
  </div>
)

export default Card
