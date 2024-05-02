import React from "react";

const Categories = () => {
  const categoryItems = [
    {
      id: 1,
      title: "Main Dish",
      qunatity: "(86 dishesh)",
      image: "/images/home/category/img1.png",
    },
    {
      id: 2,
      title: "Break Fast",
      qunatity: "(12 dishesh)",
      image: "/images/home/category/img2.png",
    },
    {
      id: 3,
      title: "Dessert",
      qunatity: "(48 dishesh)",
      image: "/images/home/category/img3.png",
    },
    {
      id: 4,
      title: "Main Dish",
      qunatity: "(78 dishesh)",
      image: "/images/home/category/img4.png",
    },
  ];

  return (
    <div className="mt-20">
      <div className="text-center">
        <p className="subtitle">Customer Favourites</p>
        <h2 className="title">Popular Categories</h2>
      </div>

      {/* catgoires */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8  justify-around items-center mt-12">
        {categoryItems.map((item, i) => (
          <div key={i} className="shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all">
            <div className="flex justify-center items-center w-full mx-auto ">
                <img src={item.image} alt="" className="bg-[#c1f1c6]  p-5 rounded-full w-28 h-28"/>
            </div>
            <div className="space-y-1">
                <h4 className="text-red-300 font-medium pt-1">{item.title}</h4>
                <p className="text-green font-medium ">{item.qunatity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
