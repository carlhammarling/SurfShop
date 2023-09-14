import React, { useState } from "react";
import "./KiteProducts.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useData } from '../../Context/DataContext';

const KiteProducts = () => {

const { kiteProducts } = useData();

  return (
    <div className="kiteWrapper">
      <div className="kiteBanner">
        <h1 className="bannerFont">KITESURF</h1>
      </div>
      <div className="productsOutput">
        {kiteProducts &&
          kiteProducts.map((item) => (
            <ProductCard
              key={item.id}
              {...item}
            />
          ))}
      </div>
    </div>
  );
};

export default KiteProducts;
