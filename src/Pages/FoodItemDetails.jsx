import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Accordian from "../Components/Accordian";

const FoodItemDetails = () => {
  const data = useLoaderData();
  const { 
    _id,
    category,
    description,
    food_origin,
    image,
    made_by,
    name,
    price,
    quantity,
    rating,
  } = data || {};

  return (
    <div className="flex flex-col md:flex-row px-2 md:px-1 gap-5">
      <div className="md:w-7/12 ">
        <div className="">
          <img src={image} alt="" className="" />
        </div>
        <div>
          <h4 className="text-xl text-green py-4">
            Here is the making procedure
          </h4>
          <p className="font-medium text-cyan-700">
            To craft a perfect food, begin by preparing the dough. Mix flour,
            water, yeast, salt, and a touch of olive oil until a smooth, elastic
            dough forms. Let it rise in a warm place until doubled in size.
            Meanwhile, prepare the sauce by simmering crushed tomatoes with
            garlic, herbs, salt, and pepper until thickened. Once the dough has
            risen, divide it and shape each portion into a round crust. Spread
            the sauce over the dough, leaving a border for the crust. Add your
            desired toppings  cheese, vegetables, meats  and finish with a
            drizzle of olive oil. Slide the pizza onto a preheated pizza stone
            or baking sheet and bake in a hot oven until the crust is golden and
            the cheese is bubbly. Finally, garnish with fresh herbs or a
            sprinkle of grated Parmesan before slicing and serving piping hot.
            Enjoy the delicious culmination of your pizza-making endeavor!
          </p>
        </div>
      </div>
      <div className="md:w-5/12 ">
        <div className="flex items-centerr  md:pt-3">
          <div className="space-y-2 text-center leading-10">
            <h1 className="text-2xl md:text-3xl lg:text-5xl  font-medium text-gray-500">
              {name}
            </h1>
            <p className="text-xl font-medium">$ {price}</p>
            <p className=" font-medium">{rating}</p>
            <p className=" font-medium text-wrap md:w-[350px] mx-auto">
              {description}
            </p>
            <p className="text-lg font-bold">Category : {category}</p>
            <p className=" font-medium">
              <span>Available Quantitty : </span> {quantity}
            </p>
            <p className="text-lg font-medium"> Food Origin : {food_origin}</p>
            <span className="text-xl font-bold"> Made by : {made_by}</span>

            <div className="text-center">
              <Link to={`/order/${_id}`}>
                <button className="btn px-16 btn-outline bg-green border-none my-3 text-white">
                  Order now
                </button>
              </Link>
            </div>

            <div className="lg:pl-10">
              <Accordian></Accordian>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemDetails;
