import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    addProductLoading: false,
    addProductError: null,
    addProductInfo: null
};

const addProductSlice = createSlice({
    name: "addproduct",
    initialState,
    reducers: {
        addProductReq: (state, action) => {
            state.addProductLoading = true
        },
        addProductSuccess: (state, action) => {
            state.addProductLoading = false;
            state.addProductInfo = action.payload;
        },
        addProductFail: (state, action) => {
            state.addProductLoading = false;
            state.addProductError = action.payload;
        },

    }
})

export default addProductSlice.reducer;

export const { addProductSuccess, addProductReq, addProductFail } = addProductSlice.actions