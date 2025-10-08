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
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("accessToken");

  // 📦 گرفتن سبد خرید
  const fetchCart = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BASEURL}/api/orders/cart/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      const data = await res.json();

      // اصلاح نام محصول فقط به رشته
      const cartItems = (data.items || []).map((item: any) => ({
        ...item,
        product_name:
          typeof item.product_name === "string"
            ? item.product_name
            : item.product_name.fa || item.product_name.en || "بدون نام",
      }));
      setCart(cartItems);
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
    if (quantity < 1) return;

    setCart(prev =>
      prev.map(item =>
        item.variant === variant_id ? { ...item, updating: true } : item
      )
    );

    try {
      const res = await fetch(`${BASEURL}/api/orders/cart/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify({ variant_id, quantity }),
      });
      await res.json();

      setCart(prev =>
        prev.map(item =>
          item.variant === variant_id
            ? {
                ...item,
                quantity,
                total_price: item.price * quantity,
                updating: false,
              }
            : item
        )
      );
    } catch (err) {
      console.error("❌ PATCH Cart Error:", err);
      setCart(prev =>
        prev.map(item =>
          item.variant === variant_id ? { ...item, updating: false } : item
        )
      );
    }
  };

  // 🗑️ حذف محصول
  const removeFromCart = async (variant_id: number) => {
    setCart(prev =>
      prev.map(item =>
        item.variant === variant_id ? { ...item, updating: true } : item
      )
    );

    try {
      const res = await fetch(`${BASEURL}/api/orders/cart/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify({ variant_id }),
      });
      await res.json();

      setCart(prev => prev.filter(item => item.variant !== variant_id));
    } catch (err) {
      console.error("❌ DELETE Cart Error:", err);
      setCart(prev =>
        prev.map(item =>
          item.variant === variant_id ? { ...item, updating: false } : item
        )
      );
    }
  };

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
                              onClick={() => removeFromCart(item.variant)}
                              disabled={item.updating}
                            >
                              ✖
                            </button>
                          </th>
                          <td className="cart-product-info d-flex align-items-center">
                            {item.image && (
                              <img
                                src={item.image}
                                alt={item.product_name}
                              />
                            )}
                            <div>
                              <Link
                                className="product-title"
                                to={`/product/${item.variant}`}
                              >
                                {item.product_name}
                              </Link>
                              <div className="cart-price-qty mt-1 d-flex align-items-center">
                                <button
                                  className="qty-btn"
                                  onClick={() =>
                                    updateCartItem(item.variant, item.quantity - 1)
                                  }
                                  disabled={item.quantity <= 1 || item.updating}
                                >
                                  −
                                </button>
                                <input
                                  type="number"
                                  min={1}
                                  value={item.quantity}
                                  onChange={e =>
                                    updateCartItem(item.variant, Number(e.target.value) || 1)
                                  }
                                  className="qty-input"
                                  disabled={item.updating}
                                />
                                <button
                                  className="qty-btn"
                                  onClick={() =>
                                    updateCartItem(item.variant, item.quantity + 1)
                                  }
                                  disabled={item.updating}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="cart-total-price">
                            {item.updating
                              ? "..."
                              : (item.total_price || item.price * item.quantity).toLocaleString()}{" "}
                            تومان
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
