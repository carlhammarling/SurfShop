import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import "../../assets/images/surf-logo.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo"></div>
      <ul className="Nav">
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="surfproducts">SURFBOARDS</NavLink>
        </li>
        <li>
          <NavLink to="kitesurf">KITESURF</NavLink>
        </li>
        <li>
          <NavLink to="wetsuits">WETSUITS</NavLink>
        </li>
        <li>
          <NavLink to="swimwear">SWIMWEAR</NavLink>
        </li>
        <li>
          <NavLink className="redFont" to="outlet">
            OUTLET
          </NavLink>
        </li>
        <li>
          <NavLink to="outlet">
          <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
        </li>
      </ul>
      
    </div>
  );
};

export default Navbar;
