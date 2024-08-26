import React from "react";
import Image from "next/image";

const ProductCard = ({ content, name, title, img, link }) => {
  return (
    <div className="flex   flex-col  gap-3 sm:justify-between bg-slate-300   px-10 sm:py-12 py-5  rounded-[20px]     md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <div className="flex  flex-col justify-center items-center gap-5 sm:mt-0 mt-2">
        <Image src={img} alt={name} className=" w-40 h-40  rounded-lg" />
      </div>

      <div className="flex flex-col  text-secondary gap-5 ">
        <h4 className="font-poppins font-semibold w-40 sm:text-[14px]  text-[14px]   sm:leading-[32px]  leading-[22px] line-clamp-2 ">
          <span className="text-gradient"> {name}</span>
        </h4>
        <button
          className="bg-btn p-5 border rounded-xl font-semibold  text-[14px]  "
          onClick={() => window.open(link, "_blank")}
        >
          View on Amazon
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
