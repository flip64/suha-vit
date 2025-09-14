"use client";

import { useEffect } from 'react';

const Search = () => {
	 
	useEffect(() => {
		if (typeof window !== 'undefined') {
			import('bootstrap/dist/js/bootstrap.bundle.min.js');
		}
	}, []);

	return (
		<>
			<div className="container">
				<div className="search-form pt-3 rtl-flex-d-row-r">
					<form onSubmit={(e) => e.preventDefault()}>
						<input
							className="form-control"
							type="search"
							placeholder="جستجو در بازبیا"
						/>
						<button type="submit">
							<i className="ti ti-search"></i>
						</button>
					</form>

					<div className="alternative-search-options">
						<div className="dropdown">
							<a
								className="btn btn-primary dropdown-toggle"
								id="altSearchOption"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<i className="ti ti-adjustments-horizontal"></i>
							</a>

							<ul
								className="dropdown-menu dropdown-menu-end"
								style={{
									position: "absolute",
									inset: "0px 0px auto auto",
									margin: "0px",
									transform: "translate3d(0px, 42.4px, 0px)",
								}}
								aria-labelledby="altSearchOption"
							>
								<li>
									<a className="dropdown-item" href="#">
										<i className="ti ti-microphone"> </i>صدا
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										<i className="ti ti-layout-collage"> </i>تصویر
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Search;
