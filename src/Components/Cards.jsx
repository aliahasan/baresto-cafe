/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cards = ({ recipe  }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoirte = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card bg-base-100 shadow-xl mx-5  relative mt-10 md:my-[1px]">
      <div
        onClick={handleFavoirte}
        className={`rating gap-1 absolute top-2 right-2 p-3 
     bg-green heartStar ${isFavorite ? "text-rose-500" : "text-white"}`}
      >
        <FaHeart className="h-5 w-5 cursor-pointer"></FaHeart>
      </div>
      <Link to={`/menu/${recipe._id}`}>
        <figure>
          <img
            src={recipe.image}
            alt="img"
            className="hover:scale-105 transition-all duration-200 md:h-72"
          />
        </figure>
      </Link>
      <div className="card-body">
       <Link to={`/menu/${recipe._id}`}>
       <h2 className="card-title">{recipe.name}</h2>
       </Link>
        <p>{recipe.recipe}</p>
        <div className="card-actions justify-between items-center mt-2">
          <h4 className="font-semibold">
            <span className="text-sm text-red-400">${recipe.price}</span>
          </h4>
          <button className="btn bg-green text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
