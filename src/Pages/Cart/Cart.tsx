import React, { useEffect } from "react";
import "./Cart.scss";
import { useData } from "../../Context/DataContext";
import CartItem from "../../components/CartItem/CartItem";

const Cart = ({ setShowCart }: HandleCartProps) => {
  const { cart, setCart } = useData();

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
          {"  "}CART - BIG WAVES SURFING
        </h1>
        <i onClick={() => setShowCart(false)} className="fa-solid fa-xmark"></i>
      </div>
      <div className="CartItemContainer">
        {cart &&
          cart.map((item, index) => <CartItem key={index} item={item} index={index} />)}
      </div>
      <button className="buy">
        PLACE ORDER &nbsp;<i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Cart;
