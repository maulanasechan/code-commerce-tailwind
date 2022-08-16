import React, { useState } from "react";
import { RiMenu3Fill, RiCloseCircleLine } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center h-24 mx-auto max-w-[1240px] px-4 text-white">
      <h1 className="text-3xl font-bold text-[#00df9a] w-full">React.</h1>
      <ul className="md:flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={() => setNav(!nav)} className="flex md:hidden">
        {!nav ? (
          <RiCloseCircleLine
            size={20}
            className="transition-all duration-[2000ms] opacity-0 absolute"
          />
        ) : (
          <RiCloseCircleLine
            size={20}
            className="transition-all duration-[2000ms] opacity-100 "
          />
        )}
        {nav ? (
          <RiMenu3Fill
            size={20}
            className="transition-all duration-[2000ms] opacity-0 absolute"
          />
        ) : (
          <RiMenu3Fill
            size={20}
            className="transition-all duration-[2000ms] opacity-100"
          />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed top-0 w-[60%] h-full left-[-100%] ease-in-out duration-1000 delay-500"
            : "fixed top-0 left-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-1000 delay-500"
        }
      >
        <h1 className="text-3xl font-bold text-[#00df9a] m-4 mt-[30px]">
          React.
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
