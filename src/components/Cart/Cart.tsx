import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { useData } from "../../Context/DataContext";
import CartItem from "../CartItem/CartItem";

const Cart = ({ setShowCart, showCart }: HandleCartProps) => {
  const { cart, setCart } = useData();

  useEffect(() => {
    const getCart: string | null = localStorage.getItem("cart");
    const cartData: CartItem[] = getCart ? JSON.parse(getCart) : [];
    if (cartData) {
      setCart(cartData);
    }
  }, []);

  const [cartTotal, setCartTotal] = useState<number>(0);
  useEffect(() => {
    let totAmount = 0;

    cart.forEach(item => {
      totAmount = totAmount + (item.product.price * item.quantity)
    })
    setCartTotal(totAmount)
  }, [cart]);

  return (
    <div className={`CartWrapper ${showCart ? "" : "hide"}`}>
      <div className="CartHeader">
        <h1>
          <i className="fa-solid fa-cart-shopping"></i>
          {"  "}CART - BIG WAVES SURFING
        </h1>
        <i onClick={() => setShowCart(false)} className="fa-solid fa-xmark"></i>
      </div>
      <div className="CartItemContainer">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              index={index}
              showCart={showCart}
            />
          ))
        ) : (
          <p className="empty">Your cart is empty.</p>
        )}
      </div>
      <div className="cartBottom">
        <button className="buy">
          PLACE ORDER &nbsp;<i className="fa-solid fa-arrow-right"></i>
        </button>
        <div>
        <h3>Total:</h3>
        <h3><span className="price">{cartTotal} EUR</span></h3>

        </div>
      </div>
    </div>
  );
};

export default Cart;
