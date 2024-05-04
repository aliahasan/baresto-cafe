import React from "react";
import {  RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="h-[70vh] mx-auto flex justify-center items-center">
      <RotatingLines
  visible={true}
  height="60"
  width="60"
  color="grey"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  );
};

export default Loading;
