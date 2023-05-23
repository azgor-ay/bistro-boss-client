import React, { useEffect, useState } from "react";
import SectionTitle from "../ShareAbleComponents/SectionTitle";
import RecommendedCard from "../ShareAbleComponents/RecommendedCard";
import PrimaryButton from "../ShareAbleComponents/PrimaryButton";

const ChefsRecommended = () => {
  // const [showAll, setShowAll] = useState(false);
  // const [recommended, setRecommended] = useState([]);
  const [fourOnly, setFourOnly] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        // setRecommended(data.filter((item) => item.category === "pizza"));
        const sdf = (data.filter((item) => item.category === "salad"));
        const four = sdf.slice(0, 4);
        setFourOnly(four);
      });
  }, []);

  return (
    <section>
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subHeading={"should try"}
      ></SectionTitle>

      <div className="grid grid-cols-4">
        {fourOnly.map((dish) => (
          <RecommendedCard key={dish._id} item={dish} />
        ))}
      </div>

      {/* <div className="flex items-center justify-center">
        {showAll ? (
          <div
            onClick={() => {
              setShowAll(!showAll);
            }}
            className="mx-auto bg-black my-auto inline"
          >
            <PrimaryButton btnName={"SHOW LESS"} />
          </div>
        ) : (
          <div
            onClick={() => {
              setShowAll(!showAll);
            }}
            className="mx-auto bg-black my-auto inline"
          >
            <PrimaryButton btnName={"SHOW MORE"} />
          </div>
        )}
      </div> */}
    </section>
  );
};

export default ChefsRecommended;
