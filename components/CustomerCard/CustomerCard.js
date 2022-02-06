import React from "react";

export default function CustomerCard({ image, shortDescription, description }) {
  return (
    <div className="text-white font-roboto grid grid-cols-1 gap-2.5 ">
      <div className=" flex gap-6 items-center ">
        <img src={image} alt="" />

        <span className="text-sm	">{shortDescription}</span>
      </div>

      <p className="lg:text-2xl text-lg ">{description}</p>
    </div>
  );
}
