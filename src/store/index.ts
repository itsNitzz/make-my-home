import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./products-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    productsState: productsSlice.reducer,
    cartState: cartSlice.reducer,
  },
});

export default store;

export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
