import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Cart from '../../components/Cart/Cart'
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu'

function RootLayout () {
  const [showCart, setShowCart] = useState<boolean>(false)
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <Box
      className='site'
      sx={{
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      <Navbar
        setShowCart={setShowCart}
        showCart={showCart}
        setShowMenu={setShowMenu}
        showMenu={showMenu}
      />
      <Outlet />
      <Cart
        setShowCart={setShowCart}
        showCart={showCart}
      />
      <DropDownMenu
        setShowMenu={setShowMenu}
        showMenu={showMenu}
      />
      <Footer />
    </Box>
  )
}

export default RootLayout
