interface Category {
  id?: number;
  catName: string;
  imgURL: string;
  link: string;
}

type ProductCategory = "surfproducts" | "kiteproducts";
type BoardType = "Soft" | "Hard";

type KiteType = "Kiteboard" | "Kite";

interface Product {
  id: number;
  category: ProductCategory;
  productName: string;
  imgURL: string;
  brand: string;
  description: string;
  price: number;
}

interface Surfboard extends Product {
  length: number;
  category: "surfproducts";
  boardType: BoardType;
}
interface Kite extends Product {
  kiteType: KiteType;
  category: "kiteproducts";
}

type AllProduct = Surfboard | Kite;

interface CartItem {
  quantity: number;
  product: Surfboard | Kite;
}
