import React from 'react';


// Sample images (replace these with your actual image paths)
import Img1 from '../assets/webpPhoto/about1.webp';
import Img2 from '../assets/pictures/Imghome1.jpg';
import Img3 from '../assets/pictures/Imghome2.jpg';
import Img4 from '../assets/pictures/about2.jpg';


import Img6 from '../assets/gallery/Imggallery2.jpg';
import Img7 from '../assets/gallery/Imggallery3.jpg';

import Img10 from '../assets/gallery/Imggallery6.jpg';
import Img11 from '../assets/gallery/Imggallery7.jpg';
import Img12 from '../assets/gallery/Imggallery8.jpg';
import Img13 from '../assets/gallery/Imggallery9.jpg';


import Img15 from '../assets/gallery/Imggallery11.jpg';
import Img16 from '../assets/gallery/Imggallery12.jpg';




const images = [Img1, Img2, Img3, Img4  ,Img6 , Img7 ,Img10 ,Img11,Img12,Img13 , Img15 ,Img16 ]; // Add more images as needed

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-20 md:pt-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        📸 Photo Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
