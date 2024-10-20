import React from "react";
import Image from "next/image";
import { amazon } from "../assets/index";

const ProductCard = ({ content, name, title, img, link }) => {
  return (
    <div className="flex   flex-col  gap-3 sm:justify-between bg-slate-300   px-10 sm:py-12 py-5  rounded-[20px]     md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <div className="flex  flex-col justify-center items-center gap-5 sm:mt-0 mt-2">
        <Image
          src={img}
          alt={name}
          width={200}
          height={200}
          // className="  rounded-lg"
          className=" sm:w-64 w-40 sm:h-64 h-40  rounded-lg"
        />
      </div>

      <div className="flex flex-col  text-secondary gap-5 ">
        <h4 className="font-poppins font-semibold w-40 sm:text-[14px]  text-[14px]   sm:leading-[32px]  leading-[22px] line-clamp-2 ">
          <span className="text-gradient"> {name}</span>
        </h4>
        <button
          // className="bg-btn p-5 border rounded-xl font-semibold  text-[14px]  "
          className=" flex flex-col justify-center items-center sm:p-5 p-2 border rounded-xl font-semibold  sm:text-[11px]  text-[9px] "
          onClick={() => window.open(link, "_blank")}
        >
          <span className="text-gray-500 uppercase ">Buy it on:</span>
          <Image
            src={amazon}
            alt={name}
            className="  sm:w-28 w-20 rounded-lg"
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
