import { configureStore } from "@reduxjs/toolkit";
// import { CounterSlice } from "./Slices/CounterSlice";
import { CartSlice } from "./Slices/CartSlice";

export const store=configureStore({
    // reducer:{
    //     counter:CounterSlice.reducer
    // },

    reducer:{
        cart:CartSlice.reducer
    }
});