import { IProduct } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";
interface InitialState {
    product:IProduct[],
}

const initialState :InitialState = {
    product:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{}
})

export default cartSlice.reducer