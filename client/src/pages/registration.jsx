import React from 'react';
import { Link } from 'react-router-dom';

function Registration() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center bg-yellow-200 w-full max-w-lg p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">REGISTRATION</h2>
        <input type="text" placeholder="Email" className="w-72 h-10 rounded-full border-none p-2 mb-3 outline-none" />
        <input type="password" placeholder="Password" className="w-72 h-10 rounded-full border-none p-2 mb-3 outline-none" />
        <input type="password" placeholder="Confirm Password" className="w-72 h-10 rounded-full border-none p-2 mb-3 outline-none" />
        <input type="number" placeholder="OTP" className="w-72 h-10 rounded-full border-none p-2 mb-3 outline-none" />
        <button className="w-72 h-10 rounded-full bg-orange-400 text-white font-semibold shadow-md hover:bg-orange-500 transition-all">REGISTER</button>
        <h3 className="mt-4 text-lg">Already have an account?</h3>
        <Link to="/login" className="text-blue-600 hover:underline">Login here</Link>
      </div>
    </div>
  );
}

export default Registration;
