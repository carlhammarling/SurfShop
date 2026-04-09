import React, { useState } from 'react'
import { useData } from '../../Context/DataContext'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Stack,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { appBarHeights, primaryGradient } from '../../theme'

function Admin () {
  const { surfProducts, setSurfProducts, kiteProducts, setKiteProducts } = useData()
  const navigate = useNavigate()

  const [formData, setFormData] = useState<AddProductProps>({
    category: '',
    productName: '',
    imgURL: '',
    brand: '',
    description: '',
    price: '',
    boardLength: '',
    boardType: 'Soft',
    kiteType: 'Kite',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault()
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleNumericFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitized = e.target.value.replace(/[^0-9.]/g, '')
    setFormData(prev => ({
      ...prev,
      [e.target.name]: sanitized,
    }))
  }

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formData.category === 'surfproducts') {
      const newSurfProduct: Surfboard = {
        id: surfProducts[surfProducts.length - 1].id + 1,
        category: formData.category,
        productName: formData.productName,
        imgURL: formData.imgURL,
        brand: formData.brand,
        description: formData.description,
        price: parseFloat(formData.price),
        length: parseFloat(formData.boardLength),
        boardType: formData.boardType,
      }

      const isNotEmpty: boolean = Object.values(newSurfProduct).every(value => value !== '')
      if (isNotEmpty) {
        setSurfProducts(prevProd => [...prevProd, newSurfProduct])
        navigate('/surfproducts')
      } else {
        console.log('You have to fill in all the forms')
      }
      return
    }

    if (formData.category === 'kiteproducts') {
      const newKiteProduct: Kite = {
        id: kiteProducts[kiteProducts.length - 1].id + 1,
        category: formData.category,
        productName: formData.productName,
        imgURL: formData.imgURL,
        brand: formData.brand,
        description: formData.description,
        price: parseFloat(formData.price),
        kiteType: formData.kiteType,
      }

      const isNotEmpty: boolean = Object.values(newKiteProduct).every(value => value !== '')
      if (isNotEmpty) {
        setKiteProducts(prevProd => [...prevProd, newKiteProduct])
        navigate('/kiteproducts')
      } else {
        console.log('You have to fill in all the forms')
      }
      return
    }
    console.log('Can not find a category with that name.')
  }

  const fieldSx = {
    width: { xs: '100%', sm: 300 },
  }

  return (
    <Box
      sx={{
        pt: { xs: `${appBarHeights.xs}px`, md: `${appBarHeights.md}px` },
        minHeight: `calc(100vh - ${appBarHeights.md + 380}px)`,
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        sx={{
          p: { xs: 2, sm: 5 },
          justifyContent: 'center',
          alignItems: { xs: 'stretch', md: 'flex-start' },
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', sm: 300 },
            maxWidth: '100%',
          }}
        >
          <Typography
            variant='h4'
            component='h1'
            sx={{
              mb: 3,
            }}
          >
            Admin
          </Typography>
          <Box
            sx={{
              color: 'grey.700',
              borderTop: 1,
              borderBottom: 1,
              borderColor: 'divider',
              py: 2,
              mb: 3,
            }}
          >
            <Typography
              component='p'
              sx={{
                mb: 2,
              }}
            >
              In this section you will be able to add products to the store.
            </Typography>
            <Typography
              component='p'
              sx={{
                mb: 0,
              }}
            >
              Since this site is online, the changes will only be saved on localstorage for you to watch.
            </Typography>
          </Box>
          <Typography
            variant='body2'
            sx={{
              color: 'text.secondary',
              fontSize: 13,
            }}
          >
            * The rest of the site is connected to Firestore, this can easily be done with this feauture as well so that the changes go online.{' '}
          </Typography>
        </Box>

        <Box
          component='form'
          onSubmit={handelSubmit}
          sx={{
            width: { xs: '100%', sm: 300 },
            maxWidth: '100%',
          }}
        >
          <Stack spacing={2}>
            <FormControl
              fullWidth
              sx={fieldSx}
            >
              <InputLabel id='category-label'>Category</InputLabel>
              <Select
                labelId='category-label'
                label='Category'
                value={formData.category}
                onChange={(e) => {
                  setFormData(prev => ({ ...prev, category: e.target.value }))
                }}
                name='category'
              >
                <MenuItem
                  value=''
                  disabled
                >
                  Select a product category
                </MenuItem>
                <MenuItem value='surfproducts'>Surf product</MenuItem>
                <MenuItem value='kiteproducts'>Kite product</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label='Product name'
              name='productName'
              value={formData.productName}
              onChange={handleChange}
              sx={fieldSx}
            />
            <TextField
              label='Brand'
              name='brand'
              value={formData.brand}
              onChange={handleChange}
              sx={fieldSx}
            />
            <TextField
              label='Image URL'
              name='imgURL'
              value={formData.imgURL}
              onChange={handleChange}
              sx={fieldSx}
            />
            <TextField
              label='Description'
              name='description'
              value={formData.description}
              onChange={handleChange}
              sx={fieldSx}
            />
            <TextField
              label='Price (EUR)'
              name='price'
              value={formData.price}
              onChange={handleNumericFieldChange}
              sx={fieldSx}
            />
            {formData.category === 'surfproducts' && (
              <>
                <TextField
                  label='Length (in feet)'
                  name='boardLength'
                  value={formData.boardLength}
                  onChange={handleNumericFieldChange}
                  sx={fieldSx}
                />
                <FormControl
                  fullWidth
                  sx={fieldSx}
                >
                  <InputLabel id='board-type-label'>Board type</InputLabel>
                  <Select
                    labelId='board-type-label'
                    label='Board type'
                    value={formData.boardType}
                    name='boardType'
                    onChange={(e) => {
                      setFormData(prev => ({
                        ...prev,
                        boardType: e.target.value as BoardType,
                      }))
                    }}
                  >
                    <MenuItem
                      value=''
                      disabled
                    >
                      Select a type
                    </MenuItem>
                    <MenuItem value='Soft'>Softboard</MenuItem>
                    <MenuItem value='Hard'>Hardboard</MenuItem>
                  </Select>
                </FormControl>
              </>
            )}
            {formData.category === 'kiteproducts' && (
              <FormControl
                fullWidth
                sx={fieldSx}
              >
                <InputLabel id='kite-type-label'>Kite type</InputLabel>
                <Select
                  labelId='kite-type-label'
                  label='Kite type'
                  value={formData.kiteType}
                  name='kiteType'
                  onChange={(e) => {
                    setFormData(prev => ({
                      ...prev,
                      kiteType: e.target.value as KiteType,
                    }))
                  }}
                >
                  <MenuItem
                    value=''
                    disabled
                  >
                    Select a type
                  </MenuItem>
                  <MenuItem value='Kiteboard'>Kiteboard</MenuItem>
                  <MenuItem value='Kite'>Kite</MenuItem>
                </Select>
              </FormControl>
            )}
            <Button
              type='submit'
              variant='contained'
              endIcon={<ArrowForwardIcon />}
              sx={{
                ...fieldSx,
                color: 'white',
                background: primaryGradient,
                backgroundSize: '200%',
                backgroundPosition: '30% center',
                fontFamily: '"Odibee Sans", sans-serif',
                '&:hover': {
                  background: primaryGradient,
                  backgroundSize: '200%',
                  backgroundPosition: '10% center',
                  opacity: 0.95,
                },
              }}
            >
              ADD PRODUCT
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default Admin
