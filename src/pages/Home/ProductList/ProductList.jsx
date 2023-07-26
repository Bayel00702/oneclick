import React, {useEffect} from 'react';
import Card from "../../../components/Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../../features/products/products";
import {Link} from 'react-router-dom'

const ProductList = () => {

    const dispatch = useDispatch();
    const {data, isLoading} = useSelector(store => store.products);

    useEffect(() => {
        dispatch(getProducts())
    }, []);

    console.log("pending", isLoading);


    if (isLoading){
        return (
            <h2>
                ...Loading
            </h2>
        )
    }

    return (
        <section className="product-list">
            <div className="container">
                <h2 className="category-list__title">
                    Хиты
                </h2>
                <div className="product-list__row">
                    {
                        data.map((item, idx) => (
                            <Card item={item} key={item.id || idx}/>
                        ))
                    }

                </div>
                <Link to='/catalog' className="product-list__link">See more</Link>
            </div>
        </section>
    );
};

export default ProductList;