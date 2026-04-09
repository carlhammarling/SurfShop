import { createTheme } from '@mui/material/styles'

/** Navbar height — keep in sync with AppBar `sx` */
export const appBarHeights = { xs: 100, md: 180 }

export const primaryGradient =
  'linear-gradient(140deg, #004c8e 0%, #0066bf 30%, rgba(0, 143, 191, 1) 80%, #004c8e 100%)'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0066bf',
      dark: '#004c8e',
      light: '#008fbf',
    },
    secondary: { main: 'rgb(237, 197, 1)' },
    text: {
      primary: 'rgb(35, 35, 35)',
      secondary: 'gray',
    },
    divider: 'rgb(231, 231, 231)',
  },
  typography: {
    fontFamily: '"Odibee Sans", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif',
    h1: { fontWeight: 400 },
    h2: { fontWeight: 400 },
    h3: { fontWeight: 400 },
    button: {
      fontFamily: '"Odibee Sans", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 0,
        },
      },
    },
  },
})
