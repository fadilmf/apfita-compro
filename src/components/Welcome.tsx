"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/src/assets/APFITA 2019a.jpg",
  "/src/assets/APFITA 2018c.jpg",
  "/src/assets/APFITA 2019.jpg",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="container max-w-full bg-gradient-to-br from-blue-50 via-white to-green-50 mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        {/* Carousel Section */}
        <div className="relative group">
          <div className="overflow-hidden rounded-lg aspect-video">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover flex-shrink-0"
                />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900">
            Welcome to The 15th International Conference of Asia-Pacific
            Federation for Information Technology in Agriculture
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Join us for this prestigious conference that brings together
            researchers, practitioners, and industry experts in agricultural
            information technology. This event will showcase the latest
            innovations and developments in agricultural technology across the
            Asia-Pacific region.
          </p>
        </div>
      </div>
    </div>
  );
}
