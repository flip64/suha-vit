interface DataType {
	id: number;
	img: string;
	title: string;
	new_price: number;
	old_price: number;
	ratting: number;
	review_text: number;
}

const best_seller: DataType[] = [
	{
		id: 1,
		img: "/assets/img/product/18.png",
		title: "Nescafe Coffee Jar",
		new_price: 64,
		old_price: 89,
		ratting: 4.88,
		review_text: 39,
	},
	{
		id: 2,
		img: "/assets/img/product/7.png",
		title: "Modern Office Chair",
		new_price: 99,
		old_price: 159,
		ratting: 4.82,
		review_text: 125,
	},
	{
		id: 3,
		img: "/assets/img/product/12.png",
		title: "Beach Sunglasses",
		new_price: 24,
		old_price: 32,
		ratting: 4.89,
		review_text: 63,
	},
	{
		id: 3,
		img: "/assets/img/product/17.png",
		title: "Meow Mix Cat Food",
		new_price: 11.49,
		old_price: 13,
		ratting: 4.78,
		review_text: 1,
	},
];

export default best_seller;
