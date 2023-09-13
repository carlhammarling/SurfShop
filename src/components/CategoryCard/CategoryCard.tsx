import { Link } from "react-router-dom";
import "./CategoryCard.scss";

const CategoryCard = ({ catName, imgURL, link}: Category) => {
  return (
    <Link to={link} className="categoryCardWrapper">
      <div className="catImgWrapper" style={{ backgroundImage: `url(${imgURL})` }}></div>
        <div className="categoryLink">
          {catName.toUpperCase()} &nbsp;<i className="fa-solid fa-arrow-right"></i>
        </div>
    </Link>
  );
};

export default CategoryCard;
