"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getCart, addToCartApi, updateCartItemApi, removeCartItemApi } from "../services/cartApi";

interface CartItem {
  id: number;
  productName: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem, token?: string) => Promise<void>;
  removeFromCart: (id: number, token?: string) => Promise<void>;
  updateQuantity: (id: number, quantity: number, token?: string) => Promise<void>;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // بارگذاری اولیه از localStorage
  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      setCart(JSON.parse(localCart));
    }
  }, []);

  // ذخیره در localStorage وقتی تغییر کرد
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = async (item: CartItem, token?: string) => {
    if (token) {
      await addToCartApi(item.id, item.quantity, token);
      const serverCart = await getCart(token);
      setCart(serverCart);
    } else {
      setCart((prev) => {
        const existing = prev.find((p) => p.id === item.id);
        if (existing) {
          return prev.map((p) =>
            p.id === item.id ? { ...p, quantity: p.quantity + item.quantity } : p
          );
        }
        return [...prev, item];
      });
    }
  };

  const removeFromCart = async (id: number, token?: string) => {
    if (token) {
      await removeCartItemApi(id, token);
      const serverCart = await getCart(token);
      setCart(serverCart);
    } else {
      setCart((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const updateQuantity = async (id: number, quantity: number, token?: string) => {
    if (token) {
      await updateCartItemApi(id, quantity, token);
      const serverCart = await getCart(token);
      setCart(serverCart);
    } else {
      setCart((prev) =>
        prev.map((p) => (p.id === id ? { ...p, quantity } : p))
      );
    }
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart باید داخل CartProvider استفاده شود");
  return context;
};

