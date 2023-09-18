import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = (props: AllProduct) => {
  return (
    <div className="productCardWrapper">
      <div
        className="productImgWrapper"
        style={{ backgroundImage: `url(${props.imgURL})` }}
      ></div>
      <div className="productInfo">
        <h2>
          {props.brand.toUpperCase()}
        </h2>
        {/* Surf */}
        {props.category === "surfproducts" && <p className="description">{props.productName} {props.length}ft {props.boardType.toLowerCase()}board.</p>}
        {/* Kite */}
        {props.category === "kiteproducts" && <p className="description">{props.productName} {props.kiteType.toLowerCase()}.</p>}
        <p className="price">{props.price} EUR</p>
        
      </div>
      <div className="productButton">VIEW MORE</div>
      <Link className="blockLink" to={`/${props.category}/${props.id}`}></Link>
    </div>
  );
};

export default ProductCard;
