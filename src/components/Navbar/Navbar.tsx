import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import "../../assets/images/surf-logo.png";
import { useData } from "../../Context/DataContext";
import { useEffect, useState } from "react";

const Navbar = ({
  setShowCart,
  showCart,
  setShowMenu,
  showMenu,
}: NavbarProps) => {
  const { cart } = useData();
const [cartQty, setCartQty] = useState<number>();

useEffect(() => {
  
  let cartAmount = 0;
  cart.forEach(item => {
    cartAmount = cartAmount + item.quantity
  })
    setCartQty(cartAmount)
}, [cart]);


  const switchMenu = () => {
      setShowCart((state) => !state);
      setShowMenu(false);

  };
  const switchCart = () => {
      setShowMenu((state) => !state);
      setShowCart(false);
  };

  return (
    <div className="Navbar">
      <div className="logo"></div>
      <ul className="Nav">
        <li className="desktopLink">
          <NavLink to="/" onClick={() => setShowCart(false)}>HOME</NavLink>
        </li>
        <li className="desktopLink">
          <NavLink to="surfproducts" onClick={() => setShowCart(false)}>SURFBOARDS</NavLink>
        </li>
        <li className="desktopLink">
          <NavLink to="kiteproducts" onClick={() => setShowCart(false)}>KITESURF</NavLink>
        </li>
        {/* <li className="desktopLink">
          <NavLink to="wetsuits">WETSUITS</NavLink>
        </li> */}
        <li className="desktopLink">
          <NavLink to="swimwear" onClick={() => setShowCart(false)}>SWIMWEAR</NavLink>
        </li>
        <li className="desktopLink">
          <NavLink className="redFont" to="admin" onClick={() => setShowCart(false)}>
            ADMIN
          </NavLink>
        </li>
        <li className="cartLi">
          <div className="cartLink" onClick={switchMenu}>
            <i className="fa-solid fa-cart-shopping"></i>

            <div
              className={`cartCount ${cart && cart.length > 0 ? "" : "hide"}`}
            >
              {cartQty}
            </div>
          </div>
        </li>
        <li className="dropDown">
          <div onClick={switchCart}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
