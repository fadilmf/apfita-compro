"use client";

import { useState } from "react";
import { CheckCircle2, Play, ExternalLink, Link2, Clock } from "lucide-react";

interface Series {
  id: number;
  title: string;
  number: number;
  poster?: string;
  caption: string;
  status: "completed" | "upcoming";
  documentation?: string;
  youtubeUrl?: string;
  registrationUrl?: string;
}

interface SeriesCardProps {
  series: Series;
}

export default function SeriesCard({ series }: SeriesCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleYoutubeClick = () => {
    window.open(
      series.youtubeUrl || "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "_blank"
    );
  };

  const handleRegisterClick = () => {
    if (series.registrationUrl) {
      window.open(series.registrationUrl, "_blank");
    }
  };

  const isRegistrationOpen =
    series.status === "upcoming" && !!series.registrationUrl;

  return (
    <div
      className="group relative h-full transition-transform duration-500 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative h-full rounded-2xl overflow-hidden border backdrop-blur-md transition-all duration-500 
        ${
          isHovered
            ? "border-blue-300 shadow-[0_0_25px_-5px_rgba(59,130,246,0.4)]"
            : "border-blue-100 shadow-[0_0_15px_-8px_rgba(59,130,246,0.2)]"
        }
        bg-white/30 dark:bg-slate-800/40`}
      >
        {/* Poster Section */}
        <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-2xl">
          {series.poster ? (
            <>
              <img
                src={series.poster}
                alt={series.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex gap-4">
                    {series.status === "completed" && (
                      <button
                        onClick={handleYoutubeClick}
                        className="p-3 rounded-full bg-red-500 hover:bg-red-600 text-white transition-all shadow-md shadow-red-300/50"
                      >
                        <Play className="w-6 h-6 fill-current" />
                      </button>
                    )}

                    {isRegistrationOpen && (
                      <button
                        onClick={handleRegisterClick}
                        className="p-3 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white transition-all shadow-md shadow-yellow-300/50"
                      >
                        <Link2 className="w-6 h-6" />
                      </button>
                    )}

                    {series.documentation && (
                      <a
                        href={series.documentation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all shadow-md shadow-blue-300/50"
                      >
                        <ExternalLink className="w-6 h-6 fill-current" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50">
              <div className="text-center">
                <div className="text-6xl font-light text-blue-300 mb-2">
                  {series.number}
                </div>
                <p className="text-blue-600 font-light text-sm">
                  {isRegistrationOpen ? "Registration Open!" : "Coming Soon"}
                </p>
              </div>
            </div>
          )}

          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            {series.status === "completed" ? (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 border border-green-500 backdrop-blur-sm shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span className="text-xs font-medium text-white">
                  Completed
                </span>
              </div>
            ) : isRegistrationOpen ? (
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 border border-yellow-500 shadow-md shadow-yellow-300/50 text-white">
                <Link2 className="w-4 h-4" />
                <span className="text-xs font-semibold tracking-wide">
                  Registration Open
                </span>
                <Clock className="w-4 h-4 opacity-80" />
              </div>
            ) : (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 border border-blue-400 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-xs font-medium text-blue-700">
                  Upcoming
                </span>
              </div>
            )}
          </div>

          {/* Registration closing note */}
          {isRegistrationOpen && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[85%] sm:w-[70%] lg:w-[60%] flex items-center justify-center gap-3 bg-white/50 backdrop-blur-lg border border-yellow-300 shadow-[0_0_25px_-5px_rgba(250,204,21,0.4)] px-6 py-3 rounded-full text-xs text-yellow-700 font-medium animate-pulse">
              <Clock className="w-4 h-4 text-yellow-600 flex-shrink-0" />
              <div className="flex flex-col items-center text-center leading-tight">
                <span>Registration closes on</span>
                <span className="font-semibold text-yellow-800">
                  Oct 26, 23:59 WIB (GMT+7)
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col h-full">
          <div className="mb-4">
            <div className="text-xs font-light tracking-widest text-blue-600 mb-2">
              SERIES {series.number}
            </div>
            <h3 className="text-xl font-light text-slate-900 leading-tight text-balance">
              {series.title}
            </h3>
          </div>

          <p className="text-sm text-slate-700 font-light leading-relaxed mb-6 flex-grow">
            {series.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
