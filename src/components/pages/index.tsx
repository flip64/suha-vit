import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";


const Pages = () => {
  return (
    <>
      <Header />
      <div className="page-content-wrapper py-3">
        <div className="container">
          <ul className="page-nav ps-0">

            <li><Link to="/home">Home<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/intro">Intro/Flash Screen<i className="ti ti-arrow-right"></i></Link></li>

            <li className="nav-title">Shop</li>
            <li><Link to="/shop-grid">Shop Grid<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/shop-list">Shop List<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/single-product">Product Details<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/catagory">Catagory<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/sub-catagory">Sub Catagory<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/wishlist-grid">Wishlist Grid<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/wishlist-list">Wishlist List<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/flash-sale">Flash Sale<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/featured-products">Featured Products<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/my-order">Order Status<i className="ti ti-arrow-right"></i></Link></li>


            <li className="nav-title">Vendor</li>
            <li><Link to="/vendors">Vendors<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/vendor-shop">Vendor Shop<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/become-vendor">Become A Vendor<i className="ti ti-arrow-right"></i></Link></li>

            <li className="nav-title">Cart & Checkout</li>
            <li><Link to="/cart">Cart<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/checkout">Checkout<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/checkout-bank">Checkout Bank<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/checkout-cash">Checkout Cash<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/checkout-credit-card">Checkout Credit Card<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/checkout-payment">Checkout Payment<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/checkout-paypal">Checkout PayPal<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/payment-success">Payment Success<i className="ti ti-arrow-right"></i></Link></li>

            <li className="nav-title">Authentication</li>
            <li><Link to="/login">Login<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/register">Register<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/otp">OTP Send<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/otp-confirm">OTP Confirmation<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/forget-password">Forget Password<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/change-password">Change Password<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/forget-password-success">Forget Password Success<i className="ti ti-arrow-right"></i></Link></li>


            <li className="nav-title">Blog</li>
            <li><Link to="/blog-grid">Blog Grid<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/blog-list">Blog List<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/blog-details">Blog Details<i className="ti ti-arrow-right"></i></Link></li>

            <li className="nav-title">Chat & Notifications</li>
            <li><Link to="/message">Message/Chat<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/notifications">Notifications<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/notification-details">Notifications Details<i className="ti ti-arrow-right"></i></Link></li>


            <li className="nav-title">Miscellaneous</li>
            <li><Link to="/profile">Profile<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/edit-profile">Edit Profile<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/about-us">About Us<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/contact">Contact Us<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/offline">Offline<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/language">Select Language<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/privacy-policy">Privacy Policy<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/settings">Settings<i className="ti ti-arrow-right"></i></Link></li>
            <li><Link to="/support">Support<i className="ti ti-arrow-right"></i></Link></li>
          </ul>
        </div>
      </div>

      <div className="internet-connection-status" id="internetStatus"></div>

      <Footer />

    </>
  );
};

export default Pages;