function isProductCategory (value: unknown): value is ProductCategory {
  return value === 'surfproducts' || value === 'kiteproducts'
}

function isBoardType (value: unknown): value is BoardType {
  return value === 'Soft' || value === 'Hard'
}

function isKiteType (value: unknown): value is KiteType {
  return value === 'Kiteboard' || value === 'Kite'
}

function isSurfboard (value: unknown): value is Surfboard {
  if (typeof value !== 'object' || value === null) return false
  const p = value as Record<string, unknown>
  return (
    p.category === 'surfproducts'
    && typeof p.id === 'number' && Number.isFinite(p.id)
    && typeof p.productName === 'string'
    && typeof p.imgURL === 'string'
    && typeof p.brand === 'string'
    && typeof p.description === 'string'
    && typeof p.price === 'number' && Number.isFinite(p.price)
    && typeof p.length === 'number' && Number.isFinite(p.length)
    && isBoardType(p.boardType)
  )
}

function isKiteProduct (value: unknown): value is Kite {
  if (typeof value !== 'object' || value === null) return false
  const p = value as Record<string, unknown>
  return (
    p.category === 'kiteproducts'
    && typeof p.id === 'number' && Number.isFinite(p.id)
    && typeof p.productName === 'string'
    && typeof p.imgURL === 'string'
    && typeof p.brand === 'string'
    && typeof p.description === 'string'
    && typeof p.price === 'number' && Number.isFinite(p.price)
    && isKiteType(p.kiteType)
  )
}

function isCartProduct (value: unknown): value is Surfboard | Kite {
  if (typeof value !== 'object' || value === null) return false
  const p = value as Record<string, unknown>
  if (!isProductCategory(p.category)) return false
  if (p.category === 'surfproducts') return isSurfboard(value)
  return isKiteProduct(value)
}

export function isCartItem (value: unknown): value is CartItem {
  if (typeof value !== 'object' || value === null) return false
  const o = value as Record<string, unknown>
  return (
    typeof o.quantity === 'number'
    && Number.isFinite(o.quantity)
    && o.quantity >= 0
    && isCartProduct(o.product)
  )
}

export function isCartItemArray (value: unknown): value is CartItem[] {
  return Array.isArray(value) && value.every(isCartItem)
}

/** Parses `localStorage` cart JSON; returns `[]` if missing, invalid, or corrupt. */
export function parseCartFromLocalStorage (): CartItem[] {
  const raw = localStorage.getItem('cart')
  if (raw === null) return []
  let parsed: unknown
  try {
    parsed = JSON.parse(raw)
  } catch {
    return []
  }
  return isCartItemArray(parsed) ? parsed : []
}
