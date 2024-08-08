import { useCallback, useEffect, useMemo } from "react";
import { ProductItemType } from "../model/products";
import { useDispatch } from "react-redux";
import { productsActions } from "../store/products-slice";
import { useAppSelector } from "../store/hooks";

export default function Pagination({
  products,
  productsPerPage,
}: {
  products: ProductItemType[];
  productsPerPage: number;
}) {
  const dispatch = useDispatch();
  const { pageNumber } = useAppSelector((state) => state.productsState);

  const totalPageLength = Math.ceil(products.length / productsPerPage);

  const pages = useMemo(
    () => Array.from(new Array(totalPageLength), (_, i) => i + 1),
    [totalPageLength]
  );

  const onPageChangeHandler = useCallback(
    (pageCount: number) => {
      dispatch(
        productsActions.displayProductsPerPage({
          products,
          productsPerPage,
          pages,
          pageCount,
        })
      );
    },
    [dispatch, products, productsPerPage, pages]
  );

  const onPageHandler = (direction: string) => {
    let trackPage = pageNumber;
    if (direction === "prev") {
      trackPage === pages[0]
        ? (trackPage = pages[pages.length - 1])
        : trackPage--;
      onPageChangeHandler(trackPage);
    } else {
      trackPage === pages[pages.length - 1]
        ? (trackPage = pages[0])
        : trackPage++;
      onPageChangeHandler(trackPage);
    }
  };

  useEffect(() => {
    onPageChangeHandler(1);
  }, [onPageChangeHandler]);

  const styles =
    "p-4 uppercase text-[14px] font-semibold text-blue-950/85 hover:bg-blue-950/10";

  return (
    <div className="flex justify-end mt-10">
      <div className="bg-blue-50 rounded-lg uppercase">
        <button
          onClick={() => onPageHandler("prev")}
          className={`${styles} rounded-s-lg`}>
          Prev
        </button>
        {pages.map((pageCount, index) => (
          <button
            onClick={() => onPageChangeHandler(pageCount)}
            className={`${styles} ${
              pageCount === pageNumber ? "bg-blue-950/10" : ""
            }`}
            key={index}>
            {pageCount}
          </button>
        ))}
        <button
          onClick={() => onPageHandler("next")}
          className={`${styles} rounded-e-lg`}>
          Next
        </button>
      </div>
    </div>
  );
}
