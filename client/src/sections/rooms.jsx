import React from "react";
import { useNavigate } from "react-router-dom";
import Imgroom1 from "../assets/pictures/Imgroom1.jpg";
import Imgroom2 from "../assets/pictures/Imgroom2.jpg";
import Imgroom3 from "../assets/pictures/Imgroom3.jpg";

const roomsData = [
  {
    id: 1,
    image: Imgroom1,
    title: "2 Twin Balcony",
    description: "Indulge in the picturesque views of our stunning surroundings from the comfort of your private balcony.",
    priceRoom: "Rs.5000/-",
    priceBreakfast: "Rs.12000/-",
  },
  {
    id: 2,
    image: Imgroom2,
    title: "Luxury Suite",
    description: "A spacious and comfortable suite with all modern amenities to make your stay relaxing.",
    priceRoom: "Rs.8000/-",
    priceBreakfast: "Rs.15000/-",
  },
  {
    id: 3,
    image: Imgroom3,
    title: "Deluxe King Room",
    description: "An elegant room featuring a king-sized bed and an incredible city view.",
    priceRoom: "Rs.6000/-",
    priceBreakfast: "Rs.13000/-",
  },
];

function Rooms() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-100 py-10">
      <h2 className="text-3xl font-semibold text-gray-900 mb-8">
        OUR BEST <span className="text-orange-500">ROOMS</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12">
        {roomsData.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
          >
            <img src={room.image} alt={room.title} className="w-full h-60 object-cover rounded-md" />
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{room.title}</h3>
              <p className="text-gray-600 mt-2">{room.description}</p>

              <div className="flex justify-between items-center mt-4">
                <div>
                  <h4 className="text-gray-700 font-medium">Only Room</h4>
                  <p className="text-lg font-bold">{room.priceRoom}</p>
                </div>
                <div>
                  <h4 className="text-gray-700 font-medium">Bed & Breakfast</h4>
                  <p className="text-lg font-bold">{room.priceBreakfast}</p>
                </div>
              </div>

              <div className="mt-6 flex justify-center gap-4">
                <button className="px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
                  BOOK NOW
                </button>
                <button className="px-5 py-2 border border-gray-500 text-gray-700 rounded-md hover:bg-gray-200 transition">
                  DETAILS
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
