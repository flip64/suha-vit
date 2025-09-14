"use client";
  
import { useState } from "react";
import Offcanvas from "./common/Offcanvas"; 
import { Link } from "react-router-dom";

const MainHome = () => {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(!show);

	return (
		<>
			<div className="preview-iframe-wrapper">
				<div
					className="header-area position-relative shadow-none"
					id="headerArea"
				>
					<div className="container demo-container h-100 d-flex align-items-center justify-content-between d-flex rtl-flex-d-row-r">
						<div className="logo-wrapper">
							<Link to="/">
								<img src="/assets/img/core-img/logo-small.png" alt="" />
							</Link>
						</div>
						<div className="navbar-logo-container d-flex align-items-center">
							<div
								className="suha-navbar-toggler ms-2"
								data-bs-toggle="offcanvas"
								data-bs-target="#suhaOffcanvas"
								aria-controls="suhaOffcanvas"
							>
								<div onClick={() => handleShow()}>
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="preview-hero-area">
					<div className="container demo-container">
						<div className="row g-2 align-items-center justify-content-between rtl-flex-d-row-r">
							<div className="col-12 col-lg-5 col-xl-3">
								<div className="preview-content-wrapper">
									<span className="d-block mb-2">Running - v 1.1.0</span>
									<h3 className="demo-title">
										<span>Suha - </span>PWA Ecommerce Mobile Template
									</h3>
									<p className="demo-desc mb-4">
										A versatile e-commerce shop template. It is very nicely
										designed with modern features & coded with the latest
										technology.
									</p>
									<a
										className="btn btn-primary btn-lg d-none d-lg-block w-75"
										href="https://themeforest.net/item/suha-pwa-ecommerce-mobile/52838653?s_rank=4"
										target="_blank"
									>
										Purchase Now
									</a>
								</div>
								<div className="qr-code-wrapper shadow-sm d-none d-lg-block d-xl-none mt-5">
									<div className="scan-me">
										<img src="/assets/img/demo-img/qr-code.png" alt="" />
									</div>
									<h6 className="mt-2 mb-0">
										Scan to view on your mobile device
									</h6>
								</div>
							</div>
							<div className="col-12 col-lg-6 col-xl-5">
								<div className="text-center">
									<iframe src="/intro"></iframe>
								</div>
								<div className="live-preview-btn d-lg-none">
									<a className="btn btn-primary btn-lg" href="/intro">
										Click the button to live preview
									</a>
								</div>
							</div>
							<div className="col-12 col-lg-4 col-xl-3">
								<div className="qr-code-wrapper shadow-sm d-lg-none d-xl-block">
									<div className="scan-me">
										<img src="/assets/img/demo-img/qr-code.png" alt="" />
									</div>
									<h6 className="mt-2 mb-0">
										Scan to view on your mobile device
									</h6>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="features-area bg-white">
					<div className="container demo-container">
						<div className="row rtl-flex-d-row-r rtl-text-right">
							<div className="col-12 col-lg-9 col-xl-5">
								<h2>Some Core Features</h2>
								<p className="mb-3 mb-md-5">
									Here are some core features of this template. Lots of features
									& layouts are in the demo. Explore now!
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-12 col-lg-4">
								<ul className="ps-0">
									<li className="active">React js 18.3.1</li>
									<li className="active">Typescript</li>
									<li className="active">App Dir</li>
									<li className="active">PWA Ready</li>
									<li className="active">
										RTL (Right to left) mode
										<span className="badge text-bg-danger ms-2">New</span>
									</li>
									<li className="active">Dark / Night mode</li>
									<li className="active">Versatile e-commerce shop template</li>
									<li className="active">
										Nicely designed with modern features
									</li>
									<li className="active">Coded with the latest technology</li>
									<li className="active">47+ necessary pages</li>
									<li>Bug free code</li>
									<li>Cross browser support</li>
									<li>Language page</li>
									<li className="active">Password strength meter</li>
									<li className="active">OTP pages</li>
								</ul>
							</div>
							<div className="col-12 col-lg-4">
								<ul className="ps-0">
									<li>Dropdown menu in sidebar</li>
									<li className="active">
										Bootstrap 5.3{" "}
										<span className="badge text-bg-warning ms-2">Hot</span>
									</li>
									<li className="active">Node package manager (npm)</li>
									<li className="active">Sass CSS preprocessor</li>
									<li className="active">Pug (formerly Jade)</li>
									<li>Live chat</li>
									<li>Support page</li>
									<li>Authentication pages</li>
									<li>Unique design</li>
									<li>About us page</li>
								</ul>
							</div>
							<div className="col-12 col-lg-4">
								<ul className="ps-0">
									<li>Blog pages</li>
									<li>Google fonts</li>
									<li>Easy to customize</li>
									<li>Clean & 100% validate code</li>
									<li>Privacy policy</li>
									<li>Settings page</li>
									<li className="active">Real support</li>
									<li>Multi step checkout</li>
									<li>Notifications pages</li>
									<li className="active">Contact page</li>
									<li>Profile page</li>
									<li>Vendor pages</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="preview-footer-area">
					<div className="container demo-container h-100 d-flex align-items-center justify-content-between">
						<div className="footer-logo">
							<a href="#">
								<img src="/assets/img/core-img/logo-small.png" alt="" />
							</a>
						</div>
						<div className="footer-nav">
							<ul className="d-flex align-items-center ps-0">
								<li>
									<a href="#">Home</a>
								</li>
								<li>
									<a href="#">Privacy Policy</a>
								</li>
								<li>
									<a href="#">Support</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<Offcanvas handleShow={handleShow} show={show} />
		</>
	);
};

export default MainHome;
