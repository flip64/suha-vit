 
import Alert from "./common/Alert";
import Search from "./home/Search";
import CtaArea from "./home/CtaArea";
import FlashSale from "./home/FlashSale";
import HeroSlider from "./home/HeroSlider";
import DarkLight from "./common/DarkLight";
import TopProducts from "./home/TopProducts";
import ProductCatagories from "./home/ProductCatagories";
import WeeklyBestSellers from "./home/WeeklyBestSellers";
import DiscountCouponCard from "./home/DiscountCouponCard";
import FeaturedProducts from "./home/FeaturedProducts";
import Collections from "./home/Collections";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const HomePage = () => {
	return (
		<>
			<Header />
			<Alert />
			<div className="page-content-wrapper">
				<Search />
				<HeroSlider />
				<ProductCatagories />
				<FlashSale />
				<DarkLight />
				<TopProducts />
				<CtaArea />
				<WeeklyBestSellers />
				<DiscountCouponCard />
				{/*	<FeaturedProducts /> */}
				<Collections />
			</div>
			<Footer />
		</>
	);
};

export default HomePage;


