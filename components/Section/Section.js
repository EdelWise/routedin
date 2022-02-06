import React from "react";

export default function Section({ children, id }) {
  return (
    <section
      id={id}
      className=" min-h-screen w-full lg:mx-57.25 grid lg:grid-cols-2 lg:gap-x-40 gap-5 lg:pt-28 "
    >
      {children}
    </section>
  );
}
