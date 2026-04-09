import React, { useEffect, useState } from 'react'
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useData } from '../../Context/DataContext'
import CartItem from '../CartItem/CartItem'
import { appBarHeights, primaryGradient } from '../../theme'

export default function Cart ({
  setShowCart,
  showCart,
}: HandleCartProps): React.JSX.Element {
  const { cart, setCart } = useData()
  const [cartTotal, setCartTotal] = useState<number>(0)

  useEffect(() => {
    const raw: string | null = localStorage.getItem('cart')
    const cartData: CartItem[] = raw !== null
      ? (JSON.parse(raw) as CartItem[])
      : []
    setCart(cartData)
  }, [])

  useEffect(() => {
    let totAmount = 0
    cart.forEach((item) => {
      totAmount += item.product.price * item.quantity
    })
    setCartTotal(totAmount)
  }, [cart])

  function handleClose (): void {
    if (!showCart) return
    setShowCart(false)
  }

  return (
    <Drawer
      anchor='right'
      open={showCart}
      onClose={handleClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        zIndex: t => t.zIndex.drawer,
        '& .MuiDrawer-paper': {
          top: { xs: appBarHeights.xs, md: appBarHeights.md },
          height: {
            xs: `calc(100dvh - ${appBarHeights.xs}px)`,
            md: `calc(100dvh - ${appBarHeights.md}px)`,
          },
          width: { xs: '100%', sm: 500 },
          maxWidth: '100%',
          boxShadow: '-20px 10px 50px 0px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          pb: 4,
          mx: 4,
          mt: 4,
          borderBottom: 2,
          borderColor: 'grey.300',
        }}
      >
        <Typography
          variant='h6'
          component='h1'
          sx={{
            fontSize: 18,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <ShoppingCartOutlinedIcon
            fontSize='small'
          />
          CART - BIG WAVES SURFING
        </Typography>
        <IconButton
          onClick={handleClose}
          aria-label='Close cart'
          size='small'
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          flex: 1,
          overflow: 'auto',
          mx: 4,
          borderBottom: 2,
          borderColor: 'grey.300',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {cart.length > 0
          ? cart.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                index={index}
                showCart={showCart}
              />
            ))
          : (
              <Typography
                sx={{
                  mt: 4,
                  color: 'text.secondary',
                }}
              >
                Your cart is empty.
              </Typography>
            )}
      </Box>

      <Stack
        direction='row'
        spacing={4}
        sx={{
          m: 4,
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Button
          variant='contained'
          endIcon={<ArrowForwardIcon />}
          sx={{
            color: 'white',
            px: 2,
            py: 1,
            background: primaryGradient,
            backgroundSize: '200%',
            backgroundPosition: '30% center',
            '&:hover': {
              background: primaryGradient,
              backgroundSize: '200%',
              backgroundPosition: '10% center',
              opacity: 0.95,
            },
          }}
        >
          PLACE ORDER
        </Button>
        <Box>
          <Typography
            variant='h6'
            sx={{
              fontWeight: 600,
              color: 'text.secondary',
            }}
          >
            Total:
          </Typography>
          <Typography
            variant='h6'
            sx={{
              fontWeight: 600,
              color: 'text.secondary',
            }}
          >
            <Box
              component='span'
              sx={{
                color: 'primary.main',
                fontWeight: 800,
              }}
            >
              {cartTotal} EUR
            </Box>
          </Typography>
        </Box>
      </Stack>
    </Drawer>
  )
}
