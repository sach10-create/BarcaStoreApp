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
		brand : "PUMA",
		type: "Casual Wear",
		imgURL:
			"https://raw.githubusercontent.com/sach10-create/Nova-ui-Component-Library/dev/components/assets/barca.png",
		price: 2999,
		mrp: 5999,
		discountPercent: 50,
		discount: 3000,
  },
  {
    _id: uuid(),
		name: "Barcelona Kit",
		category: "Away Kit",
		brand : "PUMA",
		type: "Jersey",
		imgURL:
			"https://raw.githubusercontent.com/sach10-create/Nova-ui-Component-Library/dev/components/assets/barca.png",
		price: 3999,
		mrp: 5999,
		discountPercent: 60,
		discount: 3000,
  },
  {
    _id: uuid(),
		name: "Barcelona Kit",
		brand : "PUMA",
		type: "Jersey",
		category: "Home Kit",
		imgURL:
			"https://raw.githubusercontent.com/sach10-create/Nova-ui-Component-Library/dev/components/assets/barca.png",
		price: 4999,
		mrp: 5999,
		discountPercent: 70,
		discount: 3000,
  },
];
