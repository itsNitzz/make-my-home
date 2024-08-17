import { ProductItemType } from "../model/products";
import { useAppSelector } from "../store/hooks";
import ProductsView from "./ProductsView";
import ProductItem from "./productItem";

export default function ProductList() {
  const { mode, productsList, filteredProductList } = useAppSelector(
    (state) => state.productsState
  );

  if (!filteredProductList.length) {
    return (
      <h1 className="mt-10 text-3xl text-blue-950/85 dark:text-zinc-100">
        Sorry, no products matched your search...
      </h1>
    );
  }

  return (
    <section className="mt-10">
      <div className="flex justify-between items-center pb-5 mb-10 border-b-[1px] border-blue-100 text-blue-950/85 dark:border-dark-blue dark:text-zinc-100 font-semibold">
        <p>{filteredProductList.length} products</p>
        <div className="hidden sm:block">
          <ProductsView />
        </div>
      </div>
      <div
        className={`grid grid-cols-1 gap-10 ${
          !mode || mode === "grid" ? "sm:grid-cols-2 lg:grid-cols-3" : ""
        }`}>
        {productsList.map((item: ProductItemType) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
