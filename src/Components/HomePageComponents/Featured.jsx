import React from "react";
import SectionTitle from "../ShareAbleComponents/SectionTitle";
import img from "../../assets/home/featured.jpg";
import PrimaryButton from "../ShareAbleComponents/PrimaryButton";
const Featured = () => {
  return (
    <section>
      <div
        className="hero min-h-min bg-fixed"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-white">
          <SectionTitle
            heading={"FROM OUR MENU"}
            subHeading={"Check it Out"}
          ></SectionTitle>
          <div className="max-w-3xl flex justify-evenly gap-7 p-12">
            <div className="w-1/2">
              <img className="w-full" src={img} alt="" />
            </div>
            <div className="w-1/2 flex flex-col items-start">
              <h4 className="text-xl">
                March 20, 2023 <br />
                WHERE CAN I GET SOME?
              </h4>
              <p className="text-xs mb-2">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate aperiam enim odit quia rem, expedita dignissimos porro
                eaque, exercitationem, blanditiis molestiae ad distinctio nemo
                veniam eum! Reiciendis, unde porro! Enim.
              </p>
              <PrimaryButton btnName={"read more"}></PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
