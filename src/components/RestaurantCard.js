import { IMG_URL } from "../utils/Constants";

const RestaurantCard = ({ name, cuisines, deliveryTime, rating, image }) => {
  return (
    <div className="res-card">
      <img className="res-logo" src={image} alt={name} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>⭐ {rating}</h5>
      <h5>{deliveryTime}</h5>
    </div>
  );
};

export default RestaurantCard;
