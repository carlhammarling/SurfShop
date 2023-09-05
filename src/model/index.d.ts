interface Category {
    id?: number
    catName: string
    imgURL: string
    link: string
}


type BoardType = "Soft" | "Hard";

interface Product {
    id?: number
    category: string
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

