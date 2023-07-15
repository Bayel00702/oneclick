import React from 'react';
import {Link} from "react-router-dom";

const CategoryList = () => {
    return (
        <section className="category-list">
            <div className="container">
                <h2 className="category-list__title">
                    Категории
                </h2>
                <div className="category-list__row">
                    <Link className="category-list__card">
                        <div>
                            <img src="https://m.media-amazon.com/images/I/71ZDY57yTQL._AC_UF1000,1000_QL80_.jpg" alt=""/>
                            <h2 className="category-list__card-title">
                                Phones
                            </h2>
                        </div>
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default CategoryList;