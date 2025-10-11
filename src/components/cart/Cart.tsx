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
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  const fetchCart = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("tokenes");
      if (!token) {
        setCart([]);
        setTotal(0);
        setLoading(false);
        return;
      }

      const res = await fetch(`${BASEURL}/api/orders/cart/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        setCart([]);
        setTotal(0);
        setLoading(false);
        return;
      }

      const data = await res.json();
      if (!data.items || !Array.isArray(data.items)) {
        setCart([]);
        setTotal(0);
        setLoading(false);
        return;
      }

      setCart(data.items);
      setTotal(data.total_price);
    } catch (err) {
      console.error("GET Cart Error:", err);
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

    const token = localStorage.getItem("tokenes");
    if (!token) return;

    await fetch(`${BASEURL}/api/orders/cart/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ variant_id: variant, quantity: qty }),
    });

    fetchCart(); // refresh
  };

  const removeItem = async (variant: number) => {
    setCart(prev => prev.filter(item => item.variant !== variant));

    const token = localStorage.getItem("tokenes");
    if (!token) return;

    await fetch(`${BASEURL}/api/orders/cart/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ variant_id: variant }),
    });

    fetchCart(); // refresh
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
                            {item.image && <img src={item.image} alt={item.product_name} />}
                            <div>
                              <Link
                                className="product-title"
                                to={`/product/${item.variant}`}
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
                                    updateQuantity(item.variant, parseInt(e.target.value))
                                  }
                                />
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
