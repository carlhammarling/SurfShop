import React, { useState } from "react";
import "./SurfProducts.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useData } from '../../Context/DataContext';

const SurfProducts = () => {

const { surfProducts } = useData();

  return (
    <div className="surfWrapper">
      <div className="surfBanner">
        <h1 className="bannerFont">SURFBOARDS</h1>
      </div>
      <div className="productsOutput">
        {surfProducts &&
          surfProducts.map((item) => (
            <ProductCard
              key={item.id}
              {...item}
            />
          ))}
      </div>
    </div>
  );
};

export default SurfProducts;
