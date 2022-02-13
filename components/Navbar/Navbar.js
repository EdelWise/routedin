import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const handleMobileNav = () => {
    setNavOpen((prevState) => !prevState);
    console.log(navOpen);
  };

  return !navOpen ? (
    <div className="h-24 w-full bg-black  sticky top-0 flex items-center justify-between z-10  px-5 lg:px-12">
      <a className="flex items-center" href="/">
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
        className=" rounded-md bg-green w-40 h-13 font-roboto flex items-center justify-center text-white text-2xl"
        href="#contact"
      >
        Contact us
      </a>

      <button onClick={handleMobileNav} className="lg:hidden">
        <Image src="/mobileNav.png" width={28} height={24}></Image>
      </button>
    </div>
  ) : (
    <div className="h-screen w-full bg-black  sticky top-0 flex flex-col items-center justify-center  z-10  px-5 lg:px-12">
      <div className="w-full bg-black flex items-center justify-between self-start py-3">
        <a className="flex items-center" href="/">
          <Image src="/logo_routedin.png" width={72} height={72}></Image>
          <span className="text-4xl text-white font-podkova ml-1.5 hidden lg:block ">
            routedin
          </span>
        </a>
        <button onClick={handleMobileNav} className="lg:hidden">
          <Image src="/mobileNav.png" width={28} height={24}></Image>
        </button>
      </div>
      <div>
        <div className="text-white font-roboto text-2xl flex flex-col items-center gap-7 mt-[50%] ">
          <a onClick={() => setNavOpen(false)} href="#services">
            Services
          </a>
          <a onClick={() => setNavOpen(false)} href="#customers">
            Our customers
          </a>
          <a onClick={() => setNavOpen(false)} href="#team">
            About us
          </a>
        </div>
      </div>
    </div>
  );
}
