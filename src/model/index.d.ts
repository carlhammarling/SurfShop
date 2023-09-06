
interface DataContextProps {
    categories: Category[]
    setCategories: React.Dispatch<React.SetStateAction<Category[]>>
    surfProducts: Surfboard[]
    setSurfProducts: React.Dispatch<React.SetStateAction<Surfboard[]>>
    kiteProducts: Kite[]
    setKiteProducts: React.Dispatch<React.SetStateAction<Kite[]>>
}

interface DataProviderProps {
    children: ReactNode;
}


interface Category {
    id?: number
    catName: string
    imgURL: string
    link: string
}

type ProductCategory = "surfproducts" | "kiteproducts";
type BoardType = "Soft" | "Hard";

type KiteType = "Board" | "Kite";

interface Product {
    id?: number
    category: ProductCategory
    productName: string
    imgURL: string
    brand: string
    description: string
    price: number
}

interface Surfboard extends Product {
    length: number
    boardType: BoardType
}
interface Kite extends Product {
    kiteType: KiteType
}

