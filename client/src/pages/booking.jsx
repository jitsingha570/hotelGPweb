import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // ✅ Import useLocation

import api from '../utils/api'; // ✅ Use the custom axios instance

function Booking() {
  const location = useLocation();
  const { roomname } = location.state || {}; // ✅ Get roomname from passed state

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    checkindate: '',
    checkoutdate: '',
    roomtype: roomname || '', // ✅ Save roomname as roomtype
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post('roombooking', formData);
      console.log('Booking successful:', res.data);
      alert('Booking submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '',
        checkindate: '',
        checkoutdate: '',
        roomtype: roomname || '', // ✅ Reset with original roomname
      });
    } catch (err) {
      console.error('Error submitting booking:', err);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-300 py-10">
      <div className="flex flex-col items-center bg-white shadow-lg w-full sm:w-4/5 md:w-3/5 rounded-lg m-12 p-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">BOOKING</h1>
        
        {/* ✅ Show selected room name */}
        <h2 className="text-xl font-semibold text-blue-600 mb-6">
          Booking for: {roomname || 'Unknown Room'}
        </h2>

        <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Column */}
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Name</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Phone</label>
                <input
                  name="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Number of Guests</label>
                <input
                  name="guests"
                  type="number"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="Enter number of guests"
                  className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Check-in Date</label>
                <input
                  name="checkindate"
                  type="date"
                  value={formData.checkindate}
                  onChange={handleChange}
                  className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-600 mb-1">Check-out Date</label>
                <input
                  name="checkoutdate"
                  type="date"
                  value={formData.checkoutdate}
                  onChange={handleChange}
                  className="border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-transform transform hover:scale-105 mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;
