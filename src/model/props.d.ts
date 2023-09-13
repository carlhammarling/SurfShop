interface DataContextProps {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  surfProducts: Surfboard[];
  setSurfProducts: React.Dispatch<React.SetStateAction<Surfboard[]>>;
  kiteProducts: Kite[];
  setKiteProducts: React.Dispatch<React.SetStateAction<Kite[]>>;
  addToCart: (category: string, id: number) => void;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  deleteCartItem: (index: number) => void;
  incrementCartItem: (index: number) => void;
  decrementCartItem: (index: number) => void;
}

interface DataProviderProps {
  children: ReactNode;
}

interface HandleCartProps {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  showCart?: boolean
}

interface CartItemProps {
  item: CartItem;
  index: number;
}


interface AddProductProps {
  category: string;
  productName: string;
  imgURL: string;
  boardLength: string;
  brand: string;
  description: string;
  price: string;
  boardType: BoardType;
  kiteType: KiteType;
}
