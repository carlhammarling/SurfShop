import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { getCart } from "./Helper";
import { db } from "../firebase";
import { CollectionReference, collection, onSnapshot } from "firebase/firestore";

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider = ({ children }: DataProviderProps) => {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 1,
      catName: "surfboards",
      imgURL:
        "https://images.pexels.com/photos/1753689/pexels-photo-1753689.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      link: "/surfproducts",
    },
    {
      id: 2,
      catName: "kitesurf",
      imgURL:
        "https://images.pexels.com/photos/1604746/pexels-photo-1604746.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/kiteproducts",
    },
    {
      id: 3,
      catName: "wetsuits",
      imgURL:
        "https://media.istockphoto.com/id/1336953432/es/foto/mujer-sonriente-se-sienta-en-la-tabla-de-wakesurf-y-monta-la-ola-y-toca-las-olas-con-una-mano.jpg?s=612x612&w=0&k=20&c=0MxBajjP5FjFEew6OtIEfdvDVMAqNgekdXSCCgZBUpE=",
      link: "/wetsuits",
    },
    {
      id: 4,
      catName: "swimwear",
      imgURL:
        "https://images.pexels.com/photos/414012/pexels-photo-414012.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "/swimwear",
    },
  ]);

  const [surfProducts, setSurfProducts] = useState<Surfboard[]>([
    // {
    //   id: 1,
    //   category: "surfproducts",
    //   productName: "Turquise",
    //   imgURL:
    //     "https://contents.mediadecathlon.com/p1740854/k$9a0e806decb46843fe7e81d25f3660d6/sq/tabla-surf-evolutiva-espuma-olaian-900-7-pack-tabla-quillas.jpg?f=3000x3000",
    //   brand: "Olaian",
    //   description: "string",
    //   price: 550,
    //   length: 7,
    //   boardType: "Soft",
    // },
    // {
    //   id: 2,
    //   category: "surfproducts",
    //   productName: "Blueish",
    //   imgURL:
    //     "https://contents.mediadecathlon.com/p1758427/k$e9f74f04e6e4f4c12547c66b3f70cd83/sq/tabla-surf-malibu-espuma-olaian-500-78-pack-tabla-leash-quillas.jpg?format=auto&f=800x0",
    //   brand: "Olaian",
    //   description: "string",
    //   price: 530,
    //   length: 7,
    //   boardType: "Soft",
    // },
    // {
    //   id: 3,
    //   category: "surfproducts",
    //   productName: "Orange",
    //   imgURL:
    //     "https://contents.mediadecathlon.com/p1740730/k$ff9b79b5e73cdaca7387d285a8955a92/sq/tabla-surf-6-espuma-olaian-500-pack-tabla-leash-quillas.jpg?format=auto&f=800x0",
    //   brand: "Rip Curl",
    //   description: "string",
    //   price: 550,
    //   length: 6.2,
    //   boardType: "Soft",
    // },
    // {
    //   id: 4,
    //   category: "surfproducts",
    //   productName: "Surfboard 1",
    //   imgURL:
    //     "https://contents.mediadecathlon.com/p2258974/k$63b33029131b7ca5b0d2f74993822583/sq/tabla-surf-malibu-espuma-olaian-500-86-pack-tabla-leash-quillas.jpg?format=auto&f=800x0",
    //   brand: "Rip Curl",
    //   description: "string",
    //   price: 480,
    //   length: 7,
    //   boardType: "Soft",
    // },
    // {
    //   id: 5,
    //   category: "surfproducts",
    //   productName: "TreeTop",
    //   imgURL:
    //     "https://contents.mediadecathlon.com/m13224935/k$9f22803ab9ef564f39d82756a6fa0c2d/sq/tabla-surf-longboard-aqss-soulstice-paulownia-xl-96.jpg?format=auto&f=800x0",
    //   brand: "Rip Curl",
    //   description: "string",
    //   price: 730,
    //   length: 7.5,
    //   boardType: "Hard",
    // },
    // {
    //   id: 6,
    //   category: "surfproducts",
    //   productName: "White Shark",
    //   imgURL:
    //     "https://contents.mediadecathlon.com/m13224983/k$dfc77d712b46f34ffc4aaac38d78242e/sq/tabla-surf-iniciacion-aqss-flying-fish-clearskin-610.jpg?format=auto&f=800x0",
    //   brand: "Rip Curl",
    //   description: "string",
    //   price: 650,
    //   length: 7,
    //   boardType: "Hard",
    // },
  ]);

  const [kiteProducts, setKiteProducts] = useState<Kite[]>([
    // {
    //   id: 1,
    //   category: "kiteproducts",
    //   productName: "Heat",
    //   imgURL:
    //     "https://contents.mediadecathlon.com/p1928583/k$734637d89be5f57028961315751e1103/sq/tabla-kitesurf-twintip-500-lightwind-154-x-45-cm-pads-y-straps-incluidos.jpg?format=auto&f=800x0",
    //   brand: "Orao",
    //   description: "string",
    //   price: 530,
    //   kiteType: "Kiteboard",
    // },
    // {
    //   id: 2,
    //   category: "kiteproducts",

    //   productName: "Cool & Calm",
    //   imgURL:
    //     "https://contents.mediadecathlon.com/p1927520/k$761b01fb79ba52a547f52b31f4e949f4/sq/tabla-kitesurf-twintip-500-carbono-sola-136-x-405-cm.jpg?format=auto&f=800x0",
    //   brand: "Orao",
    //   description: "string",
    //   price: 580,
    //   kiteType: "Kiteboard",
    // },
    // {
    //   id: 3,
    //   category: "kiteproducts",
    //   productName: "Ora",
    //   imgURL:
    //     "https://contents.mediadecathlon.com/p1210743/k$509c5d4b23d10a7e479e93b49f37fec1/sq/producto-ocasion-tabla-kitesurf-orao-twintip-500-hombre-136-x-405-cm.jpg?format=auto&f=800x0",
    //   brand: "Orao",
    //   description: "string",
    //   price: 590,
    //   kiteType: "Kiteboard",
    // },
    // {
    //   id: 4,
    //   category: "kiteproducts",
    //   productName: "SkyHigh",
    //   imgURL:
    //     "https://contents.mediadecathlon.com/p1807040/k$7f82a80582d8a795cf5aa3d660a9e02c/sq/cometa-de-traccion-zeruko-25-m2-mandos-de-pilotaje-azul.jpg?format=auto&f=800x0",
    //   brand: "Rip Curl",
    //   description: "string",
    //   price: 350,
    //   kiteType: "Kite",
    // },
    // {
    //   id: 5,
    //   category: "kiteproducts",
    //   productName: "SunRay",
    //   imgURL:
    //     "https://contents.mediadecathlon.com/p1807042/k$aef6029349dcecfc89894fdb03159a63/sq/cometa-traccion-zeruko-45-m2-mandos-pilotaje.jpg?format=auto&f=800x0",
    //   brand: "Rip Curl",
    //   description: "string",
    //   price: 380,
    //   kiteType: "Kite",
    // },
    // {
    //   id: 6,
    //   category: "kiteproducts",
    //   productName: "ParaVivir",
    //   imgURL:
    //     "https://contents.mediadecathlon.com/p1210587/k$7394d02c84d9b9ba2d0cd566c726bfd5/sq/cometa-traccion-19-m2-barra-verde-fluorescente.jpg?format=auto&f=800x0",
    //   brand: "Rip Curl",
    //   description: "string",
    //   price: 450,
    //   kiteType: "Kite",
    // },
  ]);

  const docRefSurf:CollectionReference = collection(db, "surfProducts");
  const docRefKite:CollectionReference = collection(db, "kiteProducts");

  useEffect(() => {
    onSnapshot(docRefSurf, (querySnapshot) => {
      const allSurfProducts: Surfboard[] = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: parseInt(doc.id) } as Surfboard;
      });

      setSurfProducts(allSurfProducts);
    });
  }, []);

  useEffect(() => {
    onSnapshot(docRefKite, (querySnapshot) => {
      const allKiteProducts: Kite[] = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: parseInt(doc.id) } as Kite;
      });

      setKiteProducts(allKiteProducts);
    });
  }, []);
  

  //I dont want to store this on the DB, beacuse then the added products would be visible to everyone.
  //I am just demonstrating that it is possible to update the DB for the user.
  useEffect(() => {
    localStorage.setItem("surfProducts", JSON.stringify(surfProducts));
  }, [surfProducts]);
  useEffect(() => {
    localStorage.setItem("kiteProducts", JSON.stringify(kiteProducts));
  }, [kiteProducts]);

  const [cart, setCart] = useState<CartItem[]>([]);

  //CART FUNCTION

  const addToCart = (category: string, id: number) => {
    let productToAdd: Surfboard | Kite | undefined;

    if (category === "surfproducts") {
      productToAdd = surfProducts.find((item) => item.id === id);
    }
    if (category === "kiteproducts") {
      productToAdd = kiteProducts.find((item) => item.id === id);
    }

    if (productToAdd) {
      let newCartItem: CartItem = {
        quantity: 1,
        product: productToAdd,
      };

      let cartData: CartItem[] = getCart();

      const existingCartItemIndex = cartData.findIndex(
        (item) =>
          item.product.id === newCartItem.product.id &&
          item.product.category === newCartItem.product.category
      );

      if (existingCartItemIndex !== -1) {
        cartData[existingCartItemIndex].quantity += 1;
      } else {
        cartData.push(newCartItem);
      }
      if (cartData) {
        setCart(cartData);
      }
      localStorage.setItem("cart", JSON.stringify(cartData));
    }
  };

  const deleteCartItem = (indexToRemove: number) => {
    let cartData: CartItem[] = getCart();

    if (!cartData[indexToRemove]) {
      console.log("No product to remove");
      return;
    }
    const updatedArray: CartItem[] = cartData.filter(
      (item, index) => index !== indexToRemove
    );

    setCart(updatedArray);
    localStorage.setItem("cart", JSON.stringify(updatedArray));
  };

  const incrementCartItem = (itemIndex: number) => {
    let cartData: CartItem[] = getCart();

    if (!cartData[itemIndex]) {
      console.log("Could not find the product");
      return;
    }
    cartData[itemIndex].quantity += 1;
    setCart(cartData);
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  const decrementCartItem = (itemIndex: number) => {
    let cartData: CartItem[] = getCart();

    if (!cartData[itemIndex]) {
      console.log("Could not find the product");
      return;
    }
    if (cartData[itemIndex].quantity <= 1) {
      cartData = cartData.filter((item, index) => index !== itemIndex);
    } else {
      cartData[itemIndex].quantity -= 1;
    }
    setCart(cartData);
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

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
  );
};

export const useData = () => {
  const dataContext = React.useContext(DataContext);
  if (dataContext === undefined) {
    throw new Error("Context must be inside a provider");
  }
  return dataContext;
};
