import { createSlice } from "@reduxjs/toolkit";
import { ALL_PRODUCTS_ITEMS } from "../product-items-data";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: ALL_PRODUCTS_ITEMS,
    mode: "grid",
    pageNumber: 1,
  },
  reducers: {
    setGrid(state) {
      state.mode = "grid";
    },

    setList(state) {
      state.mode = "list";
    },

    displayProductsPerPage(state, action) {
      const { pageCount, pages, productsPerPage, products } = action.payload;
      const updatedProductsList = [];
      const index = pages.indexOf(pageCount);

      const start = index * productsPerPage;
      const end =
        pageCount * productsPerPage <= products.length
          ? pageCount * productsPerPage
          : products.length;

      for (let i = start; i < end; i++) {
        updatedProductsList.push({ ...products[i] });
      }

      state.productsList = updatedProductsList;
      state.pageNumber = pageCount;
    },
  },
});

export const productsActions = productsSlice.actions;
