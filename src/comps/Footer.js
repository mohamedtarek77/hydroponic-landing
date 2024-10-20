// "use client"

// import React from "react";
// import styles from "../app/style";



// const Footer = () => {
//   const date = new Date().getFullYear();


//   return (
//     <section
//       id="contact"
//       className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
//     >
      

//       <div className="w-full  flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
//         <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-secondary">
//           Copyright Ⓒ {date} Al Tarek. All Rights Reserved.
//         </p>

  
//       </div>
//     </section>
//   );
// };



// export default Footer;



"use client";

import React from "react";
import styles from "../app/style";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <section
      id="contact"
      className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
    >
      <div className="w-full flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-secondary">
          Copyright Ⓒ {date} Al Tarek. All Rights Reserved.
        </p>
      </div>

      {/* Social Media Links */}
      <div className="w-full flex justify-center items-center mt-4">
        <a
          href="https://www.facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 text-secondary hover:text-blue-600"
        >
          <FaFacebook size={24} />
        </a>
        {/* <a
          href="https://www.twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 text-secondary hover:text-blue-400"
        >
          <FaTwitter size={24} />
        </a> */}
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 text-secondary hover:text-pink-500"
        >
          <FaInstagram size={24} />
        </a>
        {/* <a
          href="https://www.linkedin.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 text-secondary hover:text-blue-800"
        >
          <FaLinkedin size={24} />
        </a> */}

        <a
          href="https://www.tiktok.com/@yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 text-secondary hover:text-black"
        >
          <FaTiktok size={24} />
        </a>
        <a
          href="https://www.youtube.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 text-secondary hover:text-red-600"
        >
          <FaYoutube size={24} />
        </a>
      </div>
    </section>
  );
};

export default Footer;
