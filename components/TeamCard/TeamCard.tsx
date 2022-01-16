import React from "react";

export default function TeamCard({ picture, title, name }) {
  return (
    <div className="w-66.75 ">
      <img
        className="h-83.25  bg-grey-light"
        src={picture}
        alt="team picture"
      />
      <div className="bg-grey py-3 px-5">
        <div className="text-sm text-green font-roboto">{title}</div>
        <div className="text-2xl font-podkova">{name}</div>
      </div>
    </div>
  );
}
