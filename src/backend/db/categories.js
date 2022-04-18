import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    featuredCategories: [
      {
        _id: uuid(),
        name: "Training kit",
        discountOffer: "Up to 50-70% Off",
      },
      {
        _id: uuid(),
        name: "Jersey",
        discountOffer: "Up to 50-70% Off",
      },
      {
        _id: uuid(),
        name: "Away Kit",
        discountOffer: "Up to 50-70% Off",
      },
      {
        _id: uuid(),
        name: "Home Kit",
        discountOffer: "Up to 10-20% Off",
      },
    ],
  },
];
