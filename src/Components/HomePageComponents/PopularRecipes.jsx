import React, { useEffect, useState } from "react";
import SectionTitle from "../ShareAbleComponents/SectionTitle";
import PrimaryButton from "../ShareAbleComponents/PrimaryButton";
import DishListCard from "../ShareAbleComponents/DishListCard";
import useMenuData from "../../MyHooks/useMenuData";

const PopularRecipes = () => {
  const[menu] = useMenuData()
  const popularRecipes = menu.filter((item) => item.category === "popular")

  return (
    <section className="flex flex-col items-center justify-center p-12">
      <SectionTitle
        heading={"from our menu"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-12 mb-12">
        {popularRecipes.map((recipe) => (
          <DishListCard key={recipe._id} items={recipe} />
        ))}
      </div>
      <PrimaryButton btnName={"view full menu"}></PrimaryButton>
    </section>
  );
};

export default PopularRecipes;
