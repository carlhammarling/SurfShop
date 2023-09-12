import React, { useState } from "react";
import "./Admin.scss";
import { useData } from "../../Context/DataContext";

const Admin = () => {
  const { setSurfProducts, setKiteProducts } = useData();

  const [formData, setFormData] = useState<AddProductProps>({
    category: "surfproducts",
    productName: "",
    imgURL: "",
    brand: "",
    description: "",
    price: 0,
    length: 0,
    boardType: "Soft",
    kiteType: "Kite",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = (e: any) => {
    e.preventDefault();

    if (formData.category === "surfproducts") {
      const newSurfProduct: Surfboard = {
        id: 1,
        category: formData.category,
        productName: formData.productName,
        imgURL: formData.imgURL,
        brand: formData.brand,
        description: formData.description,
        price: formData.price,
        length: formData.length,
        boardType: formData.boardType,
      };

      setSurfProducts((prevProd) => [...prevProd, newSurfProduct]);
    }
    if (formData.category === "kiteproducts") {
      const newKiteProduct: Kite = {
        id: 1,
        category: formData.category,
        productName: formData.productName,
        imgURL: formData.imgURL,
        brand: formData.brand,
        description: formData.description,
        price: formData.price,
        kiteType: formData.kiteType,
      };

      setKiteProducts((prevProd) => [...prevProd, newKiteProduct]);
    }
  };

  return (
    <div className="adminWrapper">
      <div className="adminHeader">
        <h1>Admin</h1>
        <p>
          In this section you will be able to add products to the store. Since
          this site is online, the changes will only be saved on localstorage
          for you to watch.
        </p>
        <form onSubmit={handelSubmit}>
          <select
            value={formData.category}
            onChange={handleChange}
            name="category"
            placeholder="Category"
          >
            <option value="surfproducts">Surf product</option>
            <option value="kiteproducts">Kite product</option>
          </select>
          <input
            type="text"
            onChange={handleChange}
            name="productName"
            value={formData.productName}
            placeholder="Product name"
          />
          <input
            type="text"
            onChange={handleChange}
            name="brand"
            value={formData.brand}
            placeholder="Brand"
          />
          <input
            type="text"
            onChange={handleChange}
            name="imgURL"
            value={formData.imgURL}
            placeholder="Image URL"
          />
          <input
            type="text"
            onChange={handleChange}
            name="description"
            value={formData.description}
            placeholder="Description"
          />
          <input
            type="number"
            onChange={handleChange}
            name="price"
            value={formData.price}
            placeholder="Price"
          />
          {formData && formData.category === "surfproducts" && (
            <>
              <input
                type="number"
                onChange={handleChange}
                name="length"
                value={formData.length}
                placeholder="Length"
              />
              <select
                name="boardType"
                onChange={handleChange}
                defaultValue="Board type"
              >
                <option value="Soft">Soft board</option>
                <option value="hard">Hard board</option>
              </select>
            </>
          )}
          {formData && formData.category === "kiteproducts" && (
            <select name="kiteType" id="" defaultValue="Board type">
              <option value="Kiteboard">Kiteboard</option>
              <option value="Kite">Kite</option>
            </select>
          )}
          <button>ADD PRODUCT</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
