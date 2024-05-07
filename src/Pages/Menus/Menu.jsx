import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import useData from "../../Hooks/useData";
import FoodCards from "../../Components/FoodCards";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Menu = () => {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState([]);
  const myAxios = useData();
  const { count } = useLoaderData();
  const itemsPerPage = 12;
  const NumberOfPages = Math.ceil(count / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [...Array(NumberOfPages).keys()];
  const {
    data: foods,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["foods", category, price, currentPage, itemsPerPage],
    queryFn: async () =>
      myAxios.get(
        `/allfoods?category=${category}&sortField=price&sortOrder=${price}&page=${currentPage}&limit=${itemsPerPage}`
      ),
  });

  useEffect(() => {
    const allCategory = foods?.data?.map((item) => item.category);
    const itemsCategory = [...new Set(allCategory)];
    setCategories(itemsCategory);
  }, [foods]);

  if (error)
    return (
      <div>
        <div>{toast.error(error.message)}</div>
      </div>
    );

  const handleButton = (click) => {
    if (click === "prev" && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (click === "next" && currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="">
      <div className="my-12 flex flex-col md:flex-row justify-between items-center">
        <div className="flex-1">
          <input
            type="search"
            placeholder="Search here"
            className="input input-bordered w-full max-w-xs"
          />
          <input className="btn" type="submit" value="Submit" />
        </div>

        <div className="flex px-4 my-5">
          <div>
            {/* sorting */}
            <label htmlFor="" className="level level-text">
              <span className="text-xl font-medium pr-5">Price</span>
            </label>
            <select
              name=""
              id=""
              className="input input-bordered"
              onChange={(e) => setPrice(e.target.value)}
            >
              <option value="" className="disabled">
                Choos one
              </option>
              <option value="asc">From low to high</option>
              <option value="desc">From high to low</option>
            </select>
          </div>
        </div>
        <div className="mr-8">
          <label htmlFor="">
            <span className="text-xl font-medium pr-5">Category</span>
          </label>
          <select
            className="input input-bordered"
            name=""
            id=""
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" className="disabled">
              Choose one
            </option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        {isLoading ? (
          <Loading></Loading>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-3 md:px-0">
            {foods?.data?.map((food) => (
              <FoodCards key={food._id} food={food}></FoodCards>
            ))}
          </div>
        )}
      </div>
      <div className="text-center justify-center items-center flex flex-wrap flex-row gap-5 mt-8" >
        <button onClick={() => handleButton("prev")} className="btn">
          Prev
        </button>
        {pages.map((page, index) => (
          <button
            className={`${currentPage === page ? "bg-green" : ""} btn`}
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        <button onClick={() => handleButton("next")} className="btn">
          Next
        </button>
      </div>
    </div>
  );
};

export default Menu;
