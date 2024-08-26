
"use client"

import React, { useState } from "react";
import {
  
    value,
} from "../assets";
import styles from "../app/style";
import VisibilitySensor from "react-visibility-sensor";
// import { motion } from "framer-motion";
import { ImageWithPlaceholder } from "./index";

const Values = () => {
  const [elementIsVisible, setElementIsVisible] = useState(false);

  const bg = {
    true: {
      left: "7rem",
    },
    false: {
      left: "19rem",
    },
  };

  const variant = {
    true: {
      transform: "scale(2)",
    },
    false: {
      transform: "scale(1)",
    },
  };
  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      minTopValue={300}
    >
      <section
        id="values"
        className={`flex md:flex-row flex-col items-center ${styles.paddingY}`}
      >
        <div
          className={` flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 text-secondary `}
        >
    <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[80px]  text-[40px] ss:leading-[100.8px] leading-[75px]">
              VALUES,
              {/* <br className="sm:block hidden" /> */}
              <span className="text-gradient">VISION,</span>
            </h1>
          </div>
          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100.8px] leading-[75px] w-full">
            Mission.
          </h1>

          <h1 className="font-poppins font-semibold ss:text-[40px] text-[20px] ss:leading-[100.8px] leading-[75px] w-full">
            <span className="text-gradient"> VALUES</span>
          </h1>

          {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}> */}
          {/* <p className={`${styles.paragraph} ss:w-1/2 w-full mt-5`}> */}
          <p className={`${styles.paragraph}  w-full mt-5 text-secondary `}>
            innovation, integrity, creativity. Excellence.
          </p>
          <h1 className="font-poppins font-semibold ss:text-[40px] text-[20px]text-secondary ss:leading-[100.8px] leading-[75px] w-full">
            <span className="text-gradient"> VISION</span>
          </h1>

          {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}> */}
          <p className={`${styles.paragraph} w-full mt-5  text-secondary`}>
            To become the best company in the country. trusted by all customers,
            and provide the best solutions to advance corporate and
            establishment projects to the highest peaks of success.
          </p>
          <h1 className="font-poppins font-semibold ss:text-[40px] text-[20px]  ss:leading-[100.8px] leading-[75px] w-full">
            <span className="text-gradient"> Mission</span>
          </h1>

          {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}> */}
          <p className={`${styles.paragraph}  w-full mt-5 text-secondary`}>
            At AST, we seek to provide tangible and effective solutions in the
            field of marketing and advertising services with the highest levels
            of professionalism. to achieve the goals of clients and business
            owners.
          </p>
        </div>

        <div className="flex flex-col">
      

          <div
            className={` flex-1 flex   ${styles.flexCenter} md:my-0 my-10 relative`}
          >
            <ImageWithPlaceholder
              src={value}
              alt="billing"
              className="sm:w-[400px] w-[300px]  sm:h-[400px] h-[300px] relative z-[5] rounded-full"
              // className="w-[100%] h-[100%] relative z-[5] rounded-full"

            />
            {/* <img
              src={value}
              alt="billing"
              className="w-[400px] h-[400px] relative z-[5] rounded-full"
              // className="w-[100%] h-[100%] relative z-[5] rounded-full"

            /> */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white-gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          </div>
        </div>
      </section>
    </VisibilitySensor>
  );
};

export default Values;
