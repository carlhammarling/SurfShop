import { Link } from 'react-router-dom'
import {
  Card,
  CardMedia,
  Box,
} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { primaryGradient } from '../../theme'

export default function CategoryCard ({
  catName,
  imgURL,
  link,
}: Category): React.ReactElement {
  return (
    <Card
      component={Link}
      to={link}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        textDecoration: 'none',
        color: 'inherit',
        boxShadow: 2,
        '&:hover .cat-img': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardMedia
        className='cat-img'
        component='div'
        sx={{
          height: { xs: 230, sm: 290 },
          backgroundImage: `url(${imgURL})`,
          backgroundSize: 'cover',
          transition: 'transform 0.4s ease',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          left: 16,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          color: 'white',
          height: 45,
          minWidth: 190,
          pl: 2,
          pr: 1,
          fontSize: 24,
          fontFamily: '"Odibee Sans", sans-serif',
          background: primaryGradient,
          backgroundSize: '200%',
          backgroundPosition: '30% center',
          transition: 'background-position 0.1s ease',
          '&:hover': {
            backgroundPosition: '10% center',
          },
        }}
      >
        {catName.toUpperCase()}
        <ArrowForwardIcon
          sx={{
            color: 'white',
            fontSize: 20,
          }}
        />
      </Box>
    </Card>
  )
}
