/** Shared mock cart payloads for component tests */
export const mockSurfboard: Surfboard = {
  id: 1,
  category: 'surfproducts',
  productName: 'Wave Rider',
  imgURL: 'https://example.com/surf.jpg',
  brand: 'TestBrand',
  description: 'A test board',
  price: 100,
  length: 6,
  boardType: 'Hard',
}

export const mockCartLine: CartItem = {
  quantity: 2,
  product: mockSurfboard,
}
