import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "Pages";
import { authSlice } from "Middlewares/authSlice";
import { formHeroSlice } from "Pages";
import { carsPageSlice } from "Pages";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    formHero: formHeroSlice.reducer,
    carsPage: carsPageSlice.reducer,
  },
});
