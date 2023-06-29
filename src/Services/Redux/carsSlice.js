import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addList: (state, action) => (state = action.payload),
  },
});
export const carsState = (state) => state.cars;
