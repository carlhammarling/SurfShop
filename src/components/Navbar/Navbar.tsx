import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import "../../assets/images/surf-logo.png";
import { useData } from "../../Context/DataContext";

const Navbar = ({
  setShowCart,
  showCart,
  setShowMenu,
  showMenu,
}: NavbarProps) => {
  const { cart } = useData();

  const switchMenu = () => {
      setShowCart((state) => !state);
      setShowMenu(false);

  };
  const switchCart= () => {
      setShowMenu((state) => !state);
      setShowCart(false);
  };

  return (
    <div className="Navbar">
      <div className="logo"></div>
      <ul className="Nav">
        <li className="desktopLink">
          <NavLink to="/">HOME</NavLink>
        </li>
        <li className="desktopLink">
          <NavLink to="surfproducts">SURFBOARDS</NavLink>
        </li>
        <li className="desktopLink">
          <NavLink to="kiteproducts">KITESURF</NavLink>
        </li>
        {/* <li className="desktopLink">
          <NavLink to="wetsuits">WETSUITS</NavLink>
        </li> */}
        <li className="desktopLink">
          <NavLink to="swimwear">SWIMWEAR</NavLink>
        </li>
        <li className="desktopLink">
          <NavLink className="redFont" to="admin">
            ADMIN
          </NavLink>
        </li>
        <li className="cartLi">
          <div className="cartLink" onClick={switchMenu}>
            <i className="fa-solid fa-cart-shopping"></i>

            <div
              className={`cartCount ${cart && cart.length > 0 ? "" : "hide"}`}
            >
              {cart.length}
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
