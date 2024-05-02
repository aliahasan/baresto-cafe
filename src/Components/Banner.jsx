import React from "react";
import bannerImg from "../../public/images/banner.jpg";
const Banner = () => {
  return (
    <div
      className="banner-background banner-color "
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/top-view-tomato-salad-with-feta-cheese-rucola-copy-space_23-2148700402.jpg?t=st=1714649185~exp=1714652785~hmac=7fd258696ce1cd9633014f1034afe8f83d7a459b4f97a84c58d48f5518ab8fc7&w=1480")',
      }}
    >
      <div className="container mx-auto relative top-20 md:top-28  xl:px-24 ">
        <div className="space-y-1 md:space-y-3 lg:space-y-3 ">
          <h1 className="banner-title font-bold italic">The Perfect Blend </h1>
          <h1 className="banner-title font-medium">Dive into the Haven </h1>
          <h1 className="banner-title">
            Of{" "}
            <span className="text-green font-bold italic">Delicious Food</span>
          </h1>
          <p className="w-[80%] px-4 lg:py-4 text-md font-bold text-white">
            Where Each Weaves a Story of Culinary Mastery and Passionate
            Carftsmanship
          </p>
        </div>
        <div className="my-3 md:my-4 lg:my-6 pl-6 md:pl-4">
          <button className="btn btn-outline text-green md:px-8  md:text-lg">
            Order Now
          </button>
          <button className="btn ml-2 md:ml-3 lg:ml-5 btn-error text-white lg:btn-outline ">
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
