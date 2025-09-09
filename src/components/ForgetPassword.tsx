 
const ForgetPassword = () => {
	return (
		<>
			<div className="login-wrapper d-flex align-items-center justify-content-center text-center">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-10 col-lg-8">
							<img
								className="big-logo"
								src="img/core-img/logo-white.png"
								alt=""
							/>

							<div className="register-form mt-5">
								<form action="/forget-password-success" method="">
									<div className="form-group text-start mb-4">
										<span>Email or Username</span>
										<label htmlFor="email">
											<i className="ti ti-user"></i>
										</label>
										<input
											className="form-control"
											id="email"
											type="text"
											placeholder="Designing World"
										/>
									</div>
									<button
										className="btn btn-warning btn-lg w-100"
										type="submit"
									>
										Reset Password
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ForgetPassword;
