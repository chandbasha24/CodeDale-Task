import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import "./Hero.css";
import { FaMagic } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero-container">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 text-center relative">
        {/* Floating Images */}
        <div className="floating-images hidden sm:block">
          {/* Left Side Images */}
          <div className="absolute left-0 top-1/4 -translate-y-1/2 w-1/4 space-y-8 sm:space-y-12 md:space-y-16">
            <motion.img
              src="/images/left1.webp"
              alt="Icon 1"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 absolute left-8 sm:left-12 md:left-16 -top-8"
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
            <motion.img
              src="/images/left2.png"
              alt="Icon 2"
              className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 absolute left-4 sm:left-8 md:left-12 top-12 sm:top-16"
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
            <motion.img
              src="/images/left3.webp"
              alt="Icon 3"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 absolute left-12 sm:left-16 md:left-20 top-24 sm:top-32"
              animate={{ y: [15, -15, 15] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
          </div>

          {/* Right Side Images */}
          <div className="absolute right-0 top-1/4 -translate-y-1/2 w-1/4 space-y-8 sm:space-y-12 md:space-y-16">
            <motion.img
              src="/images/4.jpeg"
              alt="Icon 4"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 absolute right-8 sm:right-12 md:right-16 -top-8"
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
            <motion.img
              src="/images/i4.webp"
              alt="Icon 5"
              className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 absolute right-4 sm:right-8 md:right-12 top-12 sm:top-16"
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
            <motion.img
              src="/images/righ6.webp"
              alt="Icon 6"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 absolute right-12 sm:right-16 md:right-20 top-24 sm:top-32"
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
          </div>
        </div>

        {/* Community Section - Styles preserved, only responsiveness added */}
        
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <span className="community-text text-sm sm:text-base">
              <span className="highlight font-bold">400k+</span> Designers & Devs build with Relume
            </span>
            <div className="community-icons flex -space-x-2">
              <img src="/images/icon.avif" alt="User 1" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white" />
              <img src="/images/icon2.avif" alt="User 2" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white" />
              <img src="/images/icon3.avif" alt="User 3" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content space-y-4 sm:space-y-6 mb-8 sm:mb-12 md:mb-16">
          <h2 className="main-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
            Websites designed & <br className="hidden sm:block" /> built faster with AI
          </h2>
          <p className="main-description text-sm sm:text-base md:text-lg text-gray-600 mx-auto max-w-2xl">
            Use AI as your design ally, not as a replacement. Effortlessly generate{" "}
            <br className="hidden sm:block" />
            sitemaps and wireframes for marketing websites in minutes.
          </p>
        </div>

        {/* Input Section */}
        <div className="input-section w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto">
          <div className="input-container  flex-col sm:flex-row gap-2 sm:gap-4">
            <input
              type="text"
              placeholder="Describe a company in a sentence or two..."
              className="input-box flex-grow px-4 py-2 sm:py-3  border-gray-300 focus:outline-none  text-sm sm:text-base"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="generate-button bg-blue-500 text-white px-6 py-2 sm:py-3 rounded-full flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <FaMagic className="icon" /> Generate
            </motion.button>
          </div>
        </div>
      </div>
    
  );
};

export default Hero;