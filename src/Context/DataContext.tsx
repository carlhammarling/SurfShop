import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'
import { getCart } from './Helper'
import { db } from '../firebase'
import type { CollectionReference } from 'firebase/firestore'
import { collection, onSnapshot } from 'firebase/firestore'

const DataContext = createContext<DataContextProps | undefined>(undefined)

export function DataProvider ({ children }: DataProviderProps): React.JSX.Element {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 1,
      catName: 'surfboards',
      imgURL:
        'https://images.pexels.com/photos/1753689/pexels-photo-1753689.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      link: '/surfproducts',
    },
    {
      id: 2,
      catName: 'kitesurf',
      imgURL:
        'https://images.pexels.com/photos/1604746/pexels-photo-1604746.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/kiteproducts',
    },
    {
      id: 3,
      catName: 'wetsuits',
      imgURL:
        'https://media.istockphoto.com/id/1336953432/es/foto/mujer-sonriente-se-sienta-en-la-tabla-de-wakesurf-y-monta-la-ola-y-toca-las-olas-con-una-mano.jpg?s=612x612&w=0&k=20&c=0MxBajjP5FjFEew6OtIEfdvDVMAqNgekdXSCCgZBUpE=',
      link: '/wetsuits',
    },
    {
      id: 4,
      catName: 'swimwear',
      imgURL:
        'https://images.pexels.com/photos/414012/pexels-photo-414012.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/swimwear',
    },
  ])

  const [surfProducts, setSurfProducts] = useState<Surfboard[]>([])

  const [kiteProducts, setKiteProducts] = useState<Kite[]>([])

  const docRefSurf: CollectionReference = collection(db, 'surfProducts')
  const docRefKite: CollectionReference = collection(db, 'kiteProducts')

  useEffect(() => {
    onSnapshot(docRefSurf, (querySnapshot) => {
      const allSurfProducts: Surfboard[] = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: parseInt(doc.id) } as Surfboard
      })

      setSurfProducts(allSurfProducts)
    })
  }, [])

  useEffect(() => {
    onSnapshot(docRefKite, (querySnapshot) => {
      const allKiteProducts: Kite[] = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: parseInt(doc.id) } as Kite
      })

      setKiteProducts(allKiteProducts)
    })
  }, [])

  // I dont want to store this on the DB, beacuse then the added products would be visible to everyone.
  // I am just demonstrating that it is possible to update the DB for the user.
  useEffect(() => {
    localStorage.setItem('surfProducts', JSON.stringify(surfProducts))
  }, [surfProducts])
  useEffect(() => {
    localStorage.setItem('kiteProducts', JSON.stringify(kiteProducts))
  }, [kiteProducts])

  const [cart, setCart] = useState<CartItem[]>([])

  function addToCart (category: string, id: number): void {
    let productToAdd: Surfboard | Kite | null = null

    if (category === 'surfproducts') {
      productToAdd = surfProducts.find(item => item.id === id) ?? null
    }
    if (category === 'kiteproducts') {
      productToAdd = kiteProducts.find(item => item.id === id) ?? null
    }

    if (productToAdd !== null) {
      const newCartItem: CartItem = {
        quantity: 1,
        product: productToAdd,
      }

      const cartData: CartItem[] = getCart()

      const existingCartItemIndex = cartData.findIndex(
        item =>
          item.product.id === newCartItem.product.id
          && item.product.category === newCartItem.product.category,
      )

      if (existingCartItemIndex !== -1) {
        cartData[existingCartItemIndex].quantity += 1
      } else {
        cartData.push(newCartItem)
      }
      if (cartData.length > 0) {
        setCart(cartData)
      }
      localStorage.setItem('cart', JSON.stringify(cartData))
    }
  }

  function deleteCartItem (indexToRemove: number): void {
    const cartData: CartItem[] = getCart()

    if (cartData[indexToRemove] == null) return
    const updatedArray: CartItem[] = cartData.filter(
      (_, index) => index !== indexToRemove,
    )

    setCart(updatedArray)
    localStorage.setItem('cart', JSON.stringify(updatedArray))
  }

  function incrementCartItem (itemIndex: number): void {
    const cartData: CartItem[] = getCart()

    if (cartData[itemIndex] == null) return

    cartData[itemIndex].quantity += 1
    setCart(cartData)
    localStorage.setItem('cart', JSON.stringify(cartData))
  }

  function decrementCartItem (itemIndex: number): void {
    let cartData: CartItem[] = getCart()

    if (cartData[itemIndex] == null) return

    if (cartData[itemIndex].quantity <= 1) {
      cartData = cartData.filter((_, index) => index !== itemIndex)
    } else {
      cartData[itemIndex].quantity -= 1
    }
    setCart(cartData)
    localStorage.setItem('cart', JSON.stringify(cartData))
  }

  return (
    <DataContext.Provider
      value={{
        categories,
        setCategories,
        surfProducts,
        setSurfProducts,
        kiteProducts,
        setKiteProducts,
        addToCart,
        cart,
        setCart,
        deleteCartItem,
        incrementCartItem,
        decrementCartItem,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export function useData (): DataContextProps {
  const dataContext = useContext(DataContext)
  if (dataContext === undefined) {
    throw new Error('Context must be inside a provider')
  }
  return dataContext
}
