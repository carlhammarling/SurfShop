import React from 'react'
import { Box, Typography } from '@mui/material'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useData } from '../../Context/DataContext'
import { appBarHeights } from '../../theme'

export default function KiteProducts (): React.JSX.Element {
  const { kiteProducts } = useData()

  return (
    <Box
      sx={{
        pt: { xs: `${appBarHeights.xs}px`, md: `${appBarHeights.md}px` },
      }}
    >
      <Box
        sx={{
          height: { xs: '60vw', sm: '35vw', md: '25vw' },
          backgroundImage:
            'url("https://images.pexels.com/photos/1604869/pexels-photo-1604869.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          component='h1'
          sx={{
            color: 'white',
            fontSize: '3rem',
            px: 4,
            py: 2,
            border: '7px solid white',
            fontFamily: '"Odibee Sans", sans-serif',
          }}
        >
          KITESURF
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          },
          gap: 2,
          m: { xs: 2, sm: 5, md: '5rem 2rem' },
        }}
      >
        {kiteProducts
          && kiteProducts.map(item => (
            <ProductCard
              key={item.id}
              {...item}
            />
          ))}
      </Box>
    </Box>
  )
}
