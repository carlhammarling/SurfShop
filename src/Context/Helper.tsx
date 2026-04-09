import { parseCartFromLocalStorage } from '../utils/cartTypeGuards'

export const getCart = (): CartItem[] => parseCartFromLocalStorage()
