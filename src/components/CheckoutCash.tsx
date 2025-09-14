import { Link } from "react-router-dom";
import HeaderTwo from "../layouts/HeaderTwo";
import Footer from "../layouts/Footer";

 

const CheckoutCash = () => {
	return (
		<>
			<HeaderTwo links="checkout-payment" title="Cash - COD" />

			<div className="page-content-wrapper">
				<div className="container">
					<div className="checkout-wrapper-area py-3">
						<div className="credit-card-info-wrapper">
							<img
								className="d-block mb-4"
								src="/assets/img/bg-img/credit-card.png"
								alt=""
							/>
							<div className="cod-info text-center mb-3">
								<p>
									Pay when you receive your products. Lorem ipsum dolor sit amet
									consectetur adipisicing elit. Et qui nam perferendis.
								</p>
							</div>
							<Link
								className="btn btn-primary btn-lg w-100"
								to="/payment-success"
							>
								Order Now
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="internet-connection-status" id="internetStatus"></div>

			<Footer />
		</>
	);
};

export default CheckoutCash;
