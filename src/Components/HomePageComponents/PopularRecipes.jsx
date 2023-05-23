import React, { useEffect, useState } from "react";
import SectionTitle from "../ShareAbleComponents/SectionTitle";
import Card from "../ShareAbleComponents/Card";
import PrimaryButton from "../ShareAbleComponents/PrimaryButton";

const PopularRecipes = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);
  useEffect(()=>{
    fetch('menu.json')
    .then(res => res.json())
    .then(data => {
        setPopularRecipes(data.filter(item => item.category === "popular"))
    })
  }, [])

  return (
    <section className="flex flex-col items-center justify-center p-12">
      <SectionTitle
        heading={"from our menu"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-12 mb-12">
        {popularRecipes.map(recipe => <Card
        key={recipe._id}
        items={recipe}
        ></Card>)}
      </div>
        <PrimaryButton btnName={"view full menu"}></PrimaryButton>
    </section>
  );
};

export default PopularRecipes;
