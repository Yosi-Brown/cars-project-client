import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import ProductCard from "./components/ProductCard";
import ProductPage from "./components/ProductPage";
import ProductReviews from "./components/ProductReviews";
import ProductsProvider from "./context/CartContextProduct.jsx";
import './App.css';

function Root() {
  return (
    <div>
      {/* <div>NAVBAR</div> */}
      <Outlet />
    </div>
  );
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="page" element={<ProductPage />} />
        <Route path="card" element={<ProductCard />} />
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
