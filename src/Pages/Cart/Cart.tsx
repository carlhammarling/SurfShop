import React, { useEffect } from "react";
import "./Cart.scss";
import { useData } from "../../Context/DataContext";

const Cart = () => {
  const { cart, setCart, surfProducts, kiteProducts } = useData();

  //Är den här nödvändig? Den ser ju till att det uppdateras innan ,
  //men samtidigt ska det ha gjorts innan. Men om jag tar bort saker här så vill jaju att den updateras också
  useEffect(() => {
    const getCart = localStorage.getItem("cart");
    let cartData: CartItem[] = getCart ? JSON.parse(getCart) : [];
    if (cartData) {
      setCart(cartData);
    }
  }, []);

  useEffect(() => {}, [cart]);

  return (
    <div className="CartWrapper">
      <div className="CartHeader">

      <h1>
        <i className="fa-solid fa-cart-shopping"></i>
        {"   "}CART - BIG WAVES SURFING
      </h1>
      <i className="fa-solid fa-xmark"></i>
      </div>
      <div className="CartItemContainer">
        {cart &&
          cart.map((item, index) => (
            <div className="CartItem" key={index}>
              <div
                className="productImgWrapper"
                style={{ backgroundImage: `url(${item.product.imgURL})` }}
              ></div>
              <div>
                {item.product.category === "surfproducts" && (
                  <h2 className="description">
                    {item.product.brand.toUpperCase()}{" "}
                    {item.product.productName.toUpperCase()}{" "}
                    {item.product.length}
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

                <p className="extraInfo">
                  Quantity: <span>{item.quantity}</span>
                </p>
                {item.product.category === "surfproducts" && (
                  <p className="extraInfo">
                    Length: <span>{item.product.length}ft</span>
                  </p>
                )}
                <p className="extraInfo">
                  Price: <span className="price">{item.product.price} EUR</span>
                </p>
              </div>
            </div>
          ))}
      </div>
      <button className="buy">BUY NOW</button>
    </div>
  );
};

export default Cart;
