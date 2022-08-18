import React from "react";
import { SiMinutemailer } from "react-icons/si";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-8">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 items-center">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-3">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and up to date.</p>
        </div>
        <div className="my-6">
          <div className="flex flex-col sm:flex-row justify-between items-center  w-full">
            <input
              className="placeholder:text-slate-400 text-black  w-full rounded-md py-3 px-5 focus:outline-none focus:border-[#00df9a] focus:ring-[#00df9a] focus:ring-1"
              placeholder="Enter your email"
              type="email"
            />
            <button className="bg-[#00df9a] w-[175px] rounded-md py-3 ml-3 my-4 mr text-black hover:bg-gray-500 hover:text-[#00df9a] font-medium">
              Notify me
            </button>
          </div>
          <p className="sm:text-left text-center sm:my-0 my-4">
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
