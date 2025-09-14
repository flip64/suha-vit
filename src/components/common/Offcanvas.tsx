"use client";

import { Link, useNavigate } from "react-router-dom";

const Offcanvas = ({ handleShow, show }: any) => {
  const navigate = useNavigate(); // ✅ فراخوانی درست Hook

const logout = () => {
  // پاک کردن توکن‌ها
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");

  // بستن منوی کشویی
  handleShow();

  // اگر setUser از Props یا Context داری، کاربر را null کن
  if (typeof setUser === "function") {
    setUser(null);
  }

  // هدایت به صفحه اصلی
  navigate("/home", { replace: true });

  // اگر میخوای مطمئن باشی همه چیز رفرش میشه، میتونی از این هم استفاده کنی:
   window.location.href = "/home";
};


  return (
    <>
      <div
        className={`offcanvas offcanvas-start suha-offcanvas-wrap ${show ? "show" : ""}`}
        tabIndex={-1}
        id="suhaOffcanvas"
        aria-labelledby="suhaOffcanvasLabel"
      >
        <button
          onClick={handleShow}
          className="btn-close btn-close-white"
          type="button"
        ></button>

        <div className="offcanvas-body">
          <div className="sidenav-profile">
            <div className="user-profile">
              <img src="/assets/img/bg-img/9.jpg" alt="" />
            </div>
            <div className="user-info">
              <h5 className="user-name mb-1 text-white">Suha Sarah</h5>
              <p className="available-balance text-white">
                موجودی <span className="counter">99</span> تومان
              </p>
            </div>
          </div>

          <ul className="sidenav-nav ps-0">
            <li>
              <Link to="/profile">
                <i className="ti ti-user"></i> پروفایل
              </Link>
            </li>
            <li>
              <Link to="/notifications">
                <i className="ti ti-bell-ringing lni-tada-effect"></i>
                اعلان ها<span className="ms-1 badge badge-warning">3</span>
              </Link>
            </li>
            <li className="suha-dropdown-menu">
              <a href="#">
                <i className="ti ti-building-store"></i>Shop Pages
              </a>
              <ul>
                <li><Link to="/shop-grid">Shop Grid</Link></li>
                <li><Link to="/shop-list">Shop List</Link></li>
                <li><Link to="/single-product">Product Details</Link></li>
                <li><Link to="/featured-products">Featured Products</Link></li>
                <li><Link to="/flash-sale">Flash Sale</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/pages">
                <i className="ti ti-notebook"></i>All Pages
              </Link>
            </li>
            <li className="suha-dropdown-menu">
              <Link to="/wishlist-grid">
                <i className="ti ti-heart"></i>My Wishlist
              </Link>
              <ul>
                <li><Link to="/wishlist-grid">Wishlist Grid</Link></li>
                <li><Link to="/wishlist-list">Wishlist List</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/settings">
                <i className="ti ti-adjustments-horizontal"></i>تنظینات
              </Link>
            </li>
            <li>
              <button
                onClick={logout}
                className="btn btn-link text-white text-start w-100"
                style={{ padding: 0 }}
              >
                <i className="ti ti-logout"></i> خروج
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Offcanvas;

