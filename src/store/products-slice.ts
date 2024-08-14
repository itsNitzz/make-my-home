import { createSlice } from "@reduxjs/toolkit";
import { ALL_PRODUCTS_ITEMS } from "../product-items-data";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: ALL_PRODUCTS_ITEMS,
    filteredProductList: ALL_PRODUCTS_ITEMS,
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
      const { pageCount, pages, productsPerPage } = action.payload;
      const products = state.filteredProductList;
      if (!products.length) {
        state.productsList = [];
        return;
      }
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

    setFilteredProductsList(state, action) {
      if (!action.payload) {
        state.filteredProductList = ALL_PRODUCTS_ITEMS;
        return;
      }

      const { searchText, catagory, company, filter, priceRange } =
        action.payload;

      const filteredProductsList = ALL_PRODUCTS_ITEMS.filter((product) => {
        return product.title.toLowerCase().includes(searchText.toLowerCase());
      })
        .filter((product) => {
          if (catagory !== "all") {
            return product.catagory.toLowerCase() === catagory.toLowerCase();
          }
          return true;
        })
        .filter((product) => {
          if (company !== "all")
            return product.company.toLowerCase() === company.toLowerCase();
          return true;
        })
        .filter((product) => {
          return +product.price <= +priceRange;
        });

      filteredProductsList.sort((a, b) => {
        let comparison = 0;
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        if (filter === "a-z") {
          if (titleA > titleB) comparison = 1;
          else if (titleA < titleB) comparison = -1;
        } else if (filter === "z-a") {
          if (titleA > titleB) comparison = -1;
          else if (titleA < titleB) comparison = 1;
        } else if (filter === "low") {
          if (+a.price > +b.price) comparison = 1;
          if (+a.price < +b.price) comparison = -1;
        } else if (filter === "high") {
          if (+a.price > +b.price) comparison = -1;
          if (+a.price < +b.price) comparison = 1;
        }

        return comparison;
      });

      state.filteredProductList = filteredProductsList;
    },
  },
});

export const productsActions = productsSlice.actions;
