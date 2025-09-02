interface DataType {
	id: number;
	img: string;
	title: string;
	new_price: number;
	old_price: number;
	ratting: number;
}

const featured_products: DataType[] = [
	{
		id: 1,
		img: "/assets/img/product/14.png",
		title: "Blue Skateboard",
		new_price: 39,
		old_price: 89,
		ratting: 5,
	},
	{
		id: 2,
		img: "/assets/img/product/15.png",
		title: "Travel Bag",
		new_price: 14.7,
		old_price: 21,
		ratting: 5,
	},
	{
		id: 3,
		img: "/assets/img/product/16.png",
		title: "Cotton T-shirts",
		new_price: 3.69,
		old_price: 5,
		ratting: 5,
	},
	{
		id: 4,
		img: "/assets/img/product/21.png",
		title: "ECG Rice Cooker",
		new_price: 9.99,
		old_price: 13,
		ratting: 5,
	},
	{
		id: 5,
		img: "/assets/img/product/20.png",
		title: "Beauty Cosmetics",
		new_price: 5.99,
		old_price: 8,
		ratting: 5,
	},
	{
		id: 6,
		img: "/assets/img/product/19.png",
		title: "Basketball",
		new_price: 16,
		old_price: 20,
		ratting: 5,
	},
];

export default featured_products;
