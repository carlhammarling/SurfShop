import React, { useState } from "react";
import "./SurfProducts.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useData } from '../../Context/DataContext';

const SurfProducts = () => {

const data = useData();

if(!data) {
  //Checkar om det finns data, vi måste returnera nåt här, annars kommer inget ut på sidan.
  return <div>Loading</div>
}

//Nu när vi vet att vi har data så kan vi extracta den.
const { surfProducts } = data;

  return (
    <div className="surfWrapper">
      <div className="surfBanner">
        <h1>SURFBOARDS</h1>
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
