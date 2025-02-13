"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

// Import images
import image1 from "../assets/APFITA 2019a.jpg";
import image2 from "../assets/APFITA 2018c.jpg";
import image3 from "../assets/APFITA 2019.jpg";

gsap.registerPlugin(ScrollTrigger);

type ImageType = string;

interface CarouselProps {
  images: ImageType[];
  className?: string;
}

const images: ImageType[] = [image1, image2, image3];

const Carousel: React.FC<CarouselProps> = ({ images, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    gsap.to(carouselRef.current, {
      x: `-${currentIndex * 100}%`,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [currentIndex]);

  return (
    <div
      className={`relative aspect-video rounded-2xl overflow-hidden shadow-2xl ${className}`}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        ref={carouselRef}
      >
        {images.map((image: ImageType, index: number) => (
          <img
            key={index}
            src={image || "/placeholder.svg"}
            alt={`Conference ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() =>
          setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 text-gray-800 p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 text-gray-800 p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index: number) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Welcome: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      bottomRowRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bottomRowRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pb-4">
      <div className="container mx-auto mb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 px-4 lg:px-8">
          {/* Left Side - First Carousel */}
          <div ref={containerRef}>
            <Carousel images={images} />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
              Welcome to The 15<sup>th</sup> International Conference of APFITA
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              The Asia-Pacific Federation for Information Technology in
              Agriculture (APFITA) regularly organizes international conferences
              to bring together academics, researchers, practitioners, and
              stakeholders in the field of agricultural information technology
              from around the world.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Over the years, APFITA has successfully hosted events in various
              locations, including AFITA 2014 in Perth, Australia, APFITA 2019
              at Feng Chia University in Taichung, Taiwan, APFITA 2022 in Hanoi,
              Vietnam, and in 2024, the conference took place in Tsukuba, Japan,
              a hub for modern agricultural research.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="lg:col-span-2 mt-8 space-y-6 mb-4" ref={bottomRowRef}>
          <p className="text-lg text-gray-700 leading-relaxed">
            APFITA 2025 will highlight Indonesia's role as a leading agrarian
            country with significant potential in applying IT to support
            sustainable agro-maritime industry systems. This event will be a
            strategic venue for researchers to:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 pl-4">
            <li>Exchange ideas, knowledge, and information</li>
            <li>Enhance insights and foster collaboration</li>
            <li>Disseminate research findings</li>
            <li>
              Explore publication opportunities in Scopus-indexed journals
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
