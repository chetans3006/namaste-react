import { useParams } from "react-router-dom";
import mockData from "../utils/mockData";
import { shimmerMenu } from "../utils/Constants";
const Restaurantmenu = () => {
  const { id } = useParams();

  const restaurant = mockData.find((res) => res.id === id);

  if (!restaurant) {
    return <h1>Restaurant Not Found</h1>;
  }

  return (
    <div className="menu">
      <h1>{restaurant.name}</h1>
      <h2>{restaurant.cuisines.join(", ")}</h2>
      <p>Rating: {restaurant.rating}</p>
      <p>Delivery Time: {restaurant.deliveryTime}</p>
    </div>
  );
};

export default Restaurantmenu;
