import React, { useEffect } from "react";
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

  useEffect(() => {}, [cart]);

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
        {cart.length >0 ?
          cart.map((item, index) => (
            <CartItem key={index} item={item} index={index} showCart={showCart} />
          )) : (<p className="empty">Your cart is empty.</p>)}
      </div>
      <button className="buy">
        PLACE ORDER &nbsp;<i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Cart;
