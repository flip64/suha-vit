import { Link } from "react-router-dom";

  

const PaymentSuccess = () => {
  return (
    <>
      <div className="order-success-wrapper">
        <div className="content">
          <div className="display-1 text-white mb-2">
            <i className="ti ti-basket-dollar"></i>
          </div>
          <h5 className="text-white">Payment successful</h5>
          <p className="text-white opacity-75">
            We will notify you of all the details via email. Thank you!
          </p>
          <Link className="btn btn-primary mt-3" to="/home">
            <i className="ti ti-arrow-left pe-2"></i>Shopping Again
          </Link>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
