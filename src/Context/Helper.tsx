
export const getCart = () => {
    const existingCart: string | null = localStorage.getItem("cart");
    const cartData: CartItem[] = existingCart ? JSON.parse(existingCart) : [];
    return cartData
}


