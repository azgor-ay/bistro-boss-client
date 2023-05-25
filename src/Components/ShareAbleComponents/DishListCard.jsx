import React from "react";

const DishListCard = ({ items }) => {
  const { name, image, price, recipe } = items;

  return (
    <div>
      <div className="flex justify-between items-start">
        <div className="flex-shrink-0">
          <img
            className="w-16 h-16 object-cover object-right rounded-r-full rounded-bl-full"
            src={image}
            alt=""
          />
        </div>
        <div className="px-5">
          <h2 className="font-semibold">{name} ----------------------</h2>
          <p className="text-sm text-gray-400">{recipe}</p>
        </div>
        <div>
          <p className="font-bold text-primary">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default DishListCard;
