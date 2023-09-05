import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = (props: Product) => {
  return (
    <div className="productCardWrapper">
      <div
        className="productImgWrapper"
        style={{ backgroundImage: `url(${props.imgURL})` }}
      ></div>
      <div className="productInfo">
        <h2>
          {props.productName} - {props.brand}
        </h2>
        <p>{props.description}</p>
        <p>€ {props.price}</p>
      </div>
      <div className="productButton">VIEW MORE</div>
      <Link className="blockLink" to={`/${props.category}/${props.id}`}></Link>
    </div>
  );
};

export default ProductCard;
