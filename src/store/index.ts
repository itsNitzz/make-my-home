import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./products-slice";

const store = configureStore({
  reducer: { productsState: productsSlice.reducer },
});

export default store;

export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
