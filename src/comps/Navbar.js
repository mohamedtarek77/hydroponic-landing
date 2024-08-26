"use client";

import React, { useState } from "react";
import {
  close,
  logo,
  menu,
  colorLogoNoBackground,
  colorLogoWithBackground,
  logoColor,
  logoColorNoBackground,
} from "../assets";
import { navLinks } from "../constants";
import { ImageWithPlaceholder } from "./index";
import Image from "next/image";

import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" w-full flex py-6 justify-between items-center navbar">
      {/* <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" /> */}
      <Image
        src={logoColorNoBackground}
        alt="Al Tarek"
        // className="w-[70px] h-[70px] rounded-full"
        className="w-[15%] h-[15%] rounded-full object-contain"
      />
      {/* <ImageWithPlaceholder src={colorLogoWithBackground} alt="Ast-media-logo" className="w-[70px] h-[70px] rounded-full" /> */}

      {/* <img src={colorLogoNoBackground} alt="Ast-media-logo" className="w-[70px] h-[70px] rounded-full" /> */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins  font-semibold cursor-pointer text-[16px] ${
              active === nav.title
                ? "text-secondary underline underline-offset-4"
                : " text-secondary "
            } 
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {toggle ? (
          <IoMdClose
            className="text-secondary w-[28px] h-[28px] object-contain  "
            onClick={() => setToggle((prev) => !prev)}
          />
        ) : (
          <CiMenuFries
            className="text-secondary w-[28px] h-[28px] object-contain  "
            onClick={() => setToggle((prev) => !prev)}
          />
        )}
        {/* <Image
          src={toggle ? close : menu}
          alt="menu"
          className="text-secondary w-[28px] h-[28px] object-contain  "
          onClick={() => setToggle((prev) => !prev)}
        /> */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-gray-300 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  // active === nav.title ? "text-white" : "text-dimWhite"
                  active === nav.title
                    ? "text-secondary underline underline-offset-4"
                    : " text-secondary "
                } 
                ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}
                
                `}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
