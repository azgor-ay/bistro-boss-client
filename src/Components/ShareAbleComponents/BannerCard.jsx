import React from "react";

const BannerCard = ({ heading, subHeading, background, image }) => {
  return (
    <div
      className="hero min-h-max p-16 py-28 bg-fixed"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className=" text-center">
        <div
          className={`px-48 py-16 bg-${background} ${
            background === "white" ? "text-black" : "text-white"
          } bg-opacity-50`}
        >
          <h1 className="mb-5 text-5xl font-bold crinzel">{heading}</h1>
          <p className="mb-5 text-xs inter">{subHeading}</p>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
