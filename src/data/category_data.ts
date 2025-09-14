interface DataType {
	id: number;
	icon: string;
	title: string;
}

const category_data: DataType[] = [
	{
		id: 1,
		icon: "quote",
		title: "Review",
	},
	{
		id: 2,
		icon: "basket",
		title: "Shopping",
	},
	{
		id: 3,
		icon: "bulb",
		title: "Tips",
	},
	{
		id: 4,
		icon: "percentage",
		title: "Offer",
	},
	{
		id: 5,
		icon: "cloud",
		title: "Trends",
	},
	{
		id: 6,
		icon: "news",
		title: "News",
	},
];

export default category_data;
