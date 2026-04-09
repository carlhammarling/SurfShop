import React from 'react'
import { Box } from '@mui/material'
import surfLogo from '../../assets/images/surf-logo.png'

export default function Footer (): React.JSX.Element {
  return (
    <Box
      component='footer'
      sx={{
        bgcolor: 'rgb(228, 238, 241)',
        height: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          height: 100,
          width: 100,
          backgroundImage: `url(${surfLogo})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          bgcolor: 'rgb(228, 238, 241)',
          backgroundBlendMode: 'darken',
        }}
      />
    </Box>
  )
}
