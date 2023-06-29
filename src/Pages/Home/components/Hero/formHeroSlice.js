import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  year: "",
  brand: "",
  model: "",
  mileage: "",
};
export const formHeroSlice = createSlice({
  name: "formHero",
  initialState,
  reducers: {
    changeYear: (state, action) => ({ ...state, year: action.payload }),
    changeBrand: (state, action) => ({ ...state, brand: action.payload }),
    changeModel: (state, action) => ({ ...state, model: action.payload }),
    changeMileage: (state, action) => ({ ...state, mileage: action.payload }),
  },
});
export const formHeroState = (state) => state.formHero;
