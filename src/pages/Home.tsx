import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import Welcome from "@/components/Welcome";
import Flyer from "@/components/Flyer";
import Imdates from "@/components/ImportantDates";
import HomeNavigation from "@/components/HomeNavigation";
import { Frown, Sparkles, Link2 } from "lucide-react";

import series5 from "/src/assets/series/praapfita5.jpeg";

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
                src={series5}
                alt="Pre-APFITA #5 2025 Event Poster"
                className="w-full h-64 md:h-full object-cover md:rounded-l-3xl opacity-90"
              />
            </div>

            {/* Konten kanan */}
            <div className="md:w-1/2 w-full p-6 md:p-8 flex flex-col justify-between text-white overflow-y-auto">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-200 text-center md:text-left">
                  Pre-APFITA 2025
                </h2>

                <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6 text-center md:text-left">
                  Don’t miss our{" "}
                  <b>International Webinar Pre-APFITA 2025 Series #5</b>! Join
                  inspiring discussions on{" "}
                  <b>“Generative AI for Health and Herbal Medicine.”</b>
                  <br />
                  💬 Featuring distinguished speakers from IPB University, ITB,
                  and University of Pittsburgh, USA.
                  <br />
                  📅 <b>Thursday, November 6, 2025</b>
                  <br />
                  🕘 09.00 – 11.30 WIB | 🌐 <b>Zoom Meeting</b>
                  <br />
                  <br />
                  Let’s explore how AI can advance health and herbal innovation
                  together! 🌱
                </p>
              </div>

              {/* Tombol aksi */}
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 mt-4 relative">
                {/* IG LINK */}
                <div className="relative group flex items-center justify-center">
                  <a
                    href="https://ipb.link/webinar-pra-apfita2025-5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full text-sm md:text-base font-medium 
                bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-700 text-white 
                shadow-md shadow-yellow-400/40 hover:from-yellow-600 hover:via-amber-600 hover:to-yellow-800 
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
                    <Sparkles className="w-7 h-7 text-amber-300 drop-shadow-[0_0_8px_rgba(150,200,255,0.8)] animate-pulse" />
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
                    <Frown className="w-7 h-7 text-blue-200 drop-shadow-[0_0_8px_rgba(100,150,255,0.8)] animate-pulse" />
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
