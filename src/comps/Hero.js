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
          className={` flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px]  text-[52px] text-secondary ss:leading-[100.8px] leading-[75px]">
              Welcome to,
            </h1>
          </div>
          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-secondary ss:leading-[100.8px] leading-[75px] w-full">
            Al Tarek.
          </h1>
          <p
            className={`${styles.paragraph}  text-secondary max-w-[600px] mt-5`}
          >
            Step into the future of home gardening with hydroponics—an
            innovative, soil-less method that allows you to grow fresh, healthy
            plants anywhere. Whether you&apos;re an experienced gardener or just
            beginning, we&apos;ve got you covered. Our site offers expert guides,
            tips, and carefully selected recommendations for the best hydroponic
            products on the market. We partner with top suppliers to bring you
            direct links to purchase these products, ensuring you get the best
            quality at the best price
            {/* Discover the future of gardening with hydroponics—a sustainable,
            soil-less method that lets you grow fresh, healthy plants anywhere.
            Whether you're a seasoned gardener or just getting started, our
            resources, guides, and expert tips will help you create your own
            thriving hydroponic garden. */}
            {/* Elevate your home gardening experience with hydroponics—the
            innovative, soil-less method that allows you to grow fresh, healthy
            plants right in your own space. Whether you’re an experienced grower
            or just starting out, we’re here to help you succeed. Explore our
            carefully curated selection of the best hydroponic products for home
            use. */}
          </p>
        </div>
        <div
          className={` flex-1 flex  ${styles.flexCenter} md:my-0 mx-5 my-10 relative`}
        >
          {/* <ImageWithPlaceholder
            src={NFT}
            alt="Description"
            className="w-[100%] h-[100%] relative z-[5] rounded-3xl"
          /> */}



<Image
          src={NFT}  
          alt="Description" 
          // className="sm:w-[400px] w-[200px]  sm:h-[400px] h-[200px]  rounded-lg"
          className="w-[100%] h-[100%] relative z-[5] rounded-3xl"        />

          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white-gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>

        {/* <div className={` ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
      </section>
    </VisibilitySensor>
  );
};

export default Hero;
