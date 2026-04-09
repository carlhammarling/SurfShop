import { Link } from 'react-router-dom'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from '@mui/material'

function ProductCard (props: AllProduct) {
  const description =
    props.category === 'surfproducts'
      ? `${props.productName} ${props.length}ft ${props.boardType.toLowerCase()}board.`
      : `${props.productName} ${props.kiteType.toLowerCase()}.`

  return (
    <Card
      component={Link}
      to={`/${props.category}/${props.id}`}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        color: 'inherit',
        boxShadow: 1,
        '&:hover': {
          '& .product-image': {
            transform: 'scale(1)',
          },
          '& .view-more': {
            opacity: 1,
          },
        },
      }}
    >
      <CardMedia
        className='product-image'
        component='div'
        sx={{
          height: { xs: '80vw', sm: '40vw', md: '26vw', lg: '23vw' },
          backgroundImage: `url(${props.imgURL})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'scale(0.96)',
          transition: 'transform 0.4s ease',
        }}
      />
      <CardContent
        sx={{
          textAlign: 'center',
          pt: 2,
        }}
      >
        <Typography
          variant='h6'
          component='h2'
          sx={{
            fontSize: '1.2rem',
            color: 'text.primary',
            mb: 0.5,
          }}
        >
          {props.brand.toUpperCase()}
        </Typography>
        <Typography
          variant='body2'
          sx={{
            color: 'grey.700',
          }}
        >
          {description}
        </Typography>
        <Typography
          sx={{
            mt: 2,
            fontSize: '1rem',
            fontWeight: 800,
            color: 'primary.main',
          }}
        >
          {props.price} EUR
        </Typography>
      </CardContent>
      <Box
        className='view-more'
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          opacity: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1rem',
          height: 35,
          width: 100,
          pl: 2,
          transition: 'opacity 0.3s ease',
          background: 'linear-gradient(140deg, rgba(0,102,191,1) 0%, rgba(0,143,191,1) 100%)',
          pointerEvents: 'none',
        }}
      >
        VIEW MORE
      </Box>
    </Card>
  )
}

export default ProductCard
