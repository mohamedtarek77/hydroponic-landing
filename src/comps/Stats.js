
"use client"

import React, { useState, useEffect } from "react";

import { stats } from "../constants/index";
import styles from "../app/style";

const Stats = () => {
  let nums = document.querySelectorAll(".nums .num");
  let scrolls = document.querySelector(".scroll");
  // const topPos = scrolls.offsetTop;
  const topPos = 400;
  // let started = false; // Function Started ? No

  const [started, setStarted] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scroll > 400) {
       if (!started) {  nums.forEach((num) => startCount(num)); }
      } else {
        setStarted(true);
      }
    });
  }, []);

  // window.onscroll = function () {
  //   if (window.scrollY >= topPos) {
  //     if (!started) {
  //       nums.forEach((num) => startCount(num));
  //     }
  //     started = true;
  //   }
  // };

  function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
        clearInterval(count);
      }
    }, 2000 / goal);
  }
  return (
    <>
      <section
        className={`${styles.flexCenter} scroll flex-row flex-wrap sm:mb-20 mb-6`}
      >
        <div className="nums flex  flex-1">
          <div
            data-goal="3800"
            className={`flex-1 num flex justify-start items-center flex-row m-3`}
          >
            <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
              0
            </h4>
            <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
              User Active
            </p>
          </div>
          <div
            data-goal="230"
            className={`flex-1  num flex justify-start items-center flex-row m-3`}
          >
            <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
              0
            </h4>
            <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
              Trusted by Company
            </p>
          </div>
          <div
            data-goal="280"
            className={`flex-1 num flex justify-start items-center flex-row m-3`}
          >
            <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
              0
            </h4>
            <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
              Transaction
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;

// import React from 'react'

// import  {stats}  from '../constants/index'
// import styles from '../style'

// const Stats = () => {

//   return (
//     <section className={`${styles.flexCenter} scroll flex-row flex-wrap sm:mb-20 mb-6`} >
//      {stats.map((stat) =>(
//       <div key={stat.id}  className={`flex-1 flex justify-start items-center flex-row m-3`} >
//         <h4 className='font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white' >
//           {stat.value}
//         </h4>
//         <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
//           {stat.title}
//         </p>
//       </div>
//      ))}
//     </section>
//   )
// }

// export default Stats
