"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
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
          credentials: "include", // اگه کوکی استفاده می‌کنی
          headers: {
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${localStorage.getItem("token")}`, // اگه JWT داری
          },
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
            <Link href="/home">
              <img src="/assets/img/core-img/logo-small.png" alt="" />
            </Link>
          </div>

          <div className="navbar-logo-container d-flex align-items-center">
            {/* سبد خرید */}
            <div className="cart-icon-wrap">
              <Link href="/cart">
                <i className="ti ti-basket-bolt"></i>
                <span>13</span>
              </Link>
            </div>

            {/* پروفایل یا دکمه ورود */}
            <div className="user-profile-icon ms-2">
              {loading ? (
                <span>...</span>
              ) : user ? (
                <Link href="/profile">
                  <img
                    src={user.avatar || "/assets/img/bg-img/9.jpg"}
                    alt={user.username}
                  />
                </Link>
              ) : (
                <Link href="/login">ورود / ثبت‌نام</Link>
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
