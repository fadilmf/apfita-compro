import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Leaf,
  Tractor,
  Ship,
  Fish,
  Wheat,
  Cpu,
  Satellite,
  Smartphone,
  Cloud,
  Database,
} from "lucide-react";
import ImageCarousel from "./ImageCarousel";

import logoConf from "/src/assets/logo_conf.png";
import logoBrain from "/src/assets/logo_brain.png";
import logoUtama from "/src/assets/logo_utama.png";

gsap.registerPlugin(ScrollTrigger);

interface FloatingIconProps {
  icon: React.ReactNode;
  color: string;
  size: string;
  position: string;
  delay: number;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({
  icon,
  color,
  size,
  position,
  delay,
}) => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        y: "+=20",
        x: "+=10",
        rotate: "+=5",
        repeat: -1,
        yoyo: true,
        duration: 3 + Math.random(),
        ease: "sine.inOut",
        delay: delay,
      });
    }
  }, [delay]);

  return (
    <div
      ref={iconRef}
      className={`absolute ${position} ${size} ${color} rounded-full shadow-lg flex items-center justify-center transform transition-all duration-300 hover:scale-110`}
    >
      {icon}
    </div>
  );
};

export default function ComingSoon() {
  const comingSoonRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (comingSoonRef.current) {
      gsap.fromTo(
        comingSoonRef.current,
        { y: 0, textShadow: "0 0 0px rgba(0, 100, 200, 0)" },
        {
          y: -10,
          textShadow: "0px 0px 20px rgba(0, 100, 200, 0.7)",
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: "power1.inOut",
        }
      );
    }

    textRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: index * 0.2 }
        );
      }
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden flex flex-col items-center justify-center px-4 py-12">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10" />

      {/* Floating Icons */}
      <FloatingIcon
        icon={<Leaf className="w-6 h-6 text-white" />}
        color="bg-green-400"
        size="w-14 h-14"
        position="top-10 left-10"
        delay={0}
      />
      {/* tes */}
      <FloatingIcon
        icon={<Tractor className="w-8 h-8 text-white" />}
        color="bg-yellow-500"
        size="w-20 h-20"
        position="top-1/4 right-16"
        delay={0.5}
      />
      <FloatingIcon
        icon={<Ship className="w-6 h-6 text-white" />}
        color="bg-blue-500"
        size="w-16 h-16"
        position="bottom-1/4 left-20"
        delay={1}
      />
      <FloatingIcon
        icon={<Fish className="w-5 h-5 text-white" />}
        color="bg-cyan-400"
        size="w-12 h-12"
        position="top-1/3 left-1/4"
        delay={1.5}
      />
      <FloatingIcon
        icon={<Wheat className="w-6 h-6 text-white" />}
        color="bg-amber-500"
        size="w-14 h-14"
        position="bottom-16 right-1/4"
        delay={2}
      />
      <FloatingIcon
        icon={<Cpu className="w-5 h-5 text-white" />}
        color="bg-purple-500"
        size="w-12 h-12"
        position="top-20 right-1/3"
        delay={2.5}
      />
      <FloatingIcon
        icon={<Satellite className="w-7 h-7 text-white" />}
        color="bg-indigo-500"
        size="w-16 h-16"
        position="bottom-1/3 left-16"
        delay={3}
      />
      <FloatingIcon
        icon={<Smartphone className="w-5 h-5 text-white" />}
        color="bg-red-400"
        size="w-12 h-12"
        position="top-1/2 right-20"
        delay={3.5}
      />
      <FloatingIcon
        icon={<Cloud className="w-6 h-6 text-white" />}
        color="bg-sky-400"
        size="w-14 h-14"
        position="bottom-24 right-1/3"
        delay={4}
      />
      <FloatingIcon
        icon={<Database className="w-5 h-5 text-white" />}
        color="bg-emerald-500"
        size="w-12 h-12"
        position="top-3/4 left-1/4"
        delay={4.5}
      />

      {/* Logos */}
      <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-12">
        <img
          src={logoUtama}
          alt="Utama Logo"
          className="w-64 sm:w-80 h-auto object-contain"
        />
        <div className="flex space-x-4">
          <img
            src={logoConf}
            alt="APFITA Logo"
            className="w-24 sm:w-28 h-auto object-contain"
          />
          <img
            src={logoBrain}
            alt="Brain Logo"
            className="w-24 sm:w-28 h-auto object-contain"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center max-w-4xl mx-auto">
        <h1
          ref={comingSoonRef}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-blue-600 tracking-wider"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Coming Soon
        </h1>
        <div
          ref={(el) => (textRefs.current[0] = el)}
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
        >
          APFITA 2025
        </div>
        <div
          ref={(el) => (textRefs.current[1] = el)}
          className="text-xl sm:text-2xl text-gray-700 mb-6 leading-relaxed"
        >
          The 15th International Conference of Asia-Pacific Federation for
          Information Technology in Agriculture
        </div>
        <div
          ref={(el) => (textRefs.current[2] = el)}
          className="text-lg sm:text-xl text-blue-600 font-semibold mb-8 px-4"
        >
          "Innovative Digital Technology for Global Agro-Maritime Industry"
        </div>
        <div
          ref={(el) => (textRefs.current[3] = el)}
          className="text-gray-600 mb-2"
        >
          Bogor, Indonesia
        </div>
        <div
          ref={(el) => (textRefs.current[4] = el)}
          className="text-gray-600 mb-2"
        >
          17-19 November 2025
        </div>
        <div ref={(el) => (textRefs.current[5] = el)} className="text-gray-600">
          Organized by APFITA 2025
        </div>
      </div>

      {/* Image Carousel */}
      <div className="mt-12 w-full max-w-4xl">
        <ImageCarousel />
      </div>
    </div>
  );
}
