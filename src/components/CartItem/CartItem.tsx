import React, { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  IconButton,
  Stack,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import EditIcon from '@mui/icons-material/Edit'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { useData } from '../../Context/DataContext'
import { primaryGradient } from '../../theme'

export default function CartItem ({
  item,
  index,
  showCart,
}: CartItemProps): React.JSX.Element {
  const { deleteCartItem, incrementCartItem, decrementCartItem } = useData()
  const [showEdit, setShowEdit] = useState<boolean>(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setShowEdit(false)
    }, 500)
    return () => {
      clearTimeout(t)
    }
  }, [showCart])

  const title =
    item.product.category === 'surfproducts'
      ? `${item.product.brand.toUpperCase()} ${item.product.productName.toUpperCase()} ${item.product.length} FT ${item.product.boardType.toUpperCase()}BOARD`
      : `${item.product.brand.toUpperCase()} ${item.product.productName.toUpperCase()} ${item.product.kiteType.toUpperCase()}`

  return (
    <Stack
      direction='row'
      spacing={2}
      sx={{
        py: 4,
        borderBottom: 1,
        borderColor: 'divider',
        alignItems: 'flex-start',
      }}
    >
      <Box
        sx={{
          height: 100,
          width: 100,
          flexShrink: 0,
          backgroundImage: `url(${item.product.imgURL})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Box
        sx={{
          flex: 2,
          minWidth: 0,
        }}
      >
        <Typography
          variant='subtitle1'
          sx={{
            color: 'text.primary',
            fontSize: 16,
            mb: 2,
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
        {showEdit
          ? (
              <Box>
                <Typography
                  variant='body2'
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 600,
                    fontSize: 13,
                  }}
                >
                  Edit quantity:
                </Typography>
                <Stack
                  direction='row'
                  spacing={1}
                  sx={{
                    mt: 1,
                    alignItems: 'center',
                  }}
                >
                  <IconButton
                    size='small'
                    onClick={() => {
                      decrementCartItem(index)
                    }}
                    sx={{
                      width: 30,
                      height: 30,
                      bgcolor: primaryGradient,
                      background: primaryGradient,
                      color: 'white',
                      '&:hover': {
                        opacity: 0.9,
                        bgcolor: 'primary.main',
                      },
                    }}
                  >
                    <RemoveIcon
                      sx={{
                        fontSize: 16,
                      }}
                    />
                  </IconButton>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      minWidth: 32,
                      textAlign: 'center',
                    }}
                  >
                    {item.quantity}
                  </Typography>
                  <IconButton
                    size='small'
                    onClick={() => {
                      incrementCartItem(index)
                    }}
                    sx={{
                      width: 30,
                      height: 30,
                      background: primaryGradient,
                      color: 'white',
                      '&:hover': {
                        opacity: 0.9,
                        bgcolor: 'primary.main',
                      },
                    }}
                  >
                    <AddIcon
                      sx={{
                        fontSize: 16,
                      }}
                    />
                  </IconButton>
                </Stack>
              </Box>
            )
          : (
              <Stack spacing={0.5}>
                <Typography
                  variant='body2'
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 600,
                    fontSize: 13,
                  }}
                >
                  Quantity:{' '}
                  <Box
                    component='span'
                    sx={{
                      fontWeight: 800,
                      color: 'grey.700',
                    }}
                  >
                    {item.quantity}
                  </Box>
                </Typography>
                {item.product.category === 'surfproducts' && (
                  <Typography
                    variant='body2'
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 600,
                      fontSize: 13,
                    }}
                  >
                    Length:{' '}
                    <Box
                      component='span'
                      sx={{
                        fontWeight: 800,
                        color: 'grey.700',
                      }}
                    >
                      {item.product.length}ft
                    </Box>
                  </Typography>
                )}
                <Typography
                  variant='body2'
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 600,
                    fontSize: 13,
                  }}
                >
                  Price:{' '}
                  <Box
                    component='span'
                    sx={{
                      fontWeight: 800,
                      color: 'primary.main',
                    }}
                  >
                    {item.product.price * item.quantity} EUR
                  </Box>
                </Typography>
              </Stack>
            )}
      </Box>
      <Stack
        direction='column'
        spacing={1.5}
        sx={{
          color: 'grey.600',
          alignItems: 'center',
          flexShrink: 0,
        }}
      >
        <IconButton
          size='small'
          onClick={() => {
            deleteCartItem(index)
          }}
          aria-label='Remove item'
        >
          <CloseIcon />
        </IconButton>
        <IconButton
          size='small'
          onClick={() => {
            setShowEdit(s => !s)
          }}
          aria-label='Edit quantity'
          sx={{
            opacity: 0.5,
          }}
        >
          <EditIcon
            fontSize='small'
          />
        </IconButton>
      </Stack>
    </Stack>
  )
}
