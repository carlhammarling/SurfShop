import React, { useEffect, useState } from "react";
import { useData } from "../../Context/DataContext";
import "./ProductDetails.scss";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();

  //hämtar hem sökvägen från adressfältet och gör om det till en array med kategori och id.
  const searchProps: string[] = window.location.pathname.split("/");
  const productCategory: string = searchProps[1];
  const index: number = parseInt(searchProps[2]) - 1;

  const data = useData();
  const { addToCart } = useData()
  const [product, setProduct] = useState<AllProduct | undefined>(undefined);

  useEffect(() => {
    if (data && productCategory === "surfproducts") {
      setProduct(data.surfProducts[index]);
    }
    if (data && productCategory === "kiteproducts") {
      setProduct(data.kiteProducts[index]);
    }
  }, [data, productCategory, index]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {product && (
        <div className="surfDetailsWrapper">
          <div className="surfLeft">
            <div
              className="productImgWrapper"
              style={{ backgroundImage: `url(${product.imgURL})` }}
            ></div>
          </div>
          <div className="surfRight">
            <div className="productInfo">
              <h1>{product.brand.toUpperCase()}</h1>
              <div>
              {/* Surf */}
              {product.category === "surfproducts" && (
                <p className="description">
                  {product.productName.toUpperCase()} {product.length}FT{" "}
                  {product.boardType.toUpperCase()}BOARD
                </p>
              )}

              {/* Kite */}
              {product.category === "kiteproducts" && (
                <p className="description">
                  {product.productName.toUpperCase()} {product.kiteType.toUpperCase()}
                </p>
              )}
              <p className="extraInfo">
                Product identification number: {product.id}
              </p>
              </div>


              <p className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </p>
                <div className="priceInfo">

              <p className="price">{product.price} EUR</p>
              <p className="extraInfo">incl. IVA</p>
              <p className="extraInfo">excl. devlivery</p>
                </div>

                <div className="buttons">
                  
                </div>
              <button className="buy"
                onClick={() => addToCart(product.category, product.id)}
              >
                BUY NOW &nbsp;
                <i className="fa-solid fa-arrow-right"></i>
              </button>
              <button className="back" onClick={() => navigate(-1)}>GO BACK &nbsp;<i className="fa-solid fa-arrow-left"></i></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
