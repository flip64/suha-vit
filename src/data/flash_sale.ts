interface DataType {
	id: number;
	color: string;
	img: string;
	new_price: number;
	old_price: number;
	discount: number;
	test: string;
	title: string;
}

const flash_sale: DataType[] = [
	{
		id: 1,
		color: "",
		img: "/assets/img/product/1.png",
		new_price: 7.99,
		old_price: 15,
		discount: 33,
		test: "Sold",
		title: "Black Table Lamp",
	},
	{
		id: 2,
		color: "",
		img: "/assets/img/product/2.png",
		new_price: 14,
		old_price: 21,
		discount: 77,
		test: "Sold",
		title: "Black Table Lamp",
	},
	{
		id: 3,
		color: "bg-danger",
		img: "/assets/img/product/3.png",
		new_price: 36,
		old_price: 49,
		discount: 99,
		test: "Sold",
		title: "Black Table Lamp",
	},
	// doplicate
	{
		id: 1,
		color: "",
		img: "/assets/img/product/1.png",
		new_price: 7.99,
		old_price: 15,
		discount: 33,
		test: "Sold",
		title: "Black Table Lamp",
	},
	{
		id: 2,
		color: "",
		img: "/assets/img/product/2.png",
		new_price: 14,
		old_price: 21,
		discount: 77,
		test: "Sold",
		title: "Black Table Lamp",
	},
	{
		id: 3,
		color: "bg-danger",
		img: "/assets/img/product/3.png",
		new_price: 36,
		old_price: 49,
		discount: 99,
		test: "Sold",
		title: "Black Table Lamp",
	},
	// doplicat
	{
		id: 1,
		color: "",
		img: "/assets/img/product/1.png",
		new_price: 7.99,
		old_price: 15,
		discount: 33,
		test: "Sold",
		title: "Black Table Lamp",
	},
	{
		id: 2,
		color: "",
		img: "/assets/img/product/2.png",
		new_price: 14,
		old_price: 21,
		discount: 77,
		test: "Sold",
		title: "Black Table Lamp",
	},
	{
		id: 3,
		color: "bg-danger",
		img: "/assets/img/product/3.png",
		new_price: 36,
		old_price: 49,
		discount: 99,
		test: "Sold",
		title: "Black Table Lamp",
	},
	// doplicat
	{
		id: 1,
		color: "",
		img: "/assets/img/product/1.png",
		new_price: 7.99,
		old_price: 15,
		discount: 33,
		test: "Sold",
		title: "Black Table Lamp",
	},
	{
		id: 2,
		color: "",
		img: "/assets/img/product/2.png",
		new_price: 14,
		old_price: 21,
		discount: 77,
		test: "Sold",
		title: "Black Table Lamp",
	},
	{
		id: 3,
		color: "bg-danger",
		img: "/assets/img/product/3.png",
		new_price: 36,
		old_price: 49,
		discount: 99,
		test: "Sold",
		title: "Black Table Lamp",
	},
];

export default flash_sale;
