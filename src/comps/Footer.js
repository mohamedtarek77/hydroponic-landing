"use client"

import React, { useEffect } from "react";
import styles from "../app/style";
import {
  logo,
  colorLogoWithBackground,
  colorLogoNoBackground,
  logoColorNoBackground
} from "../assets";
// import { footerLinks } from "../constants";
// import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp,FaXing } from "react-icons/fa";

import { PiBasketballThin } from "react-icons/pi";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Image from 'next/image'


const Footer = () => {
  const date = new Date().getFullYear();

  useEffect(() => {
    console.log(footerLinks);
  }, []);
  return (
    <section
      id="contact"
      className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
    >
      {/* <div
        className={`${styles.flexStart} md:flex-row justify-between items-center flex-col mb-8 w-full  text-secondary`}
      >
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <div className="flex flex-row justify-center gap-4">
            <Image
              src={logoColorNoBackground}
              alt="AL Tarek"
              className="w-[50%] h-[50%] rounded-full object-contain"
            />
          </div>
        </div>
        <div className="flex-[1]  w-full flex flex-row  justify-between flex-wrap md:mt-0 mt-10 ">
          {footerLinks.map((footerLink) => {
            return (
              <div
                key={footerLink.title}
                className={`${styles.heading4} flex flex-col items-center ss:my-0 my-4 min-w-[150px]`}
              >
           
                <ul className="list-none mt-4 ">
                  {footerLink.links.map((link, index) => {
                    const Icon = link.icon;

                    return (
                      <div
                        key={link.name}
                        className={`flex flex-row items-center  gap-3 text-dimWhite text-secondary  hover:text-secondary cursor-pointer  ${
                          index !== footerLink.links.length - 1
                            ? "mb-4"
                            : "mb-0 "
                        }`}
                        onClick={() => {
                          const whatsappLink = link.generateLink();
                          window.open(whatsappLink, "_blank");
                        }}
                      >
                    
                        <Icon className="h-5 w-5 text-center rounded-full" />
                        <li
                          className={`font-poppins font-normal  text-[16px] leading-[24px] 
                            
                           `}
                        >
                          {link.name}
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="flex-[1] flex flex-col justify-start  mr-10 ">
          <div className="flex flex-row justify-center gap-4">
      

            <div className=" flex-1 flex flex-row  sm:justify-between justify-center  items-center w-full text-secondary ">
              <h1 className="  font-poppins font-semibold ss:text-[40px]  text-[30px] ss:leading-[100.8px] leading-[75px]">
                Al
                <span className="text-gradient">Tarek</span>
              </h1>
            </div>
          </div>

          <div className=" flex-1 flex flex-row  sm:justify-between justify-center  items-center w-full  ">

          <p className={`${styles.paragraph} mt-4 max-w-[312px] text-secondary  `}>
          Discover the future of gardening with hydroponics.
          </p>
          </div>

        </div>
      </div> */}

      <div className="w-full  flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-secondary">
          Copyright Ⓒ {date} Al Tarek. All Rights Reserved.
        </p>

        {/* <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => {
            return (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
                onClick={() => window.open(social.link)}
              />
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

// Function to generate a WhatsApp link

const generateWhatsAppLink = (phoneNumber, message) => {
  const encodedMessage = encodeURIComponent(message);
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  return `https://wa.me/${encodedPhoneNumber}?text=${encodedMessage}`;
};

// Function to generate a mailto link
const generateMailtoLink = (email, subject, body) => {
  const encodedEmail = encodeURIComponent(email);
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${encodedEmail}?subject=${encodedSubject}&body=${encodedBody}`;
};

// Function to generate a tel link
const generateTelLink = (phoneNumber) => {
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  return `tel:${encodedPhoneNumber}`;
};

export const footerLinks = [
  {
    title: "Contuct us ",
    links: [
      // {
      //   name: "+971566636021",
      //   link: "https://www.hoobank.com/content/",
      //   icon: FaPhoneVolume,
      //   generateLink: () => generateTelLink("+97126666613"),
      // },
      {
        name: "+971566636021",
        link: "https://www.hoobank.com/content/",
        icon: FaWhatsapp,
        generateLink: () =>
          generateWhatsAppLink("+971566636021", "Hi, Can you help me?!"),
      },
      {
        name: "hydroponic@mtarex.com",
        link: "info@astmedia.ae",
        icon: MdOutlineMail,
        generateLink: () =>
          generateMailtoLink(
            "hydroponic@mtarex.com",
            "Request for help",
            "Hi, Can you help me?!"
          ),
      },
      {
        name: "hydroponic.mtarex.com",
        link: "hydroponic.mtarex.com",
        icon: PiBasketballThin,
        generateLink: () => "https://hydroponics.mtarex.com/", // Directly using the URL
      },
      {
        name: "Abu Dhabi, UAE",
        link: "hydroponic.mtarex.com",
        icon: FaLocationDot,
        generateLink: () => "https://maps.app.goo.gl/75apEJqPNYzdHS596",
      },
    ],
  },
];

export default Footer;
