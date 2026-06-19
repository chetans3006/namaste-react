import { IMG_URL } from "../utils/Constants";

const RestaurantCard = ({ name, cuisines, deliveryTime, rating, image }) => {
  return (
    <div className="m-2 p-3 w-[200px] h-[320px] bg-gray-100 rounded-lg shadow-lg hover:bg-inherit hover:shadow-2xl transition duration-300 ease-in-out">
      <img
        className="w-[200px] h-[150px] object-cover rounded-lg"
        src={image}
        alt={name}
      />

      <h3 className="text-md font-bold p-1">{name}</h3>

      <h5 className="text-sm text-gray-600 p-1">{cuisines.join(", ")}</h5>

      <h5 className="text-lg font-bold p-1">⭐ {rating}</h5>

      <h5 className="text-sm text-gray-600 p-1">{deliveryTime}</h5>
    </div>
  );
};
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute z-10 bg-black text-white m-2 px-2 py-1 rounded-md">
          Promoted
        </label>

        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
