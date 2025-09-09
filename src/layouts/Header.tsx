"use client";
// import Offcanvas from "@/components/common/Offcanvas";
// import Link from "next/link";
import { useState } from "react";
import Offcanvas from "../components/common/Offcanvas";

const Header = () => {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(!show);

	return (
		<>
			<div className="header-area" id="headerArea">
				<div className="container h-100 d-flex align-items-center justify-content-between d-flex rtl-flex-d-row-r">
					<div className="logo-wrapper">
						<a href="/home">
							<img src="/assets/img/core-img/logo-small.png" alt="" />
						</a>
					</div>
					<div className="navbar-logo-container d-flex align-items-center">
						<div className="cart-icon-wrap">
							<a href="/cart">
								<i className="ti ti-basket-bolt"></i>
								<span>13</span>
							</a>
						</div>

						<div className="user-profile-icon ms-2">
							<a href="/profile">
								<img src="/assets/img/bg-img/9.jpg" alt="" />
							</a>
						</div>

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
			<Offcanvas handleShow={handleShow} show={show} />
		</>
	);
};

export default Header;
