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
          credentials: "include", // اگر با کوکی کار می‌کنیم
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

            {/* پروفایل یا دکمه ورود */}
            <div className="user-profile-icon ms-2">
              {loading ? (
                <span>...</span>
              ) : user ? (
                <a href="/profile">
                  <img
                    src={user.avatar || "/assets/img/bg-img/9.jpg"}
                    alt={user.username || "Profile"}
                  />
                </a>
              ) : (
                <a href="/login">ورود / ثبت‌نام</a>
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
