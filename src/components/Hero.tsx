"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Announcement from "@/components/Announcement";

import logoConf from "/src/assets/logo_conf.png";
import logoBrain from "/src/assets/logo_brain.png";
import logoUtama from "/src/assets/logo_utama.png";
import logoIPB from "/src/assets/logo_ipb.png";
import logoFW from "/src/assets/logo_FW.png";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  // Announcement messages - you can add or change these as needed
  const announcements = [
    "Abstract submissions are now open! deadline: July 30, 2025",
    "Join us in Bogor, Indonesia on November 17-19, 2025",
    "Submissions are now open — share your research with the world!",
    "Join us for the 15th International Conference of APFITA!",
    "Discover the latest in agricultural technology and innovation.",
    "Welcome to APFITA 2025 — November 17-19 in Bogor, Indonesia!",
    "Experience Indonesia's vibrant agro-maritime industry firsthand.",
    "The Developer of this website must be very handsome <3",
    "Connect, collaborate, and innovate with global experts!",
    "Celebrate 15 editions of groundbreaking agricultural IT conferences!",
  ];

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        themeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        logosRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden pt-16 sm:pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            "url('https://www.djkn.kemenkeu.go.id/files/images/2024/03/tugu_kujang_bogor.jpeg')",
        }}
      ></div>

      <Announcement announcements={announcements} />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Logos Section */}
      <div
        ref={logosRef}
        className="w-full max-w-4xl bg-white/90 rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center mt-10 mb-10 z-10"
      >
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Main Logo */}
          <img
            src={logoUtama || "/placeholder.svg"}
            alt="Utama Logo"
            className="w-48 sm:w-56 md:w-80 h-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
          />

          {/* Other Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-center justify-center">
            {[logoIPB, logoBrain, logoFW, logoConf].map((logo, index) => (
              <img
                key={index}
                src={logo || "/placeholder.svg"}
                alt={`Logo ${index + 1}`}
                className="w-20 sm:w-24 md:w-28 h-auto object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 mx-auto"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center">
        {/* Title */}
        <h1
          ref={titleRef}
          className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold mb-6 text-blue-600 tracking-wider drop-shadow-lg text-center"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          APFITA 2025
        </h1>

        {/* Subtitle */}
        <div
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-6 leading-relaxed text-center max-w-4xl"
        >
          The 15th International Conference of Asia-Pacific Federation for
          Information Technology in Agriculture
        </div>

        {/* Theme */}
        <div
          ref={themeRef}
          className="w-full text-base sm:text-lg md:text-xl lg:text-2xl text-white font-semibold mb-12 px-4 text-center max-w-5xl"
        >
          "Innovative Digital Technology for Global and Sustainable
          Agro-Maritime Industry"
        </div>
      </div>
    </div>
  );
}
