import React, { type ReactElement } from 'react'
import {
  render,
  type RenderOptions,
  cleanup,
} from '@testing-library/react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from '../theme'
import { DataProvider } from '../Context/DataContext'

function AllTheProviders ({
  children,
}: {
  children: React.ReactNode
}): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DataProvider>
        {children}
      </DataProvider>
    </ThemeProvider>
  )
}

function customRender (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): ReturnType<typeof render> {
  return render(ui, { wrapper: AllTheProviders, ...options })
}

export default customRender
export { cleanup }
