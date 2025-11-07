import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import Welcome from "@/components/Welcome";
import Flyer from "@/components/Flyer";
import Imdates from "@/components/ImportantDates";
import HomeNavigation from "@/components/HomeNavigation";
import { Frown, Sparkles, Link2 } from "lucide-react";
import MiniCountdown from "@/components/MiniCountdown";

import flyerAPFITA from "@/assets/flyer/APFITA2025-Poster-update0711.png";

import SeriesContent from "@/components/SeriesContent";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem("modalLastShown");
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;

    if (!lastShown || now - new Date(lastShown).getTime() > oneHour) {
      setTimeout(() => setShowModal(true), 1500);
      localStorage.setItem("modalLastShown", new Date().toISOString());
    }
  }, []);

  const handleClose = () => setShowModal(false);

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn p-4">
          <div
            className="relative flex flex-col md:flex-row bg-gradient-to-br from-slate-900/95 to-slate-800/90 
      rounded-3xl border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.4)] 
      overflow-hidden w-full max-w-3xl max-h-[90vh] md:max-h-none animate-slideUp"
          >
            {/* Gambar kiri */}
            <div className="md:w-1/2 w-full bg-gradient-to-t from-blue-900/80 to-slate-800/60 flex items-center justify-center">
              <img
                src={flyerAPFITA}
                alt="Pre-APFITA #5 2025 Event Poster"
                className="w-full h-64 md:h-full object-cover md:rounded-l-3xl opacity-90"
              />
            </div>

            {/* Konten kanan */}
            <div className="md:w-1/2 w-full p-6 md:p-8 flex flex-col justify-between text-white overflow-y-auto">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-200 text-center md:text-left">
                  APFITA 2025 is near!
                </h2>

                <MiniCountdown />

                <p className="text-sm md:text-base text-white/80 leading-relaxed mt-4 mb-6 text-center md:text-left">
                  <b>APFITA 2025</b> isn’t just a conference it’s where ideas
                  spark, and innovators meet to shape the future of agri-tech.
                  <br />
                  <br />
                  <b>Bogor, Indonesia • Nov 17–19, 2025</b>
                  <br />
                  <br />✨ Be part of a global movement turning technology into
                  hope for a sustainable world.
                </p>
              </div>

              {/* Tombol aksi */}
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 mt-4 relative">
                {/* IG LINK */}
                <div className="relative group flex items-center justify-center">
                  <a
                    href="https://apfita2025.com/registration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full text-sm md:text-base font-medium 
                bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-700 text-white 
                shadow-md shadow-blue-400/40 hover:from-blue-600 hover:via-indigo-600 hover:to-blue-800 
                transition-all duration-300 flex items-center justify-center gap-2 w-[200px] md:w-auto"
                  >
                    <Link2 className="w-5 h-5" />
                    Register Now!
                  </a>

                  <div
                    className="absolute left-1/2 -translate-x-1/2 -top-5 opacity-0 
                group-hover:-translate-y-10 group-hover:opacity-100 
                transition-all duration-700 ease-out"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-7 h-7 text-amber-300 drop-shadow-[0_0_8px_rgba(150,200,255,0.8)] animate-pulse" />
                      <span className="text-amber-200 font-semibold text-lg drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]">
                        Yeay!
                      </span>
                    </div>
                  </div>
                </div>

                {/* CLOSE */}
                <div className="relative group flex items-center justify-center">
                  <button
                    onClick={handleClose}
                    className="px-6 py-2.5 rounded-full text-sm md:text-base font-medium 
                bg-white/15 text-white hover:bg-white/25 transition-all duration-300
                flex items-center justify-center w-[200px] md:w-auto"
                  >
                    Close
                  </button>

                  <div
                    className="absolute left-1/2 -translate-x-1/2 -top-5 opacity-0 
                group-hover:-translate-y-10 group-hover:opacity-100 
                transition-all duration-700 ease-out"
                  >
                    <div className="flex items-center gap-2">
                      <Frown className="w-7 h-7 text-blue-200 drop-shadow-[0_0_8px_rgba(100,150,255,0.8)] animate-pulse" />
                      <span className="text-blue-100 font-semibold text-lg drop-shadow-[0_0_6px_rgba(150,200,255,0.7)]">
                        Huu~
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
