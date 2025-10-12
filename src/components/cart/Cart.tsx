"use client";

import HeaderTwo from "../../layouts/HeaderTwo";
import { Link } from "react-router-dom";
import Footer from "../../layouts/Footer";
import { useEffect, useState } from "react";
import { BASEURL } from "../../config";
import "./Cart.css";

interface CartItem {
  id: number;
  variant: number;
  product_slug: string;
  product_name: string;
  quantity: number;
  price: number;
  total_price: number;
  image?: string | null;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  // 🔑 دریافت توکن از localStorage
  const getToken = () => localStorage.getItem("accessToken");

  // 🛰️ دریافت سبد خرید از سرور
  const fetchCart = async () => {
    console.log("🛰️ شروع دریافت سبد خرید از سرور...");
    setLoading(true);

    try {
      const token = getToken();
      console.log("🔑 توکن کاربر:", token);

      const url = `${BASEURL}/api/orders/cart/`;
      const headers: any = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const res = await fetch(url, { headers });
      console.log("📥 پاسخ سرور (status):", res.status);

      if (!res.ok) {
        console.error("❌ خطا در پاسخ GET سبد خرید:", res.status, res.statusText);
        setCart([]);
        setTotal(0);
        return;
      }

      const data = await res.json();
      console.log("✅ داده دریافتی از سرور:", data);

      if (!data.items || !Array.isArray(data.items)) {
        console.warn("⚠️ ساختار داده نامعتبر:", data);
        setCart([]);
        setTotal(0);
        return;
      }

      const cartItems: CartItem[] = data.items.map((item: any) => ({
        id: item.id,
        variant: item.variant,
        product_slug: item.product_slug || item.variant?.toString(),
        product_name: item.product_name || "بدون نام",
        quantity: item.quantity,
        price: Number(item.price),
        total_price: Number(item.total_price),
        image: item.image || null,
      }));

      console.log("🧾 آیتم‌های نهایی سبد:", cartItems);

      setCart(cartItems);
      setTotal(Number(data.total_price) || 0);
    } catch (err) {
      console.error("💥 خطا در fetchCart:", err);
      setCart([]);
      setTotal(0);
    } finally {
      console.log("🏁 پایان fetchCart");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // ➕ افزودن آیتم به سبد
  const addToCart = async (variant: number, quantity = 1) => {
    console.log(`➕ افزودن variant=${variant} تعداد=${quantity} به سبد`);
    const token = getToken();

    try {
      const url = `${BASEURL}/api/orders/cart/add/`;
      const headers: any = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const res = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify({ variant_id: variant, quantity }),
      });

      console.log("📥 پاسخ POST addToCart:", res.status, res.statusText);

      if (!res.ok) {
        console.error("❌ خطا در افزودن محصول:", await res.text());
      }

      await fetchCart();
    } catch (err) {
      console.error("💥 خطا در addToCart:", err);
    }
  };

  // ✏️ بروزرسانی تعداد آیتم
  const updateQuantity = async (variant: number, qty: number) => {
    console.log(`✏️ بروزرسانی variant=${variant} تعداد=${qty}`);
    setCart(prev =>
      prev.map(item => (item.variant === variant ? { ...item, quantity: qty } : item))
    );

    const token = getToken();
    if (!token) {
      console.warn("⚠️ بروزرسانی بدون توکن انجام نمی‌شود.");
      return;
    }

    try {
      const url = `${BASEURL}/api/orders/cart/item/${variant}/update/`;

      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ quantity: qty, variant_id: variant }),
      });

      console.log("📥 پاسخ PUT updateQuantity:", res.status, res.statusText);

      if (!res.ok) console.error("❌ خطا در بروزرسانی:", await res.text());

      await fetchCart();
    } catch (err) {
      console.error("💥 خطا در updateQuantity:", err);
    }
  };

  // 🗑️ حذف آیتم
  const removeItem = async (variant: number) => {
    console.log(`🗑️ حذف variant=${variant}`);
    setCart(prev => prev.filter(item => item.variant !== variant));

    const token = getToken();
    if (!token) {
      console.warn("⚠️ حذف بدون توکن انجام نمی‌شود.");
      return;
    }

    try {
      const url = `${BASEURL}/api/orders/cart/item/${variant}/delete/`;

      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("📥 پاسخ DELETE removeItem:", res.status, res.statusText);

      if (!res.ok) console.error("❌ خطا در حذف آیتم:", await res.text());

      await fetchCart();
    } catch (err) {
      console.error("💥 خطا در removeItem:", err);
    }
  };

  return (
    <>
      <HeaderTwo links="shop-grid" title="سبد خرید" />
      <div className="page-content-wrapper">
        <div className="container">
          <div className="cart-wrapper-area py-3">
            <div className="cart-table card mb-3">
              <div className="table-responsive card-body">
                {loading ? (
                  <p className="text-center">در حال بارگذاری...</p>
                ) : cart.length > 0 ? (
                  <table className="table mb-0 table-mobile-responsive">
                    <tbody>
                      {cart.map(item => (
                        <tr key={item.variant}>
                          <th scope="row">
                            <button
                              className="remove-product"
                              onClick={() => removeItem(item.variant)}
                            >
                              ✖
                            </button>
                          </th>
                          <td className="cart-product-info d-flex align-items-center">
                            {item.image && (
                              <img src={item.image} alt={item.product_name} />
                            )}
                            <div>
                              <Link
                                className="product-title"
                                to={`/product/${item.product_slug}`}
                              >
                                {item.product_name}
                              </Link>
                              <div className="cart-price-qty mt-1 d-flex align-items-center">
                                <input
                                  type="number"
                                  min={1}
                                  value={item.quantity}
                                  className="qty-input"
                                  onChange={e =>
                                    updateQuantity(
                                      item.variant,
                                      parseInt(e.target.value) || 1
                                    )
                                  }
                                />
                                <span className="ms-2">{item.price.toLocaleString()} تومان</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end">{item.total_price.toLocaleString()} تومان</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-center">سبد خرید شما خالی است.</p>
                )}
              </div>
            </div>
            {cart.length > 0 && (
              <div className="cart-summary card p-3">
                <h5>جمع کل: {total.toLocaleString()} تومان</h5>
                <Link to="/checkout" className="btn btn-primary mt-3">
                  ادامه خرید
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
