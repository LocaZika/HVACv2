import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const selectFormSlice = createSlice({
  name: "selectForm",
  initialState,
  reducers: {
    result: (state, action) => (state = action.payload),
  },
});
export const selectFormState = (state) => state.selectForm;
