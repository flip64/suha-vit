"use client";

import HeaderTwo from "../layouts/HeaderTwo";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
import { useEffect, useState } from "react";
import { BASEURL } from "../config";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  maxQuantity: number;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("accessToken");

  // 📦 گرفتن سبد خرید
  const fetchCart = async () => {
    console.log(`📡 [API] GET ${BASEURL}/api/orders/cart/`);
    try {
      const res = await fetch(`${BASEURL}/api/orders/cart/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (!res.ok) throw new Error("خطا در دریافت سبد خرید");
      const data = await res.json();
      console.log("✅ [API] Response GET Cart:", data);
      setCart(data.items || []);
    } catch (err) {
      console.error("❌ [API] GET Cart Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // ✏️ تغییر تعداد یا حذف محصول
  const updateCartItem = async (id: number, quantity: number) => {
    console.log(`📡 [API] POST ${BASEURL}/api/orders/cart/`, { product_id: id, quantity });
    try {
      const res = await fetch(`${BASEURL}/api/orders/cart/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify({ product_id: id, quantity }),
      });
      if (!res.ok) throw new Error("خطا در بروزرسانی سبد خرید");
      const data = await res.json();
      console.log("✅ [API] Response POST Cart:", data);
      fetchCart(); // بروزرسانی سبد
    } catch (err) {
      console.error("❌ [API] POST Cart Error:", err);
    }
  };

  // 🔢 تغییر تعداد با محدودیت موجودی
  const handleQuantityChange = (id: number, value: number, maxQuantity: number) => {
    if (value > 0 && value <= maxQuantity) {
      updateCartItem(id, value);
    } else if (value > maxQuantity) {
      alert(`حداکثر موجودی این محصول ${maxQuantity} عدد است.`);
      updateCartItem(id, maxQuantity);
    }
  };

  // 🗑️ حذف محصول
  const removeFromCart = (id: number) => {
    updateCartItem(id, 0);
  };

  // 💰 جمع کل
  const total = cart?.reduce((acc, item) => acc + (item.price || 0) * item.quantity, 0) || 0;

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
                              onClick={() => removeFromCart(item.id)}
                            >
                              ✖
                            </button>
                          </th>
                          <td className="cart-product-image">
                            <img
                              className="rounded img-fluid"
                              src={item.image}
                              alt={item.name}
                            />
                          </td>
                          <td className="cart-product-info">
                            <Link className="product-title" to={`/product/${item.id}`}>
                              {item.name}
                            </Link>
                            <div className="cart-price-qty">
                              <span>
                                {item.price.toLocaleString()} تومان ×{" "}
                                <input
                                  type="number"
                                  min={1}
                                  max={item.maxQuantity}
                                  value={item.quantity}
                                  onChange={(e) =>
                                    handleQuantityChange(
                                      item.id,
                                      Number(e.target.value) || 1,
                                      item.maxQuantity
                                    )
                                  }
                                  className="qty-input"
                                />
                              </span>
                            </div>
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
