import React from 'react';

const Card = () => {
    return (
        <div className="product-list__card">
            <img src="https://m.media-amazon.com/images/I/71ZDY57yTQL._AC_UF1000,1000_QL80_.jpg" alt=""/>
            <h3 className="product-list__card-title">
                iPhone
            </h3>
            <p className="product-list__card-price">
                120 $
            </p>
        </div>
    );
};

export default Card;