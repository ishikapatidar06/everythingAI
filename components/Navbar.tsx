"use client";
import React, { useState, useEffect } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { IoMenu, IoClose } from "react-icons/io5";

const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.add(storedTheme);
    setTheme(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.replace(theme, newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useDarkMode();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed w-full top-0 bg-white dark:bg-gray-900 py-2 px-4 md:py-2 md:px-32 flex justify-between items-center border-b-2  dark:border-gray-600 z-40">
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
          {/* Dark Mode Toggle */}
          <button onClick={toggleTheme} className="text-xl">
            {theme === "dark" ? (
              <LuMoon className="text-gray-300 hover:text-white" />
            ) : (
              <LuSun className="text-gray-600 hover:text-black" />
            )}
          </button>

          {/* Login Button */}
          <button className="hidden md:flex px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:shadow-xl hover:bg-blue-700 transition">
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
        <div className="md:hidden fixed top-12 left-0 w-full bg-white dark:bg-gray-900 z-10 flex flex-col space-y-4 p-4 border-t">
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
              className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer text-base font-medium"
              onClick={() => setIsOpen(false)}
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
