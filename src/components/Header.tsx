import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLocation } from "react-router-dom";

import logoConf from "/src/assets/logo_conf.png";
import logoBrain from "/src/assets/logo_brain.png";
import logoUtama from "/src/assets/logo_utama.png";
import logoIPB from "/src/assets/logo_ipb.png";
import logoFW from "/src/assets/logo_FW.png";

export default function Header() {
  const titleRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const pageTitles: { [key: string]: string } = {
    "/conference": "CONFERENCE",
    "/time-schedule": "TIME SCHEDULE",
    "/guidelines": "GUIDELINES",
    "/submissions": "SUBMISSIONS",
    "/venue": "VENUE",
    "/committees": "COMMITTEES",
    "/download": "DOWNLOAD",
    "/contact": "CONTACT US!",
  };

  const pageTitle = pageTitles[location.pathname] || "APFITA 2025";

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 }
      );
      gsap.fromTo(
        logosRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }
  }, [pageTitle]);

  return (
    <div className="relative flex flex-col items-center justify-center text-center px-4 py-6 min-h-[600px] max-h-[600px] mx-auto pt-[120px]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.djkn.kemenkeu.go.id/files/images/2024/03/tugu_kujang_bogor.jpeg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Blur & Gray Transparent Overlay */}
      <div className="absolute inset-0 bg-black/15"></div>
      {/* Logos Section */}
      <div
        ref={logosRef}
        className="w-full max-w-4xl bg-white/90 rounded-3xl shadow-lg p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center mt-4 mb-4"
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

      {/* Title with Line */}
      <div className="relative mt-8 mb-8">
        <h1
          ref={titleRef}
          className="text-6xl font-bold text-white drop-shadow-lg"
        >
          {pageTitle}
        </h1>
        <div className="w-32 h-1 bg-blue-500 mx-auto mt-2"></div>
      </div>
    </div>
  );
}
