import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Imgabout1 from "../assets/pictures/Imghome2.jpg";
import Footer from "../sections/footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Iconbed from "../assets/logo/bedicon.png";
import Iconabout2 from "../assets/logo/comfort.png";
import Iconabout3 from "../assets/logo/night.png";
import Iconabout4 from "../assets/logo/stay.png";
import Imgabout2 from "../assets/pictures/about1.jpg";
import Imgabout3 from "../assets/pictures/about2.jpg";
import Imgabout4 from "../assets/pictures/about3.jpg";
import videoBg from "../assets/videos/videohome.mp4";

// Images for slider
const images = [Imgabout1, Imgabout2, Imgabout3];

function Aboutus() {
  const [currentBg, setCurrentBg] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // When everything (including images, fonts, etc.) is fully loaded
  useEffect(() => {
    const handlePageLoad = () => setIsLoading(false);
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, next) => setCurrentBg(next),
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-full bg-white">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-yellow-600 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-auto">
      {/* Hero Section */}
      <div className="relative flex flex-col justify-center items-center w-full bg-black">
        <img src={Imgabout4} alt="aboutimg" className="w-full h-150 md:h-200 object-cover" />
        <h1 className="absolute text-white font-thin text-6xl top-[80%] md:top-[70%] backdrop-blur-md text-center md:px-4">
          ABOUT US
        </h1>
      </div>

      {/* About Description Section */}
      <section className="bg-gray-100 text-gray-800 py-16 px-4 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-yellow-900 mb-2">About Gokul Palace</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            A timeless legacy of comfort and celebration – where every guest is royalty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-800">Our Vision</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Gokul Palace, we envision creating a luxurious yet homely space where comfort meets class.
              Whether it’s a dream wedding, business meeting, or a peaceful stay, our team is dedicated to making every moment unforgettable.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-yellow-800">About Us</h3>
            <p className="text-gray-700 leading-relaxed">
              Founded in 2001, Gokul Palace has become a landmark in hospitality. We pride ourselves on our impeccable service,
              elegant interiors, and a touch of traditional charm that reflects true Indian hospitality. Come, experience luxury with soul.
            </p>
          </div>

          {/* Owner Profile */}
          <div className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-2xl">
            <img
              src={Imgabout1}
              alt="Hotel Owner"
              className="w-48 h-48 object-cover rounded-full border-4 border-yellow-800 shadow-lg mb-6"
            />
            <h4 className="text-2xl font-semibold text-yellow-900">Mr. Rajiv Gokul</h4>
            <p className="text-gray-600">Founder & Managing Director</p>
            <p className="mt-4 text-center text-sm text-gray-500">
              “Hospitality is not just a service – it’s our way of life.”
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-black/20 to-transparent z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-20 px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Experience the Essence of Gokul Palace
          </h2>
          <p className="text-md md:text-xl max-w-2xl drop-shadow-md">
            A glimpse into our luxury spaces, memorable events, and timeless hospitality.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <div className="flex flex-col py-10 items-center w-full bg-white">
        <h1 className="text-orange-700 text-4xl py-10 font-bold">GALLERY</h1>

        <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
          {/* Blurred Background Image */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-center bg-cover filter blur-md scale-110 transition-all duration-1000"
            style={{ backgroundImage: `url(${images[currentBg]})` }}
          />
          {/* Dark Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />
          {/* Slider Content */}
          <div className="w-11/12 md:w-3/4 relative z-20 pb-10">
            <Slider {...settings}>
              {images.map((img, index) => (
                <div key={index}>
                  <img
                    src={img}
                    alt={`slide-${index}`}
                    className="object-cover w-full h-80 md:h-[500px] rounded-xl shadow-2xl transition-all duration-700 ease-in-out transform hover:scale-105"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <Link to="/gallery" className="flex justify-center items-center w-full">
          <button className="w-72 h-12 bg-yellow-600 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 mt-4">
            MORE PHOTOS
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="flex flex-col px-6 py-16 bg-gradient-to-b from-yellow-50 to-white w-full">
        <h1 className="text-yellow-900 text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Gokul Palace?</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[{ icon: Iconbed, title: "Luxurious Stays", desc: "Enjoy elegantly designed rooms with top-tier comfort and privacy." },
            { icon: Iconabout2, title: "Unmatched Comfort", desc: "From cozy beds to ambient lighting, every detail is crafted for you." },
            { icon: Iconabout3, title: "Dreamlike Ambience", desc: "Perfect for romantic getaways, family trips, or solo escapes." },
            { icon: Iconabout4, title: "Exceptional Service", desc: "Our trained staff ensures a seamless and unforgettable experience." }
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center bg-white shadow-md rounded-2xl p-6 transition hover:shadow-xl hover:scale-[1.02]">
              <img src={feature.icon} alt={feature.title} className="w-14 h-14 mr-6" />
              <div>
                <h2 className="text-xl font-semibold text-yellow-900">{feature.title}</h2>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Link to="/roomscreen" className="flex justify-center mt-10">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition">
            BOOK YOUR STAY
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Aboutus;
