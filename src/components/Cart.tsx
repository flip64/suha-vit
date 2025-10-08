"use client";

import HeaderTwo from "../layouts/HeaderTwo";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
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
      setCart(Array.isArray(data.items) ? data.items : []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

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
      if (res.ok) fetchCart();
    } catch (err) {
      console.error(err);
    }
  };

  const removeFromCart = (id: number) => updateCartItem(id, 0);

  const handleQuantityChange = (id: number, value: number, maxQuantity: number) => {
    if (value > 0 && value <= maxQuantity) {
      updateCartItem(id, value);
    } else if (value > maxQuantity) {
      alert(`حداکثر موجودی این محصول ${maxQuantity} عدد است.`);
      updateCartItem(id, maxQuantity);
    }
  };

  const total = cart.reduce((acc, item) => acc + (item.price || 0) * item.quantity, 0);

  return (
    <>
      <HeaderTwo title="سبد خرید من" links="shop-grid" />

      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto py-6 px-4 max-w-3xl">
          {loading ? (
            <p className="text-center text-gray-500">در حال بارگذاری...</p>
          ) : cart.length > 0 ? (
            <>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white shadow-md rounded-2xl p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div>
                        <Link
                          to={`/product/${item.id}`}
                          className="font-semibold text-gray-800 hover:text-blue-600"
                        >
                          {item.name}
                        </Link>
                        <p className="text-gray-500 text-sm mt-1">
                          قیمت واحد: {item.price.toLocaleString()} تومان
                        </p>
                        <p className="text-gray-700 mt-1">
                          جمع: {(item.price * item.quantity).toLocaleString()} تومان
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end space-y-2">
                      <div className="flex items-center border rounded-xl overflow-hidden">
                        <button
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1, item.maxQuantity)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          min={1}
                          max={item.maxQuantity}
                          onChange={(e) =>
                            handleQuantityChange(item.id, Number(e.target.value) || 1, item.maxQuantity)
                          }
                          className="w-10 text-center border-none outline-none"
                        />
                        <button
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1, item.maxQuantity)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="text-red-500 text-sm hover:text-red-700"
                        onClick={() => removeFromCart(item.id)}
                      >
                        حذف
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white mt-6 shadow-md rounded-2xl p-4 flex items-center justify-between">
                <h5 className="font-bold text-gray-800">
                  مجموع: {total.toLocaleString()} تومان
                </h5>
                <Link
                  to="/checkout"
                  className="bg-blue-600 text-white py-2 px-6 rounded-xl hover:bg-blue-700"
                >
                  پرداخت
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-10 text-gray-500">
              <i className="ti ti-shopping-cart text-4xl mb-2 block"></i>
              <p>سبد خرید خالی است</p>
              <Link
                to="/shop-grid"
                className="mt-3 inline-block bg-blue-600 text-white py-2 px-4 rounded-xl"
              >
                رفتن به فروشگاه
              </Link>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
