"use client";
import { IconName } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import OffcanvasTwo from "../components/common/OffcanvasTwo";

// import OffcanvasTwo from "@/components/common/OffcanvasTwo";
// import Link from "next/link";
// import React, { useState } from "react";

const HeaderThree = ({ links, title }: any) => {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(!show);

	return (
		<>
			<div className="header-area" id="headerArea">
				<div className="container h-100 d-flex align-items-center justify-content-between rtl-flex-d-row-r">
					<div className="back-button me-2">
						<Link to={`/${links}`}>
							<i className="ti ti-arrow-left"></i>
						</Link>
					</div>

					<div className="page-heading">
						<h6 className="mb-0">{title}</h6>
					</div>

					<div
						className="filter-option ms-2"
						data-bs-toggle="offcanvas"
						data-bs-target="#suhaFilterOffcanvas"
						aria-controls="suhaFilterOffcanvas"
					>
						<i
							onClick={() => handleShow()}
							className="ti ti-adjustments-horizontal"
						></i>
					</div>
				</div>
			</div>

			<OffcanvasTwo handleShow={handleShow} show={show} />
		</>
	);
};

export default HeaderThree;
