import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Imgevent1 from "../assets/pictures/event2.jpg";
import Imgevent2 from "../assets/pictures/event1.jpg";
import Imgevent3 from "../assets/pictures/event3.jpg";
import Imgevent4 from "../assets/pictures/event4.jpg";
import Imgevent5 from "../assets/pictures/event6.png";
import LoadingSpinner from '../component/loadingpage';
import Footer from '../sections/footer';


function Events() {
  const [loading, setLoading] = useState(true);

  // Wait for all images to load before removing spinner
  useEffect(() => {
    const imageSources = [Imgevent1, Imgevent2, Imgevent3, Imgevent4, Imgevent5];
    let loadedCount = 0;

    imageSources.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imageSources.length) {
          setTimeout(() => setLoading(false), 800); // slight delay for smoother UX
        }
      };
    });
  }, []);

  if (loading) return <LoadingSpinner />;


  return (
    <>
      <div className='flex flex-col items-center  w-full h-auto md:h-200 bg-yellow-800'>
        <img src={Imgevent5} alt="event img" className='flex w-full h-120  md:h-full object-cover rounded-md' />
        <h2 className='flex text-white text-4xl md:text-6xl relative bottom-[30%] md:bottom-[30%] font-thin backdrop-blur-md px-4 py-4'>
        WEDDING HALL MEETING & EVENTS
        </h2>

      </div>

      <div className='flex flex-col w-full h-auto bg-white items-center gap-10 md:gap-20'>
        <p className='flex text-sm md:text-2xl py-4 md:mt-10 px-4 font-serif text-black'>
          Discover and compare venues for your next event. Use your best estimate for attendees and any guest rooms needed.
        </p>

        {/* WEDDING HALL CARD */}
        <div className='flex flex-col md:flex-row items-center w-full h-auto bg-black/30  my-4 md:mt-10 py-4 px-1 shadow-lg'>
          <img src={Imgevent2} alt="wedding events img" className='w-9/10 h-50 md:w-200 md:h-120  md:ml-10 md:my-10 pt-2' />
          <div className='flex flex-col items-center w-5/6 h-auto bg-white md:px-10 md:py-10 my-4 py-4 px-4' >
            <h2 className='text-black font-thin text-4xl py-4 my-4'>WEDDING HALL</h2>
            <p>"Combining cutting-edge technology and the slickest design, multi-functional luxury banquet halls at The Park Kolkata are spread over an area of 12,000 sq ft. Pine Hall, Rosewood Hall, Ebony Room, and Banyan Room all come with the latest facilities to make your experience of marriage banquet halls in Kolkata completely sensational. 

Our seven banquets are approximately 12000 sq. ft. in total which can be partitioned into seven halls (4 & 3) to create flexible space for meetings and conferences.

Our two elegant boardrooms (16-seater and 20-seater) are ideal for smaller conferences. "</p>
            <Link to='/booking' state={{ roomname: " Wedding hall" }}>
              <button className='bg-transparent text-red-700 shadow-md hover:bg-red-500 hover:text-white transition-all border border-red-700 md:w-60 w-50 mt-10 mx-4'>
                GET A CUSTOME PRICE
              </button>
            </Link>
            <Link to="/gallery">
              <button className='bg-transparent text-red-700 shadow-md hover:bg-red-500 hover:text-white transition-all border border-red-700 md:w-60 w-50 mt-4 mx-4'>
                EXPLORE
              </button>
            </Link>
          </div>
        </div>

        {/* BOARDROOM CARD */}
        <div className='flex flex-col md:flex-row items-center w-full h-auto bg-black/30 mt-10 py-4 px-1 shadow-lg'>
          <img src={Imgevent3} alt="wedding events img" className='flex w-9/10 h-50 md:w-200 md:h-120 md:ml-10 md:my-10 pt-2' />
          <div className='flex flex-col items-center w-5/6 h-auto bg-white md:px-8 my-4 py-4 px-4'>
            <h2 className='text-black font-thin text-4xl py-10 px-10 my-4'>BOARDROOMS</h2>
            <p>"Our hotel offers a state-of-the-art conference hall equipped with modern AV technology..."</p>
            <Link to='/booking' state={{ roomname: "conference hall" }}>
              <button className='bg-transparent text-red-700 shadow-md hover:bg-red-500 hover:text-white transition-all border border-red-700 md:w-60 w-50 mt-10'>
                GET A CUSTOME PRICE
              </button>
            </Link>
            <Link to="/gallery">
              <button className='bg-transparent text-red-700 shadow-md hover:bg-red-500 hover:text-white transition-all border border-red-700 md:w-60 w-50 my-4'>
                EXPLORE
              </button>
            </Link>
          </div>
        </div>

        {/* REWARDS SECTION */}
        <div className='flex flex-col md:flex-row items-center md:justify-center w-5/6 h-auto bg-transparent my-10 mx-4'>
          <div className='flex w-80 h-80 md:w-120 md:h-120 items-center justify-center rounded-full mt-8 bg-yellow-800'>
            <img src={Imgevent4} alt="" className='flex w-70 h-70 md:w-110 md:h-110 rounded-full shadow-md-white z-10' />
          </div>
          <div className='flex flex-col items-center w-60 h-auto md:w-150 md:h-70 bg-yellow-800 relative bottom-20 md:right-20 md:top-5 shadow-lg rounded-4xl'>
            <p className='text-white text-xs md:text-lg pt-18 pb-4 my-4 mx-4 px-4 md:pl-40'>
              "When guests host their wedding at Hotel Gokul Palace, they earn exclusive reward points..."
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Events;
