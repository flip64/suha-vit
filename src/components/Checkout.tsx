import { Link } from "react-router-dom";
import HeaderTwo from "../layouts/HeaderTwo";
import Count from "./common/Count";
import Footer from "../layouts/Footer";

 

const Checkout = () => {
	return (
		<>
			<HeaderTwo links="cart" title="Billing Information" />

			<div className="page-content-wrapper">
				<div className="container">
					<div className="checkout-wrapper-area py-3">
						<div className="billing-information-card mb-3">
							<div className="card billing-information-title-card">
								<div className="card-body">
									<h6 className="text-center mb-0">Billing Information</h6>
								</div>
							</div>
							<div className="card user-data-card">
								<div className="card-body">
									<div className="single-profile-data d-flex align-items-center justify-content-between">
										<div className="title d-flex align-items-center">
											<i className="ti ti-user"></i>
											<span>Full Name</span>
										</div>
										<div className="data-content">SUHA JANNAT</div>
									</div>
									<div className="single-profile-data d-flex align-items-center justify-content-between">
										<div className="title d-flex align-items-center">
											<i className="ti ti-mail"></i>
											<span>Email Address</span>
										</div>
										<div className="data-content">care@example.com</div>
									</div>
									<div className="single-profile-data d-flex align-items-center justify-content-between">
										<div className="title d-flex align-items-center">
											<i className="ti ti-phone"></i>
											<span>Phone</span>
										</div>
										<div className="data-content">+880 000 111 222</div>
									</div>
									<div className="single-profile-data d-flex align-items-center justify-content-between">
										<div className="title d-flex align-items-center">
											<i className="ti ti-ship"></i>
											<span>Shipping:</span>
										</div>
										<div className="data-content">28/C Green Road, BD</div>
									</div>
									<Link className="btn btn-primary w-100" to="/edit-profile">
										Edit Billing Information
									</Link>
								</div>
							</div>
						</div>

						<div className="shipping-method-choose mb-3">
							<div className="card shipping-method-choose-title-card">
								<div className="card-body">
									<h6 className="text-center mb-0">Shipping Method</h6>
								</div>
							</div>
							<div className="card shipping-method-choose-card">
								<div className="card-body">
									<div className="shipping-method-choose">
										<ul className="ps-0">
											<li>
												<input
													id="fastShipping"
													type="radio"
													name="selector"
													defaultChecked
												/>
												<label htmlFor="fastShipping">
													Fast Shipping<span>1 days delivary for $1.0</span>
												</label>
												<div className="check"></div>
											</li>
											<li>
												<input
													id="normalShipping"
													type="radio"
													name="selector"
												/>
												<label htmlFor="normalShipping">
													Reguler<span>3-7 days delivary for $0.4</span>
												</label>
												<div className="check"></div>
											</li>
											<li>
												<input id="courier" type="radio" name="selector" />
												<label htmlFor="courier">
													Courier<span>5-8 days delivary for $0.3</span>
												</label>
												<div className="check"></div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="card cart-amount-area">
							<div className="card-body d-flex align-items-center justify-content-between">
								<h5 className="total-price mb-0">
									$
									<span className="counter">
										
										<Count number={39.84} />
									</span>
								</h5>
								<Link className="btn btn-primary" to="/checkout-payment">
									Confirm & Pay
								</Link>
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

export default Checkout;
