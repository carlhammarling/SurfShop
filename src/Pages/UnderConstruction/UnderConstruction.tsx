import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography, Stack } from '@mui/material'
import FadeLoader from 'react-spinners/FadeLoader'
import { appBarHeights } from '../../theme'

export default function UnderConstruction (): React.JSX.Element {
  const navigate = useNavigate()
  useEffect(() => {
    const t = setTimeout(() => {
      navigate('/')
    }, 1200)
    return () => {
      clearTimeout(t)
    }
  }, [navigate])

  return (
    <Stack
      spacing={4}
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        pt: { xs: `${appBarHeights.xs}px`, md: `${appBarHeights.md}px` },
        minHeight: {
          xs: `calc(100vh - ${appBarHeights.xs}px)`,
          md: `calc(100vh - ${appBarHeights.md}px)`,
        },
        m: 2,
      }}
    >
      <FadeLoader
        color='gray'
      />
      <Typography
        variant='h5'
        sx={{
          color: 'grey.600',
        }}
      >
        Under Construction.
      </Typography>
    </Stack>
  )
}
