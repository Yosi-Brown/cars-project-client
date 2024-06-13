import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";
import ProductReviews from "./components/ProductReviews";
import ProductsProvider from "./context/CartContextProduct.jsx";
import './App.css';
import Navbar from "./components/section/Navbar";

function Root() {
  return (
    <>
      <Navbar/>
      {/* <div>NAVBAR</div> */}
      <Outlet />
    </>
  );
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="page" element={<ProductPage />} />
        <Route path="Products" element={<Products />} />
        <Route path="reviews" element={<ProductReviews />} />
      </Route>
    )
  );

  return (
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  );
}

export default App;
