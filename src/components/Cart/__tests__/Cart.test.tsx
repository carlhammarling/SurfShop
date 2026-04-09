import type { SetStateAction } from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import render, { cleanup } from '../../../testUtils/customRender'
import { mockCartLine } from '../../../testUtils/mockCart'
import Cart from '../Cart'

const setShowCartMock = vi.fn()

function TestComponent (): React.JSX.Element {
  return (
    <Cart
      setShowCart={(value: SetStateAction<boolean>): void => {
        setShowCartMock(value)
      }}
      showCart
    />
  )
}

describe('<Cart />', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    localStorage.clear()
  })

  afterEach(cleanup)

  it('Should render the cart heading', () => {
    render(<TestComponent />)

    expect(
      screen.getByRole('heading', { name: 'CART - BIG WAVES SURFING' }),
    ).toBeVisible()
  })

  it('Should show the empty state when there is nothing in localStorage', async () => {
    render(<TestComponent />)

    await waitFor(() => {
      expect(screen.getByText('Your cart is empty.')).toBeVisible()
    })
  })

  it('Should load cart lines from localStorage and show the line total', async () => {
    localStorage.setItem('cart', JSON.stringify([mockCartLine]))

    render(<TestComponent />)

    await waitFor(() => {
      expect(screen.getAllByText('200 EUR')).toHaveLength(2)
    })

    expect(
      screen.getByText(
        'TESTBRAND WAVE RIDER 6 FT HARDBOARD',
      ),
    ).toBeVisible()
  })

  it('Should call setShowCart(false) when the close control is activated', () => {
    render(<TestComponent />)

    fireEvent.click(screen.getByRole('button', { name: 'Close cart' }))

    expect(setShowCartMock).toHaveBeenCalledWith(false)
  })

  it('Should render the place order action', () => {
    render(<TestComponent />)

    expect(
      screen.getByRole('button', { name: 'PLACE ORDER' }),
    ).toBeVisible()
  })
})
