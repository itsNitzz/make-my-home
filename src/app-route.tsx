/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home";
import { lazy, Suspense } from "react";
import { filterAction } from "./components/FilterForm";

const AboutPage = lazy(() => import("./pages/About"));
const ProductsPage = lazy(() => import("./pages/Products"));
const ProductDetails = lazy(() => import("./components/ProductDetails"));
const CartPage = lazy(() => import("./pages/Cart"));
const fallbackJSX = (
  <p className="text-center text-3xl text-blue-950/20 dark:text-zinc-200 font-semibold">
    Loading...
  </p>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "about",
        element: (
          <Suspense fallback={fallbackJSX}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "products",
        element: (
          <Suspense fallback={fallbackJSX}>
            <ProductsPage />
          </Suspense>
        ),
        action: filterAction,
      },
      {
        path: "products/:id",
        element: (
          <Suspense fallback={fallbackJSX}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={fallbackJSX}>
            <CartPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
