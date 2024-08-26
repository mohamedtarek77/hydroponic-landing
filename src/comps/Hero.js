"use client";

import React, { useState } from "react";
import { NFT } from "../assets/index";
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
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div
          className={` flex-1 flex  ${styles.flexCenter} md:my-0 mx-5 my-10 `}
        >
          <Image
            src={NFT}
            alt="Description"
            // className="w-[80%]  relative z-[5] rounded-3xl"
            className="sm:w-[80%] w-full    rounded-3xl"
          />
        </div>
      </section>
    </VisibilitySensor>
  );
};

export default Hero;
