"use client";

import React, { useState } from "react";
import { tarek} from "../assets/index";
import styles from "../app/style";
import VisibilitySensor from "react-visibility-sensor";
// import { motion } from "framer-motion";
import { GetStarted, ImageWithPlaceholder } from "./index";
import Image from "next/image";

const Hero = () => {
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
        id="hero"
        className={`flex  flex-col ${styles.paddingY}`}
      >
        <div
          className={`  flex flex-col flex-wrap  items-center justify-center gap-3 md:my-0 mx-5 my-10 `}
        >
           {/* <Image
            src={tarek}
            alt="Description"
            // className="w-[80%]  relative z-[5] rounded-3xl"
            // className="sm:w-[60%] w-56    rounded-full"
            className="w-24 rounded-3xl"
          /> */}
          <h1 className=" font-poppins font-semibold ss:text-[42px]  text-[32px] text-secondary ss:leading-[100.8px] leading-[75px]">
          PrimeSelects
          </h1>
          <p
              className={`${styles.paragraph} text-secondary max-w-[1000px] mt-5`}
            >
       As an Amazon Associate I earn from qualifying purchases.
              .
            </p>
        </div>
      </section>
    </VisibilitySensor>
  );
};

export default Hero;
