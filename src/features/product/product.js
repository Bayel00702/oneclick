import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk(
    "products/getProduct",
    async (productID,thunkAPI) => {
        try {
            const res = await axios(`https://storedbs.onrender.com/products/${productID}`);
            return res.data
        }catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);

const productSlice = createSlice({
    name: "products",
    initialState: {
        data: [],
        isLoading: false,
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, state => {
                state.isLoading = true
            })
            .addCase(getProduct.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.data = payload
            })
            .addCase(getProduct.rejected, state => {
                state.isLoading = false
            })

    }
});

export default productSlice.reducer