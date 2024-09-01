"use client";

import React, { useState } from "react";
import styles from "../app/style";
import VisibilitySensor from "react-visibility-sensor";
// import { motion } from "framer-motion";
import Head from "next/head"; // Assuming you're using Next.js

const About = () => {
  const [elementIsVisible, setElementIsVisible] = useState(false);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HydroGrowHub",
    "url": "https://hydrogrowhub.mtarex.com/",
    "description": "Hydrogrowhub specializes in hydroponics and helping individuals succeed in home gardening. We recommend top-quality hydroponic equipment and supplies.",
  };





  return (
    <>
      <Head>
        <title>
          About Us | HydroGrowHub - Your Hydroponic Gardening Partner
        </title>
        <meta
          name="description"
          content="At HydroGrowHub, we are passionate about hydroponics and dedicated to helping you succeed in your home gardening journey. We connect you with the best hydroponic equipment and trusted suppliers."
        />
        <meta
          name="keywords"
          content="Hydroponics, Home Gardening, Hydroponic Equipment, Trusted Suppliers, Hydroponic Supplies"
        />
        <meta name="robots" content="index, follow" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <VisibilitySensor
        onChange={(isVisible) => setElementIsVisible(isVisible)}
        minTopValue={300}
      >
        <section
          id="about"
          className={`flex flex-col gap-5 ${styles.paddingY}`}
        >
          <div
            className={`flex flex-col justify-center items-center xl:px-0 sm:px-16 px-6`}
          >
            <h2 className="font-poppins font-semibold ss:text-[32px] text-[22px] text-secondary ss:leading-[100.8px] leading-[45px]">
              About HydroGrowHub - Your Hydroponic Gardening Partner
            </h2>

            <p
              className={`${styles.paragraph} text-secondary max-w-[1000px] mt-5`}
            >
              Welcome to <strong>HydroGrowHub</strong>, your ultimate resource
              for hydroponics and modern agriculture. We are passionate about
              sustainable gardening and are dedicated to helping you thrive in
              your home gardening journey. Rather than selling our own products,
              we invest our time in meticulously researching and recommending
              the best hydroponic equipment and supplies available online. Our
              mission is to connect you with trusted suppliers offering
              top-quality products that cater to your specific gardening needs.
              Discover how you can cultivate a lush, thriving garden with the
              right tools and techniques by exploring our{" "}
              <a href="#products" className="text-secondary hover:underline">
                {/* services */}
                recommendations
              </a>
              .
            </p>
          </div>
        </section>
      </VisibilitySensor>

   
    </>
  );

  // return (
  //   <VisibilitySensor
  //     onChange={(isVisible) => setElementIsVisible(isVisible)}
  //     minTopValue={300}
  //   >
  //     <section
  //       id="about"
  //       // className={`flex md:flex-row flex-col ${styles.paddingY}`}
  //       className={`flex flex-col gap-5 ${styles.paddingY}`}
  //     >
  //       <div
  //         className={` flex  flex-col justify-center items-center xl:px-0 sm:px-16 px-6`}
  //       >
  //           <h1 className=" font-poppins font-semibold ss:text-[42px]  text-[32px] text-secondary ss:leading-[100.8px] leading-[75px]">
  //             About Us
  //           </h1>

  //         <p
  //           className={`${styles.paragraph}  text-secondary max-w-[1000px] mt-5`}
  //         >
  //           At Hydrogrowhub, we are passionate about hydroponics and committed to
  //           helping you succeed in your home gardening journey. Instead of
  //           selling our own products, we carefully research and recommend the
  //           best hydroponic equipment and supplies available online. Our mission
  //           is to connect you with trusted suppliers offering top-quality
  //           products that meet your gardening needs.

  //         </p>
  //       </div>

  //     </section>
  //   </VisibilitySensor>
  // );
};

export default About;
