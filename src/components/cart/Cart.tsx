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
  attributes?: string;
}

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch با JWT و لاگ کامل
  const fetchCart = async () => {
    console.log("🛒 Fetching cart data...");
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.warn("⚠️ No JWT token found in localStorage");
        setCart([]);
        setLoading(false);
        return;
      }

      const url = `${BASEURL}/api/orders/cart/`;
      console.log("🌍 Fetch start:", url);

      const res = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("📡 Response status:", res.status);

      if (!res.ok) {
        const text = await res.text();
        console.error("❌ Response not OK:", text);
        setCart([]);
        return;
      }

      const data = await res.json();
      console.log("✅ Response JSON:", data);

      if (!data.items || !Array.isArray(data.items)) {
        console.warn("⚠️ No items in cart response");
        setCart([]);
        return;
      }

      const cartItems: CartItem[] = data.items.map((item: any) => {
        let productName = "";
        let attributes = "";

        if (typeof item.product_name === "string") {
          productName = item.product_name;
        } else if (item.product_name?.product) {
          productName = item.product_name.product.name || "بدون نام";
          if (item.product_name.attributes?.length) {
            attributes = item.product_name.attributes.map((a: any) => a.value).join(" ");
          }
        }

        return {
          ...item,
          product_name: `${productName} ${attributes}`.trim(),
        };
      });

      setCart(cartItems);
    } catch (err) {
      console.error("🚨 GET Cart Error:", err);
      setCart([]);
    } finally {
      setLoading(false);
      console.log("⏹️ Fetch cart finished");
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQuantity = (variant: number, qty: number) => {
    setCart(prev =>
      prev.map(item =>
        item.variant === variant ? { ...item, quantity: qty } : item
      )
    );
    console.log(`🔄 Updated quantity of variant ${variant} to ${qty}`);
  };

  const removeItem = (variant: number) => {
    setCart(prev => prev.filter(item => item.variant !== variant));
    console.log(`🗑️ Removed variant ${variant} from cart`);
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
                            {(item.total_price || item.price * item.quantity).toLocaleString()} تومان
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
