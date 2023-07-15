import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (_,thunkAPI) => {
        try {
            const res = axios('https://storedbs.onrender.com/products')
        }catch (err) {

        }
    }

);


const productsSlice = createSlice({
   name: "products",
   initialState: {
       data: []
   },
    reducers: {}
});

export default productsSlice.reducer