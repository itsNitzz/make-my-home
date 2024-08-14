import { useCallback, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { productsActions } from "../store/products-slice";
import { useAppSelector } from "../store/hooks";

export default function Pagination({
  productsPerPage,
}: {
  productsPerPage: number;
}) {
  const dispatch = useDispatch();
  const { pageNumber, filteredProductList } = useAppSelector(
    (state) => state.productsState
  );

  const totalPageLength = Math.ceil(
    filteredProductList.length / productsPerPage
  );

  const showPagination = filteredProductList.length > productsPerPage;

  const pages = useMemo(
    () => Array.from(new Array(totalPageLength), (_, i) => i + 1),
    [totalPageLength]
  );

  const onPageChangeHandler = useCallback(
    (pageCount: number) => {
      dispatch(
        productsActions.displayProductsPerPage({
          productsPerPage,
          pages,
          pageCount,
        })
      );
    },
    [dispatch, productsPerPage, pages]
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
  }, [onPageChangeHandler, filteredProductList]);

  const styles =
    "p-4 uppercase text-[14px] font-semibold text-blue-950/85 dark:text-zinc-100 hover:bg-blue-950/10 dark:hover:bg-black";

  return (
    <>
      {showPagination && (
        <div className="flex justify-end mt-10">
          <div className="bg-blue-50 dark:bg-dark-blue rounded-lg uppercase ">
            <button
              onClick={() => onPageHandler("prev")}
              className={`${styles} rounded-s-lg`}>
              Prev
            </button>
            {pages.map((pageCount, index) => (
              <button
                onClick={() => onPageChangeHandler(pageCount)}
                className={`${styles} ${
                  pageCount === pageNumber ? "bg-blue-950/10 dark:bg-black" : ""
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
      )}
    </>
  );
}
