interface DataType {
	id: number;
	img: string;
	catagory: string;
	title: string;
	user_name: string;
	read_time: string;
	button: string;
}

const blog_data: DataType[] = [
	{
		id: 1,
		img: "/assets/img/bg-img/18.jpg",
		catagory: "Review",
		title: "The 5 best reviews in Suha",
		user_name: "Yasin",
		read_time: "2 min",
		button: "Read More",
	},
	{
		id: 2,
		img: "/assets/img/bg-img/19.jpg",
		catagory: "Shopping",
		title: "The best deals of this week",
		user_name: "Admin",
		read_time: "2 min",
		button: "Read for $0.7",
	},
	{
		id: 3,
		img: "/assets/img/bg-img/20.jpg",
		catagory: "Tips",
		title: "5 tips for buy original products",
		user_name: "Niloy",
		read_time: "5 min",
		button: "Read for $0.9",
	},
	{
		id: 4,
		img: "/assets/img/bg-img/21.jpg",
		catagory: "Offer",
		title: "Mega Deals: Up to 75% discount",
		user_name: "Dolly",
		read_time: "1 min",
		button: "Read More",
	},
	{
		id: 5,
		img: "/assets/img/bg-img/22.jpg",
		catagory: "Trends",
		title: "Bridal shopping is the latest trends of this month",
		user_name: "Sarah",
		read_time: "9 min",
		button: "Read More",
	},
	{
		id: 6,
		img: "/assets/img/bg-img/23.jpg",
		catagory: "News",
		title: "How to easily buy a product",
		user_name: "Suha",
		read_time: "6 min",
		button: "Read for $0.2",
	},
];

export default blog_data;
