import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  extraOpt: {
    sort: "price",
    order: "desc",
    page: 1,
    limit: "9",
    search: "",
  },
  carList: [],
  totalCount: 0,
  result: [],
};
export const carsPageSlice = createSlice({
  name: "carsPage",
  initialState,
  reducers: {
    addCarList: (state, action) => (state = { ...state, carList: action.payload }),
    changeSearch: (state, action) =>
      (state = { ...state, extraOpt: { ...state.extraOpt, search: action.payload } }),
    changeOrder: (state, action) =>
      (state = { ...state, extraOpt: { ...state.extraOpt, order: action.payload } }),
    changeLimit: (state, action) =>
      (state = { ...state, extraOpt: { ...state.extraOpt, limit: action.payload } }),
    changePage: (state, action) =>
      (state = { ...state, extraOpt: { ...state.extraOpt, page: action.page } }),
    changeTotalCount: (state, action) => (state = { ...state, totalCount: action.payload }),
    changeResult: (state, action) => (state = { ...state, result: action.payload }),
  },
});
export const carsPageState = (state) => state.carsPage;
