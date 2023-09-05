import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import SurfProducts from "./Pages/SurfProducts/SurfProducts";
import RootLayout from "./layouts/RootLayout/RootLayout";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/surfproducts" element={<SurfProducts />} />
          <Route path="/surfproducts/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
