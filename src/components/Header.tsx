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
    }
  }, [pageTitle]);

  return (
    <div className="relative flex flex-col items-center justify-center text-center px-4 py-6 min-h-[500px] max-h-[500px] mx-auto">
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
      <div className="mb-5 relative flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-12 p-10 rounded-3xl bg-white shadow-lg border border-gray-200 overflow-hidden">
        {/* Soft Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 opacity-50 rounded-3xl pointer-events-none"></div>

        {/* Main Logo with Highlight */}
        <img
          src={logoUtama || "/placeholder.svg"}
          alt="Utama Logo"
          className="w-64 sm:w-80 h-auto object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
        />

        {/* Other Logos */}
        <div className="flex space-x-6 sm:space-x-8">
          {[logoIPB, logoBrain, logoFW, logoConf].map((logo, index) => (
            <img
              key={index}
              src={logo || "/placeholder.svg"}
              alt={`Logo ${index + 1}`}
              className="w-24 sm:w-28 h-auto object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
            />
          ))}
        </div>
      </div>

      {/* Title with Line */}
      <div className="relative mt-8">
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
