import React from "react";
import { FaBehance, FaInstagram, FaFacebookF } from "react-icons/fa"; // Import your icons
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex flex-col md:flex-row justify-between items-center p-4 bg-transparent z-30 md:px-[150px] md:pb-[100px] space-y-4 md:space-y-0">
      {/* Social Media Icons */}
      <div className="flex space-x-4 md:space-x-6 justify-center md:justify-start">
        <a
          href="#"
          className="text-white text-2xl hover:text-gray-300 transition duration-300"
        >
          <FaBehance />
        </a>
        <a
          href="#"
          className="text-white text-2xl hover:text-gray-300 transition duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="text-white text-2xl hover:text-gray-300 transition duration-300"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="text-white text-2xl hover:text-gray-300 transition duration-300"
        >
          <FaXTwitter />
        </a>
      </div>

      {/* Contact Us Section */}
      <div className="hidden md:flex justify-center items-center pr-[100px]">
        <a
          href="#"
          className="text-white text-lg font-semibold relative group transition duration-300"
        >
          <span className="group-hover:scale-110 transition-all duration-300">
            Contact Us
          </span>
          {/* Hover underline effect */}
          <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-[#FFD700] scale-x-100 group-hover:scale-x-0 opacity-100 group-hover:opacity-0 transition-all duration-300"></span>
        </a>
      </div>

      {/* Mobile Footer */}
      <div className="md:hidden flex justify-center w-full mt-4">
        <a
          href="#"
          className="text-white text-lg font-semibold relative group transition duration-300"
        >
          <span className="group-hover:scale-110 transition-all duration-300">
            Contact Us
          </span>
          {/* Hover underline effect */}
          <span className="underline absolute left-0 bottom-0 w-full h-[2px] bg-[#FFD700] scale-x-100 group-hover:scale-x-0 opacity-100 group-hover:opacity-0 transition-all duration-300"></span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
