import React from "react";
import { quotes } from "../assets";
import { ImageWithPlaceholder } from "./index";
import Image from "next/image";

const ProductCard = ({ content, name, title, img,link }) => {

   const handleClick = ()=>{
    // window.open(link)
    window.open(link, "_blank");

   }
  return (
    // <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card" >
    // <div className="flex   md:flex-row flex-col sm:justify-between bg-slate-300   px-10 py-12 rounded-[20px]  sm:h-[800px] h-[500px]  sm:w-[600px] w-[350px]   md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <div className="flex   md:flex-row flex-col sm:justify-between bg-slate-300   px-10 py-12 rounded-[20px]   w-full  md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <div className="flex flex-col  text-secondary ">
        <h4 className="font-poppins font-semibold sm:text-[30px]  text-[18px]   sm:leading-[32px]  leading-[22px] ">
          <span className="text-gradient"> {name}</span>
        </h4>
        <p className="font-poppins font-normal h-auto md:w-[800px] w-[300px] sm:text-[18px] text-[16px]  sm:leading-[32.4px] leading-[22.4px] sm:my-10 my-5  px-5 text-secondary sm:line-clamp-6 line-clamp-4  "
        onClick={()=> window.open(link, "_blank")}
        >
          {content}
        </p>
      </div>

      <div className="flex  flex-col justify-center items-center gap-5 w-full sm:mt-0 mt-2">
        <Image
          src={img}  
          alt={name}  
          // className="sm:w-[400px] w-[200px]  sm:h-[400px] h-[200px]  rounded-lg"
          className=" w-80   rounded-lg"
        />
        <button className=  "bg-btn p-5 border rounded-xl font-semibold  " onClick={()=> window.open(link, "_blank")}> View on Amazon </button>
      </div>
    </div>
  );
};

export default ProductCard;
