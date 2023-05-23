import React from "react";

const PrimaryButton = ({btnName}) => {
  return (
    <button className="border-b-2 border-black p-1 px-4 rounded-lg font-bold uppercase hover:text-primary hover:border-primary duration-200">
      {btnName}
    </button>
  );
};

export default PrimaryButton;
