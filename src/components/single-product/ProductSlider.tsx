
"use client"; 
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPopup from "../../modals/VideoPopup";



const ProductSlider = () => {

  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);



  return (
    <>
      <div className="product-slide-wrapper">

        <Swiper
          loop={true}
          autoplay={true}
          modules={[Autoplay]}

          className="product-slides owl-carousel">

          <SwiperSlide className="single-product-slide" style={{ backgroundImage: `url(/assets/img/bg-img/6.jpg)` }}></SwiperSlide>
          <SwiperSlide className="single-product-slide" style={{ backgroundImage: `url(/assets/img/bg-img/10.jpg)` }}></SwiperSlide>
          <SwiperSlide className="single-product-slide" style={{ backgroundImage: `url(/assets/img/bg-img/11.jpg)` }}></SwiperSlide>

          <SwiperSlide className="single-product-slide" style={{ backgroundImage: `url(/assets/img/bg-img/6.jpg)` }}></SwiperSlide>
          <SwiperSlide className="single-product-slide" style={{ backgroundImage: `url(/assets/img/bg-img/10.jpg)` }}></SwiperSlide>
          <SwiperSlide className="single-product-slide" style={{ backgroundImage: `url(/assets/img/bg-img/11.jpg)` }}></SwiperSlide>

        </Swiper>


        <a
          className="video-btn shadow-sm"
          id="singleProductVideoBtn"
          onClick={() => setIsVideoOpen(true)}
          style={{ cursor: "pointer" }}>
          <i className="ti ti-player-play"></i>
        </a>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"-hTVNidxg2s"}
      />
      {/* video modal end  */}

    </>
  );
};

export default ProductSlider;