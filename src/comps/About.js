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
    name: "HealthHive",
    url: "https://HealthHive.mtarex.com/",
    description:
      "HealthHive is your trusted source for holistic health and wellness advice. We offer expert insights on diet, fitness, mental health, and more to help you achieve a balanced, healthy lifestyle.",
  };

  return (
    <>
      <Head>
        <title>About Us | HealthHive - Your Health and Wellness Partner</title>
        <meta
          name="description"
          content="At HealthHive, we provide expert advice on maintaining a healthy lifestyle, from diet and fitness to mental well-being. Discover how we can help you achieve balance and wellness in your life."
        />
        <meta
          name="keywords"
          content="Health, Wellness, Diet, Fitness, Mental Health, Holistic Health"
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
              About HealthHive - Your Health and Wellness Partner
            </h2>

            <p
              className={`${styles.paragraph} text-secondary max-w-[1000px] mt-5`}
            >
              Welcome to <strong>HealthHive</strong>, your go-to source for
              expert advice and resources on maintaining a healthy lifestyle.
              Our mission is to empower you with the knowledge and tools needed
              to make informed decisions about your health and well-being. At
              HealthHive, we believe in a holistic approach to wellness,
              combining the latest medical insights with practical tips for
              everyday living. Whether you're looking to improve your diet,
              enhance your fitness routine, or find balance in your mental
              health, we're here to support you on your journey. Explore our
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


};

export default About;
