/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const FoodCards = ({ food }) => {

  return (
   <div>

     <div className="border border-gray-400  shadow-md bg-white">
      <div>
        <img
          src={food.image}
          alt=""
          className=" w-full h-[280px] hover:scale-105 transition-all duration-200"
        />
      </div>
      <div className="px-3 mt-1">
        <h1 className="text-lg font-medium text-gray-600 ">{food.name}</h1>
        <p className="font-bold">{food.category}</p>
        <p className="font-medium">Available quantity - {food.quantity}</p>
        <p className="font-bold text-lg">$ {food.price}</p>
      </div>
      <div className="p-2">
        <Link to={`${food._id}`}>
          <button className="btn btn-outline border-none w-full text-white bg-green hover:bg-red-400 transition-all duration-200">
            Details
          </button>
        </Link>
      </div>
    </div>
   </div>
  );
};

export default FoodCards;
