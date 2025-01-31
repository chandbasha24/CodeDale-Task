import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white  relative w-full">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/log.png`}
            alt="Logo"
            className="h-8 sm:h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 text-gray-700 font-medium">
          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredItem("products")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <button className="flex items-center hover:text-gray-900 px-2">
              Products ▼
            </button>
            {hoveredItem === "products" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bg-white rounded-lg py-2 border border-gray-200 shadow-lg mt-2 min-w-[180px]"
              >
                <a href="#" className="block px-4 py-2 hover:bg-gray-50">
                  Design
                </a>
                
                
              </motion.div>
            )}
          </div>

          {/* Community Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setHoveredItem("community")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <button className="flex items-center hover:text-gray-900 px-2">
              Community ▼
            </button>
            {hoveredItem === "community" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bg-white rounded-lg py-2 border border-gray-200 shadow-lg mt-2 min-w-[180px]"
              >
                <a href="#" className="block px-4 py-2 hover:bg-gray-50">
                  Forums
                </a>
              </motion.div>
            )}
          </div>

          <a href="#" className="hover:text-gray-900 px-2">
            Pricing
          </a>
          <a href="#" className="hover:text-gray-900 px-2">
            Learn
          </a>
          <a href="#" className="hover:text-gray-900 px-2">
            Contact Sales
          </a>
        </div>

        {/* Launch Button */}
        <div className="hidden lg:flex items-center">
          <button className="bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-full transition-all duration-300 hover:bg-blue-600 text-sm sm:text-base">
            Launch →
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-white shadow-md py-4 px-6 space-y-4 text-gray-700 font-medium"
        >
          <a href="#" className="block py-2">
            Products
          </a>
          <a href="#" className="block py-2">
            Community
          </a>
          <a href="#" className="block py-2">
            Pricing
          </a>
          <a href="#" className="block py-2">
            Learn
          </a>
          <a href="#" className="block py-2">
            Contact Sales
          </a>
          <button className="w-full bg-blue-500 text-white py-2 rounded-full text-sm">
            Launch →
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;