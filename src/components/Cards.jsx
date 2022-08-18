import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import { useState } from "react";

const Cards = () => {
  const [bg, setBg] = useState("80%");
  return (
    <div className="w-full py-[10rem] px-10 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-700 text-center">
          <img
            src={Single}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
          />
          <h2 className="text-2xl font-bold py-8 ">Single User</h2>
          <p className="text-4xl font-bold">$149</p>
          <div className="font-medium mt-8 mx-10">
            <p className="border-b py-2">500 GB Storage</p>
            <p className="border-b py-2">1 Granted User</p>
            <p className="border-b py-2">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-gray-500 hover:text-[#00df9a]">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-700 text-center bg-gray-100">
          <img
            src={Double}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
          />
          <h2 className="text-2xl font-bold py-8 ">Double User</h2>
          <p className="text-4xl font-bold">$250</p>
          <div className="font-medium mt-8 mx-10">
            <p className="border-b py-2">1000 GB Storage</p>
            <p className="border-b py-2">2 Granted User</p>
            <p className="border-b py-2">Send up to 5 GB</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[150px] rounded-md font-medium my-8 mx-auto py-3 hover:text-black hover:bg-[#00df9a]">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-6 rounded-lg hover:scale-105 duration-700 text-center">
          <img
            src={Triple}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
          />
          <h2 className="text-2xl font-bold py-8 ">Triple User</h2>
          <p className="text-4xl font-bold">$349</p>
          <div className="font-medium mt-8 mx-10">
            <p className="border-b py-2">1500 GB Storage</p>
            <p className="border-b py-2">3 Granted User</p>
            <p className="border-b py-2">Send up to 8 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-gray-500 hover:text-[#00df9a]">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
