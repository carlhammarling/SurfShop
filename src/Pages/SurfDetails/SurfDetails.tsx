import React, { useEffect, useState } from "react";
import { useData } from "../../Context/DataContext";
import "./SurfDetails.scss";

const SurfDetails = () => {
  //hämtar hem sökvägen från adressfältet och gör om det till en array med kategori och id.
  const searchProps: string = window.location.pathname.split("/")[2];
  const index: number = parseInt(searchProps) - 1;

  const data = useData();
  const [product, setProduct] = useState<Surfboard | undefined>(undefined);

  useEffect(() => {
    if (data) {
      setProduct(data.surfProducts[index]);
    }
  }, [data, index]);

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
          <h1>{product.productName}</h1>
          <p>{product.brand}</p>
          <p>{product.boardType}</p>
          <p>{product.description}</p>
          <p>{product.length} ft</p>
          <p>€ {product.price}</p>
          <button onClick={() => localStorage.setItem("buy", product.productName)}>BUY NOW</button>

          {/* <p>{product.length}</p> */}
          </div>
        </div>
      )}
    </>
  );
};

export default SurfDetails;
