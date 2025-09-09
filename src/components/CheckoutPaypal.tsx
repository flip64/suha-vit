"use client";

import Footer from "../layouts/Footer";
import HeaderTwo from "../layouts/HeaderTwo";

 

const CheckoutPaypal = () => {
	return (
		<>
			<HeaderTwo links="checkout-payment" title="PayPal Info" />

			<div className="page-content-wrapper">
				<div className="container">
					{/* <!-- Checkout Wrapper--> */}
					<div className="checkout-wrapper-area py-3">
						<div className="credit-card-info-wrapper">
							<img
								className="d-block mb-4"
								src="/assets/img/bg-img/credit-card.png"
								alt=""
							/>
							<div className="pay-credit-card-form">
								<form
									action="/payment-success"
									onSubmit={(e) => e.preventDefault()}
								>
									<div className="mb-3">
										<label htmlFor="paypalEmail">Email Address</label>
										<input
											className="form-control"
											type="email"
											id="paypalEmail"
											placeholder="paypal@example.com"
											value=""
										/>
										<small className="ms-1">
											<i className="ti ti-lock-square-rounded me-1"></i>
											Secure online payments at the speed of want.
											<a className="mx-1" href="#">
												Learn More
											</a>
										</small>
									</div>
									<div className="mb-3">
										<label htmlFor="paypalPassword">Password</label>
										<input
											className="form-control"
											type="password"
											id="paypalPassword"
											value=""
										/>
									</div>
									<button
										className="btn btn-primary btn-lg w-100"
										type="submit"
									>
										Pay Now
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="internet-connection-status" id="internetStatus"></div>

			<Footer />
		</>
	);
};

export default CheckoutPaypal;
