"use client";
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import VideoPopup from "../../modals/VideoPopup";

interface ProductSliderProps {
  product: any; // محصولی که شامل images: [{image, alt_text}] هست
}

const ProductSlider = ({ product }: ProductSliderProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  if (!product || !product.images?.length) {
    return <p>تصویری برای نمایش موجود نیست.</p>;
  }

  return (
    <>
      <div className="product-slide-wrapper">
        <Swiper
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="product-slides owl-carousel"
        >
          {product.images.map((img: any, index: number) => (
            <SwiperSlide
              key={index}
              className="single-product-slide"
              style={{
                backgroundImage: `url(${img.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px",
              }}
            ></SwiperSlide>
          ))}
        </Swiper>

        <a
          className="video-btn shadow-sm"
          id="singleProductVideoBtn"
          onClick={() => setIsVideoOpen(true)}
          style={{ cursor: "pointer" }}
        >
          <i className="ti ti-player-play"></i>
        </a>
      </div>

      {/* video modal */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={product.videoId || "-hTVNidxg2s"} // می‌تونی از product.videoId استفاده کنی
      />
    </>
  );
};

export default ProductSlider;
