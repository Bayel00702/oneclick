import React from 'react';
import Card from "../../../components/Card/Card";

const ProductList = () => {
    return (
        <section className="product-list">
            <div className="container">
                <h2 className="category-list__title">
                    Все товары
                </h2>
                <div className="product-list__row">
                    <Card/>
                </div>
            </div>
        </section>
    );
};

export default ProductList;