import React, { useEffect, useState } from 'react'
import { useData } from '../../Context/DataContext'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Typography,
  Button,
  Stack,
  Rating,
  CircularProgress,
} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { appBarHeights, primaryGradient } from '../../theme'

function ProductDetails () {
  const navigate = useNavigate()
  const searchProps: string[] = window.location.pathname.split('/')
  const productCategory: string = searchProps[1]
  const index: number = parseInt(searchProps[2], 10) - 1

  const data = useData()
  const { addToCart } = useData()
  const [product, setProduct] = useState<AllProduct | undefined>(undefined)

  useEffect(() => {
    if (data && productCategory === 'surfproducts') {
      setProduct(data.surfProducts[index])
    }
    if (data && productCategory === 'kiteproducts') {
      setProduct(data.kiteProducts[index])
    }
  }, [data, productCategory, index])

  if (!data) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pt: 20,
        }}
      >
        <CircularProgress />
      </Box>
    )
  }

  return (
    <>
      {product && (
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          sx={{
            pt: { xs: `${appBarHeights.xs + 20}px`, md: `${appBarHeights.md + 20}px` },
            px: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              flex: 1.5,
              minWidth: 0,
            }}
          >
            <Box
              sx={{
                height: { xs: '100vw', md: 600 },
                backgroundImage: `url(${product.imgURL})`,
                backgroundSize: 'contain',
                backgroundPosition: { xs: 'center', md: 'right center' },
                backgroundRepeat: 'no-repeat',
                mb: 2,
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              mt: { xs: 2, md: 1 },
              pr: { md: '15%', lg: '30%' },
            }}
          >
            <Typography
              variant='h4'
              component='h1'
              sx={{
                color: 'text.primary',
                mb: 4,
                fontWeight: 600,
              }}
            >
              {product.brand.toUpperCase()}
            </Typography>

            {product.category === 'surfproducts' && (
              <Typography
                sx={{
                  color: 'text.primary',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                {product.productName.toUpperCase()} {product.length}FT {product.boardType.toUpperCase()}BOARD
              </Typography>
            )}
            {product.category === 'kiteproducts' && (
              <Typography
                sx={{
                  color: 'text.primary',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                {product.productName.toUpperCase()} {product.kiteType.toUpperCase()}
              </Typography>
            )}

            <Typography
              variant='body2'
              sx={{
                color: 'text.secondary',
                fontSize: 13,
                mb: 3,
              }}
            >
              Product identification number: {product.id}
            </Typography>

            <Box
              sx={{
                py: 2,
                borderTop: 1,
                borderBottom: 1,
                borderColor: 'divider',
              }}
            >
              <Rating
                value={5}
                readOnly
                sx={{
                  color: 'secondary.main',
                }}
              />
            </Box>

            <Box
              sx={{
                py: 3,
                borderBottom: 1,
                borderColor: 'divider',
              }}
            >
              <Typography
                sx={{
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: 'primary.main',
                }}
              >
                {product.price} EUR
              </Typography>
              <Typography
                variant='body2'
                sx={{
                  color: 'text.secondary',
                  fontSize: 13,
                }}
              >
                incl. IVA
              </Typography>
              <Typography
                variant='body2'
                sx={{
                  color: 'text.secondary',
                  fontSize: 13,
                }}
              >
                excl. devlivery
              </Typography>
            </Box>

            <Stack
              spacing={2}
              sx={{
                mt: 3,
              }}
            >
              <Button
                variant='contained'
                endIcon={<ArrowForwardIcon />}
                onClick={() => {
                  addToCart(product.category, product.id)
                }}
                sx={{
                  color: 'white',
                  maxWidth: 220,
                  justifyContent: 'flex-start',
                  pl: 2,
                  background: primaryGradient,
                  backgroundSize: '200%',
                  backgroundPosition: '30% center',
                  fontFamily: '"Odibee Sans", sans-serif',
                  fontSize: 24,
                  height: 45,
                  borderRadius: 0,
                  '&:hover': {
                    background: primaryGradient,
                    backgroundSize: '200%',
                    backgroundPosition: '10% center',
                    opacity: 0.95,
                  },
                }}
              >
                BUY NOW
              </Button>
              <Button
                variant='outlined'
                startIcon={<ArrowBackIcon />}
                onClick={() => {
                  navigate(-1)
                }}
                sx={{
                  color: 'text.primary',
                  borderColor: 'text.primary',
                  maxWidth: 220,
                  justifyContent: 'flex-start',
                  pl: 2,
                  fontFamily: '"Odibee Sans", sans-serif',
                  fontSize: 24,
                  height: 45,
                  borderRadius: 0,
                  '&:hover': {
                    borderColor: 'text.primary',
                    opacity: 0.8,
                  },
                }}
              >
                GO BACK
              </Button>
            </Stack>
          </Box>
        </Stack>
      )}
    </>
  )
}

export default ProductDetails
