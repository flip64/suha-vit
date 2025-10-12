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
  variant_name?: string;
  quantity: number;
  price: number;
  total_price: number;
  image?: string | null;
}

// 🧮 کامپوننت تعداد با دکمه + و -
interface QuantityInputProps {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
}

const QuantityInput = ({ value, onChange, min = 1 }: QuantityInputProps) => {
  return (
    <div className="quantity-input d-flex align-items-center">
      <button
        type="button"
        className="btn-decrement"
        onClick={() => onChange(Math.max(value - 1, min))}
      >
        -
      </button>
      <input
        type="number"
        value={value}
        min={min}
        onChange={e => onChange(Math.max(parseInt(e.target.value) || min, min))}
      />
      <button
        type="button"
        className="btn-increment"
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  );
};

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  const getToken = () => localStorage.getItem("accessToken");

  const fetchCart = async () => {
    console.log("🛰️ شروع دریافت سبد خرید از سرور...");
    setLoading(true);

    try {
      const token = getToken();
      const url = `${BASEURL}/api/orders/cart/`;
      const headers: any = { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;

      const res = await fetch(url, { headers });
      if (!res.ok) {
        setCart([]);
        setTotal(0);
        return;
      }

      const data = await res.json();
      if (!data.items || !Array.isArray(data.items)) {
        setCart([]);
        setTotal(0);
        return;
      }

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
      setCart([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQuantity = async (variant: number, qty: number) => {
    setCart(prev =>
      prev.map(item => (item.variant === variant ? { ...item, quantity: qty } : item))
    );

    const token = getToken();
    if (!token) return;

    try {
      const url = `${BASEURL}/api/orders/cart/item/${variant}/update/`;
      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ quantity: qty, variant_id: variant }),
      });
      await fetchCart();
    } catch (err) {
      console.error(err);
    }
  };

  const removeItem = async (variant: number) => {
    setCart(prev => prev.filter(item => item.variant !== variant));

    const token = getToken();
    if (!token) return;

    try {
      const url = `${BASEURL}/api/orders/cart/item/${variant}/delete/`;
      await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      await fetchCart();
    } catch (err) {
      console.error(err);
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
                                <QuantityInput
                                  value={item.quantity}
                                  onChange={newQty => updateQuantity(item.variant, newQty)}
                                />
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
