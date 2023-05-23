import React from "react";

import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const Categories = () => {
  return (
    <div className="text-center mx-auto py-16">
      <h4 className="border-b-4 w-72 mx-auto py-3 italic text-primary">
        ---From 11:00am to 10:00pm---
      </h4>
      <h1 className="border-b-4 w-72 mx-auto py-3 text-3xl">ORDER ONLINE</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
          
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper text-3xl uppercase text-white my-12"
      >
        <SwiperSlide>
          <img className="mb-5 -pb-10" src={slide1} alt="" />
          <h3 className="-mt-16 pb-16 pr-12 crinzel">salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="mb-5 -pb-10" src={slide2} alt="" />
          <h3 className="-mt-16 pb-16 pr-12 crinzel">pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="mb-5 -pb-10" src={slide3} alt="" />
          <h3 className="-mt-16 pb-16 pr-12 crinzel">soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="mb-5 -pb-10" src={slide4} alt="" />
          <h3 className="-mt-16 pb-16 pr-12 crinzel">deserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="mb-5 -pb-10" src={slide5} alt="" />
          <h3 className="-mt-16 pb-16 pr-12 crinzel">salads</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
