import React from 'react';
import Logoservice1 from '../assets/logo/service10.png';
import Logoservice2 from '../assets/logo/service8.png';
import Logoservice3 from '../assets/logo/service9.png';
import Logoservice4 from '../assets/logo/service7.png';
import Logoservice5 from '../assets/logo/service5.png';
import Logoservice6 from '../assets/logo/service6.png';
import serviceimg from '../assets/pictures/Imgservice.jpg';
import Imgservice from '../assets/dining1.jpg';

function Service() {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-auto md:h-150 bg-white">
    
    {/* Main Content */}
    <h1 className="text-5xl my-16 text-blue-500  text-bold relative z-10">AMENITIES</h1>
    <div className="flex flex-col py-4  md:flex-row justify-center items-center w-full z-10 md:gap-10">
      {/* Left Card */}
      <div className="flex flex-col justify-end items-end w-auto">
        <div className="flex justify-end items-center w-full h-20 text-base font-thin gap-12">
          <h2 className='text-bold text-2xl'>24*7 SECURITY</h2>
          <img src={Logoservice1} alt="" className="w-12 h-12 mb-4" />
        </div>
        <div className="flex justify-end items-center w-full h-20 text-base font-thin gap-12">
          <h2 className='text-bold text-2xl'>ALL AC ROOMS</h2>
          <img src={Logoservice2} alt="" className="w-12 h-12 mb-4" />
        </div>
        <div className="flex justify-end items-center w-full h-20 text-base font-thin gap-12">
          <h2 className='text-bold text-2xl'>24*7 POWER BACKUP</h2>
          <img src={Logoservice3} alt="" className="w-12 h-12 mb-4" />
        </div>
      </div>
  
      {/* Center Image */}
      <div className="flex justify-center items-center w-[400px] z-10">
        <img src={Imgservice} alt="" className="w-80 h-80 mb-6 rounded-full" />
      </div>
  
      {/* Right Card */}
      <div className="flex flex-col py-4 justify-start items-start w-auto">
  <div className="flex justify-start items-center w-full h-20 text-base font-thin gap-12">
    <img src={Logoservice4} alt="" className="w-12 h-12 mb-4" />
    <h2 className='text-bold text-2xl'>LIFT FACILITY</h2>
  </div>
  <div className="flex justify-start items-center w-full h-20 text-base font-thin gap-12">
    <img src={Logoservice5} alt="" className="w-12 h-12 mb-4" />
    <h2 className='text-bold text-2xl'>PARKING</h2>
  </div>
  <div className="flex justify-start items-center w-full h-20 text-base font-thin gap-12">
    <img src={Logoservice6} alt="" className="w-12 h-12 mb-4" />
    <h2 className='text-bold text-2xl'>FREE WIFI SERVICE</h2>
  </div>
</div>

    </div>
  </div>
  
  );
}

export default Service;