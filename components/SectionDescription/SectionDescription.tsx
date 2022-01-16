import React from "react";

export default function SectionDescription({ number, title, content }) {
  return (
    <div>
      <span className="text-white text-60 font-extrabold from global opacity-40 relative top-28   ">
        {number}
      </span>
      <div>
        <div className="flex">
          <img src="/green_line.svg" alt="" />{" "}
          <div className="flex uppercase ml-1.5 font-roboto text-4.5 text-green">
            {title}
          </div>
        </div>
        <p className="text-white text-4.5 font-medium ">{content}</p>
      </div>
    </div>
  );
}
