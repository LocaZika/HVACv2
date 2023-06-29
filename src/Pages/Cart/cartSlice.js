import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});
