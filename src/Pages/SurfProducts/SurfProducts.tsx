import React, { useState } from "react";
import "./SurfProducts.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
const SurfProducts = () => {
  const [surfProducts, setSurfProducts] = useState<Surfboard[]>([
    {
      id: 1,
      category: "surfproducts",
      productName: "Surfboard 1",
      imgURL: "https://contents.mediadecathlon.com/p1740854/k$9a0e806decb46843fe7e81d25f3660d6/sq/tabla-surf-evolutiva-espuma-olaian-900-7-pack-tabla-quillas.jpg?f=3000x3000",
      brand: "Rip Curl",
      description: "string",
      price: 550,
      length: 7,
      boardType: "Soft"
    },
    {
      id: 2,
      category: "surfproducts",

      productName: "Surfboard 1",
      imgURL: "https://contents.mediadecathlon.com/p1758427/k$e9f74f04e6e4f4c12547c66b3f70cd83/sq/tabla-surf-malibu-espuma-olaian-500-78-pack-tabla-leash-quillas.jpg?format=auto&f=800x0",
      brand: "Rip Curl",
      description: "string",
      price: 550,
      length: 7,
      boardType: "Soft"
    },
    {
      id: 3,
      category: "surfproducts",
      productName: "Surfboard 1",
      imgURL: "https://contents.mediadecathlon.com/p1740730/k$ff9b79b5e73cdaca7387d285a8955a92/sq/tabla-surf-6-espuma-olaian-500-pack-tabla-leash-quillas.jpg?format=auto&f=800x0",
      brand: "Rip Curl",
      description: "string",
      price: 550,
      length: 7,
      boardType: "Soft"
    },
    {
      id: 4,
      category: "surfproducts",
      productName: "Surfboard 1",
      imgURL: "https://contents.mediadecathlon.com/p2258974/k$63b33029131b7ca5b0d2f74993822583/sq/tabla-surf-malibu-espuma-olaian-500-86-pack-tabla-leash-quillas.jpg?format=auto&f=800x0",
      brand: "Rip Curl",
      description: "string",
      price: 550,
      length: 7,
      boardType: "Soft"
    },
    {
      id: 5,
      category: "surfproducts",
      productName: "Surfboard 1",
      imgURL: "https://contents.mediadecathlon.com/m13224935/k$9f22803ab9ef564f39d82756a6fa0c2d/sq/tabla-surf-longboard-aqss-soulstice-paulownia-xl-96.jpg?format=auto&f=800x0",
      brand: "Rip Curl",
      description: "string",
      price: 550,
      length: 7,
      boardType: "Hard"
    },
    {
      id: 5,
      category: "surfproducts",
      productName: "Surfboard 1",
      imgURL: "https://contents.mediadecathlon.com/m13224983/k$dfc77d712b46f34ffc4aaac38d78242e/sq/tabla-surf-iniciacion-aqss-flying-fish-clearskin-610.jpg?format=auto&f=800x0",
      brand: "Rip Curl",
      description: "string",
      price: 550,
      length: 7,
      boardType: "Hard"
    },
  ]);
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
