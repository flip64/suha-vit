import { Link } from "react-router-dom";

 

const BecomeVendor = () => {
	return (
		<>
			<div className="login-wrapper d-flex align-items-center justify-content-center text-center bg-success">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-10 col-lg-8">
							<h3 className="mb-4 text-white">Become a seller</h3>

							<div className="register-form mt-5">
								<form action="/otp">
									<div className="form-group text-start mb-4">
										<span className="mb-2">Account Type*</span>
										<div className="row">
											<div className="col-6">
												<div className="form-check">
													<input
														className="form-check-input"
														id="personal"
														type="radio"
														name="accountType"
													/>
													<label
														className="form-check-label text-white fz-14"
														htmlFor="personal"
													>
														Personal
													</label>
												</div>
											</div>
											<div className="col-6">
												<div className="form-check">
													<input
														className="form-check-input"
														id="business"
														type="radio"
														name="accountType"
														defaultChecked
													/>
													<label
														className="form-check-label text-white fz-14"
														htmlFor="business"
													>
														Business
													</label>
												</div>
											</div>
										</div>
									</div>
									<div className="form-group text-start mb-4">
										<span>Store Name*</span>
										<label htmlFor="username">
											<i className="ti ti-basket"></i>
										</label>
										<input
											className="form-control"
											id="username"
											type="text"
											placeholder="Designing World"
										/>
									</div>
									<div className="form-group text-start mb-4">
										<span>Location*</span>
										<label htmlFor="location">
											<i className="ti ti-map-pin"></i>
										</label>
										<input
											className="form-control"
											id="location"
											type="text"
											placeholder="New York"
										/>
									</div>
									<div className="form-group text-start mb-4">
										<span>Mobile Number*</span>
										<label htmlFor="mobileNumber">
											<i className="ti ti-phone"></i>
										</label>
										<input
											className="input-psswd form-control"
											id="mobileNumber"
											type="text"
											placeholder="+62 1234 7896 123"
										/>
									</div>
									<div className="form-group text-start mb-4">
										<span>Password*</span>
										<label htmlFor="registerPassword">
											<i className="ti ti-key"></i>
										</label>
										<input
											className="input-psswd form-control"
											id="registerPassword"
											type="password"
											placeholder=""
										/>
									</div>
									<div className="form-group text-start mb-4">
										<div className="form-check">
											<input
												className="form-check-input"
												id="acceptTerms"
												type="checkbox"
												value=""
											/>
											<label
												className="form-check-label fz-14 text-white"
												htmlFor="acceptTerms"
											>
												I have read and understood all the{" "}
												<Link
													className="fz-14 text-warning text-decoration-underline"
													to="/privacy-policy"
												>
													terms & conditions.
												</Link>
											</label>
										</div>
									</div>
									<button
										className="btn btn-warning btn-lg w-100"
										type="submit"
									>
										Sign Up
									</button>
								</form>
							</div>

							<div className="login-meta-data">
								<p className="mt-3 mb-0">
									Already have an store?
									<Link className="ms-1" to="/login">
										Log In
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BecomeVendor;
