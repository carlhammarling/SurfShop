import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Cart from '../../Pages/Cart/Cart'

const RootLayout = () => {

  const [showCart, setShowCart] = useState(false)
  return (
    <div className='site'>
        <Navbar setShowCart={ setShowCart }/>
        <Outlet />
        <Cart setShowCart={ setShowCart } showCart={ showCart }/>
        <Footer />
    </div>
  )
}

export default RootLayout