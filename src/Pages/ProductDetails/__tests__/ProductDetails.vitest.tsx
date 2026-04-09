import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import type * as ReactRouterDom from 'react-router-dom'
import render, { cleanup } from '../../../testUtils/customRender'
import ProductDetails from '../ProductDetails'

const {
  mockSurfProduct,
  mockKiteProduct,
  addToCartMock,
  navigateMock,
} = vi.hoisted(
  () => {
    const surf: Surfboard = {
      id: 1,
      category: 'surfproducts',
      productName: 'Wave Rider',
      length: 6,
      boardType: 'Hard',
      brand: 'TestBrand',
      imgURL: 'https://example.com/surf.jpg',
      description: 'Test surfboard',
      price: 299,
    }
    const kite: Kite = {
      id: 1,
      category: 'kiteproducts',
      productName: 'Sky Flyer',
      kiteType: 'Kite',
      brand: 'KiteBrand',
      imgURL: 'https://example.com/kite.jpg',
      description: 'Test kite',
      price: 450,
    }
    return {
      mockSurfProduct: surf,
      mockKiteProduct: kite,
      addToCartMock: vi.fn(),
      navigateMock: vi.fn(),
    }
  },
)

vi.mock('react-router-dom', async (importOriginal) => {
  const mod = await importOriginal<typeof ReactRouterDom>()
  return {
    ...mod,
    useNavigate: () => navigateMock,
  }
})

vi.mock('../../../Context/DataContext', () => ({
  DataProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useData: (): DataContextProps => ({
    categories: [],
    setCategories: vi.fn(),
    surfProducts: [mockSurfProduct],
    setSurfProducts: vi.fn(),
    kiteProducts: [mockKiteProduct],
    setKiteProducts: vi.fn(),
    addToCart: addToCartMock,
    cart: [],
    setCart: vi.fn(),
    deleteCartItem: vi.fn(),
    incrementCartItem: vi.fn(),
    decrementCartItem: vi.fn(),
  }),
}))

function renderAtPath (path: string): void {
  window.history.pushState({}, '', path)
  render(
    <MemoryRouter initialEntries={[path]}>
      <ProductDetails />
    </MemoryRouter>,
  )
}

describe('<ProductDetails />', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(cleanup)

  it('Should render surf product details from the URL path', async () => {
    renderAtPath('/surfproducts/1')

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1, name: 'TESTBRAND' })).toBeVisible()
    })

    expect(
      screen.getByText('WAVE RIDER 6FT HARDBOARD'),
    ).toBeVisible()
    expect(screen.getByText('Product identification number: 1')).toBeVisible()
    expect(screen.getByText('299 EUR')).toBeVisible()
  })

  it('Should render kite product details from the URL path', async () => {
    renderAtPath('/kiteproducts/1')

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1, name: 'KITEBRAND' })).toBeVisible()
    })

    expect(screen.getByText('SKY FLYER KITE')).toBeVisible()
    expect(screen.getByText('450 EUR')).toBeVisible()
  })

  it('Should call addToCart when BUY NOW is activated', async () => {
    renderAtPath('/surfproducts/1')

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'BUY NOW' })).toBeVisible()
    })

    fireEvent.click(screen.getByRole('button', { name: 'BUY NOW' }))

    expect(addToCartMock).toHaveBeenCalledWith('surfproducts', 1)
  })

  it('Should navigate back when GO BACK is activated', async () => {
    renderAtPath('/surfproducts/1')

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'GO BACK' })).toBeVisible()
    })

    fireEvent.click(screen.getByRole('button', { name: 'GO BACK' }))

    expect(navigateMock).toHaveBeenCalledWith(-1)
  })
})
