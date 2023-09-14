import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Cart from "../../components/Cart/Cart";
import DropDownMenu from "../../components/DropDownMenu/DropDownMenu";

const RootLayout = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="site">
      <Navbar {...{ setShowCart, showCart, setShowMenu, showMenu }} />
      <Outlet />
      <Cart {...{ setShowCart, showCart, setShowMenu, showMenu }} />
      <DropDownMenu {...{ setShowCart, showCart, setShowMenu, showMenu }} />
      <Footer />
    </div>
  );
};

export default RootLayout;
