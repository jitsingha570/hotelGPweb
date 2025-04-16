import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Logo + Tagline */}
        <div className="flex flex-col gap-2 w-full md:w-1/3">
          <h1 className="text-2xl font-bold text-orange-500">HOTEL GOKUL PALACE</h1>
          <p className="text-sm">Enjoy your dream time with a luxury experience. We offer top-notch hospitality and unforgettable memories.</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 w-full md:w-1/3">
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p className="text-sm">📞 +91 7439226614</p>
          <p className="text-sm">✉️ hotelgokulpalace.santragachi@gmail.com</p>
          <p className="text-sm">📍Santragachi Station Rd, Santragachi, Howrah, West
          Bengal 711111</p>
        </div>

        {/* Quick Links using React Router Link */}
        <div className="flex flex-col gap-2 w-full md:w-1/3">
          <h2 className="text-lg font-bold">Quick Links</h2>
          <Link to="/aboutus" className="text-sm hover:text-orange-400 transition">About Us</Link>
          <Link to="/roomscreen" className="text-sm hover:text-orange-400 transition">Rooms</Link>
          <Link to="/events" className="text-sm hover:text-orange-400 transition">Events</Link>
        
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-gray-600"></div>

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Hotel Gokul Palace. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="https://facebook.com" className="hover:text-white transition">Facebook</a>
          <a href="https://instagram.com" className="hover:text-white transition">Instagram</a>
          <a href="https://twitter.com" className="hover:text-white transition">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
