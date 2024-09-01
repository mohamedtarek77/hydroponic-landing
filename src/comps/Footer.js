"use client"

import React from "react";
import styles from "../app/style";



const Footer = () => {
  const date = new Date().getFullYear();


  return (
    <section
      id="contact"
      className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
    >
      

      <div className="w-full  flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-secondary">
          Copyright Ⓒ {date} Al Tarek. All Rights Reserved.
        </p>

  
      </div>
    </section>
  );
};








export default Footer;
