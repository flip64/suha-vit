"use client";

import Footer from "../layouts/Footer";
import HeaderTwo from "../layouts/HeaderTwo";

 

const CheckoutCreditCard = () => {
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
							<div className="pay-credit-card-form">
								<form
									action="/payment-success"
									onSubmit={(e) => e.preventDefault()}
								>
									<div className="mb-3">
										<label htmlFor="cardNumber">Credit Card Number</label>
										<input
											className="form-control"
											type="text"
											id="cardNumber"
											placeholder="1234 ×××× ×××× ××××"
											value=""
										/>
										<small className="ms-1">
											<i className="ti ti-lock-square-rounded me-1"></i>Your
											payment info is stored securely.
											<a className="mx-1" href="#">
												Learn More
											</a>
										</small>
									</div>
									<div className="mb-3">
										<label htmlFor="cardholder">Cardholder Name</label>
										<input
											className="form-control"
											type="text"
											id="cardholder"
											placeholder="SUHA JANNAT"
											value=""
										/>
									</div>
									<div className="row">
										<div className="col-6">
											<div className="mb-3">
												<label htmlFor="expiration">Exp. Date</label>
												<input
													className="form-control"
													type="text"
													id="expiration"
													placeholder="12/20"
													value=""
												/>
											</div>
										</div>
										<div className="col-6">
											<div className="mb-3">
												<label htmlFor="cvvcode">CVV Code</label>
												<input
													className="form-control"
													type="text"
													id="cvvcode"
													placeholder="××××"
													value=""
												/>
											</div>
										</div>
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

export default CheckoutCreditCard;
