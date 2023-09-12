import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import "../../assets/images/surf-logo.png";
import { useData } from "../../Context/DataContext";

const Navbar = ({ setShowCart }: HandleCartProps) => {
  
  const { cart } = useData();

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
          <NavLink to="kiteproducts">KITESURF</NavLink>
        </li>
        <li>
          <NavLink to="wetsuits">WETSUITS</NavLink>
        </li>
        <li>
          <NavLink to="swimwear">SWIMWEAR</NavLink>
        </li>
        <li>
          <NavLink className="redFont" to="admin">
            ADMIN
          </NavLink>
        </li>
        <li>
          <div
            className="cartLink"
            onClick={() => setShowCart((state) => !state)}
          >
            <i className="fa-solid fa-cart-shopping"></i>
            
              <div className={`cartCount ${cart && cart.length > 0 ? '' : 'hide'}`}>{cart.length}</div>
            

          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
