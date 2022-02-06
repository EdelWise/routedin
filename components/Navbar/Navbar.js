import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="h-24 w-11/12 bg-black  sticky top-0 flex items-center justify-between z-10">
      <a className="flex items-center" href="/">
        <img alt="" />
        <Image src="/logo_routedin.png" width={72} height={72}></Image>
        <span className="text-4xl text-white font-podkova ml-1.5 hidden lg:block ">
          routedin
        </span>
      </a>
      <div className="text-white font-roboto text-2xl lg:flex gap-20 hidden">
        <a href="#services">Services</a>
        <a href="#customers">Our customers</a>
        <a href="#team">About us</a>
      </div>

      <a
        className="bg-green w-40 h-13 font-roboto flex items-center justify-center text-white text-2xl"
        href="#contact"
      >
        Contact us
      </a>
    </div>
  );
}
