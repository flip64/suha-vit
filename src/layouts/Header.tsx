"use client";
import { useEffect, useState } from "react";
import Offcanvas from "../components/common/Offcanvas";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("https://backend.bazbia.ir/api/auth/user/", {
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("خطا در گرفتن وضعیت لاگین:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <div className="header-area" id="headerArea">
        <div className="container h-100 d-flex align-items-center justify-content-between d-flex rtl-flex-d-row-r">
          <div className="logo-wrapper">
            <a href="/home">
              <img src="/assets/img/core-img/logo-small.png" alt="Logo" />
            </a>
          </div>

          <div className="navbar-logo-container d-flex align-items-center">
            {/* سبد خرید */}
            <div className="cart-icon-wrap">
              <a href="/cart">
                <i className="ti ti-basket-bolt"></i>
                <span>13</span>
              </a>
            </div>

            {/* پروفایل یا آیکون ورود با SVG */}
            <div className="user-profile-icon ms-2">
              {loading ? (
                <span>...</span>
              ) : user ? (
                <a href="/profile">
                  <img
                    src={user.avatar || "/assets/img/bg-img/9.jpg"}
                    alt={user.username || "Profile"}
                    style={{ width: "36px", height: "36px", borderRadius: "50%" }}
                  />
                </a>
              ) : (
                <a href="/login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </a>
              )}
            </div>

            {/* منوی همبرگری (Offcanvas) */}
            <div className="suha-navbar-toggler ms-2">
              <div onClick={handleShow}>
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
