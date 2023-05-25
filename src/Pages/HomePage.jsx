import React from "react";
import HomeBanner from "../Components/HomePageComponents/HomeBanner";
import Categories from "../Components/HomePageComponents/Categories";
import PopularRecipes from "../Components/HomePageComponents/PopularRecipes";
import CallUsCard from "../Components/ShareAbleComponents/CallUsCard";
import ChefsRecommended from "../Components/HomePageComponents/ChefsRecommended";
import Featured from "../Components/HomePageComponents/Featured";
import Testimonials from "../Components/HomePageComponents/Testimonials";
import BannerCard from "../Components/ShareAbleComponents/BannerCard";
import { Helmet } from "react-helmet-async";
import bannerCardBg from "../assets/home/chef-service.jpg";

const HomePage = () => {
  return (
    <div className="">
        <Helmet>
          <title>Bistro Boss | Home</title>
        </Helmet>
        <HomeBanner></HomeBanner>
        <Categories></Categories>         
        <BannerCard
        heading="Bistro Boss"
        subHeading="Bistro Boss is the epitome of culinary excellence and
        sophistication, providing a dining experience that leaves a lasting
        impression.

        As you step into Bistro Boss, you are immediately greeted by an
        inviting ambiance that exudes warmth and elegance."
        background={'black'}
        image={bannerCardBg}
        ></BannerCard>
        <PopularRecipes></PopularRecipes>
        <CallUsCard></CallUsCard>
        <ChefsRecommended></ChefsRecommended>
        <Featured></Featured>
        <Testimonials></Testimonials>
    </div>
  );
};

export default HomePage;
