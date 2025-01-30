import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img from "/src/assets/APFITA 2018.jpg";
import img1 from "/src/assets/APFITA 2018a.jpg";
import img2 from "/src/assets/APFITA 2018b.jpg";
import img3 from "/src/assets/APFITA 2018c.jpg";
import img4 from "/src/assets/APFITA 2019.jpg";
import img5 from "/src/assets/APFITA 2019a.jpg";
import img6 from "/src/assets/APFITA 2019b.jpeg";
import img7 from "/src/assets/APFITA 2022.jpg";
import img8 from "/src/assets/APFITA 2024.jpg";

const images = [
  { src: img, title: "APFITA 2018" },
  { src: img1, title: "APFITA 2018a" },
  { src: img2, title: "APFITA 2018b" },
  { src: img3, title: "APFITA 2018c" },
  { src: img4, title: "APFITA 2019" },
  { src: img5, title: "APFITA 2019a" },
  { src: img6, title: "APFITA 2019b" },
  { src: img7, title: "APFITA 2022" },
  { src: img8, title: "APFITA 2024" },
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 sm:h-96 overflow-hidden rounded-lg shadow-xl">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            {/* Gambar */}
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Judul selalu terlihat */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gray-800 bg-opacity-75 text-white text-center p-2 rounded-b-lg">
                {image.title}
              </div>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
