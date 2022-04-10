import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reduxProducts: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    storeProducts: (state, { payload }) => {
      state.reduxProducts = payload;
    },
  },
});

export const { storeProducts } = productSlice.actions;

export const getReduxProducts = (state) => state.product.reduxProducts;

export default productSlice.reducer;
