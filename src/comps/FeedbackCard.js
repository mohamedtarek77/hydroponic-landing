import React from 'react'
import { quotes } from "../assets/index";
import {  ImageWithPlaceholder } from "./index";


const FeedbackCard = ({content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-5 bg-slate-300 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card" >
      {/* <ImageWithPlaceholder src={quotes} alt='double quotes' className='w-[42.6px] h-[27.6px] object-contain' /> */}
      <p className='font-poppins font-normal text-[14px] leading-[32.4px] text-secondary my-7'>
        {content}
      </p>
      {/* <div className='flex flex-row justify-center items-center' >
        <ImageWithPlaceholder src={img} alt={name} className="w-[60px] h-[60px] rounded-full" /> */}
        <div className='flex flex-col ml-4' >
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-secondary' >
            {name}
          </h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-secondary' >
            {title}
          </p>
        </div>
      {/* </div> */}
    </div>
  )
}

export default FeedbackCard