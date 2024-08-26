"use client";

import React, { useState } from "react";
import { NFT } from "../assets";
import styles from "../app/style";
import VisibilitySensor from "react-visibility-sensor";
// import { motion } from "framer-motion";
import { GetStarted, ImageWithPlaceholder } from "./index";

const About = () => {
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
        id="about"
        // className={`flex md:flex-row flex-col ${styles.paddingY}`}
        className={`flex md:flex-row flex-col gap-5 ${styles.paddingY}`}
      >
        <div
          className={` flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[42px]  text-[32px] text-secondary ss:leading-[100.8px] leading-[75px]">
              Our Mission
            </h1>
          </div>

          <p
            className={`${styles.paragraph}  text-secondary max-w-[470px] mt-5`}
          >
            At Al Tarek, we are passionate about hydroponics and committed to
            helping you succeed in your home gardening journey. Instead of
            selling our own products, we carefully research and recommend the
            best hydroponic equipment and supplies available online. Our mission
            is to connect you with trusted suppliers offering top-quality
            products that meet your gardening needs.
            {/* At Al Tarek, we believe in the power of hydroponics to revolutionize
            how we grow food. Our mission is to make hydroponic gardening
            accessible and enjoyable for everyone, from hobbyists to commercial
            growers. */}
          </p>
        </div>
        <div
          className={` flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[42px]  text-[32px] text-secondary ss:leading-[75px] leading-[45px]">
              Why Trust Our Recommendations?
            </h1>
          </div>

          <p
            className={`${styles.paragraph}  text-secondary max-w-[470px] mt-5`}
          >
            We take the guesswork out of shopping for hydroponic supplies. Every
            product we feature has been thoroughly reviewed and vetted by our
            team of experts. When you click on a product link, you can be
            confident that you’re getting the best in the industry.
            {/* Founded by passionate gardeners, we started this journey to share
            the incredible benefits of hydroponics. What began as a small
            project has grown into a community of like-minded individuals
            dedicated to sustainable, efficient gardening practices. */}
          </p>
        </div>

        {/* <div
          className={` flex-1 flex  ${styles.flexCenter} md:my-0 mx-5 my-10 relative`}
        >
    

          <ImageWithPlaceholder
            src={NFT}
            alt="Description"
            className="w-[100%] h-[100%] relative z-[5] rounded-full"
          />

          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white-gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div> */}
      </section>
    </VisibilitySensor>
  );
};

export default About;
