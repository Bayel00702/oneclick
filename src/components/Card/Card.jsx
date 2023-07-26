import React from 'react';
import {Link} from 'react-router-dom'

const Card = ({item}) => {
    return (
        <div className="product-list__card">
            <Link to={`/product/${item.id}`}>
                <img src={item.images[0]} alt=""/>
            </Link>
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