import { Link } from "react-router-dom";
import HeaderTwo from "../layouts/HeaderTwo";
import Footer from "../layouts/Footer";

 

const CheckoutPayment = () => {
  return (
    <>

      <HeaderTwo links="checkout" title="Choose Payment Method" />

      <div className="page-content-wrapper">
        <div className="container">
          <div className="checkout-wrapper-area py-3">
            <div className="choose-payment-method">
              <div className="row g-2 justify-content-center rtl-flex-d-row-r">
                {/* <!-- Single Payment Method--> */}
                <div className="col-6 col-md-5">
                  <div className="single-payment-method">
                    <Link
                      className="credit-card active"
                      to="/checkout-credit-card"
                    >
                      <i className="ti ti-brand-mastercard"></i>
                      <h6>Credit Card</h6>
                    </Link>
                  </div>
                </div>
                {/* <!-- Single Payment Method--> */}
                <div className="col-6 col-md-5">
                  <div className="single-payment-method">
                    <Link className="bank" to="/checkout-bank">
                      <i className="ti ti-building"></i>
                      <h6>Bank Transfer</h6>
                    </Link>
                  </div>
                </div>
                {/* <!-- Single Payment Method--> */}
                <div className="col-6 col-md-5">
                  <div className="single-payment-method">
                    <Link className="paypal" to="/checkout-paypal">
                      <i className="ti ti-brand-paypal"></i>
                      <h6>PayPal</h6>
                    </Link>
                  </div>
                </div>
                {/* <!-- Single Payment Method--> */}
                <div className="col-6 col-md-5">
                  <div className="single-payment-method">
                    <Link className="cash" to="/checkout-cash">
                      <i className="ti ti-shield-dollar"></i>
                      <h6>Cash On Delivary</h6>
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

export default CheckoutPayment;
