import {configureStore} from "@reduxjs/toolkit";
import user from './user/user'
import products from './products/products'

export const store = configureStore({
    reducer: {
        user,
        products
    }
});