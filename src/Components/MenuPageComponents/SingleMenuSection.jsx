import React from "react";
import BannerCard from "../ShareAbleComponents/BannerCard";
import SectionTitle from "../ShareAbleComponents/SectionTitle";
import DishListCard from "../ShareAbleComponents/DishListCard";
import PrimaryButton from "../ShareAbleComponents/PrimaryButton";
import { Link } from "react-router-dom";

const SingleMenuSection = ({
  bannerTitle,
  bannerDescription,
  bannerBgColor,
  bannerCardBgImg,
  sectionTitle,
  sectionSubTitle,
  dishes,
}) => {
  console.log(dishes);
  return (
    <section className="flex flex-col p-12 items-center">
      <BannerCard
        heading={bannerTitle}
        subHeading={bannerDescription}
        background={bannerBgColor}
        image={bannerCardBgImg}
      ></BannerCard>

      {sectionTitle && (
        <SectionTitle
          heading={sectionTitle}
          subHeading={sectionSubTitle}
        ></SectionTitle>
      )}

      <div className="grid grid-cols-2 gap-7 p-12">
        {dishes.map((dish) => (
          <DishListCard key={dish._id} items={dish}></DishListCard>
        ))}
      </div>
      <Link to={`/orderFoods/${dishes[0]?.category}`}>
        <PrimaryButton btnName={"ORDER YOUR FAVOURITE FOOD"}></PrimaryButton>
      </Link>
    </section>
  );
};

export default SingleMenuSection;
