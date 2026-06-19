import { useEffect, useState } from "react";
import mockData from "../utils/mockData";
const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const res = mockData.find((item) => String(item.id) === String(id));

    setRestaurant(res);
  }, [id]);

  return restaurant;
};

export default useRestaurant;
