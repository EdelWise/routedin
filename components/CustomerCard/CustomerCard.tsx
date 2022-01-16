import React from "react";

export default function CustomerCard({ image, shortDescription, description }) {
  return (
    <div className="text-white font-roboto grid grid-cols-1 ">
      <div className=" flex gap-6 items-center ">
        <img src={image} alt="" />

        <span className="text-sm	">{shortDescription}</span>
      </div>

      <p className="text-2xl ">{description}</p>
    </div>
  );
}
