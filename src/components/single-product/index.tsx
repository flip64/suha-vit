  
import ProductSlider from "./ProductSlider";
import SingleProductArea from "./SingleProductArea";
import HeaderTwo from "../../layouts/HeaderTwo";
import Footer from "../../layouts/Footer";

const SingleProduct = () => {
	return (
		<>
			<HeaderTwo links="shop-grid" title="Single Product" />
			<div className="page-content-wrapper">
				<ProductSlider />
				<SingleProductArea />
			</div>
			<div className="internet-connection-status" id="internetStatus"></div>
			<Footer />
		</>
	);
};

export default SingleProduct;
