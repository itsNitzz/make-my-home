/* eslint-disable @typescript-eslint/no-unused-vars */
import FilterForm from "../components/FilterForm";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";

export default function ProductsPage() {
  return (
    <>
      <FilterForm />
      <ProductList />
      <Pagination productsPerPage={6} />
    </>
  );
}
