import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (_,thunkAPI) => {
        try {
            const res = await axios('https://storedbs.onrender.com/products');
            return res.data
        }catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }

);


const productsSlice = createSlice({
   name: "products",
   initialState: {
       data: [],
       isLoading: false,
       error: ''
   },
    reducers: {},
    extraReducers: (builder) => {
       builder
           .addCase(getProducts.pending, state => {
           state.isLoading = true
       })
       .addCase(getProducts.fulfilled, (state, {payload}) => {
           state.isLoading = false;
           state.data = payload
       })
           .addCase(getProducts.rejected, state => {
               state.isLoading = false
           })

    }
});

export default productsSlice.reducer