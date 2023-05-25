import React from "react";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import SectionTitle from "../ShareAbleComponents/SectionTitle";

const Categories = () => {
  return (
    <div className="py-16 text-center">
      <SectionTitle heading={"ORDER ONLINE"} subHeading={"From 11:00am to 10:00pm"}></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
          
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper text-3xl uppercase text-white"
      >
        <SwiperSlide>
          <img className="mb-5 -pb-10 cursor-pointer" src={slide1} alt="" />
          <h3 className="-mt-16 pb-16 pr-12 crinzel drop-shadow-md">salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="mb-5 -pb-10" src={slide2} alt="" />
          <h3 className="-mt-16 pb-16 pr-12 crinzel drop-shadow-md">pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="mb-5 -pb-10" src={slide3} alt="" />
          <h3 className="-mt-16 pb-16 pr-12 crinzel drop-shadow-md">soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="mb-5 -pb-10" src={slide4} alt="" />
          <h3 className="-mt-16 pb-16 pr-12 crinzel drop-shadow-md">deserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="mb-5 -pb-10" src={slide5} alt="" />
          <h3 className="-mt-16 pb-16 pr-12 crinzel drop-shadow-md">salads</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
