"use client";

import HeaderTwo from "../layouts/HeaderTwo";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
import { useEffect, useState } from "react";
import { BASEURL } from "../config";

interface CartItem {
  id: number;           // آیتم سبد
  variant: number;      // آیتم واریانت
  product_name: string; // نام محصول
  quantity: number;
  price: number;
  total_price: number;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("accessToken");

  // 📦 گرفتن سبد خرید
  const fetchCart = async () => {
    try {
      const res = await fetch(`${BASEURL}/api/orders/cart/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (!res.ok) throw new Error("خطا در دریافت سبد خرید");
      const data = await res.json();
      console.log(data)
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
    try {
      await fetch(`${BASEURL}/api/orders/cart/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify({ variant_id, quantity }),
      });
      fetchCart(); // بروزرسانی سبد
    } catch (err) {
      console.error("❌ PATCH Cart Error:", err);
    }
  };

  // 🗑️ حذف محصول
  const removeFromCart = async (variant_id: number) => {
    try {
      await fetch(`${BASEURL}/api/orders/cart/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify({ variant_id }),
      });
      fetchCart();
    } catch (err) {
      console.error("❌ DELETE Cart Error:", err);
    }
  };

  // 🔢 تغییر تعداد با محدودیت
  const handleQuantityChange = (variant_id: number, value: number) => {
    if (value > 0) {
      updateCartItem(variant_id, value);
    }
  };

  // 💰 جمع کل
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
                          <td className="cart-product-image">
                            <img
                              className="rounded img-fluid"
                              src={`https://via.placeholder.com/100`} // اگر تصویر ندارید
                              alt={item.product_name}
                            />
                          </td>
                          <td className="cart-product-info">
                            <Link className="product-title" to={`/product/${item.variant}`}>
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

