"use client";

import { useState } from "react";
import { CheckCircle2, Play, ExternalLink } from "lucide-react";

interface Series {
  id: number;
  title: string;
  number: number;
  poster?: string;
  caption: string;
  status: "completed" | "upcoming";
  documentation?: string;
  youtubeUrl?: string; // Added YouTube URL field
}

interface SeriesCardProps {
  series: Series;
}

export default function SeriesCard({ series }: SeriesCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleYoutubeClick = () => {
    if (series.youtubeUrl) {
      window.open(series.youtubeUrl, "_blank");
    } else {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    }
  };

  return (
    <div
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-white border border-blue-200 backdrop-blur-sm transition-all duration-500 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-200/50">
        {/* Poster Section */}
        <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-200">
          {series.status === "completed" && series.poster ? (
            <>
              <img
                src={series.poster || "/placeholder.svg"}
                alt={series.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex gap-4">
                    <button
                      onClick={handleYoutubeClick}
                      className="p-3 rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors"
                    >
                      <Play className="w-6 h-6 fill-current" />
                    </button>
                    {series.documentation && (
                      <a
                        href={series.documentation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
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
                <p className="text-blue-600 font-light text-sm">Coming Soon</p>
              </div>
            </div>
          )}

          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            {series.status === "completed" ? (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 border border-green-400 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-xs font-medium text-green-700">
                  Completed
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-400 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-xs font-medium text-blue-700">
                  Upcoming
                </span>
              </div>
            )}
          </div>
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

          {/* Caption */}
          <p className="text-sm text-slate-600 font-light leading-relaxed mb-6 flex-grow">
            {series.caption}
          </p>

          {/* Footer Action */}
          {series.status === "completed" ? (
            <div className="flex items-center gap-2 text-blue-600 text-sm font-light hover:text-blue-700 transition-colors cursor-pointer group/link">
              <span>Lihat Dokumentasi</span>
              <Play className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </div>
          ) : (
            <div className="text-slate-500 text-sm font-light">
              Notifikasi akan dikirim saat tersedia
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
