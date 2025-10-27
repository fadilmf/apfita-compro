import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import Welcome from "@/components/Welcome";
import Flyer from "@/components/Flyer";
import Imdates from "@/components/ImportantDates";
import series4 from "/src/assets/series/praapfita4.jpeg";
import HomeNavigation from "@/components/HomeNavigation";
import { ThumbsUp, Frown } from "lucide-react";

import { X } from "lucide-react";
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative flex flex-col md:flex-row bg-gradient-to-br from-slate-900/90 to-slate-800/80 rounded-3xl border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.4)] overflow-hidden max-w-4xl w-[95%] md:w-full animate-slideUp">
            {/* Tombol X */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-white/80 hover:text-white transition"
            >
              <X className="w-6 h-6 hover:text-red-600" />
            </button>

            {/* Poster kiri */}
            <div className="md:w-1/2 w-full">
              <img
                src={series4}
                alt="Pre-APFITA 2025 Series #4 Poster"
                className="w-full h-full object-cover md:rounded-l-3xl"
              />
            </div>

            {/* Konten kanan */}
            <div className="md:w-1/2 w-full p-6 md:p-8 flex flex-col justify-between text-white">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Pre-APFITA 2025 Series #4
                </h2>

                <p className="text-sm md:text-base text-white/90 leading-relaxed mb-4">
                  <b>International Webinar:</b>
                  <br />
                  <i>
                    “Digital Twins in Agriculture: Emerging Trends in Precision
                    Ag, Technical, Physical, and Cultural”
                  </i>
                </p>

                <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6">
                  📅 <b>Monday, 27 October 2025</b> <br />
                  🕐 <b>1–3 PM (WIB)</b> <br />
                  💻 <b>Zoom Meeting</b> <br />
                  Don’t miss this chance to connect with experts from{" "}
                  <b>Edith Cowan University</b> and <b>IPB University</b>
                  <br />
                  Discover how digital technology is transforming the future of
                  agriculture!
                </p>
              </div>

              {/* Tombol aksi */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 relative">
                {/* REGISTER NOW */}
                <div className="relative group flex items-center justify-center">
                  <a
                    href="https://ipb.link/webinar-pra-apfita2025-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full text-sm md:text-base font-medium 
                 bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-md shadow-amber-300/40
                 hover:from-yellow-500 hover:to-amber-600 transition-all duration-300
                 flex items-center justify-center"
                  >
                    Register Now
                  </a>

                  <div
                    className="absolute left-1/2 -translate-x-1/2 -top-5 opacity-0 
                 group-hover:-translate-y-10 group-hover:opacity-100 
                 transition-all duration-700 ease-out"
                  >
                    <ThumbsUp className="w-7 h-7 text-yellow-300 drop-shadow-[0_0_8px_rgba(255,255,150,0.8)] animate-pulse" />
                  </div>
                </div>

                {/* CLOSE */}
                <div className="relative group flex items-center justify-center">
                  <button
                    onClick={handleClose}
                    className="px-6 py-2.5 rounded-full text-sm md:text-base font-medium 
                 bg-white/15 text-white hover:bg-white/25 transition-all duration-300
                 flex items-center justify-center"
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