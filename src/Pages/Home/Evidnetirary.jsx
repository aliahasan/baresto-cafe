import React from "react";
import chefImg from "/images/home/testimonials/testimonials.png";
import { FaStar } from "react-icons/fa";
const Evidnetirary = () => {
  return (
    <div className="my-12 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="md:w-1/2">
        <img src={chefImg} alt="" />
      </div>
      <div className="md:w-1/2">
        <div className="text-left">
          <p className="subtitle">Our Evidentiary</p>
          <h2 className="title">What Our Customers Say About Us</h2>
          <blockquote className="my-5 text-secondary leading-[30px] font-medium">
            I had the pleasure to dining at Baresto Cafe last night, and I am
            still raving about the experiences The attension to details in
            presentation and service was outstanding
          </blockquote>
          <div className="">
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src="/images/home/testimonials/testimonial1.png" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="/images/home/testimonials/testimonial3.png" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="/images/home/testimonials/testimonial3.png" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="w-12 bg-neutral text-neutral-content">
                  <span>+99</span>
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <h5 className="text-lg font-semibold">Customers Fedback</h5>
            </div>
            <div className="flex items-center  gap-2">
             <div>
             <FaStar className="text-yellow-500"></FaStar>
             </div>
              <div className="">
                <span className="font-medium">4.8 </span>
                <span className="text-[#807e7e]">(18.5k reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evidnetirary;
