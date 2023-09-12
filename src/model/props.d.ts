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
}

interface CartItemProps {
  item: CartItem;
  index: number;
}


interface AddProductProps {
  category: ProductCategory;
  productName: string;
  imgURL: string;
  length: number;
  brand: string;
  description: string;
  price: number;
  boardType: BoardType;
  kiteType: KiteType;
}
