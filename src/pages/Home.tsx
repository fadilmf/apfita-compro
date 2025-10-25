import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import Welcome from "@/components/Welcome";
import Flyer from "@/components/Flyer";
import Imdates from "@/components/ImportantDates";
import series4 from "/src/assets/series/praapfita4.jpeg";
import HomeNavigation from "@/components/HomeNavigation";

import { X } from "lucide-react";
import SeriesContent from "@/components/SeriesContent";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const dontShow = localStorage.getItem("modalDontShow");
    if (dontShow) return;

    const lastShown = localStorage.getItem("modalLastShown");
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;

    if (!lastShown || now - new Date(lastShown).getTime() > oneHour) {
      setTimeout(() => setShowModal(true), 1500);
      localStorage.setItem("modalLastShown", new Date().toISOString());
    }
  }, []);

  const handleClose = () => setShowModal(false);

  const handleDontShowAgain = () => {
    localStorage.setItem("modalDontShow", "true");
    setShowModal(false);
  };

  return (
    <>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 px-4 animate-fadeIn">
          <div className="relative bg-white/15 border border-white/30 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.25)] rounded-3xl overflow-hidden w-full max-w-3xl flex flex-col md:flex-row animate-slideUp">
            {/* Poster kiri */}
            <div className="w-full md:w-1/2">
              <img
                src={series4}
                alt="Pre-APFITA 2025 Series #4 Poster"
                className="w-full h-full object-cover md:rounded-l-3xl"
              />
            </div>

            {/* Konten kanan */}
            <div className="p-6 md:p-8 text-center md:text-left text-white flex flex-col justify-between bg-gradient-to-br from-slate-900/70 to-slate-800/60 md:rounded-r-3xl">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Pre-APFITA 2025 Series #4
                </h2>

                <p className="text-sm md:text-base mb-6 text-white/90 leading-relaxed">
                  <b>International Webinar:</b>
                  <br />
                  <i>
                    “Digital Twins in Agriculture: Emerging Trends in Precision
                    Ag, Technical, Physical, and Cultural”
                  </i>
                  <br />
                  📅 <b>Monday, 27 October 2025</b> | 🕐 <b>1–3 PM (WIB)</b>
                  <br />
                  💻 <b>Zoom Meeting</b>
                  <br />
                  Don’t miss this opportunity to connect with experts from{" "}
                  <b>Edith Cowan University</b> and <b>IPB University</b>
                  {""}
                  discover how digital technology is transforming the future of
                  agriculture!
                </p>
              </div>

              {/* Tombol aksi */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center md:justify-start">
                <a
                  href="https://ipb.link/webinar-pra-apfita2025-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-white rounded-full shadow-md shadow-amber-300/40 text-sm md:text-base font-medium transition"
                >
                  Register Now
                </a>
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 bg-white/25 hover:bg-white/35 text-white rounded-full text-sm md:text-base font-medium transition"
                >
                  Close
                </button>
                <button
                  onClick={handleDontShowAgain}
                  className="px-6 py-2.5 border border-white/30 hover:bg-white/20 text-white/90 rounded-full text-sm md:text-base font-medium transition"
                >
                  Don’t Show Again
                </button>
              </div>
            </div>

            {/* Tombol X di pojok */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition"
            >
              <X className="w-6 h-6 hover:text-red-600" />
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <Hero />
      <Welcome />
      <Flyer />
      <SeriesContent />
      <Imdates />
      <HomeNavigation />
      <Sponsors />
    </>
  );
};

export default Home;
