import React from "react";

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="text-center py-8">
      <h4 className="border-b-4 w-72 mx-auto py-3 italic text-primary">
             ---{subHeading}---
      </h4>
      <h1 className="border-b-4 w-72 mx-auto py-3 text-3xl uppercase">
        {heading}
      </h1>
    </div>
  );
};

export default SectionTitle;
