import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 flex flex-row justify-between items-center px-10 py-3 shadow-md">
    {/* Logo */}
    <h2 className="text-2xl font-bold">
      HOTEL <span className="text-orange-500">GOKUL PALACE</span>
    </h2>
  
    {/* Links for Desktop */}
    <div className="hidden md:flex gap-6 text-lg text-gray-900">
      <Link to="/" className="hover:text-orange-500">ROOM BOOKINGS</Link>
      <Link to="/roomsedit" className="hover:text-orange-500">ROOMS EDIT</Link>
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
      <div className="absolute top-16 left-0 w-full bg-yellow-200/90 backdrop-blur-md flex flex-col items-center gap-4 py-4 shadow-md z-40">
        <Link to="/" className="hover:text-orange-500" onClick={toggleMobileMenu}>ROOM BOOKINGS</Link>
        <Link to="/roomsedit" className="hover:text-orange-500" onClick={toggleMobileMenu}>ROOMS EDIT</Link>
      </div>
    )}
  </div>
  );
}