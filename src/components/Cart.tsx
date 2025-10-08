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
    try {
      const res = await fetch(`${BASEURL}/api/orders/cart/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (!res.ok) throw new Error("خطا در دریافت سبد خرید");
      const data = await res.json();
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

  // ✏️ تغییر تعداد
  const updateCartItem = async (id: number, quantity: number) => {
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
      await fetchCart();
    } catch (err) {
      console.error("❌ [API] POST Cart Error:", err);
    }
  };

  // 🔢 کنترل تعداد
  const handleQuantityChange = (id: number, value: number, max: number) => {
    if (value < 1) return updateCartItem(id, 1);
    if (value > max) return updateCartItem(id, max);
    updateCartItem(id, value);
  };

  // 🗑️ حذف
  const removeFromCart = (id: number) => {
    updateCartItem(id, 0);
  };

  // 💰 جمع کل
  const total = Array.isArray(cart)
    ? cart.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0)
    : 0;

  return (
    <>
      <HeaderTwo links="shop-grid" title="سبد خرید" />

      <div className="page-content-wrapper">
        <div className="container py-3">
          {loading ? (
            <p className="text-center text-gray-500">در حال بارگذاری...</p>
          ) : cart.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-lg font-semibold">سبد خرید خالی است 🛒</p>
              <Link className="btn btn-primary mt-3" to="/shop-grid">
                بازگشت به فروشگاه
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white p-3 rounded-2xl shadow-sm"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-xl"
                    />
                    <div>
                      <Link
                        to={`/product/${item.id}`}
                        className="font-semibold text-sm text-gray-800"
                      >
                        {item.name}
                      </Link>
                      <p className="text-xs text-gray-500">
                        {item.price.toLocaleString()} تومان
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="flex items-center border rounded-lg">
                      <button
                        className="px-2 text-lg"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1, item.maxQuantity)
                        }
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min={1}
                        max={item.maxQuantity}
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            item.id,
                            Number(e.target.value),
                            item.maxQuantity
                          )
                        }
                        className="w-10 text-center border-x"
                      />
                      <button
                        className="px-2 text-lg"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1, item.maxQuantity)
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="text-xs text-red-500 mt-1"
                      onClick={() => removeFromCart(item.id)}
                    >
                      حذف
                    </button>
                  </div>
                </div>
              ))}

              <div className="card cart-amount-area mt-4">
                <div className="card-body flex items-center justify-between">
                  <h5 className="font-semibold text-gray-800">
                    مجموع: {total.toLocaleString()} تومان
                  </h5>
                  <Link className="btn btn-primary" to="/checkout">
                    ادامه پرداخت
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
