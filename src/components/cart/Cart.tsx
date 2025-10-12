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

      setCart(cartItems);
      setTotal(Number(data.total_price) || 0);
    } catch (err) {
      console.error(err);
      setCart([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (variant: number, quantity = 1) => {
    const token = getToken();
    if (!token) return;

    await fetch(`${BASEURL}/api/orders/cart/add/`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ variant_id: variant, quantity }),
    });

    await fetchCart();
  };

  const updateQuantity = async (variant: number, qty: number) => {
    const token = getToken();
    if (!token) return;

    if (qty <= 0) {
      await removeItem(variant);
      return;
    }

    await fetch(`${BASEURL}/api/orders/cart/item/${variant}/update/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ variant_id: variant, quantity: qty }),
    });

    await fetchCart();
  };

  const removeItem = async (variant: number) => {
    const token = getToken();
    if (!token) return;

    await fetch(`${BASEURL}/api/orders/cart/item/${variant}/delete/`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    });

    await fetchCart();
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
                            <button className="remove-product" onClick={() => removeItem(item.variant)}>
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
                                  onClick={() => updateQuantity(item.variant, item.quantity - 1)}
                                >
                                  -
                                </button>
                                <input
                                  type="number"
                                  min={1}
                                  value={item.quantity}
                                  className="qty-input"
                                  onChange={e =>
                                    updateQuantity(item.variant, parseInt(e.target.value) || 1)
                                  }
                                />
                                <button
                                  className="qty-btn"
                                  onClick={() => updateQuantity(item.variant, item.quantity + 1)}
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
