import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
		name: "Barcelona Kit",
		category: "Jersey",
		imgURL:
			"https://github.com/sach10-create/Nova-Barca-Store/blob/dev/assets/barca.png",
		price: 2999,
		mrp: 5999,
		discountPercent: 50,
		discount: 3000,
  },
  {
    _id: uuid(),
		name: "Barcelona Kit",
		category: "Away Kit",
		imgURL:
			"https://github.com/sach10-create/Nova-Barca-Store/blob/dev/assets/barca.png",
		price: 2999,
		mrp: 5999,
		discountPercent: 50,
		discount: 3000,
  },
  {
    _id: uuid(),
		name: "Barcelona Kit",
		category: "Home Kit",
		imgURL:
			"https://github.com/sach10-create/Nova-Barca-Store/blob/dev/assets/barca.png",
		price: 2999,
		mrp: 5999,
		discountPercent: 50,
		discount: 3000,
  },
];
