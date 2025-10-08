"use client";

import HeaderTwo from "../layouts/HeaderTwo";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
import { useEffect, useState } from "react";
import { BASEURL } from "../config";

interface CartItem {
  id: number;
  variant: number;
  product_name: string;
  quantity: number;
  price: number;
  total_price: number;
  image?: string | null; // ✅ اضافه شد
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("accessToken");

  // 📦 گرفتن سبد خرید
  const fetchCart = async () => {
    console.log("📡 [API] GET Cart");
    console.log("Token:", token);

    try {
      const res = await fetch(`${BASEURL}/api/orders/cart/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });

      console.log("Status:", res.status);
      console.log("Status Text:", res.statusText);

      const text = await res.text();
      console.log("Raw Response:", text);

      const data = JSON.parse(text);
      console.log("Parsed Data:", data);

      setCart(data.items || []);
    } catch (err) {
      console.error("❌ GET Cart Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // ✏️ بروزرسانی تعداد
  const updateCartItem = async (variant_id: number, quantity: number) => {
    console.log(`📡 [PATCH] variant_id: ${variant_id}, quantity: ${quantity}`);
    try {
      const res = await fetch(`${BASEURL}/api/orders/cart/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify({ variant_id, quantity }),
      });

      console.log("PATCH Status:", res.status);
      const text = await res.text();
      console.log("PATCH Raw Response:", text);

      fetchCart();
    } catch (err) {
      console.error("❌ PATCH Cart Error:", err);
    }
  };

  // 🗑️ حذف محصول
  const removeFromCart = async (variant_id: number) => {
    console.log(`📡 [DELETE] variant_id: ${variant_id}`);
    try {
      const res = await fetch(`${BASEURL}/api/orders/cart/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify({ variant_id }),
      });

      console.log("DELETE Status:", res.status);
      const text = await res.text();
      console.log("DELETE Raw Response:", text);

      fetchCart();
    } catch (err) {
      console.error("❌ DELETE Cart Error:", err);
    }
  };

  const handleQuantityChange = (variant_id: number, value: number) => {
    if (value > 0) {
      updateCartItem(variant_id, value);
    }
  };

  const total = cart?.reduce((acc, item) => acc + item.total_price, 0) || 0;

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
                        <tr key={item.id}>
                          <th scope="row">
                            <button
                              className="remove-product"
                              onClick={() => removeFromCart(item.variant)}
                            >
                              ✖
                            </button>
                          </th>
                          <td className="cart-product-info d-flex align-items-center">
                            {/* ✅ تصویر محصول */}
                            {item.image && (
                              <img
                                src={item.image}
                                alt={item.product_name}
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  objectFit: "cover",
                                  borderRadius: "8px",
                                  marginLeft: "10px",
                                }}
                              />
                            )}
                            <div>
                              <Link
                                className="product-title"
                                to={`/product/${item.variant}`}
                              >
                                {item.product_name}
                              </Link>
                              <div className="cart-price-qty mt-1">
                                <span>
                                  {item.price.toLocaleString()} تومان ×{" "}
                                  <input
                                    type="number"
                                    min={1}
                                    value={item.quantity}
                                    onChange={(e) =>
                                      handleQuantityChange(
                                        item.variant,
                                        Number(e.target.value) || 1
                                      )
                                    }
                                    className="qty-input"
                                  />
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="cart-total-price">
                            {item.total_price.toLocaleString()} تومان
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
