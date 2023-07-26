import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {getProducts} from "../products/products";

export const getCategories = createAsyncThunk(
    "categories/getCategories",
    async (_,thunkAPI) => {
        try {
            const res = await axios('https://storedbs.onrender.com/categories');
            return res.data
        }catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }

);

const categorySlice = createSlice({
    name: "categories",
    initialState: {
        list: [],
        isLoading: false,
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, state => {
                state.isLoading = true
            })
            .addCase(getCategories.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.list = payload
            })
            .addCase(getCategories.rejected, state => {
                state.isLoading = false
            })

    }
});

export default categorySlice.reducer