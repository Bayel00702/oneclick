import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getProducts} from "../products/products";

export const getAllProducts = createAsyncThunk(
    "products/getAllProducts",
    async (_,thunkAPI) => {
        try {
            const res = await axios('https://storedbs.onrender.com/products');
            return res.data
        }catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }

);

const AllProductsSlice = createSlice({
    name: "products",
    initialState: {
        data: [],
        isLoading: false,
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, state => {
                state.isLoading = true
            })
            .addCase(getAllProducts.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.data = payload
            })
            .addCase(getAllProducts.rejected, state => {
                state.isLoading = false
            })

    }
});

export default AllProductsSlice.reducer