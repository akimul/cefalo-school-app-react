import React from 'react';

const ProductListItem = ({product}) => {
    
    const {
        name,
        tagline,
        votes_count,
        thumbnail: {image_url},
        user: { 
            name: username, 
            image_url: {
                original: user_image
            }
        }
      } = product
    return (
        <div className="my-item d-flex flex-column flex-md-row list-box">
            <p className="my-item__image mb-3 mb-md-0 mr-md-3 pro-image">
                <img src={image_url} alt="Image" className="img-fluid rounded mx-auto d-block" />
            </p>
            <div className="my-item__text description">
                <h2>
                    <span class="vote"> </span> {votes_count}
          </h2>
                <p className="title-text bold-font">{name}</p>
                <p className="bold-font">{tagline}</p>
                <p className="avatar-text">
                    Submitted by: <img src={user_image} alt={username} class="avatar"></img>
                </p>
            </div>
        </div>
    );
};


export default ProductListItem;