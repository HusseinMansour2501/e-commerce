import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../slices/products-slice";
import detailsSlice from "../slices/Details-slice";
import cartSlice from "../slices/Cart-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    details: detailsSlice,
    cart: cartSlice,
  },
});

