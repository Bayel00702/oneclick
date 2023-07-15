import {configureStore} from "@reduxjs/toolkit";
import user from './user/user'

export const store = configureStore({
    reducer: {
      user: user
    }
});