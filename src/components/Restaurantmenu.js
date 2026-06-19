import { useParams } from "react-router-dom";
import mockData from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
const Restaurantmenu = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const res = mockData.find((restaurant) => restaurant.id === id);

      setRestaurant(res);
    }, 1000);
  }, [id]);

  if (restaurant === null) {
    return <Shimmer />;
  }

  if (restaurant === undefined) {
    return <h1>Restaurant Not Found</h1>;
  }

  return (
    <div className="p-4 m-2 border border-solid border-black rounded-md shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
      <h1 className="text-3xl font-bold">{restaurant.name}</h1>

      <h2 className="my-2">⭐ {restaurant.rating}</h2>

      {restaurant.menu.map((category) => (
        <div key={category.category} className="my-4">
          <h2 className="font-bold text-xl">{category.category}</h2>

          {category.items.map((item) => (
            <div key={item.id} className="flex justify-between border-b p-2">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Restaurantmenu;
