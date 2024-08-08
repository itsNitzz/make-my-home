/* eslint-disable @typescript-eslint/no-unused-vars */
import FilterForm from "../components/FilterForm";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
import { ALL_PRODUCTS_ITEMS } from "../product-items-data";
import { Provider } from "react-redux";
import store from "../store";

export default function ProductsPage() {
  return (
    <>
      <FilterForm />
      <Provider store={store}>
        <ProductList />
        <Pagination products={ALL_PRODUCTS_ITEMS} productsPerPage={6} />
      </Provider>
    </>
  );
}
