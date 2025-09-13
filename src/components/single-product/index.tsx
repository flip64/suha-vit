"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BASEURL } from "../../config";
import HeaderTwo from "../../layouts/HeaderTwo";
import ProductSlider from "./ProductSlider";
import SingleProductArea from "./SingleProductArea";
import Footer from "../../layouts/Footer";
import "./SingleProduct.css";

// تعریف نوع محصول
const SingleProductIndex = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const abortControllerRef = useRef(null);

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
          headers: {
            'Content-Type': 'application/json',
          }
        });
        
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error("محصول مورد نظر یافت نشد");
          }
          throw new Error("خطا در دریافت اطلاعات محصول");
        }
        
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('درخواست fetch لغو شد');
          return;
        }
        console.error(err);
        setError(err.message || "خطای ناشناخته ای رخ داده است");
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [slug]);

  const handleAddToCart = () => {
    if (!product) return;
    
    // شبیه‌سازی افزودن به سبد خرید
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.discount_price || product.price,
      quantity: quantity,
      image: product.images[0]?.image || '/images/placeholder-product.jpg'
    };
    
    // دریافت سبد خرید موجود از localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // بررسی آیا محصول از قبل در سبد وجود دارد
    const existingItemIndex = existingCart.findIndex(item => item.id === product.id);
    
    if (existingItemIndex >= 0) {
      // افزایش تعداد اگر محصول از قبل وجود دارد
      existingCart[existingItemIndex].quantity += quantity;
    } else {
      // افزودن محصول جدید به سبد
      existingCart.push(cartItem);
    }
    
    // ذخیره سبد خرید به روز شده
    localStorage.setItem('cart', JSON.stringify(existingCart));
    
    // نمایش پیام موفقیت
    alert(`${quantity} عدد ${product.name} به سبد خرید اضافه شد!`);
    
    // هدایت به صفحه سبد خرید (اختیاری)
    // navigate('/cart');
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
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
            <button 
              onClick={() => window.location.reload()}
              className="retry-btn"
            >
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
                  disabled={!product.in_stock}
                >
                  {product.in_stock ? 'افزودن به سبد خرید' : 'ناموجود'}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="p-4 text-center">محصولی پیدا نشد.</p>
        )}
      </div>

      <div className="internet-connection-status" id="internetStatus"></div>
      <Footer />
    </>
  );
};

export default SingleProductIndex;
