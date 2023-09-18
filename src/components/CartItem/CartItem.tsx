import React, { useEffect, useState } from "react";
import "./CartItem.scss";
import { useData } from "../../Context/DataContext";

const CartItem = ({ item, index, showCart }: CartItemProps) => {
  const { deleteCartItem, incrementCartItem, decrementCartItem } = useData();

  const [showEdit, setShowEdit] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowEdit(false)
    }, 500)
  }, [showCart])

  return (
    <div className="CartItem" key={index}>
      <div
        className="productImgWrapper"
        style={{ backgroundImage: `url(${item.product.imgURL})` }}
      ></div>
      <div className="itemInfo">
        {item.product.category === "surfproducts" && (
          <h2 className="description">
            {item.product.brand.toUpperCase()}{" "}
            {item.product.productName.toUpperCase()} {item.product.length}
            FT {item.product.boardType.toUpperCase()}BOARD
          </h2>
        )}
        {item.product.category === "kiteproducts" && (
          <h2 className="description">
            {item.product.brand.toUpperCase()}{" "}
            {item.product.productName.toUpperCase()}{" "}
            {item.product.kiteType.toUpperCase()}
          </h2>
        )}
        {showEdit ? (
          <div className="editQty">
            <p className="extraInfo">Edit quantity:</p>
            <div className="qtySelect">
            <div className="qty" onClick={() => decrementCartItem(index)}>
                <i className="fa-solid fa-minus"></i>
              </div>
              
              <div>
                <p>{item.quantity}</p>
              </div>
              <div className="qty" onClick={() => incrementCartItem(index)}>
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
        ) : (
          <div className="extraInfoDiv">
            <p className="extraInfo">
              Quantity: <span>{item.quantity}</span>
            </p>
            {item.product.category === "surfproducts" && (
              <p className="extraInfo">
                Length: <span>{item.product.length}ft</span>
              </p>
            )}
            <p className="extraInfo">
              Price:{" "}
              <span className="price">
                {item.product.price * item.quantity} EUR
              </span>
            </p>
          </div>
        )}
      </div>
      <div className="itemActions">
        <i
          onClick={() => deleteCartItem(index)}
          className="fa-solid fa-xmark"
        ></i>
        <i
          onClick={() => setShowEdit((state) => !state)}
          className="fa-solid fa-pen fa-xs"
        ></i>
      </div>
    </div>
  );
};

export default CartItem;
