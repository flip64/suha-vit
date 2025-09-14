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
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // ✏️ تغییر تعداد یا حذف محصول (quantity=0 یعنی حذف)
  const updateCartItem = async (id: number, quantity: number) => {
    try {
      await fetch(`${BASEURL}/api/orders/cart/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify({ product_id: id, quantity }),
      });
      fetchCart(); // بروزرسانی سبد
    } catch (err) {
      console.error(err);
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
    updateCartItem(id, 0); // مقدار 0 → حذف
  };

  // 💰 جمع کل
  const total = cart.reduce((acc, item) => acc + (item.price || 0) * item.quantity, 0);

  return (
    <>
      <HeaderTwo links="shop-grid" title="My Cart" />

      <div className="page-content-wrapper">
        <div className="container">
          <div className="cart-wrapper-area py-3">
            <div className="cart-table card mb-3">
              <div className="table-responsive card-body">
                {loading ? (
                  <p className="text-center">در حال بارگذاری...</p>
                ) : (
                  <table className="table mb-0">
                    <tbody>
                      {cart.length > 0 ? (
                        cart.map((item) => (
                          <tr key={item.id}>
                            <th scope="row">
                              <button
                                className="remove-product"
                                onClick={() => removeFromCart(item.id)}
                              >
                                <i className="ti ti-x"></i>
                              </button>
                            </th>
                            <td>
                              <img className="rounded img-fluid" src={item.image} alt={item.name} />
                            </td>
                            <td>
                              <Link className="product-title" to={`/product/${item.id}`}>
                                {item.name}
                                <span className="mt-1">
                                  {item.price} تومان × {item.quantity}
                                </span>
                              </Link>
                            </td>
                            <td>
                              <div className="quantity">
                                <input
                                  className="qty-text"
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
                                />
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={4} className="text-center">
                            سبد خرید خالی است
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            {cart.length > 0 && (
              <div className="card cart-amount-area">
                <div className="card-body d-flex align-items-center justify-content-between">
                  <h5 className="total-price mb-0">
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
