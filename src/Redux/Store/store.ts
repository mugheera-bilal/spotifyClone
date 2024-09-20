import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Reducer/authSlice";

export const store = configureStore({
    reducer : {
        auth : authSlice
    }
})