import { BASEURL } from "../config";

// گرفتن سبد خرید
export const getCart = async (token: string) => {
  const res = await fetch(`${BASEURL}/api/cart/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("خطا در گرفتن سبد خرید");
  return res.json();
};

// افزودن محصول
export const addToCartApi = async (productId: number, quantity: number, token: string) => {
  const res = await fetch(`${BASEURL}/api/cart/add/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ product_id: productId, quantity }),
  });
  if (!res.ok) throw new Error("خطا در افزودن به سبد خرید");
  return res.json();
};

// تغییر تعداد
export const updateCartItemApi = async (productId: number, quantity: number, token: string) => {
  const res = await fetch(`${BASEURL}/api/cart/update/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ product_id: productId, quantity }),
  });
  if (!res.ok) throw new Error("خطا در بروزرسانی سبد خرید");
  return res.json();
};

// حذف محصول
export const removeCartItemApi = async (productId: number, token: string) => {
  const res = await fetch(`${BASEURL}/api/cart/remove/`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify({ product_id: productId }),
  });
  if (!res.ok) throw new Error("خطا در حذف از سبد خرید");
  return res.json();
};

