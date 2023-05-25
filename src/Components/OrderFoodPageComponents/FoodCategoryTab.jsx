import React from "react";
import DishCard from "../ShareAbleComponents/DishCard";

const FoodCategoryTab = ({items}) => {
  return (
    <div className="grid grid-cols-3 gap-7 p-12">
      {items.map((item) => (
        <DishCard key={item._id} item={item}></DishCard>
      ))}
    </div>
  );
};

export default FoodCategoryTab;
