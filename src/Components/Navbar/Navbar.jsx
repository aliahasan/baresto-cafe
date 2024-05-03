import React, { useEffect, useState } from "react";
import logo from "/logo.png";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

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
              <Link to={'/menu'}>All</Link>
            </li>
            <li>
              <Link>Salad</Link>
            </li>
            <li>
              <Link>Pizza</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Serices</summary>
          <ul className="p-2">
            <li>
              <Link>All</Link>
            </li>
            <li>
              <Link>Bookings</Link>
            </li>
            <li>
              <Link>Orders Tracking</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link>Blogs</Link>
      </li>
    </>
  );

  return (
    <header className="mx-auto container max-w-screen-2xl text-orange-500 fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out">
      <div className={`navbar ${isSticky ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out" : ""}`}>
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold lg:font-bold text-lg"
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
          <ul className="menu menu-horizontal px-1 font-bold text-lg">{navLinks}</ul>
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
            {/* <span className="badge badge-sm indicator-item">8</span> */}
          </div>
          <div className="dropdown dropdown-end hidden md:inline-block">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between">Profile</Link>
              </li>
              <li>
                <Link>My Bookings</Link>
              </li>
              <li>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
