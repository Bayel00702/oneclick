import React, {useEffect, useState} from 'react';
import CatalogFilter from "../../components/CatalogFilter/CatalogFilter";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../features/allProducts/allproducts";
import Card from "../../components/Card/Card";

const Catalog = () => {

    const dispatch = useDispatch();
    const {data, isLoading} = useSelector(store => store.allProduct);

    const [category, setCategory] = useState('');
    const [sort, setSort] = useState('');

    useEffect(() => {
        dispatch(getAllProducts())
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
        <section className="catalog">
            <div className="container">
                <div className="catalog__row">
                    <CatalogFilter category={category} setCategory={setCategory} sort={sort} setSort={setSort}/>

                    <div className="product-list__row">
                        {
                            data.map((item, idx) => (
                                <Card item={item} key={item.id || idx}/>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;