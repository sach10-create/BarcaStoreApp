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
		name: "Away Kit",
		category: "Away Kit",
		brand : "Adidas",
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
		name: "Home Kit",
		brand : "Woodland",
		type: "Jersey",
		category: "Home Kit",
		imgURL:
			"https://raw.githubusercontent.com/sach10-create/Nova-ui-Component-Library/dev/components/assets/barca.png",
		price: 4999,
		mrp: 5999,
		discountPercent: 70,
		discount: 3000,
  },

  {
    _id: uuid(),
		name: "Training Kit",
		brand : "BATA",
		type: "Jersey",
		category: "Training kit",
		imgURL:
			"https://raw.githubusercontent.com/sach10-create/Nova-ui-Component-Library/dev/components/assets/barca.png",
		price: 7199,
		mrp: 7999,
		discountPercent: 10,
		discount: 800,
  },
  {
    _id: uuid(),
		name: "Training Kit",
		brand : "Roadster",
		type: "Jersey",
		category: "Training kit",
		imgURL:
			"https://raw.githubusercontent.com/sach10-create/Nova-ui-Component-Library/dev/components/assets/barca.png",
		price: 2000,
		mrp: 2500,
		discountPercent: 20,
		discount: 50,
  },
  {
    _id: uuid(),
		name: "Jersey",
		brand : "PUMA",
		type: "Jersey",
		category: "Jersey",
		imgURL:
			"https://raw.githubusercontent.com/sach10-create/Nova-ui-Component-Library/dev/components/assets/barca.png",
		price: 1000,
		mrp: 1500,
		discountPercent: 10,
		discount: 500,
  },
  {
    _id: uuid(),
		name: "Home Kit",
		brand : "Adidas",
		type: "Jersey",
		category: "Home kit",
		imgURL:
			"https://raw.githubusercontent.com/sach10-create/Nova-ui-Component-Library/dev/components/assets/barca.png",
		price: 3500,
		mrp: 7000,
		discountPercent: 50,
		discount: 3500,
  },
  {
    _id: uuid(),
		name: "Away Kit",
		brand : "U.S. Polo",
		type: "Jersey",
		category: "Away kit",
		imgURL:
			"https://raw.githubusercontent.com/sach10-create/Nova-ui-Component-Library/dev/components/assets/barca.png",
		price: 4999,
		mrp: 5999,
		discountPercent: 70,
		discount: 3000,
  },

];
