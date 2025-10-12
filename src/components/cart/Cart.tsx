"use client";

import HeaderTwo from "../../layouts/HeaderTwo";
import { Link } from "react-router-dom";
import Footer from "../../layouts/Footer";
import { useEffect, useState } from "react";
import { BASEURL } from "../../config";
import "./Cart.css";

interface CartItem {
  id: number;           // این آی‌دی آیتم سبد هست
  variant: number;      // آی‌دی واریانت
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

  const getToken = () => localStorage.getItem("accessToken");

  const fetchCart = async () => {
    setLoading(true);
    try {
      const token = getToken();
      const res = await fetch(`${BASEURL}/api/orders/cart/`, {
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });
      if (!res.ok) throw new Error("خطا در دریافت سبد");
      const data = await res.json();

      const cartItems: CartItem[] = data.items.map((item: any) => ({
        id: item.id,
        variant: item.variant,
        product_slug: item.variant?.toString(),
        product_name: item.variant_name || "بدون نام",
        quantity: item.quantity,
        price: Number(item.price),
        total_price: Number(item.total_price),
        image: item.image || null,
      }));

      console.log("🧾 fetchCart items:", cartItems);
      setCart(cartItems);
      setTotal(Number(data.total_price) || 0);
    } catch (err) {
      console.error("💥 fetchCart error:", err);
      setCart([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // ➕ افزودن آیتم به سبد
  const addToCart = async (variant: number, quantity = 1) => {
    try {
      const token = getToken();
      if (!token) return;

      console.log(`➕ addToCart variant=${variant}, qty=${quantity}`);

      const res = await fetch(`${BASEURL}/api/orders/cart/add/`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ variant_id: variant, quantity }),
      });

      const data = await res.json().catch(() => ({}));
      console.log("📥 addToCart response:", res.status, data);

      if (!res.ok) throw new Error(data.message || "خطا در افزودن محصول");

      await fetchCart();
    } catch (err) {
      console.error("💥 addToCart error:", err);
    }
  };

  // ✏️ بروزرسانی تعداد آیتم
  const updateQuantity = async (item: CartItem, qty: number) => {
    try {
      const token = getToken();
      if (!token) return;

      console.log(`✏️ updateQuantity: variant=${item.variant}, qty=${qty}`);

      if (qty <= 0) {
        await removeItem(item);
        return;
      }

      const res = await fetch(`${BASEURL}/api/orders/cart/item/${item.id}/update/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ variant_id: item.variant, quantity: qty }),
      });

      const data = await res.json().catch(() => ({}));
      console.log("📥 updateQuantity status:", res.status, "data:", data);

      if (!res.ok) throw new Error(data.message || "خطا در بروزرسانی تعداد");

      await fetchCart();
    } catch (err) {
      console.error("💥 updateQuantity error:", err);
    }
  };

  // 🗑️ حذف آیتم
  const removeItem = async (item: CartItem) => {
    try {
      const token = getToken();
      if (!token) return;

      console.log(`🗑️ removeItem variant=${item.variant}`);

      const res = await fetch(`${BASEURL}/api/orders/cart/item/${item.id}/delete/`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      });

      const data = await res.json().catch(() => ({}));
      console.log("📥 removeItem response:", res.status, data);

      if (!res.ok) throw new Error(data.message || "خطا در حذف آیتم");

      await fetchCart();
    } catch (err) {
      console.error("💥 removeItem error:", err);
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
                      {cart.map((item) => (
                        <tr key={item.variant}>
                          <th scope="row">
                            <button className="remove-product" onClick={() => removeItem(item)}>
                              ✖
                            </button>
                          </th>
                          <td className="cart-product-info d-flex align-items-center">
                            {item.image && <img src={item.image} alt={item.product_name} />}
                            <div>
                              <Link className="product-title" to={`/product/${item.product_slug}`}>
                                {item.product_name}
                              </Link>
                              <div className="cart-price-qty mt-1 d-flex align-items-center">
                                <button
                                  className="qty-btn"
                                  onClick={() => updateQuantity(item, item.quantity - 1)}
                                >
                                  -
                                </button>
                                <input
                                  type="number"
                                  min={1}
                                  value={item.quantity}
                                  className="qty-input"
                                  onChange={(e) =>
                                    updateQuantity(item, parseInt(e.target.value) || 1)
                                  }
                                />
                                <button
                                  className="qty-btn"
                                  onClick={() => updateQuantity(item, item.quantity + 1)}
                                >
                                  +
                                </button>
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
