"use client";

import HeaderTwo from "../layouts/HeaderTwo";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // تغییر تعداد محصول با محدودیت موجودی
  const handleQuantityChange = (id: number, value: number, maxQuantity: number) => {
    if (value > 0 && value <= maxQuantity) {
      updateQuantity(id, value);
    } else if (value > maxQuantity) {
      alert(`حداکثر موجودی این محصول ${maxQuantity} عدد است.`);
      updateQuantity(id, maxQuantity);
    }
  };

  // جمع کل سبد خرید
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <HeaderTwo links="shop-grid" title="My Cart" />

      <div className="page-content-wrapper">
        <div className="container">
          <div className="cart-wrapper-area py-3">
            <div className="cart-table card mb-3">
              <div className="table-responsive card-body">
                <table className="table mb-0">
                  <tbody>
                    {cart.length > 0 ? (
                      cart.map((item, i) => (
                        <tr key={i}>
                          <th scope="row">
                            <button
                              className="remove-product"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <i className="ti ti-x"></i>
                            </button>
                          </th>
                          <td>
                            <img className="rounded" src={item.image} alt={item.name} />
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
                                    parseInt(e.target.value),
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

