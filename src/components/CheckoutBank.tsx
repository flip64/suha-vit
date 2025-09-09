import { Link } from "react-router-dom";
import HeaderTwo from "../layouts/HeaderTwo";
import Footer from "../layouts/Footer";

 

const CheckoutBank = () => {
	return (
		<>
			<HeaderTwo links="checkout-payment" title="Bank Info" />
      
			<div className="page-content-wrapper">
				<div className="container">
					<div className="checkout-wrapper-area py-3">
						<div className="credit-card-info-wrapper">
							<img
								className="d-block mb-4"
								src="/assets/img/bg-img/credit-card.png"
								alt=""
							/>
							<div className="bank-ac-info">
								<p>
									Make your payment directly into our bank account. Please use
									your Order ID as the payment reference. Your order wont be
									shipped until the funds have cleared in our account.
								</p>
								<ul className="list-group mb-3">
									<li className="list-group-item d-flex justify-content-between align-items-center border-0 border-bottom">
										Bank Name<span>Example Bank Ltd.</span>
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center border-0">
										Account Number<span>010 2125 32563 2525</span>
									</li>
								</ul>
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

export default CheckoutBank;
