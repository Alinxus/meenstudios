"use client"; // For client-side interactivity
import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-transparent backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">MyBrand</div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <a href="#features" className="text-gray-700 hover:text-black">
            Features
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-black">
            Pricing
          </a>
          <a href="#contact" className="text-gray-700 hover:text-black">
            Contact
          </a>
        </nav>

        {/* Call-to-Action Button */}
        <button className="bg-black text-white px-4 py-2 rounded-lg">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Navbar;
