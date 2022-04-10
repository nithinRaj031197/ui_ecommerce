import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartDetail: {
    productId: "",
    count: 0,
  },
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, { payload }) => {
      state.cartDetail.productId = payload.productId;
      state.cartDetail.count += 1;
    },

    createCartList: (state, { payload }) => {
      state.cartList = payload;
    },
  },
});

export const { addCart, createCartList } = cartSlice.actions;

export const getCartCount = (state) => state.cart.cartDetail;
export const getCartList = (state) => state.cart.cartList;

export default cartSlice.reducer;
