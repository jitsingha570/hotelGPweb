import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Imghome1 from "../assets/pictures/Imghome1.jpg";
import Imghome2 from "../assets/pictures/Imghome3.jpg";
import Videohome from "../assets/videos/videohome.mp4";
import LoadingSpinner from "../component/loadingpage";

const images = [Imghome1, Imghome2];
const fullText = "Picture your next amazing stay";

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const [guestCount, setGuestCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);

  const [isPageLoaded, setIsPageLoaded] = useState(false); // 👈 For loader

  // Track video load and other assets
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Full loading check
  useEffect(() => {
    if (videoLoaded) {
      // Optional delay for better UX
      setTimeout(() => {
        setIsPageLoaded(true);
      }, 1000);
    }
  }, [videoLoaded]);

  // Typing effect
  useEffect(() => {
    if (charIndex < fullText.length) {
      const typingTimeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(typingTimeout);
    }
  }, [charIndex]);

  // Background slider (for mobile fallback)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCharIndex(0);
      setTypedText("");
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Guest stats animations
  useEffect(() => {
    let guest = 0;
    const interval = setInterval(() => {
      if (guest < 1200) {
        guest += 20;
        setGuestCount(guest);
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let room = 0;
    const interval = setInterval(() => {
      if (room < 50) {
        room += 2;
        setRoomCount(room);
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let event = 0;
    const interval = setInterval(() => {
      if (event < 25) {
        event += 1;
        setEventCount(event);
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {!isPageLoaded && <LoadingSpinner />} {/* 👈 Show loader if not loaded */}

      <div className="relative w-full min-h-screen md:min-h-[600px] flex justify-center items-center overflow-hidden bg-black">
        {/* Background Video */}
        <video
          src={Videohome}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          onCanPlayThrough={() => setVideoLoaded(true)} // 👈 Load trigger
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-10 backdrop-blur-none" />

        {/* Stats */}
        <div className="flex flex-col hidden md:block gap-4 md:gap-0 h-auto my-4 mx-4 py-4 px-4 md:h-auto absolute top-[30%] left-[50%] md:left-[80%] md:top-[40%] translate-y-[-50%] z-30 text-white space-y-6 text-right bg-black/40 p-4 rounded-xl shadow-lg">


          <div>
            <h2 className="text-2xl md:text-5xl font-bold">{guestCount}+</h2>
            <p className="text-sm">Guests Satisfied</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-5xl font-bold">{roomCount}+</h2>
            <p className="text-sm">Rooms Available</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-5xl font-bold">{eventCount}+</h2>
            <p className="text-sm">Events Hosted</p>
          </div>
        </div>

        {/* Content */}
        <div className="z-20 flex flex-col items-center justify-center text-center text-white md:relative md:bottom-15 px-4 mt-[400px] md:mt-[500px] md:pb-10">
          <div className="md:bg-black/30 backdrop-blur-md p-6 rounded-md shadow-md max-w-2xl w-full mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">
              {typedText}
              <span className="animate-pulse">|</span>
            </h1>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {["24*7 SECURITY", "AC ROOMS", "LIFT FACILITY", "PARKING", "WIFI SERVICE"].map((feature) => (
              <span
                key={feature}
                className="px-4 py-1 bg-white/10 text-white border border-white/30 rounded-full text-sm hover:bg-white/20 transition-all"
              >
                {feature}
              </span>
            ))}
          </div>

          <Link to="/Gallery">
            <button className="w-52 h-12 mt-2 px-4 text-lg border-2 border-white text-white bg-gradient-to-r from-black/70 to-black/30 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 rounded-full shadow-md">
              EXPLORE
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
