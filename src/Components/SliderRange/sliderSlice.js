import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    setRangeValue: (state, action) => (state = action.payload),
  },
});
export const sliderState = (state) => state.slider;
