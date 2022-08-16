import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col md:w-full w-[400px] mx-auto text-justify justify-center">
          <p className="uppercase text-[#00df9a] font-bold">
            data analytics dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Anakytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nemo
            voluptate, sapiente fugiat, error quibusdam quaerat soluta eum
            dignissimos, dolores libero earum harum corrupti repellendus quas
            optio pariatur aut maiores?
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:text-black hover:bg-[#00df9a]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
