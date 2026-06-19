const reslist = [
  {
    id: "101",
    name: "La Pino'z Pizza",
    promoted: true,
    deliveryTime: "30 mins",
    rating: "4.3",
    cuisines: ["Pizza", "Italian", "Fast Food"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    menu: [
      {
        category: "Pizzas",
        items: [
          { id: 1, name: "Margherita Pizza", price: 199 },
          { id: 2, name: "Farmhouse Pizza", price: 299 },
        ],
      },
      {
        category: "Garlic Bread",
        items: [{ id: 3, name: "Cheese Garlic Bread", price: 149 }],
      },
    ],
  },
  {
    id: "102",
    name: "Biryani By Kilo",
    promoted: false,
    deliveryTime: "35 mins",
    rating: "4.5",
    cuisines: ["Biryani", "North Indian", "Mughlai"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    menu: [
      {
        category: "Biryani",
        items: [
          { id: 1, name: "Chicken Dum Biryani", price: 349 },
          { id: 2, name: "Hyderabadi Biryani", price: 399 },
        ],
      },
      {
        category: "Beverages",
        items: [{ id: 3, name: "Sweet Lassi", price: 99 }],
      },
    ],
  },
  {
    id: "103",
    name: "KFC",
    promoted: true,
    deliveryTime: "25 mins",
    rating: "4.1",
    cuisines: ["Chicken", "Burgers", "Fast Food"],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    menu: [
      {
        category: "Chicken Buckets",
        items: [
          { id: 1, name: "Hot & Crispy Bucket", price: 599 },
          { id: 2, name: "Chicken Popcorn", price: 199 },
        ],
      },
      {
        category: "Burgers",
        items: [{ id: 3, name: "Zinger Burger", price: 249 }],
      },
    ],
  },
  {
    id: "104",
    name: "Burger King",
    promoted: false,
    deliveryTime: "20 mins",
    rating: "4.2",
    cuisines: ["Burgers", "American", "Snacks"],
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500",
    menu: [
      {
        category: "Chicken Buckets",
        items: [
          { id: 1, name: "Hot & Crispy Bucket", price: 599 },
          { id: 2, name: "Chicken Popcorn", price: 199 },
        ],
      },
      {
        category: "Burgers",
        items: [{ id: 3, name: "Zinger Burger", price: 249 }],
      },
    ],
  },
  {
    id: "105",
    name: "Subway",
    promoted: false,
    deliveryTime: "28 mins",
    rating: "4.0",
    cuisines: ["Healthy Food", "Sandwiches", "Salads"],
    image: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=500",
    menu: [
      {
        category: "Chicken Buckets",
        items: [
          { id: 1, name: "Hot & Crispy Bucket", price: 599 },
          { id: 2, name: "Chicken Popcorn", price: 199 },
        ],
      },
      {
        category: "Burgers",
        items: [{ id: 3, name: "Zinger Burger", price: 249 }],
      },
    ],
  },
  {
    id: "106",
    name: "Taco Bell",
    promoted: false,
    deliveryTime: "22 mins",
    rating: "4.4",
    cuisines: ["Mexican", "Fast Food", "Snacks"],
    image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=500",
    menu: [
      {
        category: "Chicken Buckets",
        items: [
          { id: 1, name: "Hot & Crispy Bucket", price: 599 },
          { id: 2, name: "Chicken Popcorn", price: 199 },
        ],
      },
      {
        category: "Burgers",
        items: [{ id: 3, name: "Zinger Burger", price: 249 }],
      },
    ],
  },
  {
    id: "107",
    name: "Domino's Pizza",
    promoted: false,
    deliveryTime: "27 mins",
    rating: "4.1",
    cuisines: ["Pizza", "Italian", "Pastas"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    menu: [
      {
        category: "Chicken Buckets",
        items: [
          { id: 1, name: "Hot & Crispy Bucket", price: 599 },
          { id: 2, name: "Chicken Popcorn", price: 199 },
        ],
      },
      {
        category: "Burgers",
        items: [{ id: 3, name: "Zinger Burger", price: 249 }],
      },
    ],
  },
  {
    id: "108",
    name: "Bikanervala",
    promoted: false,
    deliveryTime: "30 mins",
    rating: "4.3",
    cuisines: ["North Indian", "Mithai", "Snacks"],
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500",
    menu: [
      {
        category: "Chicken Buckets",
        items: [
          { id: 1, name: "Hot & Crispy Bucket", price: 599 },
          { id: 2, name: "Chicken Popcorn", price: 199 },
        ],
      },
      {
        category: "Burgers",
        items: [{ id: 3, name: "Zinger Burger", price: 249 }],
      },
    ],
  },
  {
    id: "109",
    name: "Bansi Vaishno Dhaba",
    promoted: false,
    deliveryTime: "18 mins",
    rating: "4.6",
    cuisines: ["Punjabi", "North Indian"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500",
    menu: [
      {
        category: "Chicken Buckets",
        items: [
          { id: 1, name: "Hot & Crispy Bucket", price: 599 },
          { id: 2, name: "Chicken Popcorn", price: 199 },
        ],
      },
      {
        category: "Burgers",
        items: [{ id: 3, name: "Zinger Burger", price: 249 }],
      },
    ],
  },
  {
    id: "110",
    name: "McDonald's",
    promoted: false,
    deliveryTime: "26 mins",
    rating: "4.2",
    cuisines: ["Burgers", "Fast Food"],
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500",
    menu: [
      {
        category: "Chicken Buckets",
        items: [
          { id: 1, name: "Hot & Crispy Bucket", price: 599 },
          { id: 2, name: "Chicken Popcorn", price: 199 },
        ],
      },
      {
        category: "Burgers",
        items: [{ id: 3, name: "Zinger Burger", price: 249 }],
      },
    ],
  },
  {
    id: "116",
    name: "Pizza Hut",
    promoted: false,
    deliveryTime: "32 mins",
    rating: "4.0",
    cuisines: ["Pizza", "Italian"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
    menu: [
      {
        category: "Chicken Buckets",
        items: [
          { id: 1, name: "Hot & Crispy Bucket", price: 599 },
          { id: 2, name: "Chicken Popcorn", price: 199 },
        ],
      },
      {
        category: "Burgers",
        items: [{ id: 3, name: "Zinger Burger", price: 249 }],
      },
    ],
  },
  {
    id: "118",
    name: "Haldiram's",
    promoted: false,
    deliveryTime: "26 mins",
    rating: "4.4",
    cuisines: ["North Indian", "Sweets"],
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500",
    menu: [
      {
        category: "Chicken Buckets",
        items: [
          { id: 1, name: "Hot & Crispy Bucket", price: 599 },
          { id: 2, name: "Chicken Popcorn", price: 199 },
        ],
      },
      {
        category: "Burgers",
        items: [{ id: 3, name: "Zinger Burger", price: 249 }],
      },
    ],
  },
  {
    id: "119",
    name: "Wow! Momo",
    promoted: false,
    deliveryTime: "20 mins",
    rating: "4.1",
    cuisines: ["Momos", "Tibetan"],
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500",
    menu: [
      {
        category: "Chicken Buckets",
        items: [
          { id: 1, name: "Hot & Crispy Bucket", price: 599 },
          { id: 2, name: "Chicken Popcorn", price: 199 },
        ],
      },
      {
        category: "Burgers",
        items: [{ id: 3, name: "Zinger Burger", price: 249 }],
      },
    ],
  },
  {
    id: "120",
    name: "Cafe Coffee Day",
    promoted: false,
    deliveryTime: "27 mins",
    rating: "4.0",
    cuisines: ["Cafe", "Beverages"],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
    menu: [
      {
        category: "Chicken Buckets",
        items: [
          { id: 1, name: "Hot & Crispy Bucket", price: 599 },
          { id: 2, name: "Chicken Popcorn", price: 199 },
        ],
      },
      {
        category: "Burgers",
        items: [{ id: 3, name: "Zinger Burger", price: 249 }],
      },
    ],
  },
  {
    id: "121",
    name: "Starbucks",
    promoted: false,
    deliveryTime: "29 mins",
    rating: "4.6",
    cuisines: ["Cafe", "Coffee"],
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500",
    menu: [
      {
        category: "Chicken Buckets",
        items: [
          { id: 1, name: "Hot & Crispy Bucket", price: 599 },
          { id: 2, name: "Chicken Popcorn", price: 199 },
        ],
      },
      {
        category: "Burgers",
        items: [{ id: 3, name: "Zinger Burger", price: 249 }],
      },
    ],
  },
];

export default reslist;
