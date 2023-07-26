import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
   name: "user",
   initialState: {
       user: {
           email: ''
       }
   },
    reducers:{
       logIn: (state, {payload}) => {
           state.user = payload
       }
    }
});

export const {logIn} = userSlice.actions;

export default userSlice.reducer