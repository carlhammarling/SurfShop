import { Link } from "react-router-dom";
import "./CategoryCard.scss";

const CategoryCard = ({ catName, imgURL, link}: Category) => {
  return (
    <div className="categoryCardWrapper">
      <div className="catImgWrapper" style={{ backgroundImage: `url(${imgURL})` }}></div>
        <Link className="categoryLink" to={link}>
          {catName.toUpperCase()} &nbsp;<i className="fa-solid fa-arrow-right"></i>
        </Link>
    </div>
  );
};

export default CategoryCard;
