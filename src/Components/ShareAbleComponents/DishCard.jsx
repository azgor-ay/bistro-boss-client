import React from "react";

const DishCard = ({ item, noPrice }) => {
  const { image, name, recipe, price } = item;

  return (
      <div className="flex flex-col bg-base-200 hero justify-between bg-opacity-40 shadow-lg">
        <figure className="">
          <img className="w-full" src={image} alt="dish" />
          {
            noPrice || 
          <span className="relative badge rounded-none left-48 bottom-[160px]">${price}</span>
          }
        </figure>
        <div className="px-6">
          <h2 className="text-xl font-bold py-2 text-center">{name}</h2>
          <p className="text-xs text-gray-500">{recipe}</p>
        </div>
        <div className="py-3 mt-auto">
          <button className="border-b-2 rounded-lg border-primary bg-base-200 px-3 p-2 text-primary font-semibold hover:bg-black duration-300">
            ADD TO CART
          </button>
        </div>
      </div>
  );
};

export default DishCard;
