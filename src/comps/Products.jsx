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
        <div className={`flex flex-col  ${styles.paddingY} `}>
          <div
            // className={` flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
            className={`  flex flex-col items-center justify-center xl:px-0 `}
          >
            <div className="flex flex-col justify-center items-center w-full gap-3   text-secondary">
              <h1 className="flex-1 font-poppins font-semibold ss:text-[32px]  text-[22px]   ss:leading-[100.8px] leading-[45px]">
                Best Products
                {/* <br className="sm:block hidden" /> */}
                {/* <span className="text-gradient font-bold"> for Diet and Keto plans</span> */}
                <span className="text-gradient font-bold"> for PrimeSelects </span>
              </h1>
            </div>

      
            {/* <h3 className={`${styles.paragraph}  w-full mt-5  text-secondary font-semibold`}>
              Top Picks for Your Home Hydroponic Garden{" "}
            </h3> */}
            {/* <h6 className={`${styles.paragraph}  w-full mt-5  text-secondary`}>
              Explore our range of best-in-class hydroponic products designed
              for home use. From beginner kits to advanced systems, we offer
              everything you need to build and maintain a successful hydroponic
              setup.
            </h6> */}
          </div>

  
        </div>

        <div className=" w-full flex flex-wrap  justify-center items-center  md:gap-10  feedback-container  z-[1] ">
          {products.map((card) => {
            return <ProductCard key={card.id} {...card} />;
          })}
        </div>
      </section>
    </VisibilitySensor>
  );
};

export default Products;
