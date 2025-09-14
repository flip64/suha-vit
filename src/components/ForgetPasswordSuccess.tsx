import { Link } from "react-router-dom";

 

const ForgetPasswordSuccess = () => {
	return (
		<>
			<div className="login-wrapper d-flex align-items-center justify-content-center text-center">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-10 col-lg-8">
							<div className="success-check">
								<i className="ti ti-mail-check"></i>
							</div>

							<p className="text-white mt-3 mb-4">
								Password recovery email is sent successfully. Please check your
								inbox!
							</p>
							<Link className="btn btn-warning btn-lg" to="/login">
								Go Home
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ForgetPasswordSuccess;
