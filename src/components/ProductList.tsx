import { ProductItemType } from "../model/products";
import { ALL_PRODUCTS_ITEMS } from "../product-items-data";
import { useAppSelector } from "../store/hooks";
import ProductsView from "./ProductsView";
import ProductItem from "./productItem";

export default function ProductList() {
  const { mode, productsList } = useAppSelector((state) => state.productsState);

  return (
    <section className="mt-10">
      <div className="flex justify-between items-center pb-5 mb-10 border-b-[1px] border-blue-100 text-blue-950/85 font-semibold">
        <p>{ALL_PRODUCTS_ITEMS.length} products</p>
        <ProductsView />
      </div>
      <div
        className={`grid grid-cols-1 gap-5 ${
          !mode || mode === "grid" ? "sm:grid-cols-2 md:grid-cols-3" : ""
        }`}>
        {productsList.map((item: ProductItemType) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
