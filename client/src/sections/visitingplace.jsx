import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import Imgvisiting1 from "../assets/visitingwebp/dakshineswar.webp";
import Imgvisiting2 from "../assets/visitingwebp/kalighat.webp";
import Imgvisiting3 from "../assets/visitingwebp/Imgvisiting1.jpg";
import Imgvisiting4 from "../assets/visitingwebp/Imgvisiting2.webp";
import Imgvisiting5 from "../assets/visitingwebp/Imgvisiting3.webp";
import Imgvisiting6 from "../assets/visitingwebp/balurmath.jpg";
import Iconmap from "../assets/logo/map.png";
import Iconwiki from "../assets/logo/wiki.png";
import next from "../assets/logo/arrowright.png";
import prev from "../assets/logo/previous.png";

const cards = [
  {
    name: "DAKSHINESWR",
    photo: Imgvisiting1,
    distance: "22km",
    description: "Dakshineswar is famous for its Kali Temple...",
    map: "https://www.google.com/maps/place/Dakshineswar+Kali+Temple",
    wiki: "https://en.wikipedia.org/wiki/Dakshineswar",
  },
  {
    name: "KALIGHAT",
    photo: Imgvisiting2,
    distance: "11km",
    description: "Kalighat, located in Kolkata...",
    map: "https://www.google.com/maps/place/Kalighat+Temple",
    wiki: "https://en.wikipedia.org/wiki/Kalighat",
  },
  {
    name: "VICTORIA MEMORIAL",
    photo: Imgvisiting3,
    distance: "9km",
    description: "The Victoria Memorial in Kolkata...",
    map: "https://www.google.com/maps/place/Victoria+Memorial",
    wiki: "https://en.wikipedia.org/wiki/Victoria_Memorial,_Kolkata",
  },
  {
    name: "BOTANICAL GARDEN",
    photo: Imgvisiting4,
    distance: "6km",
    description: "The Acharya Jagadish Chandra Bose Garden...",
    map: "https://www.google.com/maps/place/Acharya+Jagadish+Chandra+Bose+Indian+Botanic+Garden",
    wiki: "https://en.wikipedia.org/wiki/Acharya_Jagadish_Chandra_Bose_Indian_Botanic_Garden",
  },
  {
    name: "PRINSEP GHAT",
    photo: Imgvisiting5,
    distance: "9km",
    description: "Prinsep Ghat, built during British rule...",
    map: "https://www.google.com/maps/place/Prinsep+Ghat",
    wiki: "https://en.wikipedia.org/wiki/Prinsep_Ghat",
  },
  {
    name: "BELUR MATH",
    photo: Imgvisiting6,
    distance: "23km",
    description: "Belur Math, situated on the banks of the Ganges...",
    map: "https://www.google.com/maps/place/Belur+Math",
    wiki: "https://en.wikipedia.org/wiki/Belur_Math",
  },
];

const Visitingplace = () => {
  const [bgImage, setBgImage] = useState(cards[0].photo);
  const sliderRef = useRef(null); // Ref to control slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (index) => setBgImage(cards[index].photo),
    arrows: false, // Disable built-in arrows
  };

  return (
    <div className=" relative bg-orange-200 w-full h-auto overflow-hidden">
      {/* Background Image */}
      <AnimatePresence>
        {bgImage && (
          <motion.div
            key={bgImage}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(4px) brightness(0.6)",
            }}
          />
        )}
        <div className="absolute top-0 left-0 w-full h-200 bg-gradient-to-b from-black/100 to-transparent z-10 pointer-events-none" />
      </AnimatePresence>

      {/* Title */}
      <div className="flex justify-center items-center relative z-10 pt-6">
        <h2 className="text-5xl text-white font-bold  text-center my-10">
          NEARBY VISITING PLACES
        </h2>
        
      </div>
     

      {/* Content */}
      <div className="flex flex-row justify-center items-center  w-full h-auto md:h-180 py-4 px-4 md:pt-0 gap-6">
        {/* Prev Button */}
        <motion.div
  animate={{
    boxShadow: [
      "0 0 0px rgba(228, 228, 236, 0.5)",
      "0 0 15px rgba(226, 226, 237, 0.8)",
      "0 0 0px rgba(246, 246, 250, 0.5)",
    ],
  }}
  transition={{ duration: 2, repeat: Infinity }}
  className="hidden md:flex flex-col justify-center items-center w-11/12 md:w-1/4 h-135 border-2 border-white relative z-10 gap-4"
>
  <button
    className="w-14 h-14 flex justify-center items-center rounded-full bg-white/50 hover:bg-white transition duration-300"
    onClick={() => sliderRef.current?.slickPrev()}
  >
    <img src={prev} alt="Previous" className="w-6 h-6" />
  </button>

  <span className="text-white font-thin text-2xl">PREVIOUS</span>
</motion.div>


        {/* Slider */}
        <div className="w-11/12 mx-auto my-10 md:h-135 pb-10 md:w-2/4 relative z-10">
          <Slider ref={sliderRef} {...settings}>
            {cards.map((card, index) => (
              <div key={index} className="px-2">
                <img
                  src={card.photo}
                  alt={card.name}
                  className="object-cover w-full h-80 md:h-96 transition-all duration-700 ease-in-out"
                />
                <div className="bg-white p-4 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {card.name}
                  </h3>
                  <p className="text-sm text-gray-600 pb-2">
                    {card.description}
                  </p>
                  <p className="text-sm font-medium text-gray-700">
                    Distance: {card.distance}
                  </p>
                  <div className="flex gap-4 pt-2">
                    <a href={card.map} target="_blank" rel="noopener noreferrer">
                      <img src={Iconmap} alt="Map" className="w-6 h-6" />
                    </a>
                    <a href={card.wiki} target="_blank" rel="noopener noreferrer">
                      <img src={Iconwiki} alt="Wiki" className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Next Button */}
        <motion.div
  animate={{
    boxShadow: [
      "0 0 0px rgba(228, 228, 236, 0.5)",
      "0 0 15px rgba(226, 226, 237, 0.8)",
      "0 0 0px rgba(246, 246, 250, 0.5)",
    ],
  }}
  transition={{ duration: 2, repeat: Infinity }}
  className="hidden md:flex flex-col justify-center items-center w-11/12 md:w-1/4 h-135 border-2 border-white relative z-10 gap-4 mx-auto"
>
  <button
    className="w-14 h-14 flex justify-center items-center rounded-full bg-white/50 hover:bg-white transition duration-300"
    onClick={() => sliderRef.current?.slickNext()}
  >
    <img src={next} alt="Next" className="w-6 h-6" />
  </button>

  <span className="text-white font-thin text-4xl">NEXT</span>
</motion.div>

      </div>
    </div>
  );
};

export default Visitingplace;
