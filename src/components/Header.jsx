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
  const timeoutRef = useRef(null);

  // Toggle mobile menu
  const toggleMobileMenu = useCallback(() => {
    setMobileMenu((prev) => !prev);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenu) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [mobileMenu]);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMobileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle dropdown hover (desktop)
  const handleDropdownHover = useCallback((index) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(index);
  }, []);

  // Handle dropdown leave with delay (desktop)
  const handleDropdownLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  }, []);

  // Handle dropdown toggle (mobile)
  const handleDropdownToggle = useCallback((index) => {
    setActiveDropdown((prev) => (prev === index ? null : index));
  }, []);

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
    <header className="bg-white text-primary shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-10 h-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {links.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => handleDropdownHover(index)}
                onMouseLeave={handleDropdownLeave}
              >
                <NavLink
                  to={item.link || "#"}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
                    ${
                      isActive
                        ? "group-hover:bg-indigo-50 group-hover:text-indigo-600"
                        : "hover:text-blue-600 hover:bg-gray-100"
                    }`
                  }
                >
                  {item.name}
                  {item.submenu && (
                    <FiChevronDown
                      className={`transform ${
                        activeDropdown === index ? "rotate-180" : ""
                      } transition-transform duration-300`}
                    />
                  )}
                </NavLink>

                {/* Desktop Dropdown Menu */}
                {item.submenu && (
                  <div
                    className={`absolute left-0 mt-1 py-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg transition-all 
                    ${
                      activeDropdown === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    {item.sublinks.map((sublink, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={sublink.link}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm transition-colors
                          ${
                            isActive
                              ? "bg-indigo-50 text-indigo-600"
                              : "hover:bg-gray-100"
                          }`
                        }
                      >
                        {sublink.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {mobileMenu ? (
              <AiOutlineClose className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className={`md:hidden fixed inset-y-0 right-0 w-full bg-white shadow-xl z-50 transform transition-transform
        ${mobileMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="px-4 sm:px-6 lg:px-8 py-2 border-b border-gray-100 flex justify-between items-center">
          <img src={logo} alt="Logo" className="w-10 h-auto" />
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <AiOutlineClose className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 overflow-y-auto">
          {links.map((item, index) => (
            <div key={index} className="mb-2">
              <button
                onClick={() => item.submenu && handleDropdownToggle(index)}
                className={`w-full flex items-center justify-between p-3 rounded-lg
                  ${
                    activeDropdown === index
                      ? "bg-indigo-50 text-indigo-600"
                      : "hover:bg-gray-100"
                  }`}
              >
                <NavLink
                  to={!item.submenu ? item.link : "#"}
                  onClick={() => !item.submenu && setMobileMenu(false)}
                  className="flex-1 text-left"
                >
                  {item.name}
                </NavLink>
                {item.submenu && (
                  <FiChevronDown
                    className={`transform transition-transform ${
                      activeDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Mobile Dropdown Menu */}
              {item.submenu && activeDropdown === index && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.sublinks.map((sublink, subIndex) => (
                    <NavLink
                      key={subIndex}
                      to={sublink.link}
                      onClick={() => setMobileMenu(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 text-sm rounded-lg
                        ${
                          isActive
                            ? "bg-indigo-50 text-indigo-600"
                            : "hover:bg-gray-100"
                        }`
                      }
                    >
                      {sublink.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
