import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice ({
    name:"Cart",
    initialState:{
        items:[]
    },
    reducers:{
        additem:(state,action)=>{
state.items.puss(action.payload)
        },
        removeItem:(state)=>{
            state.items.pop()
        }
    }
})
export const {additem,removeItem} =cartSlice.actions

export default cartSlice.reducer