import React, { useState } from "react";
import "./Admin.scss";
import { useData } from "../../Context/DataContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { surfProducts, setSurfProducts, kiteProducts, setKiteProducts } =
    useData();

    const navigate = useNavigate()

  const [formData, setFormData] = useState<AddProductProps>({
    category: "",
    productName: "",
    imgURL: "",
    brand: "",
    description: "",
    price: "",
    boardLength: "",
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

  const handleNumberChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const input = e.currentTarget;
    const inputValue = input.value;

    const sanitizedValue = inputValue.replace(/[^0-9.]/g, "");

    input.value = sanitizedValue;

    setFormData({
      ...formData,
      [input.name]: sanitizedValue,
    });
  };

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.category === "surfproducts") {
      const newSurfProduct: Surfboard = {
        //Gets the last products id and adds 1
        id: surfProducts[surfProducts.length - 1].id + 1,
        category: formData.category,
        productName: formData.productName,
        imgURL: formData.imgURL,
        brand: formData.brand,
        description: formData.description,
        price: parseFloat(formData.price),
        length: parseFloat(formData.boardLength),
        boardType: formData.boardType,
      };

      const isNotEmpty: boolean = Object.values(newSurfProduct).every(
        (value) => value !== ""
      );
      if (isNotEmpty) {
        setSurfProducts((prevProd) => [...prevProd, newSurfProduct]);

        navigate("/surfproducts")
      } else {
        console.log("You have to fill in all the forms");
      }
      return;
    }

    if (formData.category === "kiteproducts") {
      const newKiteProduct: Kite = {
        id: kiteProducts[kiteProducts.length - 1].id + 1,
        category: formData.category,
        productName: formData.productName,
        imgURL: formData.imgURL,
        brand: formData.brand,
        description: formData.description,
        price: parseFloat(formData.price),
        kiteType: formData.kiteType,
      };

      const isNotEmpty: boolean = Object.values(newKiteProduct).every(
        (value) => value !== ""
      );
      if (isNotEmpty) {
        setKiteProducts((prevProd) => [...prevProd, newKiteProduct]);
        navigate("/kiteproducts")
      } else {
        console.log("You have to fill in all the forms");
      }
      return;
    } else {
      console.log("Can not find a category with that name.");
    }
  };

  return (
    <div className="adminWrapper">
      <div className="adminContent">

      <div className="adminLeft">
        <div className="adminInfo">
          <h1>Admin</h1>
          <div className="description">
            <p>
              In this section you will be able to add products to the store.
            </p>
            <p>
              Since this site is online, the changes will only be saved on
              localstorage for you to watch.
            </p>
          </div>
          <p className="extraInfo">
            * The rest of the site is connected to Firestore, this can easily be
            done with this feauture as well so that the changes go online.{" "}
          </p>
        </div>
      </div>
      <div className="adminRight">
      <form onSubmit={handelSubmit}>
        <select
          value={formData.category}
          onChange={handleChange}
          name="category"
        >
          <option value="" disabled>
            Select a product category
          </option>
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
          type="string"
          onChange={handleNumberChange}
          name="price"
          value={formData.price}
          placeholder="Price (EUR)"
        />
        {formData && formData.category === "surfproducts" && (
          <>
            <input
              type="string"
              onChange={handleNumberChange}
              name="boardLength"
              value={formData.boardLength}
              placeholder="Length (in feet)"
            />
            <select
              value={formData.boardType}
              name="boardType"
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a type
              </option>
              <option value="Soft">Softboard</option>
              <option value="hard">Hardboard</option>
            </select>
          </>
        )}
        {formData && formData.category === "kiteproducts" && (
          <select
            value={formData.kiteType}
            name="kiteType"
            onChange={handleChange}
          >
            <option value="" disabled>
              Select a type
            </option>
            <option value="Kiteboard">Kiteboard</option>
            <option value="Kite">Kite</option>
          </select>
        )}
        <button>
          ADD PRODUCT &nbsp;<i className="fa-solid fa-arrow-right"></i>
        </button>
      </form>

      </div>
      </div>
    </div>
  );
};

export default Admin;
