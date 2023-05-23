import React from "react";

const RecommendedCard = ({ item }) => {
  const { image, name, recipe } = item;
  console.log(item);
  return (
    <div className="text-center p-6 flex flex-col justify-between items-center">
      <figure>
        <img src={image} alt="dish" />
      </figure>
      <div className="">
        <h2 className="text-xl font-semibold py-2">{name}</h2>
        <p className="text-xs text-gray-500">{recipe}</p>
      </div>
      <div className="mt-auto">
        <button className="border-b-2 rounded-lg border-primary px-3 p-2 mt-4 text-primary font-semibold hover:bg-black hover:border-none duration-300">ADD TO CART</button>
      </div>
    </div>
  );
};

export default RecommendedCard;
