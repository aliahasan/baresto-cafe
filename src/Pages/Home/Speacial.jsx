import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import daisyui from "daisyui";
import { data } from "autoprefixer";
import Cards from "../../Components/Cards";

const Speacial = () => {
  const [recipies, setRecipies] = useState([]);
  const slider = React.useRef(null);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const specials = data.filter((item) => item.category === "popular");
        setRecipies(specials);
      });
  }, []);

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-20">
      <div className="px-6 md:py-8 md:px-0">
        <p className="subtitle">Special Dishes</p>
        <h2 className="title md:w-[520px]">Awesome Dishes From Our Menu</h2>
      </div>
      <div className="px-[25px]">
        <Slider {...settings} >
          {recipies.map((recipe, index) => (
            <Cards key={index} recipe={recipe}></Cards>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Speacial;
