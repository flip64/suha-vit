 

const DiscountCouponCard = () => {
	return (
		<>
			<div className="container">
				<div className="discount-coupon-card p-4 p-lg-5 dir-rtl">
					<div className="d-flex align-items-center">
						<div className="discountIcon">
							<img
								className="w-100"
								src="/assets/img/core-img/discount.png"
								alt=""
							/>
						</div>
						<div className="text-content">
							<h5 className="text-white mb-2">Get 20% discount!</h5>
							<p className="text-white mb-0">
								To get discount, enter the
								<span className="px-1 fw-bold">GET20</span>code on the checkout
								page.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DiscountCouponCard;
