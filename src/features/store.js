import {configureStore} from "@reduxjs/toolkit";
import user from './user/user'
import products from './products/products'
import categories from './category/category'
import product from './product/product'
import allProduct from './allProducts/allproducts'

export const store = configureStore({
    reducer: {
        user,
        products,
        categories,
        product,
        allProduct
    }
});