import { NavLink } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  IconButton,
  Badge,
} from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import { useData } from '../../Context/DataContext'
import { useEffect, useState } from 'react'
import surfLogo from '../../assets/images/surf-logo.png'
import { appBarHeights } from '../../theme'

const navLinkStyle = ({ isActive }: { isActive: boolean }) =>
  ({
    color: 'rgb(35, 35, 35)',
    textDecoration: isActive ? 'underline' : 'none',
    fontSize: 24,
    fontFamily: '"Odibee Sans", "Segoe UI", sans-serif',
  }) as const

function Navbar ({
  setShowCart,
  setShowMenu,
  showCart: _showCart,
  showMenu: _showMenu,
}: NavbarProps) {
  const { cart } = useData()
  const [cartQty, setCartQty] = useState<number>(0)

  useEffect(() => {
    let cartAmount = 0
    cart.forEach((item) => {
      cartAmount += item.quantity
    })
    setCartQty(cartAmount)
  }, [cart])

  const openCart = () => {
    setShowCart(state => !state)
    setShowMenu(false)
  }

  const openMenu = () => {
    setShowMenu(state => !state)
    setShowCart(false)
  }

  const closeOverlays = () => {
    setShowCart(false)
    setShowMenu(false)
  }

  return (
    <AppBar
      position='fixed'
      color='inherit'
      elevation={1}
      sx={{
        zIndex: t => t.zIndex.drawer + 1,
        boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.05)',
        height: { xs: appBarHeights.xs, md: appBarHeights.md },
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: '100%',
          minHeight: { xs: appBarHeights.xs, md: appBarHeights.md },
          px: { xs: 2, sm: 4, md: 10 },
          gap: { xs: 2, md: 4 },
          justifyContent: 'flex-start',
        }}
      >
        <Box
          component={NavLink}
          to='/'
          onClick={closeOverlays}
          sx={{
            display: 'block',
            height: { xs: 80, md: 160 },
            width: { xs: 80, md: 160 },
            minWidth: { xs: 80, md: 160 },
            backgroundImage: `url(${surfLogo})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />

        <List
          component='nav'
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            gap: { md: 3, lg: 6 },
            p: 0,
            m: 0,
          }}
        >
          <ListItem
            sx={{
              display: { xs: 'none', md: 'flex' },
              width: 'auto',
              p: 0,
            }}
          >
            <NavLink
              to='/'
              end
              onClick={() => {
                setShowCart(false)
              }}
              style={navLinkStyle}
            >
              HOME
            </NavLink>
          </ListItem>
          <ListItem
            sx={{
              display: { xs: 'none', md: 'flex' },
              width: 'auto',
              p: 0,
            }}
          >
            <NavLink
              to='/surfproducts'
              onClick={() => {
                setShowCart(false)
              }}
              style={navLinkStyle}
            >
              SURFBOARDS
            </NavLink>
          </ListItem>
          <ListItem
            sx={{
              display: { xs: 'none', md: 'flex' },
              width: 'auto',
              p: 0,
            }}
          >
            <NavLink
              to='/kiteproducts'
              onClick={() => {
                setShowCart(false)
              }}
              style={navLinkStyle}
            >
              KITESURF
            </NavLink>
          </ListItem>
          <ListItem
            sx={{
              display: { xs: 'none', md: 'flex' },
              width: 'auto',
              p: 0,
            }}
          >
            <NavLink
              to='/swimwear'
              onClick={() => {
                setShowCart(false)
              }}
              style={navLinkStyle}
            >
              SWIMWEAR
            </NavLink>
          </ListItem>
          <ListItem
            sx={{
              display: { xs: 'none', md: 'flex' },
              width: 'auto',
              p: 0,
            }}
          >
            <NavLink
              to='/admin'
              onClick={() => {
                setShowCart(false)
              }}
              style={({ isActive }) => ({
                ...navLinkStyle({ isActive }),
                color: 'red',
              })}
            >
              ADMIN
            </NavLink>
          </ListItem>

          <ListItem
            sx={{
              ml: 'auto',
              width: 'auto',
              p: 0,
              pr: { md: 4 },
            }}
          >
            <IconButton
              onClick={openCart}
              aria-label='Shopping cart'
              size='large'
              sx={{
                color: 'text.primary',
              }}
            >
              <Badge
                badgeContent={cartQty}
                color='error'
                invisible={!cart || cart.length === 0}
              >
                <ShoppingCartOutlinedIcon
                  fontSize='inherit'
                />
              </Badge>
            </IconButton>
          </ListItem>
          <ListItem
            sx={{
              display: { xs: 'flex', md: 'none' },
              width: 'auto',
              p: 0,
            }}
          >
            <IconButton
              onClick={openMenu}
              aria-label='Open menu'
              size='large'
              sx={{
                color: 'text.primary',
              }}
            >
              <MenuIcon
                fontSize='inherit'
              />
            </IconButton>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
