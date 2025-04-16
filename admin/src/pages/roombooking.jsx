import React, { useState, useEffect } from 'react';

import api from '../utils/api'; // ⬅️ use the custom axios instance

function Roombooking() {
  const [roombookings, setRoombookings] = useState([]);
  const [error, setError] = useState(false);

  const fetchroomsbooking = async () => {
    try {
      const res = await api.get('/roombooking');
      console.log("Fetched Data:", res.data);
      setRoombookings(res.data);
      setError(false);
    } catch (error) {
      console.error("Failed to fetch room bookings", error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchroomsbooking();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/roombooking/${id}`);
      fetchroomsbooking(); // Refresh list
    } catch (err) {
      console.error('Error deleting room:', err);
    }
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white py-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">ROOM BOOKINGS</h1>
  
      {/* Refresh Button */}
      <button
        onClick={fetchroomsbooking}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Refresh
      </button>
  
      {error ? (
        <p className="text-sm text-red-500">
          Failed to fetch room bookings. Please try again later.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 w-11/12 md:w-10/11 md:justify-center">
          {roombookings.map((roombooking) => (
            <div
              key={roombooking._id}
              className="bg-yellow-200 shadow-lg rounded-lg overflow-hidden p-6 md:flex md:flex-row md:w-350 md:gap-100 md:px-40"
            >
              <div className="mb-4">
                <h2>
                  <strong>Name:</strong> {roombooking.name}
                </h2>
                <h2>
                  <strong>Email:</strong> {roombooking.email}
                </h2>
                <h2>
                  <strong>Phone:</strong> {roombooking.phone}
                </h2>
                <h2>
                  <strong>No of Guests:</strong> {roombooking.guests}
                </h2>
              </div>
              <div>
                <h2>
                  <strong>Check-in Date:</strong> {roombooking.checkindate}
                </h2>
                <h2>
                  <strong>Check-out Date:</strong> {roombooking.checkoutdate}
                </h2>
                <h2>
                  <strong>Room Type:</strong> {roombooking.roomtype}
                </h2>
                <button
                  onClick={() => handleDelete(roombooking._id)}
                  className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  
}

export default Roombooking;
