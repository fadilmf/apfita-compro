"use client";

import { useState } from "react";
import SeriesCard from "./SeriesCard";
import series1 from "/src/assets/series/praapfita1.jpeg";
import series2 from "/src/assets/series/praapfita2.jpeg";
import series3 from "/src/assets/series/praapfita3.jpeg";
import series4 from "/src/assets/series/praapfita4.jpeg";
import series5 from "/src/assets/series/praapfita5.jpeg";

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

export default function SeriesContent() {
  const [series] = useState<Series[]>([
    {
      id: 1,
      title: "PRA APFITA Series #1",
      number: 1,
      poster: series1,
      caption: "Series Sistem Logistik Tangguh untuk Menghadapi Perang Dagang",
      status: "completed",
      documentation: "https://www.instagram.com/p/DKORgLoxjT2/?img_index=1",
      youtubeUrl: "https://www.youtube.com/watch?v=D_QKULZTFEY",
    },
    {
      id: 2,
      title: "PRA APFITA Series #2",
      number: 2,
      poster: series2,
      caption:
        "AI and Blockchain for Big Data Analytic to Support National Strategic Decision Making, Special Session: Women in AI and Blockchain",
      status: "completed",
      documentation: "https://www.instagram.com/p/DMo5kEfRmz6/?img_index=1",
      youtubeUrl: "https://www.youtube.com/watch?v=Z49JqnC4JY8",
    },
    {
      id: 3,
      title: "Pre-APFITA 2025 (Series #3)",
      number: 3,
      poster: series3,
      caption: "Plant Phenomics: Current Status and Future Perspectives",
      status: "completed",
      documentation: "https://www.instagram.com/p/DPvgX32ERKT/?img_index=1",
      youtubeUrl: "https://www.youtube.com/watch?v=ReS8wfHCCG8",
    },
    {
      id: 4,
      title: "Pre-APFITA 2025 (Series #4)",
      number: 4,
      poster: series4,
      caption:
        "Digital Twins in Agriculture: Emerging Trends in Precision Ag, Technical, Physical, and Cultural",
      status: "completed",
      documentation: "https://www.instagram.com/p/DQLdpxSkeTt/?img_index=1",
      youtubeUrl: "",
    },
    {
      id: 5,
      title: "Pre-APFITA 2025 Series #5",
      number: 5,
      caption: "Generative AI for Health and Herbal Medicine.",
      poster: series5,
      documentation: "https://www.instagram.com/p/DQlPvzWEUH6/?img_index=1",
      registrationUrl: "https://ipb.link/webinar-pra-apfita2025-5",
      status: "upcoming",
    },
  ]);

  const completedCount = series.filter((s) => s.status === "completed").length;
  const totalCount = series.length;

  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-white to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text pb-3 text-transparent text-center mb-6">
              Webinar Series
            </h1>
          </div>
          <div className="mt-6 flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-light text-blue-900">
                {completedCount}
              </div>
              <div className="text-sm bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text pb-3 text-transparent">
                Finished
              </div>
            </div>
            <div className="w-px h-8 bg-blue-400/30"></div>
            <div className="text-center">
              <div className="text-3xl font-light text-slate-800">
                {totalCount}
              </div>
              <div className="text-sm bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text pb-3 text-transparent">
                All of our Series
              </div>
            </div>
          </div>
        </div>

        {/* Series Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {series.map((item) => (
            <SeriesCard key={item.id} series={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
