import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 w-full bg-black/30 backdrop-blur-md  z-50 flex justify-between items-center px-10 py-3 shadow-md">
      {/* Logo */}
      <Link to="/" className="flex items-center"> <h2 className="text-2xl text-white font-bold"style={{  }}>
       HOTEL <span className="text-orange-500" >GOKUL PALACE</span>
      </h2></Link>
     
      {/* Links for Desktop */}
      <div className="hidden md:flex gap-6 text-lg text-white md:relative    md:left-20 md:mx-4">
        <Link to="/" className="md:flex hover:text-orange-500">HOME</Link>
        <Link to="/roomscreen" className="md:flex hover:text-orange-500">ROOMS</Link>
       
        <Link to="/events" className="md:flex hover:text-orange-500">EVENTS</Link>
        <Link to="/aboutus" className="md:flex hover:text-orange-500">ABOUT US</Link>
      </div>

      {/* Buttons for Desktop */}
      <div className="hidden md:flex gap-4">
        
        <Link to="/roomscreen">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">BOOK NOW</button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-700 text-2xl focus:outline-none"
        >
          &#9776;
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white/60 backdrop-blur-md flex flex-col items-center gap-4 py-4 shadow-md z-40">
          <Link to="/" className="hover:text-orange-500" onClick={toggleMobileMenu}>HOME</Link>
          <Link to="/roomscreen" className="hover:text-orange-500" onClick={toggleMobileMenu}>ROOMS</Link>
          
          
          <Link to="/events" className="hover:text-orange-500" onClick={toggleMobileMenu}>EVENTS</Link>
          <Link to="/aboutus" className="hover:text-orange-500" onClick={toggleMobileMenu}>ABOUT US</Link>
         
          <Link to="/roomscreen" onClick={toggleMobileMenu}>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">BOOK NOW</button>
          </Link>
        </div>
      )}
    </div>
  );
}