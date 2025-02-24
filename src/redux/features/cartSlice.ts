import { IProduct } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
interface InitialState {
    product:IProduct[],
}

const initialState :InitialState = {
    product:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addProduct:(state,action) => {
            state.product.push(action.payload)
        }
    }
})

export const orderedProductsSelector = (state:RootState) => {
    return state.cart.product
}

export const {addProduct} = cartSlice.actions

export default cartSlice.reducer