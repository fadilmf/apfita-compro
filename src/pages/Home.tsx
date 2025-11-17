import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import Welcome from "@/components/Welcome";
import Flyer from "@/components/Flyer";
import Imdates from "@/components/ImportantDates";
import HomeNavigation from "@/components/HomeNavigation";
import { Sparkles, Frown, PlayCircle, Circle } from "lucide-react";

import SeriesContent from "@/components/SeriesContent";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const [hoverType, setHoverType] = useState<"yes" | "no" | null>(null);

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
            className="relative flex flex-col items-center bg-gradient-to-br from-slate-900/95 to-slate-800/90 
      rounded-3xl border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.4)]
      overflow-hidden w-full max-w-xl p-8 animate-slideUp"
          >
            {/* FLOATING REACTION */}
            {hoverType && (
              <div className="absolute -top-10 flex items-center gap-2 animate-fadeIn">
                {hoverType === "yes" ? (
                  <>
                    <Sparkles className="w-8 h-8 text-red-400 drop-shadow-[0_0_8px_rgba(255,80,80,0.9)] animate-pulse" />
                    <span className="text-red-300 font-semibold text-lg drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]">
                      Yeay!
                    </span>
                  </>
                ) : (
                  <>
                    <Frown className="w-8 h-8 text-blue-300 drop-shadow-[0_0_8px_rgba(90,150,255,0.9)] animate-pulse" />
                    <span className="text-blue-200 font-semibold text-lg drop-shadow-[0_0_6px_rgba(150,200,255,0.7)]">
                      Huu~
                    </span>
                  </>
                )}
              </div>
            )}

            {/* TITLE */}
            <h2 className="text-3xl font-bold text-center text-red-300 mb-6 tracking-wide">
              APFITA 2025 Now Airing!
            </h2>

            {/* VIDEO FRAME */}
            <div
              className="relative w-full aspect-video rounded-xl bg-black/60 border-2 border-white/20 overflow-hidden 
        shadow-[0_0_20px_rgba(255,0,0,0.25)]"
            >
              {/* Fake YouTube window frame */}
              <div className="absolute top-0 w-full h-8 bg-black/60 border-b border-white/20 flex items-center gap-2 px-3">
                <Circle className="w-3 h-3 text-red-500/80" />
                <Circle className="w-3 h-3 text-yellow-400/80" />
                <Circle className="w-3 h-3 text-green-500/80" />
                <span className="text-white/40 text-xs ml-3 tracking-widest">
                  LIVE STREAM
                </span>
              </div>

              {/* LIVE TEXT CENTER */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-red-400 font-semibold text-xl animate-pulse">
                  🔴 Live starting soon…
                </span>
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center">
              {/* WATCH NOW */}
              <a
                href="/conference"
                onMouseEnter={() => setHoverType("yes")}
                onMouseLeave={() => setHoverType(null)}
                className="px-6 py-3 rounded-full text-base font-medium 
          bg-red-600 text-white shadow-md shadow-red-500/40
          hover:bg-red-700 hover:shadow-red-600/70
          transition-all duration-300 flex items-center justify-center gap-2"
              >
                <PlayCircle className="w-5 h-5" />
                Watch Now!
              </a>

              {/* CLOSE */}
              <button
                onClick={handleClose}
                onMouseEnter={() => setHoverType("no")}
                onMouseLeave={() => setHoverType(null)}
                className="px-6 py-3 rounded-full text-base font-medium 
          bg-white/15 text-white hover:bg-white/25 transition-all duration-300
          flex items-center justify-center"
              >
                No thanks
              </button>
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
