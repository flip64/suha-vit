interface DataType {
	id: number;
	img: string;
	category: string;
	stock: number;
}

const collections_products: DataType[] = [
	{
		id: 1,
		img: "/assets/img/product/17.jpg",
		category: "Women",
		stock: 9,
	},
	{
		id: 1,
		img: "/assets/img/product/19.jpg",
		category: "Men",
		stock: 29,
	},
	{
		id: 1,
		img: "/assets/img/product/21.jpg",
		category: "Kids",
		stock: 4,
	},
	{
		id: 1,
		img: "/assets/img/product/22.jpg",
		category: "Gadget",
		stock: 11,
	},
	{
		id: 1,
		img: "/assets/img/product/23.jpg",
		category: "Foods",
		stock: 2,
	},
	{
		id: 1,
		img: "/assets/img/product/24.jpg",
		category: "Sports",
		stock: 5,
	},
];

export default collections_products;
