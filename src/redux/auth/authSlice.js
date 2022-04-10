import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  validateUser: {
    token: "",
    isAuth: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, { payload }) => {
      state.validateUser = payload;
    },
  },
});

export const { authenticate } = authSlice.actions;

export const getAuthenticated = (state) => state.auth.validateUser;

export default authSlice.reducer;
