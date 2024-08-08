import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ProductsPage from "./pages/Products";
import ProductDetails from "./components/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:id", element: <ProductDetails /> },
    ],
  },
]);

export default router;
