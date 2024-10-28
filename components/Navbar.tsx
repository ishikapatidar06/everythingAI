"use client";
import React, { useState } from "react";

import { LuSun } from "react-icons/lu";

import { IoMenu, IoClose } from "react-icons/io5";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed w-full top-0 bg-white dark:bg-gray-800 py-2 px-4 md:py-2 md:px-32 flex justify-between items-center border z-40">
        {/* Logo and Site Name */}
        <div className="flex items-center space-x-2">
          <img
            src="/acme-logo footer.webp"
            alt="Everything Talent Logo"
            className="h-8 w-8"
          />
          <span className="text-xl font-bold text-black dark:text-white">
            Everything Talent
          </span>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-8">
          {[
            "Home",
            "About",
            "Use Cases",
            "Pricing",
            "Resources",
            "Blog",
            "Support",
          ].map((item, index) => (
            <a
              key={index}
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Dark Mode and Login Buttons */}
        <div className="flex items-center space-x-7">
          <button className="text-xl">
            <LuSun className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white" />
          </button>
          <button className="hidden md:flex px-3 py-2 text-sm bg-blue-600 text-white rounded-md  hover:shadow-xl hover:bg-blue-700 transition">
            Login
            <span className="ml-2">→</span>
          </button>
          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-xl">
            {isOpen ? (
              <IoClose className="text-gray-800 dark:text-gray-200" />
            ) : (
              <IoMenu className="text-gray-800 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-12 left-0 w-full bg-white dark:bg-gray-800 z-10 flex flex-col  space-y-6 py-6 border-t">
          {[
            "Home",
            "About",
            "Use Cases",
            "Pricing",
            "Resources",
            "Blog",
            "Support",
          ].map((item, index) => (
            <a
              key={index}
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer text-sm font-medium"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
