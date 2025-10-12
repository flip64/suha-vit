"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { BASEURL } from "../../config";
import HeaderTwo from "../../layouts/HeaderTwo";
import ProductSlider from "./ProductSlider";
import SingleProductArea from "./SingleProductArea";
import Footer from "../../layouts/Footer";
import "./SingleProduct.css";

const SingleProductIndex = () => {
  const { slug } = useParams();

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  const token = localStorage.getItem("accessToken");

  // -------------------------------
  // دریافت محصول
  // -------------------------------
  useEffect(() => {
    if (!slug) {
      setLoading(false);
      setError("شناسه محصول نامعتبر است");
      return;
    }

    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${BASEURL}/api/products/${slug}/`, {
          signal,
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) {
          if (res.status === 404) throw new Error("محصول مورد نظر یافت نشد");
          throw new Error("خطا در دریافت اطلاعات محصول");
        }

        const data = await res.json();
        setProduct(data);
        setQuantity(1);
      } catch (err: any) {
        if (err.name === "AbortError") return;
        setError(err.message || "خطای ناشناخته رخ داده است");
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();

    return () => {
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, [slug]);

  // -------------------------------
  // افزودن محصول به سبد خرید
  // -------------------------------
  const handleAddToCart = async () => {
    if (!product) return;

    // بررسی موجودی (اگر backend موجودی دارد)
    if (quantity > product.quantity) {
      alert(`حداکثر موجودی محصول ${product.quantity} عدد است.`);
      return;
    }

    // انتخاب واریانت محصول (فرض می‌کنیم اولین واریانت)
    const variantId = product.variants?.[0]?.id;
    if (!variantId) {
      alert("واریانت محصول پیدا نشد.");
      return;
    }

    const cartItem = {
      variant_id: variantId,
      quantity,
    };

    try {
      setAdding(true);

      const res = await fetch(`${BASEURL}/api/orders/cart/add/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify(cartItem),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(data.message || "خطا در افزودن محصول به سبد خرید");

      alert(`${quantity} عدد ${product.name} به سبد خرید اضافه شد!`);
    } catch (err: any) {
      console.error("❌ [API] POST Cart Error:", err);
      alert(err.message || "خطا در افزودن محصول به سبد خرید");
    } finally {
      setAdding(false);
    }
  };

  const increaseQuantity = () => {
    if (!product) return;
    setQuantity((prev) => Math.min(prev + 1, product.quantity || 999));
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const LoadingSkeleton = () => (
    <div className="p-4 animate-pulse">
      <div className="h-64 bg-gray-200 rounded mb-4"></div>
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
    </div>
  );

  return (
    <>
      <HeaderTwo links="shop-grid" title={product?.name || "محصول"} />

      <div className="page-content-wrapper single-product-container">
        {loading ? (
          <LoadingSkeleton />
        ) : error ? (
          <div className="p-4 text-center">
            <div className="text-red-500 mb-2">{error}</div>
            <button onClick={() => window.location.reload()} className="retry-btn">
              تلاش مجدد
            </button>
          </div>
        ) : product ? (
          <div className="product-details-wrapper">
            <div className="product-images-section">
              <ProductSlider
                product={product}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />
            </div>

            <div className="product-info-section">
              <SingleProductArea product={product} />

              <div className="add-to-cart-section">
                <h3>افزودن به سبد خرید</h3>

                <div className="quantity-selector">
                  <label>تعداد:</label>
                  <div className="quantity-controls">
                    <button onClick={decreaseQuantity} className="quantity-btn">-</button>
                    <span className="quantity-value">{quantity}</span>
                    <button onClick={increaseQuantity} className="quantity-btn">+</button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="add-to-cart-btn"
                  disabled={adding || !product.variants?.length}
                >
                  {adding ? "در حال افزودن..." : "افزودن به سبد خرید"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="p-4 text-center">محصولی پیدا نشد.</p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default SingleProductIndex;

