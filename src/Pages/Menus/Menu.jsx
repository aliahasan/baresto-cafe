import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../../Components/Cards";
import { FaFilter } from "react-icons/fa";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filterdItems, setFilterdItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/menu.json");
        const data = await response?.data;
        setMenu(data);
        setFilterdItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // filtering data baed on category
  const filterItems = (category) => {
    const filterd =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setFilterdItems(filterd);
    setSelectedCategory(category);
  };

  // show all data
  const showAll = () => {
    setFilterdItems(menu);
    setSelectedCategory("all");
  };
  // sorting based on A-Z , Z-A low-High
  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filterdItems];

    // logic
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilterdItems(sortedItems);
  };

  return (
    <div className="my-6 md:my-24 lg:my-32">
      <div className="text-center">
        <h1 className="title">
          For The Love of Delicious <span className="text-green">Food</span>
        </h1>
        <p className=" md:py-4 text-xl font-medium text-gray-500 md:w-4/5 mx-auto lg:w-4/5">
          Come with family & feel the joy of mountwatering food such as Greak
          Salad Lassage, Butternut Pumkin, Tosiken Wagyu,Olivas Relienas and
          more for a mordern cost
        </p>
        <div className="text-center mt-4">
          <button className="btn btn-outline bg-red-400 hover:bg-green">
            Order Now
          </button>
        </div>
      </div>

      {/* menu shop */}
      <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
        {/*  all category btn */}
        <div className="flex font-medium flex-row flex-wrap  md:justify-start items-center md:gap-8 gap-4 my-8 md:pl-5  md:space-x-4">
          <button
            onClick={showAll}
            className={selectedCategory === "all" ? "active" : ""}
          >
            All
          </button>
          <button
            className={selectedCategory === "salad" ? "active" : ""}
            onClick={() => filterItems("salad")}
          >
            Salad
          </button>
          <button
            className={selectedCategory === "pizza" ? "active" : ""}
            onClick={() => filterItems("pizza")}
          >
            Pizza
          </button>
          <button
            className={selectedCategory === "soup" ? "active" : ""}
            onClick={() => filterItems("soup")}
          >
            Soups
          </button>
          <button
            className={selectedCategory === "dessert" ? "active" : ""}
            onClick={() => filterItems("dessert")}
          >
            Dessertes
          </button>
          <button
            className={selectedCategory === "drinks" ? "active" : ""}
            onClick={() => filterItems("drinks")}
          >
            Drinks
          </button>
        </div>

        <div className="flex justify-end mb-4 rounded-sm">
          <div className="bg-black px-1 py-1">
            <FaFilter className="h-4 w-4 text-white" />
          </div>
          {/* sorting option */}
          <select
            name="sort"
            id="sort"
            onChange={(e) => handleSortChange(e.target.value)}
            value={sortOption}
            className="bg-black text-white px-2  py-1 rounded-sm"
          >
            <option value="default">Default</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
      </div>

      {/* products card */}
      <div className="grid grid-cols-1 gap-x-1 gap-y-2 sm:grid-flow-col-2 md:grid-cols-2 lg:grid-cols-3 space-y-5">
        {filterdItems.map((item) => (
          <Cards key={item._id} recipe={item}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Menu;
