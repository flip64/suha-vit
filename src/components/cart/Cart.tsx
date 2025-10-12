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

  const log = (...args: any[]) => console.log("[Cart]", ...args);

  // =========================
  // دریافت سبد خرید
  // =========================
  const fetchCart = async () => {
    setLoading(true);
    log("Fetching cart...");
    try {
      const token = localStorage.getItem("token");
      log("JWT Token:", token);

      const headers: any = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const res = await fetch(`${BASEURL}/api/orders/cart/`, { headers });
      log("Response status:", res.status);

      if (!res.ok) {
        const text = await res.text();
        log("Response text on error:", text);
        setCart([]);
        setTotal(0);
        setLoading(false);
        return;
      }

      const data = await res.json();
      log("Cart data received:", data);

      if (!data.items || !Array.isArray(data.items)) {
        log("No items array found in response");
        setCart([]);
        setTotal(0);
        setLoading(false);
        return;
      }

      const cartItems: CartItem[] = data.items.map((item: any) => ({
        id: item.id,
        variant: item.variant,
        product_slug: item.product_slug || item.variant.toString(),
        product_name: item.product_name || "بدون نام",
        quantity: item.quantity,
        price: Number(item.price),
        total_price: Number(item.total_price),
        image: item.image || null,
      }));

      setCart(cartItems);
      setTotal(Number(data.total_price) || 0);
      log("Cart items set:", cartItems, "Total:", total);
    } catch (err) {
      log("🚨 GET Cart Error:", err);
      setCart([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // =========================
  // بروزرسانی تعداد آیتم
  // =========================
  const updateQuantity = async (variant: number, qty: number) => {
    log(`Updating quantity: variant=${variant}, qty=${qty}`);
    setCart(prev =>
      prev.map(item => (item.variant === variant ? { ...item, quantity: qty } : item))
    );

    const token = localStorage.getItem("token");
    if (!token) {
      log("No token, cannot update cart");
      return;
    }

    try {
      const res = await fetch(`${BASEURL}/api/orders/cart/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ variant_id: variant, quantity: qty }),
      });
      log("PATCH response status:", res.status);

      const text = await res.text();
      log("PATCH response text:", text);

      fetchCart();
    } catch (err) {
      log("🚨 Update Cart Error:", err);
    }
  };

  // =========================
  // حذف آیتم
  // =========================
  const removeItem = async (variant: number) => {
    log(`Removing item: variant=${variant}`);
    setCart(prev => prev.filter(item => item.variant !== variant));

    const token = localStorage.getItem("token");
    if (!token) {
      log("No token, cannot remove item");
      return;
    }

    try {
      const res = await fetch(`${BASEURL}/api/orders/cart/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ variant_id: variant }),
      });
      log("DELETE response status:", res.status);

      const text = await res.text();
      log("DELETE response text:", text);

      fetchCart();
    } catch (err) {
      log("🚨 Remove Cart Item Error:", err);
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
                                <span className="ms-2">
                                  {item.price.toLocaleString()} تومان
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="text-end">
                            {item.total_price.toLocaleString()} تومان
                          </td>
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
