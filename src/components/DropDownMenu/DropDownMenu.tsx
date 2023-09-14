import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom'
import "./DropDownMenu.scss";


const DropDownMenu = ({ setShowMenu, showMenu }: HandleMenuProps) => {


  return (
    <div className={`MenuWrapper ${showMenu ? "" : "hide"}`}>

      <div className="MenuItemContainer">
      <ul className="Nav">
        <li className="desktopLink">
          <NavLink to="/" onClick={() => setShowMenu(false)}>HOME</NavLink>
          <i onClick={() => setShowMenu(false)} className="fa-solid fa-xmark"></i>

        </li>
        <li className="desktopLink">
          <NavLink to="surfproducts" onClick={() => setShowMenu(false)}>SURFBOARDS</NavLink>
        </li>
        <li className="desktopLink">
          <NavLink to="kiteproducts" onClick={() => setShowMenu(false)}>KITESURF</NavLink>
        </li>
        <li className="desktopLink">
          <NavLink to="wetsuits" onClick={() => setShowMenu(false)}>WETSUITS</NavLink>
        </li>
        <li className="desktopLink">
          <NavLink to="swimwear" onClick={() => setShowMenu(false)}>SWIMWEAR</NavLink>
        </li>
        <li className="desktopLink">
          <NavLink className="redFont" to="admin" onClick={() => setShowMenu(false)}>
            ADMIN
          </NavLink>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownMenu;
