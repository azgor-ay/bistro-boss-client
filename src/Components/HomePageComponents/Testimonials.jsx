import React, { useEffect, useState } from "react";
import SectionTitle from "../ShareAbleComponents/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper";

import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import quotation from "../../assets/icon/quotation.png";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const includedShapesStyles = [RoundedStar].map((itemShapes) => ({
    itemShapes,
    activeFillColor: "#CD9003",
    inactiveFillColor: "#A1A1A1",
  }));
  return (
    <section>
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"What Our Clients Say"}
      ></SectionTitle>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        loop
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="text-center mb-12 px-32 flex flex-col justify-center items-center space-y-6">
              <div>
                {includedShapesStyles.map((itemStyles, index) => (
                  <Rating
                    key={`shape_${index}`}
                    style={{ maxWidth: 150 }}
                    value={review.rating}
                    readOnly
                    itemStyles={itemStyles}
                  />
                ))}
              </div>
              <img src={quotation} alt="" className="w-24" />
              <div>
                <p className="text-sm">{review.details}</p>
                <h4 className="text-3xl text-primary uppercase">
                  {review.name}
                </h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
