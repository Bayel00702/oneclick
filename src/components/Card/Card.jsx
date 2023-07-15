import React from 'react';

const Card = ({item}) => {
    return (
        <div className="product-list__card">
            <img src={item.images[0]} alt=""/>
            <h3 className="product-list__card-title">
                {item.title}
            </h3>
            <p className="product-list__card-price">
                {item.price} $
            </p>
        </div>
    );
};

export default Card;