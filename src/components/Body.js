import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import mockData from "../utils/mockData";

const Body = () => {
  const [allRestaurants] = useState(mockData);
  const [listofRestaurants, setListofRestaurants] = useState(mockData);
  const [searchText, setSearchText] = useState("");

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

  if (!listofRestaurants.length) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button onClick={handleSearch}>Search</button>
        </div>

        <button className="filter-btn" onClick={handleTopRated}>
          Top Rated Restaurant
        </button>

        <button className="filter-btn" onClick={handleReset}>
          Reset
        </button>
      </div>

      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={`/restaurants/${restaurant.id}`}
            className="res-link"
          >
            <RestaurantCard {...restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
