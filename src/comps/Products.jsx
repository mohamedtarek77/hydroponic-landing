"use client";

import React, { useState } from "react";
import { servise } from "../assets";
import styles from "../app/style";
import VisibilitySensor from "react-visibility-sensor";
// import { motion } from "framer-motion";
import { GetStarted } from "./index";
import { products } from "../constants";
import ProductCard from "./ProductCard";

const Products = () => {
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
        id="products"
        // className={`flex md:flex-row flex-col ${styles.paddingY}`}
        className={`flex  flex-col ${styles.paddingY} `}
      >
        <div className={`flex md:flex-row flex-col ${styles.paddingY} `}>
          <div
            // className={` flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
            className={` flex-1 ${styles.flexStart} flex-col xl:px-0 `}
          >
            <div className="flex flex-row justify-between items-center w-full  text-secondary">
              <h1 className="flex-1 font-poppins font-semibold ss:text-[60px]  text-[32px]   ss:leading-[100.8px] leading-[45px]">
                Best Products
                {/* <br className="sm:block hidden" /> */}
                <br className="" />
                <span className="text-gradient">for Hydroponic Systems</span>
              </h1>
            </div>

            {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}> */}
            {/* <p className={`${styles.paragraph} ss:w-1/2 w-full mt-5`}> */}
            <h3 className={`${styles.paragraph}  w-full mt-5  text-secondary font-semibold`}>
              Top Picks for Your Home Hydroponic Garden{" "}
            </h3>
            <h6 className={`${styles.paragraph}  w-full mt-5  text-secondary`}>
              Explore our range of best-in-class hydroponic products designed
              for home use. From beginner kits to advanced systems, we offer
              everything you need to build and maintain a successful hydroponic
              setup.
            </h6>
          </div>

          {/* <div className="flex flex-col">
            <div
              className={` flex-1 flex   ${styles.flexCenter} md:my-0 my-10 relative`}
            >
              <img
                src={servise}
                alt="billing"
                className="sm:w-[400px] w-[300px]  sm:h-[400px] h-[300px]  relative z-[5] rounded-full"
              />
              <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
              <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white-gradient bottom-40" />
              <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            </div>
          </div> */}
        </div>

        {/* <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]"> */}
        {/* <div className="flex  sm:flex-row flex-col sm:justify-start justify-center w-full feedback-container  z-[1]"> */}
        <div className=" w-full flex  flex-col justify-center items-center  md:gap-10  feedback-container  z-[1] ">
          {products.map((card) => {
            return <ProductCard key={card.id} {...card} />;
          })}
        </div>
      </section>
    </VisibilitySensor>
  );
};

export default Products;
