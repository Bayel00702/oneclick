import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../../../features/category/category";

const CategoryList = () => {
    const dispatch = useDispatch();
    const {list, isLoading} = useSelector(store => store.categories);

    useEffect(() => {
        dispatch(getCategories())
    }, []);

    if (isLoading){
        return (
            <h2>
                ...Loading
            </h2>
        )
    }
    return (
        <section className="category-list">
            <div className="container">
                <h2 className="category-list__title">
                    Категории
                </h2>
                <div className="category-list__row">
                    {
                        list.map((item, idx) => (
                            <Link  key={item.id || idx} to={'/catalog'} className="category-list__card">
                                <div>
                                    <img src={item.image} alt=""/>
                                    <h2 className="category-list__card-title">
                                        {item.name}
                                    </h2>
                                </div>
                            </Link>
                        ))
                    }

                </div>
            </div>
        </section>
    );
};

export default CategoryList;