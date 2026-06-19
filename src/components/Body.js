import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import mockData from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";

const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

const Body = () => {
  const [allRestaurants] = useState(mockData);
  const [listofRestaurants, setListofRestaurants] = useState(mockData);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  const handleSearch = () => {
    const filtered = allRestaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase()),
    );

    setListofRestaurants(filtered);
  };

  const handleTopRated = () => {
    const filtered = allRestaurants.filter((res) => Number(res.rating) > 4);

    setListofRestaurants(filtered);
  };

  const handleReset = () => {
    setListofRestaurants(allRestaurants);
    setSearchText("");
  };

  if (!onlineStatus) {
    return (
      <h1 className="text-2xl font-bold my-2 text-center">
        🔴 You are offline, please check your internet connection!
      </h1>
    );
  }

  if (!listofRestaurants.length) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex m-2 p-2">
        <div>
          <input
            type="text"
            className="m-2 border border-solid border-black rounded-md px-2 py-1"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="px-4 py-1 m-2 bg-blue-100 rounded-md"
          >
            Search
          </button>
        </div>

        <button
          className="px-4 py-1 m-2 bg-blue-100 rounded-md"
          onClick={handleTopRated}
        >
          Top Rated Restaurant
        </button>

        <button
          className="px-4 py-1 m-2 bg-blue-100 rounded-md"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {listofRestaurants.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={`/restaurants/${restaurant.id}`}
            className="res-link"
          >
            {restaurant.promoted ? (
              <PromotedRestaurantCard {...restaurant} />
            ) : (
              <RestaurantCard {...restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
