import React from 'react'
import Button from './Button'

const Card = ({item: house}) => {
  const {
    id,
    type,
    place,
    title,
    price,
    image: {src},
    available
  } = house

  return (
    <div className="my-item d-flex flex-column flex-md-row list-box">
      <p className="my-item__image mb-3 mb-md-0 mr-md-3 pro-image">
        <img src="http://via.placeholder.com/1600x1600" alt="Image" className="img-fluid rounded mx-auto d-block"/>
      </p>
      <div className="my-item__text">
          <h2>
            <span class="vote"> </span> 55
          </h2>
          <p className="title-text bold-font">
            Product Title-bangla
          </p>
          <p className="bold-font">
            Quibusdam inventore iusto deleniti quis quam veniam eveniet harum.
          </p>
          <p className="avatar-text">
            Submitted by: <img src="img_avatar2.png" alt="Avatar" class="avatar"></img>
          </p>
      </div>
    </div>
  )
}


export default Card
