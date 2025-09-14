"use client";

import { useEffect } from "react";
import Footer from "../layouts/Footer";
import HeaderTwo from "../layouts/HeaderTwo";



const Support = () => {
	 

	useEffect(() => {
		if (typeof window !== 'undefined') {
			import('bootstrap/dist/js/bootstrap.bundle.min.js');
		}
	}, []);


	return (
		<>
			<HeaderTwo links="home" title="Support" />
			<div className="page-content-wrapper">
				<div className="container">
					{/* <!-- Support Wrapper--> */}
					<div className="support-wrapper py-3">
						<div className="card">
							<div className="card-body">
								<h5 className="faq-heading text-center">
									How can we help you with?
								</h5>
								{/* <!-- Search Form--> */}
								<form
									className="faq-search-form"
									onSubmit={(e) => e.preventDefault()}
								>
									<input
										className="form-control"
										type="search"
										name="search"
										placeholder="Search"
									/>
									<button type="submit">
										<i className="ti ti-search"></i>
									</button>
								</form>
							</div>
						</div>
						{/* <!-- Accordian Area Wrapper--> */}
						<div className="accordian-area-wrapper mt-3">
							{/* <!-- Accordian Card--> */}
							<div className="card accordian-card">
								<div className="card-body">
									<h5 className="accordian-title">For Buyers</h5>
									<div className="accordion" id="accordion1">
										{/* <!-- Single Accordian--> */}
										<div className="accordian-header" id="headingOne">
											<button
												className="d-flex align-items-center justify-content-between w-100 collapsed btn"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne"
												aria-expanded="false"
												aria-controls="collapseOne"
											>
												<span>
													<i className="ti ti-bike"></i>How to get started?
												</span>
												<i className="ti ti-arrow-down"></i>
											</button>
										</div>
										<div
											className="collapse"
											id="collapseOne"
											aria-labelledby="headingOne"
											data-bs-parent="#accordion1"
										>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Libero excepturi tempore exercitationem porro
												dignissimos.
											</p>
										</div>
										{/* <!-- Single Accordian--> */}
										<div className="accordian-header" id="headingTwo">
											<button
												className="d-flex align-items-center justify-content-between w-100 collapsed btn"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseTwo"
												aria-expanded="false"
												aria-controls="collapseTwo"
											>
												<span>
													<i className="ti ti-shopping-cart-cog"></i>How to buy
													a product?
												</span>
												<i className="ti ti-arrow-down"></i>
											</button>
										</div>
										<div
											className="collapse"
											id="collapseTwo"
											aria-labelledby="headingTwo"
											data-bs-parent="#accordion1"
										>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Libero excepturi tempore exercitationem porro
												dignissimos.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- Accordian Area Wrapper--> */}
						<div className="accordian-area-wrapper mt-3">
							{/* <!-- Accordian Card--> */}
							<div className="card accordian-card seller-card">
								<div className="card-body">
									<h5 className="accordian-title">For Authors</h5>
									<div className="accordion" id="accordion2">
										{/* <!-- Single Accordian--> */}
										<div className="accordian-header" id="headingThree">
											<button
												className="d-flex align-items-center justify-content-between w-100 collapsed btn"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseThree"
												aria-expanded="false"
												aria-controls="collapseThree"
											>
												<span>
													<i className="ti ti-cloud-down"></i>How can upload a
													product?
												</span>
												<i className="ti ti-arrow-down"></i>
											</button>
										</div>
										<div
											className="collapse"
											id="collapseThree"
											aria-labelledby="headingThree"
											data-bs-parent="#accordion2"
										>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Libero excepturi tempore exercitationem porro
												dignissimos.
											</p>
										</div>
										{/* <!-- Single Accordian--> */}
										<div className="accordian-header" id="headingFour">
											<button
												className="d-flex align-items-center justify-content-between w-100 collapsed btn"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseFour"
												aria-expanded="false"
												aria-controls="collapseFour"
											>
												<span>
													<i className="ti ti-currency-dollar"></i>Commission
													structure
												</span>
												<i className="ti ti-arrow-down"></i>
											</button>
										</div>
										<div
											className="collapse"
											id="collapseFour"
											aria-labelledby="headingFour"
											data-bs-parent="#accordion2"
										>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Libero excepturi tempore exercitationem porro
												dignissimos.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- Accordian Area Wrapper--> */}
						<div className="accordian-area-wrapper mt-3">
							{/* <!-- Accordian Card--> */}
							<div className="card accordian-card others-card">
								<div className="card-body">
									<h5 className="accordian-title">Others</h5>
									<div className="accordion" id="accordion3">
										{/* <!-- Single Accordian--> */}
										<div className="accordian-header" id="headingFive">
											<button
												className="d-flex align-items-center justify-content-between w-100 collapsed btn"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseFive"
												aria-expanded="false"
												aria-controls="collapseFive"
											>
												<span>
													<i className="ti ti-arrow-right"></i>How to return a
													product?
												</span>
												<i className="ti ti-arrow-down"></i>
											</button>
										</div>
										<div
											className="collapse"
											id="collapseFive"
											aria-labelledby="headingFive"
											data-bs-parent="#accordion3"
										>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Libero excepturi tempore exercitationem porro
												dignissimos.
											</p>
										</div>
										{/* <!-- Single Accordian--> */}
										<div className="accordian-header" id="headingSix">
											<button
												className="d-flex align-items-center justify-content-between w-100 collapsed btn"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseSix"
												aria-expanded="false"
												aria-controls="collapseSix"
											>
												<span>
													<i className="ti ti-face-id-error"></i>My product is
													misleading?
												</span>
												<i className="ti ti-arrow-down"></i>
											</button>
										</div>
										<div
											className="collapse"
											id="collapseSix"
											aria-labelledby="headingSix"
											data-bs-parent="#accordion3"
										>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Libero excepturi tempore exercitationem porro
												dignissimos.
											</p>
										</div>
									</div>
								</div>
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

export default Support;
