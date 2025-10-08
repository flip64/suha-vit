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
  product_name: string;
  quantity: number;
  price: number;
  total_price: number;
  image?: string | null;
  updating?: boolean;
  attributes?: string;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("accessToken");

  // ✅ تابع fetch با لاگ‌گیری کامل
  const fetchJSON = async (url: string, options: any = {}) => {
    console.log("🌍 Fetch start:", url);
    console.log("🧾 Options:", options);

    try {
      const res = await fetch(url, {
        ...options,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
          ...(options.headers || {}),
        },
      });

      console.log("📡 Response status:", res.status, res.statusText);

      if (!res.ok) {
        const text = await res.text();
        console.error("❌ Response not OK:", text);
        throw new Error(text || `Request failed with status ${res.status}`);
      }

      const data = await res.json();
      console.log("✅ Response JSON:", data);
      return data;
    } catch (error: any) {
      console.error("🚨 Fetch failed:", error);
      console.log("🧠 Error message:", error.message);
      console.log("🧩 Stack:", error.stack);
      throw error;
    }
  };

  // 📦 گرفتن سبد خرید
  const fetchCart = async () => {
    console.log("🛒 Fetching cart data...");
    setLoading(true);
    try {
      const url = `${BASEURL}/api/orders/cart/`;
      console.log("➡️ Cart API URL:", url);
      const data = await fetchJSON(url);

      const cartItems: CartItem[] = (data.items || []).map((item: any) => {
        let productName = "";
        let attributes = "";

        if (typeof item.product_name === "string") {
          productName = item.product_name;
        } else if (item.product_name?.product) {
          productName = item.product_name.product.name || "بدون نام";
          if (item.product_name.attributes?.length) {
            attributes = item.product_name.attributes.map((a: any) => a.value).join(" ");
          }
        }

        return {
          ...item,
          product_name: `${productName} ${attributes}`.trim(),
        };
      });

      console.log("🧾 Parsed cart items:", cartItems);
      setCart(cartItems);
    } catch (err) {
      console.error("❌ GET Cart Error:", err);
    } finally {
      setLoading(false);
      console.log("⏹️ Fetch cart finished");
    }
  };

  useEffect(() => {
    console.log("⚙️ Cart component mounted");
    fetchCart();
  }, []);

  const total = cart.reduce(
    (acc, item) => acc + (item.total_price || item.price * item.quantity),
    0
  );

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
                              onClick={() => console.log("🗑️ حذف محصول:", item.variant)}
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
                                to={`/product/${item.variant}`}
                              >
                                {item.product_name}
                              </Link>
                              <div className="cart-price-qty mt-1 d-flex align-items-center">
                                <input
                                  type="number"
                                  min={1}
                                  value={item.quantity}
                                  className="qty-input"
                                  disabled={item.updating}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="cart-total-price">
                            {(item.total_price || item.price * item.quantity).toLocaleString()} تومان
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-center">سبد خرید خالی است</p>
                )}
              </div>
            </div>

            {cart.length > 0 && (
              <div className="card cart-amount-area">
                <div className="card-body d-flex flex-column flex-md-row align-items-md-center justify-content-between">
                  <h5 className="total-price mb-3 mb-md-0">
                    مجموع: {total.toLocaleString()} تومان
                  </h5>
                  <Link className="btn btn-primary" to="/checkout">
                    پرداخت
                  </Link>
                </div>
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
