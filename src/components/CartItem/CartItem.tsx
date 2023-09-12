import React from 'react'
import './CartItem.scss'
import { useData } from '../../Context/DataContext'

const CartItem = ({ item, index}: CartItemProps) => {

  const { deleteCartItem, incrementCartItem, decrementCartItem } = useData()

  return (
    <div className="CartItem" key={index}>
              <div
                className="productImgWrapper"
                style={{ backgroundImage: `url(${item.product.imgURL})` }}
              ></div>
              <div className='itemInfo'>
                {item.product.category === "surfproducts" && (
                  <h2 className="description">
                    {item.product.brand.toUpperCase()}{" "}
                    {item.product.productName.toUpperCase()}{" "}
                    {item.product.length}
                    FT {item.product.boardType.toUpperCase()}BOARD
                  </h2>
                )}
                {item.product.category === "kiteproducts" && (
                  <h2 className="description">
                    {item.product.brand.toUpperCase()}{" "}
                    {item.product.productName.toUpperCase()}{" "}
                    {item.product.kiteType.toUpperCase()}
                  </h2>
                )}

                <p className="extraInfo">
                  Quantity: <span>{item.quantity}</span>
                </p>
                {item.product.category === "surfproducts" && (
                  <p className="extraInfo">
                    Length: <span>{item.product.length}ft</span>
                  </p>
                )}
                <p className="extraInfo">
                  Price: <span className="price">{item.product.price * item.quantity} EUR</span>
                </p>
              </div>
              <div className="itemActions">
              <i onClick={() => deleteCartItem(index)} className="fa-solid fa-xmark"></i>
              <i onClick={() => incrementCartItem(index)} className="fa-solid fa-plus"></i>
              <i onClick={() => decrementCartItem(index)} className="fa-solid fa-minus"></i>
              </div>
            </div>
  )
}

export default CartItem