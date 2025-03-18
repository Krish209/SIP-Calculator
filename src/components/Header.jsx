import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/icons/logo.png";
import { links } from "./Mylinks";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef(null);

  // Toggle mobile menu
  const toggleMobileMenu = useCallback(() => {
    setMobileMenu((prev) => !prev);
  }, []);

  // Handle dropdown toggle
  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index); // Toggle active dropdown
  };

  // Close mobile menu if clicked outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenu(false);
      }
    };
    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);

  return (
    <header className="bg-white text-primary shadow-md sticky top-0 z-50">
      {/* Logo and Navbar container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-10 h-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {links.map((item, index) => (
            <div key={index} className="relative">
              <NavLink
                to={item.link || "#"}
                className="hover:text-blue-600 font-medium flex items-center"
                onClick={() => item.submenu && handleDropdownToggle(index)}
                aria-expanded={activeDropdown === index ? "true" : "false"}
              >
                {item.name}
                {item.submenu && (
                  <FiChevronDown
                    className={`transform ${activeDropdown === index ? "rotate-180" : ""} transition-transform duration-300`}
                  />
                )}
              </NavLink>

              {/* Dropdown Menu */}
              {item.submenu && activeDropdown === index && (
                <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md">
                  {item.sublinks.map((sublink, subIndex) => (
                    <li key={subIndex} className="border-b border-gray-200">
                      <NavLink
                        to={sublink.link}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sublink.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleMobileMenu}>
          {mobileMenu ? (
            <AiOutlineClose className="text-black text-3xl cursor-pointer" />
          ) : (
            <FiMenu className="text-3xl cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenu && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-white z-50 p-6 flex flex-col items-start space-y-6"
        >
          {/* Close Button */}
          <AiOutlineClose
            className="text-3xl cursor-pointer"
            onClick={toggleMobileMenu}
          />

          {/* Mobile Menu Items */}
          <ul className="space-y-4">
            {links.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link || "#"}
                  className="hover:text-blue-600 font-medium flex items-center"
                  onClick={() => item.submenu && handleDropdownToggle(index)}
                  aria-expanded={activeDropdown === index ? "true" : "false"}
                >
                  {item.name}
                  {item.submenu && (
                    <FiChevronDown
                      className={`transform ${activeDropdown === index ? "rotate-180" : ""} transition-transform duration-300`}
                    />
                  )}
                </NavLink>

                {/* Mobile Submenu */}
                {item.submenu && activeDropdown === index && (
                  <ul className="pl-6 mt-2 space-y-2">
                    {item.sublinks.map((sublink, subIndex) => (
                      <li key={subIndex}>
                        <NavLink
                          to={sublink.link}
                          className="block hover:text-blue-600"
                        >
                          {sublink.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
