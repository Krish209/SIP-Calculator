import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/icons/logo.png";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaHeart,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToSection = () => {
    navigate("/terms");
    setTimeout(() => {
      const section = document.querySelector("refund");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <footer className="bg-slate-50 text-gunmetal py-16">
      <div className="container sm:text-sm md:text-md text-xs mx-auto px-6 lg:px-1">
        {/* Intro */}
        <div className="flex flex-col gap-4 md:flex-row md:justify-between items-center text-center mb-8 lg:px-32">
          {/* Left Text Section */}
          <div className="md:flex-1">
            <p className="text-[13px] lg:leading-6 text-justify">
              SIPGo, your ultimate investment companion. We provide a powerful
              and easy-to-use investment calculator that goes beyond just
              numbers. Our platform provides comprehensive details you need to
              make informed decisions. SIPGo is your one-stop solution for all.
            </p>
          </div>

          {/* Logo Section */}
          <div className="md:flex-1 flex flex-col items-center">
            <Link to="/" className="flex justify-center">
              <img
                src={logo}
                className="md:h-28 sm:h-16 h-12 w-auto"
                alt="Logo"
              />
            </Link>

            {/* Center Section with Love */}
            {/* <div className="md:py-5">
              <p className="text-[12px] flex justify-center items-center">
                Building in India with{" "}
                <span className="ml-1">
                  <FaHeart className="text-bs" />
                </span>
              </p>
            </div> */}
          </div>

          {/* Links Section */}
          {/* <div className="md:flex-1 grid grid-cols-3 gap-4"> */}
          {/* Company */}
          {/* <div>
              <h2 className="text-md font-semibold mb-4">Company</h2>
              <ul className="space-y-1 text-[13px]">
                <li>
                  <Link to="/contact" className="hover:text-gray-400">
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gray-400">
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:careers@tradzo.in"
                    className="hover:text-gray-400"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div> */}

          {/* Resources */}
          {/* <div>
              <h2 className="text-md font-semibold mb-4">Resources</h2>
              <ul className="space-y-1 text-[13px]">
                <li>
                  <a
                    href="https://www.nseindia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    NSE
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://www.bseindia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    BSE
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.sebi.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    SEBI
                  </a>
                </li>
                <li>
                  <a
                    href="https://scores.sebi.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400"
                  >
                    SCORES
                  </a>
                </li>
              </ul>
            </div> */}

          {/* Legal */}
          {/* <div>
              <h2 className="text-md font-semibold mb-4">Legal</h2>
              <ul className="space-y-1 text-[13px]">
                <li>
                  <Link to="/privacy-policy" className="hover:text-gray-400">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link to="/terms" className="hover:text-gray-400">
                    Terms & Uses Policy
                  </Link>
                </li>
              </ul>
            </div> */}
          {/* </div> */}
        </div>

        <hr className="border-gray-700 my-6" />

        <ul className="flex text-night justify-center space-x-4 text-2xl">
          <li>
            <a
              href="https://x.com/SipGo992"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/sipg0/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://m.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@S1PGo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaYoutube />
            </a>
          </li>
          <li>
            <a
              href="https://in.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>

      <div className="py-6 bg-gray-100 mt-8">
        <div className="container mx-auto px-6 lg:px-32 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            {/* Left Section */}
            <div className="text-center lg:left-0">
              <p className="text-[13px]">
                Copyright © 2025 SipGo. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
