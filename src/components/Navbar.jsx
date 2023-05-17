"use client";
import { useState } from "react";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";

import { SlUser } from "react-icons/sl";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const [dropHandle, setDropHandle] = useState(false);

  const { searchPath } = useSelector((state) => state.spotify);

  const auth = useSelector((state) => state.auth);

  return (
    <div className="w-full h-16 py-4 px-8">
      <div className="flex justify-between items-center">
        {/* arrows */}

        <div className="flex justify-center items-center gap-4">
          <div className="flex justify-center items-center gap-4">
            {/* left arrow */}

            <button className="bg-arrow_bg flex justify-center items-center rounded-full h-8 w-8">
              <MdOutlineArrowBackIosNew className="text-xl" />
            </button>
            {/* right arrow */}
            <button className="bg-arrow_bg flex justify-center items-center rounded-full h-8 w-8">
              <MdOutlineArrowForwardIos className="text-xl" />
            </button>
          </div>

          {/* search */}
          {searchPath === "/search" && (
            <div className="flex justify-center items-center gap-4 relative">
              <input
                type="text"
                placeholder="What do you want to listen to?"
                className="text-black px-5 py-3 rounded-full w-[364px] pl-12 text-sm outline-none"
              />
              <button className="flex justify-center items-center rounded-full h-8 w-8 absolute left-2 ">
                <svg
                  role="img"
                  aria-hidden="true"
                  className="text-search_text h-6 w-6"
                  viewBox="0 0 24 24"
                  data-encore-id="icon"
                >
                  <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
                </svg>
              </button>
            </div>
          )}
        </div>

        {auth === true ? (
          <div className="flex justify-center items-center gap-4 ">
            {/* auth login */}
            {/* upgrade */}
            <button className="border border-gray-400 py-1 px-3 bg-transparent rounded-full text-xs font-bold hover:scale-105">
              Upgrade
            </button>

            {/* dropdown */}
            <button
              className="flex justify-center items-center bg-arrow_bg py-1 px-2 rounded-full gap-2 relative"
              onClick={() => setDropHandle(!dropHandle)}
            >
              <div className="p-2 rounded-full bg-user_bg">
                <SlUser className="text-md font-bold" />
              </div>

              <span className="text-xs font-bold">mert sakınç</span>

              {dropHandle === false ? (
                <IoMdArrowDropdown className="text-2xl" />
              ) : (
                <IoMdArrowDropup className="text-2xl" />
              )}

              {dropHandle && (
                <div className="absolute bottom-0 top-12 right-0 z-10">
                  <ul className="bg-user_dropdown  rounded-md text-left text-sm text-sidebar_text min-w-[200px]">
                    <li className="hover:bg-user_nav_bg duration-300">
                      <button className="p-3 flex justify-between items-center w-full">
                        Account
                        <FiExternalLink />
                      </button>
                    </li>
                    <li className="hover:bg-user_nav_bg duration-300">
                      <button className="p-3">Profile</button>
                    </li>
                    <li className="hover:bg-user_nav_bg duration-300">
                      <button className="p-3 whitespace-nowrap flex justify-between items-center w-full">
                        Upgrade to Premium
                        <FiExternalLink />
                      </button>
                    </li>
                    <li className="hover:bg-user_nav_bg duration-300">
                      <button className="p-3">Settings</button>
                    </li>
                    <hr className="text-sidebar_text opacity-30" />
                    <li className="hover:bg-user_nav_bg duration-300">
                      <button className="p-3">Log out</button>
                    </li>
                  </ul>
                </div>
              )}
            </button>
          </div>
        ) : (
          <div>
            {/* auth not login */}
            <nav>
              <ul className="flex justify-center items-center gap-4">
                <li>
                  <button className="text-md font-bold text-sidebar_text hover:text-white duration-300 hover:scale-105">
                    Premium
                  </button>
                </li>
                <li>
                  <button className="text-md font-bold text-sidebar_text hover:text-white duration-300 hover:scale-105">
                    Support
                  </button>
                </li>
                <li>
                  <button className="text-md font-bold text-sidebar_text hover:text-white duration-300 hover:scale-105">
                    Download
                  </button>
                </li>
                <li>
                  <span className="text-md font-bold text-white hover:text-white duration-300 hover:scale-105">
                    |
                  </span>
                </li>
                <li>
                  <Link
                    href="register"
                    className="text-md font-bold text-sidebar_text hover:text-white duration-300 hover:scale-105"
                  >
                    Sign up
                  </Link>
                </li>
                <li>
                  <Link
                    href="login"
                    className="text-md font-bold bg-white text-black px-10 py-3 rounded-full hover:bg-gray-200 duration-300 hover:scale-105"
                  >
                    Log in
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
