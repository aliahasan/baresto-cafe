import React from "react";
import Lottie from "lottie-react";
import nodataAnimation from "../../nodata.json";
const NoData = () => {
  return (
    <div>
      <Lottie animationData={nodataAnimation}></Lottie>
    </div>
  );
};

export default NoData;
