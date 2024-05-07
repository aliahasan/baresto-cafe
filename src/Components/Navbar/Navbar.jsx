import React, { useContext, useEffect, useState } from "react";
import logo from "/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { logout, user } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogOut = () => {
    logout();
    toast.success("logout successfull");
  };

  const navLinks = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li>
              <Link to={"/menu"}>All Food</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link>Blogs</Link>
      </li>
      <>
        {user ? (
          < >
            <li>
              <Link to={"/additem"} className="md:hidden">Add a item</Link>
            </li>
            <li>
              <Link to={"/myitems"}className="md:hidden">My added item</Link>
            </li>
            <li>
              <Link to={"/myorders"}className="md:hidden">My orders</Link>
            </li>

            <li className="md:hidden">
              <Link onClick={handleLogOut}>Logout</Link>
            </li>
          </>
        ) : (
          <li className="md:hidden ">
            <Link to={`/login`}>Login</Link>
          </li>
        )}
      </>
    </>
  );

  return (
    <header className="mx-auto container max-w-screen-2xl text-orange-500 fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out">
      <div
        className={`navbar ${
          isSticky
            ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium lg:font-bold "
            >
              {navLinks}
            </ul>
          </div>
          <Link to={`/`} className="flex items-center md:pl-3 xl:pl-0">
            <img src={logo} alt="" className="w-12 hidden md:inline" />
            <span className="font-bold md:hidden text-red-800">
              Baresto Cafe
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium ">{navLinks}</ul>
        </div>

        <div className="navbar-end ">
          <div className="indicator hidden md:inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div className="dropdown menu-md dropdown-end hidden md:inline-block ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {user ? (
                  <img src={user?.photoURL} alt="" />
                ) : (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://t4.ftcdn.net/jpg/03/32/59/65/240_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"
                  />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl"
            >
              {user ? (
                <>
                  <li>
                    <Link to={"/additem"} className="justify-between">
                      Add a item
                    </Link>
                  </li>
                  <li>
                    <Link to={"/myitems"}>My added item</Link>
                  </li>
                  <li>
                    <Link to={"/myorders"}>My order </Link>
                  </li>
                  <li>
                    <Link onClick={handleLogOut}>Logout</Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to={`/login`}>Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
