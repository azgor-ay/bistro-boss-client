import React from "react";
import HomeBanner from "../Components/HomePageComponents/HomeBanner";
import Categories from "../Components/HomePageComponents/Categories";
import BIO from "../Components/HomePageComponents/BIO";
import PopularRecipes from "../Components/HomePageComponents/PopularRecipes";
import CallUsCard from "../Components/ShareAbleComponents/CallUsCard";
import ChefsRecommended from "../Components/HomePageComponents/ChefsRecommended";
import Featured from "../Components/HomePageComponents/Featured";
import Testimonials from "../Components/HomePageComponents/Testimonials";

const HomePage = () => {
  return (
    <div className="">
        <HomeBanner></HomeBanner>
        <Categories></Categories>         
        <BIO></BIO> 
        <PopularRecipes></PopularRecipes>
        <CallUsCard></CallUsCard>
        <ChefsRecommended></ChefsRecommended>
        <Featured></Featured>
        <Testimonials></Testimonials>
    </div>
  );
};

export default HomePage;
