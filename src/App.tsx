import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/Login';
import Message from './components/Message';
import Cart from './components/cart/Cart';
import Settings from './components/Settings';
import Pages from './components/pages';
import Intro from './components/intro';
import ShopGrid from "./components/ShopGrid";
import ShopList from "./components/ShopList";
import SingleProduct from "./components/single-product";
import Catagory from "./components/Catagory";
import SubCatagory from "./components/SubCatagory";
import WishlistGrid from "./components/WishlistGrid";
import WishlistList from "./components/WishlistList";
import FlashSale from "./components/FlashSale";
import FeaturedProducts from "./components/FeaturedProducts";
import MyOrder from "./components/MyOrder";
import Vendors from "./components/Vendors";
import VendorShop from "./components/VendorShop";
import BecomeVendor from "./components/BecomeVendor";
import Checkout from "./components/Checkout";
import CheckoutBank from "./components/CheckoutBank";
import CheckoutCash from "./components/CheckoutCash";
import CheckoutCreditCard from "./components/CheckoutCreditCard";
import CheckoutPayment from "./components/CheckoutPayment";
import CheckoutPaypal from "./components/CheckoutPaypal";
import PaymentSuccess from "./components/PaymentSuccess";
import Register from "./components/Register";
import Otp from "./components/Otp";
import OtpConfirm from "./components/OtpConfirm";
import ForgetPassword from "./components/ForgetPassword";
import ForgetPasswordSuccess from "./components/ForgetPasswordSuccess";
import ChangePassword from "./components/ChangePassword";
import BlogGrid from "./components/BlogGrid";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";
import Notifications from "./components/Notifications";
import NotificationDetails from "./components/NotificationDetails";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Offline from "./components/Offline";
import Language from "./components/Language";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Support from "./components/Support";
import NotFound from "./components/NotFound";
import CustomError from "./components/CustomError";
import ErrorBoundary from "./components/ErrorBoundary";
import HomePage from "./components/HomePage";  
import { CartProvider } from "./components/CartContext";




const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <CustomError /> },
  { path: "/intro", element: <Intro />, errorElement: <CustomError /> },
  { path: "/login", element: <Login />, errorElement: <CustomError /> },
  { path: "/home", element: <HomePage />, errorElement: <CustomError /> },
  { path: "/message", element: <Message />, errorElement: <CustomError /> },
  { path: "/cart", element: <Cart />, errorElement: <CustomError /> },
  { path: "/settings", element: <Settings />, errorElement: <CustomError /> },
  { path: "/pages", element: <Pages />, errorElement: <CustomError /> },
  { path: "/shop-grid", element: <ShopGrid />, errorElement: <CustomError /> },
  { path: "/shop-list", element: <ShopList />, errorElement: <CustomError /> },
  { path: "/single-product/:slug", element: <SingleProduct />, errorElement: <CustomError /> },
  { path: "/catagory/:slug", element: <Catagory />, errorElement: <CustomError /> },
  { path: "/sub-catagory", element: <SubCatagory />, errorElement: <CustomError /> },
  { path: "/wishlist-grid", element: <WishlistGrid />, errorElement: <CustomError /> },
  { path: "/wishlist-list", element: <WishlistList />, errorElement: <CustomError /> },
  { path: "/flash-sale", element: <FlashSale />, errorElement: <CustomError /> },
  { path: "/featured-products", element: <FeaturedProducts />, errorElement: <CustomError /> },
  { path: "/my-order", element: <MyOrder />, errorElement: <CustomError /> },
  { path: "/vendors", element: <Vendors />, errorElement: <CustomError /> },
  { path: "/vendor-shop", element: <VendorShop />, errorElement: <CustomError /> },
  { path: "/become-vendor", element: <BecomeVendor />, errorElement: <CustomError /> },
  { path: "/checkout", element: <Checkout />, errorElement: <CustomError /> },
  { path: "/checkout-bank", element: <CheckoutBank />, errorElement: <CustomError /> },
  { path: "/checkout-cash", element: <CheckoutCash />, errorElement: <CustomError /> },
  { path: "/checkout-credit-card", element: <CheckoutCreditCard />, errorElement: <CustomError /> },
  { path: "/checkout-payment", element: <CheckoutPayment />, errorElement: <CustomError /> },
  { path: "/checkout-paypal", element: <CheckoutPaypal />, errorElement: <CustomError /> },
  { path: "/payment-success", element: <PaymentSuccess />, errorElement: <CustomError /> },
  { path: "/register", element: <Register />, errorElement: <CustomError /> },
  { path: "/otp", element: <Otp />, errorElement: <CustomError /> },
  { path: "/otp-confirm", element: <OtpConfirm />, errorElement: <CustomError /> },
  { path: "/forget-password", element: <ForgetPassword />, errorElement: <CustomError /> },
  { path: "/forget-password-success", element: <ForgetPasswordSuccess />, errorElement: <CustomError /> },
  { path: "/change-password", element: <ChangePassword />, errorElement: <CustomError /> },
  { path: "/blog-grid", element: <BlogGrid />, errorElement: <CustomError /> },
  { path: "/blog-list", element: <BlogList />, errorElement: <CustomError /> },
  { path: "/blog-details", element: <BlogDetails />, errorElement: <CustomError /> },
  { path: "/notifications", element: <Notifications />, errorElement: <CustomError /> },
  { path: "/notification-details", element: <NotificationDetails />, errorElement: <CustomError /> },
  { path: "/profile", element: <Profile />, errorElement: <CustomError /> },
  { path: "/edit-profile", element: <EditProfile />, errorElement: <CustomError /> },
  { path: "/about-us", element: <Aboutus />, errorElement: <CustomError /> },
  { path: "/contact", element: <Contact />, errorElement: <CustomError /> },
  { path: "/offline", element: <Offline />, errorElement: <CustomError /> },
  { path: "/language", element: <Language />, errorElement: <CustomError /> },
  { path: "/privacy-policy", element: <PrivacyPolicy />, errorElement: <CustomError /> },
  { path: "/support", element: <Support />, errorElement: <CustomError /> },
  { path: "*", element: <NotFound />, errorElement: <CustomError /> },
]);

 

function App() {
  return (
    <>
      <ErrorBoundary> 
        <CartProvider>
         <RouterProvider router={router} />  
        </CartProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
