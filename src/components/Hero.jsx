import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#00df9a] font-bold p-2">
          growing with data analytics
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 py-3">
          Growing with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold mr-2">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-4xl sm:text-3xl text-xl font-bold"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-base font-medium text-gray-500 md:w-full w-4/6 mx-auto m-6">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-gray-500 hover:text-[#00df9a]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
