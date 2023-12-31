import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SurfProducts from "./Pages/SurfProducts/SurfProducts";
import RootLayout from "./layouts/RootLayout/RootLayout";
import KiteProducts from "./Pages/KiteProducts/KiteProducts";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Admin from "./Pages/Admin/Admin";
import UnderConstruction from "./Pages/UnderConstruction/UnderConstruction";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/surfproducts" element={<SurfProducts />} />
          <Route path="/surfproducts/:id" element={<ProductDetails />} />
          <Route path="/kiteproducts" element={<KiteProducts /> } />
          <Route path="/kiteproducts/:id" element={<ProductDetails />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<UnderConstruction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
