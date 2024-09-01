"use client";

import React, { useState } from "react";
import { hydro } from "../assets";
import styles from "../app/style";
import VisibilitySensor from "react-visibility-sensor";
// import { motion } from "framer-motion";
import { GetStarted, ImageWithPlaceholder } from "./index";

const Hydroponics = () => {
  const [elementIsVisible, setElementIsVisible] = useState(false);

  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      minTopValue={300}
    >
      <section
        id="What is Hydroponics?"
        className={`flex md:flex-row flex-col gap-7 ${styles.paddingY}`}
      >
        <div
          className={` flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[42px]  text-[32px] text-secondary ss:leading-[100.8px] leading-[45px]">
              What is Hydroponics?
            </h1>
          </div>

          <p
            className={`${styles.paragraph}  text-secondary max-w-[600px] mt-5`}
          >
            Hydroponics is a method of growing plants without soil, using
            nutrient-rich water to deliver essential minerals directly to the
            roots. This system allows for faster growth, higher yields, and the
            ability to grow plants in places where traditional gardening isn&apos;t
            possible.
          </p>
        </div>
        <div
          className={` flex-1 ${styles.flexStart} flex-col  xl:px-0 sm:px-16 px-6`} 
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[42px]  text-[32px] text-secondary  ss:leading-[100.8px] leading-[45px] ">
              Benefits of Hydroponics
            </h1>
          </div>
          <ul
            className={`${styles.paragraph}  text-secondary max-w-[600px] mt-5 ss:text-[22px]  text-[12px]`}
          >
            <li>
              <span className="font-semibold  pt-2  ">Water Efficiency: </span>{" "}
              Uses up to 90% less water than traditional gardening.
            </li>
            <li>
              <span className="font-semibold pt-2 ">Space Saving: </span> Grow
              more in less space.
            </li>
            <li>
              <span className="font-semibold  pt-2 ">Pest Control: </span> Fewer
              pests and diseases without soil.
            </li>
            <li>
              <span className="font-semibold  pt-2 ">Faster Growth: </span>{" "}
              Plants grow 30-50% faster.
            </li>
          </ul>
        </div>
        {/* <div
          className={` flex-1 flex  ${styles.flexCenter} md:my-0 mx-5 my-10 relative`}
        >
          <ImageWithPlaceholder
            src={hydro}
            alt="Description"
            className="w-[100%] h-[100%] relative z-[5] rounded-3xl"
          />

          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white-gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div> */}
      </section>
    </VisibilitySensor>
  );
};

export default Hydroponics;
