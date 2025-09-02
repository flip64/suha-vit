"use client"; 

const OffcanvasTwo = ({ handleShow, show }: any) => {
	return (
		<>
			<div
				className={`offcanvas offcanvas-start suha-filter-offcanvas-wrap ${
					show ? "show" : ""
				}`}
				tabIndex={-1}
				id="suhaFilterOffcanvas"
				aria-labelledby="suhaFilterOffcanvasLabel"
			>
				<button
					onClick={handleShow}
					className="btn-close text-reset"
					type="button"
					data-bs-dismiss="offcanvas"
					aria-label="Close"
				></button>

				<div className="offcanvas-body py-5">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="widget catagory mb-4">
									<h6 className="widget-title mb-2">Brand</h6>
									<div className="widget-desc">
										<div className="form-check">
											<input
												className="form-check-input"
												id="zara"
												type="checkbox"
												defaultChecked
											/>
											<label className="form-check-label" htmlFor="zara">
												Zara
											</label>
										</div>

										<div className="form-check">
											<input
												className="form-check-input"
												id="Gucci"
												type="checkbox"
											/>
											<label className="form-check-label" htmlFor="Gucci">
												Gucci
											</label>
										</div>

										<div className="form-check">
											<input
												className="form-check-input"
												id="Addidas"
												type="checkbox"
											/>
											<label className="form-check-label" htmlFor="Addidas">
												Addidas
											</label>
										</div>

										<div className="form-check">
											<input
												className="form-check-input"
												id="Nike"
												type="checkbox"
											/>
											<label className="form-check-label" htmlFor="Nike">
												Nike
											</label>
										</div>

										<div className="form-check">
											<input
												className="form-check-input"
												id="Denim"
												type="checkbox"
											/>
											<label className="form-check-label" htmlFor="Denim">
												Denim
											</label>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="widget color mb-4">
									<h6 className="widget-title mb-2">Color Family</h6>
									<div className="widget-desc">
										<div className="form-check">
											<input
												className="form-check-input"
												id="Purple"
												type="checkbox"
												defaultChecked
											/>
											<label className="form-check-label" htmlFor="Purple">
												Purple
											</label>
										</div>

										<div className="form-check">
											<input
												className="form-check-input"
												id="Black"
												type="checkbox"
											/>
											<label className="form-check-label" htmlFor="Black">
												Black
											</label>
										</div>

										<div className="form-check">
											<input
												className="form-check-input"
												id="White"
												type="checkbox"
											/>
											<label className="form-check-label" htmlFor="White">
												White
											</label>
										</div>

										<div className="form-check">
											<input
												className="form-check-input"
												id="Red"
												type="checkbox"
											/>
											<label className="form-check-label" htmlFor="Red">
												Red
											</label>
										</div>

										<div className="form-check">
											<input
												className="form-check-input"
												id="Pink"
												type="checkbox"
											/>
											<label className="form-check-label" htmlFor="Pink">
												Pink
											</label>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="widget size mb-4">
									<h6 className="widget-title mb-2">Size</h6>
									<div className="widget-desc">
										<div className="form-check">
											<input
												className="form-check-input"
												id="XtraLarge"
												type="checkbox"
												defaultChecked
											/>
											<label className="form-check-label" htmlFor="XtraLarge">
												Xtra Large
											</label>
										</div>

										<div className="form-check">
											<input
												className="form-check-input"
												id="Large"
												type="checkbox"
											/>
											<label className="form-check-label" htmlFor="Large">
												Large
											</label>
										</div>

										<div className="form-check">
											<input
												className="form-check-input"
												id="medium"
												type="checkbox"
											/>
											<label className="form-check-label" htmlFor="medium">
												Medium
											</label>
										</div>

										<div className="form-check">
											<input
												className="form-check-input"
												id="Small"
												type="checkbox"
											/>
											<label className="form-check-label" htmlFor="Small">
												Small
											</label>
										</div>

										<div className="form-check">
											<input
												className="form-check-input"
												id="ExtraSmall"
												type="checkbox"
											/>
											<label className="form-check-label" htmlFor="ExtraSmall">
												Extra Small
											</label>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="widget ratings mb-4">
									<h6 className="widget-title mb-2">Ratings</h6>
									<div className="widget-desc">
										<div className="form-check">
											<input
												className="form-check-input"
												id="5star"
												type="checkbox"
												defaultChecked
											/>
											<label className="form-check-label" htmlFor="5star">
												<i className="ti ti-star-filled text-warning"></i>
												<i className="ti ti-star-filled text-warning"></i>
												<i className="ti ti-star-filled text-warning"></i>
												<i className="ti ti-star-filled text-warning"></i>
												<i className="ti ti-star-filled text-warning"></i>
											</label>
										</div>

										<div className="form-check">
											<input
												className="form-check-input"
												id="4star"
												type="checkbox"
											/>
											<label className="form-check-label" htmlFor="4star">
												<i className="ti ti-star-filled text-warning"></i>
												<i className="ti ti-star-filled text-warning"></i>
												<i className="ti ti-star-filled text-warning"></i>
												<i className="ti ti-star-filled text-warning"></i>
												<i className="ti ti-star-filled text-secondary"></i>
											</label>
										</div>

										<div className="form-check">
											<input
												className="form-check-input"
												id="3star"
												type="checkbox"
											/>
											<label className="form-check-label" htmlFor="3star">
												<i className="ti ti-star-filled text-warning"></i>
												<i className="ti ti-star-filled text-warning"></i>
												<i className="ti ti-star-filled text-warning"></i>
												<i className="ti ti-star-filled text-secondary"></i>
												<i className="ti ti-star-filled text-secondary"></i>
											</label>
										</div>

										<div className="form-check">
											<input
												className="form-check-input"
												id="2star"
												type="checkbox"
											/>
											<label className="form-check-label" htmlFor="2star">
												<i className="ti ti-star-filled text-warning"></i>
												<i className="ti ti-star-filled text-warning"></i>
												<i className="ti ti-star-filled text-secondary"></i>
												<i className="ti ti-star-filled text-secondary"></i>
												<i className="ti ti-star-filled text-secondary"></i>
											</label>
										</div>

										<div className="form-check">
											<input
												className="form-check-input"
												id="1star"
												type="checkbox"
											/>
											<label className="form-check-label" htmlFor="1star">
												<i className="ti ti-star-filled text-warning"></i>
												<i className="ti ti-star-filled text-secondary"></i>
												<i className="ti ti-star-filled text-secondary"></i>
												<i className="ti ti-star-filled text-secondary"></i>
												<i className="ti ti-star-filled text-secondary"></i>
											</label>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="widget payment-type mb-4">
									<h6 className="widget-title mb-2">Payment Type</h6>
									<div className="widget-desc">
										<div className="form-check">
											<input
												className="form-check-input"
												id="cod"
												type="checkbox"
												defaultChecked
											/>
											<label className="form-check-label" htmlFor="cod">
												Cash On Delivery
											</label>
										</div>

										<div className="form-check">
											<input
												className="form-check-input"
												id="paypal"
												type="checkbox"
											/>
											<label className="form-check-label" htmlFor="paypal">
												Paypal
											</label>
										</div>

										<div className="form-check">
											<input
												className="form-check-input"
												id="checkpayment"
												type="checkbox"
											/>
											<label
												className="form-check-label"
												htmlFor="checkpayment"
											>
												Check Payment
											</label>
										</div>

										<div className="form-check">
											<input
												className="form-check-input"
												id="payonner"
												type="checkbox"
											/>
											<label className="form-check-label" htmlFor="payonner">
												Payonner
											</label>
										</div>

										<div className="form-check">
											<input
												className="form-check-input"
												id="mobbanking"
												type="checkbox"
											/>
											<label className="form-check-label" htmlFor="mobbanking">
												Mobile Banking
											</label>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="widget price-range mb-4">
									<h6 className="widget-title mb-2">Price Range</h6>
									<div className="widget-desc">
										<div className="row g-2">
											<div className="col-6">
												<div className="form-floating">
													<input
														className="form-control"
														id="floatingInput"
														type="text"
														placeholder="1"
														value="1"
													/>
													<label htmlFor="floatingInput">Min</label>
												</div>
											</div>
											<div className="col-6">
												<div className="form-floating">
													<input
														className="form-control"
														id="floatingInput"
														type="text"
														placeholder="1"
														value="5000"
													/>
													<label htmlFor="floatingInput">Max</label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="apply-filter-btn">
									<a className="btn btn-lg btn-success w-100" href="#">
										Apply Filter
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OffcanvasTwo;
