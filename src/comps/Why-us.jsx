
"use client"

import React, { useState } from "react";
import {
  discount,
  robot,
  colorLogoNoBackground,
  colorLogoWithBackground,
  why,
} from "../assets";
import styles from "../app/style";
import VisibilitySensor from "react-visibility-sensor";
// import { motion } from "framer-motion";
import { ImageWithPlaceholder } from "./index";

const Why = () => {
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
        id="why"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div
          className={` flex-1 flex  ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <ImageWithPlaceholder
            src={why}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5] rounded-full"
          />
          {/* <img
            src={why}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5] rounded-full"
          /> */}
          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white-gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>

        <div
          className={` flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[100px]  text-[52px] text-secondary ss:leading-[100.8px] leading-[75px]">
              Why
              {/* <br className="sm:block hidden" /> */}
              <span className="text-gradient">AST media ?</span>
            </h1>
          </div>
          {/* <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            , Achieve Success.
          </h1> */}
          <p className={`${styles.paragraph} text-secondary max-w-[470px] mt-5`}>
            Because we are aware of the challenges facing - companies and
            establishments that do not have sufficient marketing expertise We
            also adhere to the highest quality standards in_ providing our
            services Our prices are reasonable and competitive as well_ We have
            a highly experienced and unique work team_ to provide solutions for
            companies and establishments
          </p>
        </div>
      </section>
    </VisibilitySensor>
  );
};

export default Why;
