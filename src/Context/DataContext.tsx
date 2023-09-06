import React, { createContext, useContext, useState, ReactNode } from 'react'


const DataContext = createContext<DataContextProps | undefined >(undefined);


export const DataProvider = ({ children }: DataProviderProps) => {

  const [categories, setCategories] = useState<Category[]>([
    {
      id: 1,
      catName: "surfboards",
      imgURL: 'https://images.pexels.com/photos/1753689/pexels-photo-1753689.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      link: "/surfproducts"
    },
    {
      id: 2,
      catName: "kitesurf",
      imgURL: 'https://images.pexels.com/photos/1604746/pexels-photo-1604746.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: "/kiteproducts"
    },
    {
      id: 3,
      catName: "wetsuits",
      imgURL: 'https://media.istockphoto.com/id/1336953432/es/foto/mujer-sonriente-se-sienta-en-la-tabla-de-wakesurf-y-monta-la-ola-y-toca-las-olas-con-una-mano.jpg?s=612x612&w=0&k=20&c=0MxBajjP5FjFEew6OtIEfdvDVMAqNgekdXSCCgZBUpE=',
      link: "/wetsuits"
    },
    {
      id: 4,
      catName: "swimwear",
      imgURL: 'https://images.pexels.com/photos/414012/pexels-photo-414012.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: "/swimwear"
    },
  ])

    const [surfProducts, setSurfProducts] = useState<Surfboard[]>([
        {
          id: 1,
          category: "surfproducts",
          productName: "Surfboard 1",
          imgURL: "https://contents.mediadecathlon.com/p1740854/k$9a0e806decb46843fe7e81d25f3660d6/sq/tabla-surf-evolutiva-espuma-olaian-900-7-pack-tabla-quillas.jpg?f=3000x3000",
          brand: "Rip Curl",
          description: "string",
          price: 550,
          length: 7,
          boardType: "Soft"
        },
        {
          id: 2,
          category: "surfproducts",
    
          productName: "Surfboard 1",
          imgURL: "https://contents.mediadecathlon.com/p1758427/k$e9f74f04e6e4f4c12547c66b3f70cd83/sq/tabla-surf-malibu-espuma-olaian-500-78-pack-tabla-leash-quillas.jpg?format=auto&f=800x0",
          brand: "Rip Curl",
          description: "string",
          price: 550,
          length: 7,
          boardType: "Soft"
        },
        {
          id: 3,
          category: "surfproducts",
          productName: "Surfboard 1",
          imgURL: "https://contents.mediadecathlon.com/p1740730/k$ff9b79b5e73cdaca7387d285a8955a92/sq/tabla-surf-6-espuma-olaian-500-pack-tabla-leash-quillas.jpg?format=auto&f=800x0",
          brand: "Rip Curl",
          description: "string",
          price: 550,
          length: 7,
          boardType: "Soft"
        },
        {
          id: 4,
          category: "surfproducts",
          productName: "Surfboard 1",
          imgURL: "https://contents.mediadecathlon.com/p2258974/k$63b33029131b7ca5b0d2f74993822583/sq/tabla-surf-malibu-espuma-olaian-500-86-pack-tabla-leash-quillas.jpg?format=auto&f=800x0",
          brand: "Rip Curl",
          description: "string",
          price: 550,
          length: 7,
          boardType: "Soft"
        },
        {
          id: 5,
          category: "surfproducts",
          productName: "Surfboard 1",
          imgURL: "https://contents.mediadecathlon.com/m13224935/k$9f22803ab9ef564f39d82756a6fa0c2d/sq/tabla-surf-longboard-aqss-soulstice-paulownia-xl-96.jpg?format=auto&f=800x0",
          brand: "Rip Curl",
          description: "string",
          price: 550,
          length: 7,
          boardType: "Hard"
        },
        {
          id: 6,
          category: "surfproducts",
          productName: "Surfboard 1",
          imgURL: "https://contents.mediadecathlon.com/m13224983/k$dfc77d712b46f34ffc4aaac38d78242e/sq/tabla-surf-iniciacion-aqss-flying-fish-clearskin-610.jpg?format=auto&f=800x0",
          brand: "Rip Curl",
          description: "string",
          price: 550,
          length: 7,
          boardType: "Hard"
        },
      ]);
    const [kiteProducts, setKiteProducts] = useState<Kite[]>([
        {
          id: 1,
          category: "kiteproducts",
          productName: "Kiteboard 1",
          imgURL: "https://contents.mediadecathlon.com/p1928583/k$734637d89be5f57028961315751e1103/sq/tabla-kitesurf-twintip-500-lightwind-154-x-45-cm-pads-y-straps-incluidos.jpg?format=auto&f=800x0",
          brand: "Rip Curl",
          description: "string",
          price: 550,
          kiteType: "Board"
        },
        {
          id: 2,
          category: "kiteproducts",
    
          productName: "Kiteboard 2",
          imgURL: "https://contents.mediadecathlon.com/p1927520/k$761b01fb79ba52a547f52b31f4e949f4/sq/tabla-kitesurf-twintip-500-carbono-sola-136-x-405-cm.jpg?format=auto&f=800x0",
          brand: "Rip Curl",
          description: "string",
          price: 550,
          kiteType: "Board"
        },
        {
          id: 3,
          category: "kiteproducts",
          productName: "Kiteboard 1",
          imgURL: "https://contents.mediadecathlon.com/p1210743/k$509c5d4b23d10a7e479e93b49f37fec1/sq/producto-ocasion-tabla-kitesurf-orao-twintip-500-hombre-136-x-405-cm.jpg?format=auto&f=800x0",
          brand: "Rip Curl",
          description: "string",
          price: 550,
          kiteType: "Board"
        },
        {
          id: 4,
          category: "kiteproducts",
          productName: "kiteboard 1",
          imgURL: "https://contents.mediadecathlon.com/p1807040/k$7f82a80582d8a795cf5aa3d660a9e02c/sq/cometa-de-traccion-zeruko-25-m2-mandos-de-pilotaje-azul.jpg?format=auto&f=800x0",
          brand: "Rip Curl",
          description: "string",
          price: 550,
          kiteType: "Kite"
        },
        {
          id: 5,
          category: "kiteproducts",
          productName: "Kiteboard 1",
          imgURL: "https://contents.mediadecathlon.com/p1807042/k$aef6029349dcecfc89894fdb03159a63/sq/cometa-traccion-zeruko-45-m2-mandos-pilotaje.jpg?format=auto&f=800x0",
          brand: "Rip Curl",
          description: "string",
          price: 550,
          kiteType: "Kite"
        },
        {
          id: 6,
          category: "kiteproducts",
          productName: "Kiteboard 1",
          imgURL: "https://contents.mediadecathlon.com/p1210587/k$7394d02c84d9b9ba2d0cd566c726bfd5/sq/cometa-traccion-19-m2-barra-verde-fluorescente.jpg?format=auto&f=800x0",
          brand: "Rip Curl",
          description: "string",
          price: 550,
          kiteType: "Kite"
        },
      ]);


      return (
        <DataContext.Provider value={{ categories, setCategories, surfProducts, setSurfProducts, kiteProducts, setKiteProducts }}>
          {children}
        </DataContext.Provider>
      );

}



export const useData = () => {
  const dataContext = React.useContext(DataContext);
  if (dataContext === undefined) {
    throw new Error('Context must be inside a provider')
  }
  return dataContext;
}

