"use client";

import Footer from "../layouts/Footer";
import HeaderTwo from "../layouts/HeaderTwo";

 
const ChangePassword = () => {
	return (
		<>
			<HeaderTwo links="settings" title="Change Password" />

			<div className="page-content-wrapper">
				<div className="container">
					<div className="profile-wrapper-area py-3">
						{/* <!-- User Information--> */}
						<div className="card user-info-card">
							<div className="card-body p-4 d-flex align-items-center">
								<div className="user-profile me-3">
									<img src="/assets/img/bg-img/9.jpg" alt="" />
								</div>
								<div className="user-info">
									<p className="mb-0 text-white">@designing-world</p>
									<h5 className="mb-0 text-white">Suha Jannat</h5>
								</div>
							</div>
						</div>
						{/* <!-- User Meta Data--> */}
						<div className="card user-data-card">
							<div className="card-body">
								<form onClick={(e) => e.preventDefault()}>
									<div className="mb-3">
										<div className="title mb-2">
											<i className="ti ti-key"></i>
											<span>Old Password</span>
										</div>
										<input className="form-control" type="password" />
									</div>
									<div className="mb-3">
										<div className="title mb-2">
											<i className="ti ti-key"></i>
											<span>New Password</span>
										</div>
										<input
											className="input-psswd form-control"
											id="registerPassword"
											type="password"
											placeholder="Password"
										/>
									</div>
									<div className="mb-3">
										<div className="title mb-2">
											<i className="ti ti-key"></i>
											<span>Repeat New Password</span>
										</div>
										<input className="form-control" type="password" />
									</div>
									<button
										className="btn btn-primary btn-lg w-100"
										type="submit"
									>
										Update Password
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

export default ChangePassword;
