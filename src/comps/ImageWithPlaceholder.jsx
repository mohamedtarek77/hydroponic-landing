
"use client"

import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Image from 'next/image'

const ImageWithPlaceholder = ({ src, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {!loaded && <Skeleton width="100%" height="100%" />}
      <Image
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={loaded ? { display: 'block' } : { display: 'none' }}
        {...props}
      />
    </div>
  );
};

export default ImageWithPlaceholder;











// import React, { useState } from "react";
// import Skeleton from "./Skeleton";

// const ImageWithPlaceholder = ({ src, alt, ...props }) => {
//   const [loaded, setLoaded] = useState(false);

//   const handleImageLoad = () => {
//     setLoaded(true);
//   };

//   return (
//     <div
//       className="image-wrapper"
//       style={{ position: "relative", width: "100%", height: "100%" }}
//     >
//       {!loaded && <Skeleton />}

//       <img
//         src={src}
//         alt={alt}
//         onLoad={handleImageLoad}
//         style={loaded ? { display: "block" } : { display: "none" }}
//         {...props}
//       />
//     </div>
//   );
// };

// export default ImageWithPlaceholder;
