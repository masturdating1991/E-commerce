import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const ProductsReducer = createSlice({
    name: "products",
    initialState: {
        products: [],
        featured: [],
        loading: false,
    },
    reducers: {
        setProducts: (state, action) => {
            state.products.push(action.payload) // or state.products.push(...action.payload) i use flat in Products.js
        },

    }
})


export const getProductsAsync = url => dispatch => {
    axios.get(`${url}/products`)
        .then(res => dispatch(setProducts(res.data)))
}

export const { setProducts } = ProductsReducer.actions

export default ProductsReducer.reducer


