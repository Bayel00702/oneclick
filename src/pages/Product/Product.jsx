import React, {useEffect,useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom'
import {getProduct} from "../../features/product/product.js";
import{AiOutlineHeart} from 'react-icons/ai'
import ProductList from "../Home/ProductList/ProductList";




const Product = () => {

    const dispatch = useDispatch();
    const {data, isLoading} = useSelector(store => store.product);


    console.log(data);


    const params = useParams();
    useEffect(() => {
        dispatch(getProduct(params.id))
    }, []);

    if (isLoading){
        return (
            <h2>
                ...Loading
            </h2>
        )
    }




    return (
        <section className="goods">
            <div className="container">
                <div className="goods__row">
                   <div className="goods__left">
                       <img src={data.images && data.images[0]} alt={data.title} className="goods__left-img"/>
                   </div>
                    <div className="goods__right">
                        <h2 className="goods__right-title">{data.title}</h2>

                        <div className="goods__right-info">
                            <p className="goods__right-price">Цена: <span>{data.price} $</span></p>
                            <div className="goods__right-info__row">
                                <div className="goods__right-info__plus">-</div>
                                <span>1</span>
                                <div className="goods__right-info__plus">+</div>
                            </div>
                        </div>
                        <div className="goods__right-btns">
                            <button className="goods__right-btn">Добаить в корзину</button>
                            <button className="goods__right-fav"><AiOutlineHeart/></button>
                        </div>
                    </div>
                </div>

                <ProductList/>
            </div>
        </section>
    );
};

export default Product;