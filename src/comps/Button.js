import React from "react";
import styles from "../app/style";

const Button = () => {
  return (
    <div className={` ${styles.heading4} flex flex-row  justify-center items-center bg-blue-gradient m-5 rounded-2xl text-2xl font-semibold  w-40 h-20 text-gray-800`}>
      <a href={`#contact`}> Try Now</a>
    </div>
  );
};

export default Button;
