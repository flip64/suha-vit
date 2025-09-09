import { Link } from "react-router-dom";



const Register = () => {
	return (
		<>
			<div className="login-wrapper d-flex align-items-center justify-content-center text-center">
				<div className="background-shape"></div>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-10 col-lg-8">
							<img
								className="big-logo"
								src="/assets/img/core-img/logo-white.png"
								alt=""
							/>

							<div className="register-form mt-5">
								<form onClick={e => e.preventDefault()}>
									<div className="form-group text-start mb-4">
										<span>Username</span>
										<label htmlFor="username">
											<i className="ti ti-user"></i>
										</label>
										<input
											className="form-control"
											id="username"
											type="text"
											placeholder="Designing World"
										/>
									</div>
									<div className="form-group text-start mb-4">
										<span>Email</span>
										<label htmlFor="email">
											<i className="ti ti-at"></i>
										</label>
										<input
											className="form-control"
											id="email"
											type="email"
											placeholder="help@example.com"
										/>
									</div>
									<div className="form-group text-start mb-4">
										<span>Password</span>
										<label htmlFor="password">
											<i className="ti ti-key"></i>
										</label>
										<input
											className="input-psswd form-control"
											id="registerPassword"
											type="password"
											placeholder="Password"
										/>
									</div>
									<Link to="/otp">
										<button
											className="btn btn-warning btn-lg w-100" 
										>
											Sign Up
										</button>
									</Link>
								</form>
							</div>

							<div className="login-meta-data">
								<p className="mt-3 mb-0">
									Already have an account?
									<Link className="mx-1" to="/login">
										Sign In
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

export default Register;
