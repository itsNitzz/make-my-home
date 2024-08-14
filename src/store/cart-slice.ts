import { createSlice } from "@reduxjs/toolkit";
import { CartItemType } from "../model/products";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [], totalQuantity: 0, totalCartValue: 0, tax: 0 },
  reducers: {
    updateCartItem(state, action) {
      const item = action.payload;
      const updatedCartItems = state.cartItems as CartItemType[];

      const existingItem = updatedCartItems.find(
        (cartItem: CartItemType) => cartItem.id === item.id
      );

      if (!existingItem) {
        item.totalPrice = +item.price * item.quantity;
        updatedCartItems.push(item);
        state.totalCartValue = state.totalCartValue + item.totalPrice;
      } else {
        existingItem.quantity = existingItem.quantity + item.quantity;
        existingItem.totalPrice =
          existingItem.totalPrice + item.quantity * +item.price;
        state.totalCartValue =
          state.totalCartValue + item.quantity * +item.price;
      }

      state.totalQuantity = state.totalQuantity + item.quantity;
      state.tax = state.totalCartValue * 0.1;
    },
    removeCartItem(state, action) {
      const updatedCartItems = state.cartItems as CartItemType[];
      const id = action.payload;

      const existingIndex = updatedCartItems.findIndex((item) => item.id == id);
      const existingItem = updatedCartItems[existingIndex];

      if (existingItem?.quantity === 1) {
        updatedCartItems.splice(existingIndex, 1);
      } else {
        existingItem.quantity--;
      }
      existingItem.totalPrice = existingItem.totalPrice - +existingItem.price;
      state.totalCartValue = state.totalCartValue - +existingItem.price;

      state.totalQuantity--;
      state.tax = state.totalCartValue * 0.1;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
