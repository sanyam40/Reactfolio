import { createSlice } from "@reduxjs/toolkit";

export const CartSlice=createSlice({
    name:"cart",
    initialState:{
        cartItems:[]
    },
    reducers:{
        add:(state,action)=>{
            console.log(action.payload);
            state.cartItems.push(action.payload);
        },
        remove:(state,action)=>{
            let dataToDelete=action.payload;
            state.cartItems=state.cartItems.filter((item)=>item.id!==dataToDelete.id);
        },
    }
})

export const {add,remove}=CartSlice.actions;

export default CartSlice.reducer;