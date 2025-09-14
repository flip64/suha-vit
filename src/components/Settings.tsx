"use client";

import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
 

const Settings = () => {
	const { theme, toggleTheme, viewMode, toggleViewMode } = useTheme();

	return (
		<>
			<Header />
			<div className="page-content-wrapper">
				<div className="container">
					<div className="settings-wrapper py-3">
						<div className="card settings-card">
							<div className="card-body">
								<div className="single-settings d-flex align-items-center justify-content-between">
									<div className="title">
										<i className="ti ti-moon"></i>
										<span> {theme === "light" ? "Dark" : "Night"} Mode</span>
									</div>
									<div className="data-content">
										<div className="toggle-button-cover">
											<div className="button r">
												<input
													className="checkbox"
													id="darkSwitch"
													type="checkbox"
													checked={theme === "dark"}
													onChange={toggleTheme}
												/>
												<div className="knobs"></div>
												<div className="layer"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="card settings-card">
							<div className="card-body">
								<div className="single-settings d-flex align-items-center justify-content-between">
									<div className="title">
										<i className="ti ti-pilcrow"></i>
										<span> {viewMode === "ltr" ? "RTL Mode" : "LTR"} Mode</span>
									</div>
									<div className="data-content">
										<div className="toggle-button-cover">
											<div className="button r">
												<input
													className="checkbox"
													id="rtlSwitch"
													type="checkbox"
													checked={viewMode === "rtl"}
													onChange={toggleViewMode}
												/>
												<div className="knobs"></div>
												<div className="layer"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="card settings-card">
							<div className="card-body">
								<div className="single-settings d-flex align-items-center justify-content-between">
									<div className="title">
										<i className="ti ti-circle-check"></i>
										<span>Availability</span>
									</div>
									<div className="data-content">
										<div className="toggle-button-cover">
											<div className="button r">
												<input
													className="checkbox"
													type="checkbox"
													defaultChecked
												/>
												<div className="knobs"></div>
												<div className="layer"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="card settings-card">
							<div className="card-body">
								<div className="single-settings d-flex align-items-center justify-content-between">
									<div className="title">
										<i className="ti ti-bell-ringing"></i>
										<span>Notifications</span>
									</div>
									<div className="data-content">
										<div className="toggle-button-cover">
											<div className="button r">
												<input
													className="checkbox"
													type="checkbox"
													defaultChecked
												/>
												<div className="knobs"></div>
												<div className="layer"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="card settings-card">
							<div className="card-body">
								<div className="single-settings d-flex align-items-center justify-content-between">
									<div className="title">
										<i className="ti ti-language"></i>
										<span>Language</span>
									</div>
									<div className="data-content">
										<Link to="/language">
											English<i className="ti ti-arrow-right"></i>
										</Link>
									</div>
								</div>
							</div>
						</div>

						<div className="card settings-card">
							<div className="card-body">
								<div className="single-settings d-flex align-items-center justify-content-between">
									<div className="title">
										<i className="ti ti-question-mark"></i>
										<span>Support</span>
									</div>
									<div className="data-content">
										<Link to="/support">
											Get Help<i className="ti ti-arrow-right"></i>
										</Link>
									</div>
								</div>
							</div>
						</div>

						<div className="card settings-card">
							<div className="card-body">
								<div className="single-settings d-flex align-items-center justify-content-between">
									<div className="title">
										<i className="ti ti-shield-lock"></i>
										<span>Privacy Policy</span>
									</div>
									<div className="data-content">
										<Link to="/privacy-policy">
											View<i className="ti ti-arrow-right"></i>
										</Link>
									</div>
								</div>
							</div>
						</div>

						<div className="card settings-card">
							<div className="card-body">
								<div className="single-settings d-flex align-items-center justify-content-between">
									<div className="title">
										<i className="ti ti-key"></i>
										<span>Password</span>
									</div>
									<div className="data-content">
										<Link to="/change-password">
											Change<i className="ti ti-arrow-right"></i>
										</Link>
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

export default Settings;
