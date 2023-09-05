import React, { useState } from "react";
import "./KiteProducts.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useData } from '../../Context/DataContext';

const KiteProducts = () => {

const data = useData();

if(!data) {
  //Checkar om det finns data, vi måste returnera nåt här, annars kommer inget ut på sidan.
  return <div>Loading</div>
}

//Nu när vi vet att vi har data så kan vi extracta den.
const { kiteProducts } = data;

  return (
    <div className="kiteWrapper">
      <div className="kiteBanner">
        <h1>KITESURF</h1>
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
