import { useState } from "react";
import {
  Users,
  Calendar,
  // Clock,
  Coffee,
  Star,
  Mic,
  MapPin,
  CornerDownRight,
} from "lucide-react";
import { MessageCircle, Check, X } from "lucide-react";
import { Bus, TreePine } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { schedule } from "@/data/schedule";
import Trip from "/src/assets/series/ApfitaDay3Trip.png";

const typeStyles: Record<string, string> = {
  session: "bg-white border-gray-200",
  break: "bg-orange-50 border-orange-200",
  special: "bg-blue-50 border-blue-200",
  tour: "bg-green-50 border-green-200",
};

const iconMap: Record<string, JSX.Element> = {
  session: <Mic className="w-5 h-5 text-blue-600" />,
  break: <Coffee className="w-5 h-5 text-orange-500" />,
  special: <Star className="w-5 h-5 text-yellow-500" />,
  tour: <MapPin className="w-5 h-5 text-green-600" />,
};

const typeLabels: Record<string, { label: string; icon: JSX.Element }> = {
  session: { label: "Presentation/Session", icon: iconMap.session },
  break: { label: "Refreshment Break", icon: iconMap.break },
  special: { label: "Ceremonial Program", icon: iconMap.special },
  tour: { label: "Field Excursion", icon: iconMap.tour },
};

export default function TimeScheduleContent() {
  const [activeDay, setActiveDay] = useState(0);
  const [open, setOpen] = useState(false);

  const openWA = (number: string, name: string) => {
    if (typeof window === "undefined") return;
    const msg = `Halo ${name}, I want to ask something about Field Trip APFITA 2025.`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text pb-3 text-transparent mb-6">
          Time Schedule
        </h1>
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-lg text-gray-600">
            The 15th International Conference of the Asia-Pacific Federation for
            Information Technology in Agriculture 2025 will be held over three
            days:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span>November 17-19, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>IPB International Convention Center, Bogor, Indonesia</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span>On-site</span>
            </div>
          </div>
        </div>
      </div>

      {/* Day Tabs */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {schedule.map((day, index) => {
          const isActive = activeDay === index;
          const isDay3 = index === 2;

          const baseStyle =
            "relative flex items-center gap-2 px-8 py-3 rounded-lg text-sm font-semibold transition-all";

          const normalStyle = isActive
            ? "bg-blue-600 text-white shadow-lg"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200";

          const day3Style = isActive
            ? "bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.6)]"
            : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200";

          return (
            <div key={index} className="relative">
              {/* DOT MERAH KELAP KELIP (di luar button) */}
              {isDay3 && (
                <>
                  <span className=" z-20 absolute -top-1 right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className=" z-20 absolute -top-1 right-1 w-3 h-3 rounded-full bg-red-500 animate-ping"></span>
                </>
              )}

              <button
                onClick={() => setActiveDay(index)}
                className={`${baseStyle} ${isDay3 ? day3Style : normalStyle}`}
              >
                {/* BUS (di kiri dalam button) */}
                {isDay3 && <Bus className="w-4 h-4" />}

                {/* TEXT */}
                {day.title}

                {/* POHON (di kanan dalam button) */}
                {isDay3 && <TreePine className="w-4 h-4" />}
              </button>
            </div>
          );
        })}
      </div>

      {/* Schedule Content */}
      <div className="bg-white rounded-xl shadow-lg border p-6">
        {/* Legend */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
          {Object.entries(typeLabels).map(([key, { icon, label }]) => (
            <div key={key} className="flex items-center gap-2">
              <span>{icon}</span>
              <span className="text-sm text-gray-600">{label}</span>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold">
                {schedule[activeDay].date}
              </h2>
            </div>

            {/* === SPECIAL CONTENT FOR DAY 3 ONLY === */}
            {activeDay === 2 && (
              <div className="mb-8">
                {/* Poster Image */}
                <div className="w-full overflow-hidden rounded-xl shadow-lg border mb-6">
                  <img
                    src={Trip}
                    alt="Excursion Poster"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* CTA Registration Box */}
                {/* CARD CTA */}
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 shadow-sm text-center">
                  <h3 className="text-lg font-semibold text-emerald-800 mb-2">
                    Field Excursion Confirmation Required!
                  </h3>
                  <p className="text-sm text-emerald-700 mb-4">
                    Please confirm your participation in the Day 3 excursion
                    (Bogor Botanical Garden & Soil and Agriculture Museum).
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                    {/* CTA Utama */}
                    <a
                      href="https://ipb.link/fieldtrip-reg-apfita2025"
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all"
                    >
                      <Check size={20} />
                      Wow it's Exciting! I'm in!
                    </a>

                    {/* CTA Sekunder */}
                    <button
                      onClick={() => setOpen(true)}
                      className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all"
                    >
                      <MessageCircle size={20} />
                      Let me ask first!
                    </button>
                  </div>
                </div>

                {/* MODAL */}
                {open && (
                  <div
                    className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
                    onClick={() => setOpen(false)} // Klik luar → close
                  >
                    <div
                      className="bg-white rounded-xl p-6 shadow-xl max-w-sm w-full text-center"
                      onClick={(e) => e.stopPropagation()} // Biar klik dalam ga nutup
                    >
                      <h3 className="text-lg font-semibold mb-4">
                        Who do you want to contact?
                      </h3>

                      <div className="flex flex-col gap-3">
                        {/* Zaky */}
                        <button
                          onClick={() => openWA("62895389934434", "Zaky")}
                          className="w-full inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all"
                        >
                          <MessageCircle size={20} />
                          Zaky (0895389934434)
                        </button>

                        {/* Priska */}
                        <button
                          onClick={() => openWA("6289653351202", "Priska")}
                          className="w-full inline-flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition-all"
                        >
                          <MessageCircle size={20} />
                          Priska (089653351202)
                        </button>

                        <button
                          onClick={() => setOpen(false)}
                          className="text-gray-600 mt-2 inline-flex items-center justify-center gap-2 hover:underline"
                        >
                          <X size={18} />
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="space-y-4">
              {schedule[activeDay].agenda.map((item, index) => {
                const style = typeStyles[item.type ?? "session"];
                const icon = iconMap[item.type ?? "session"] ?? (
                  <Calendar className="w-5 h-5 text-blue-600" />
                );

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`px-4 py-3 rounded-xl border ${style}`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm border">
                        {icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 self-center space-y-1">
                        <div className="flex justify-between items-start flex-wrap gap-2">
                          <h3 className="font-semibold text-gray-900">
                            {item.title}
                          </h3>
                          {item.time && (
                            <span className="text-sm text-gray-500">
                              {item.time}
                            </span>
                          )}
                        </div>

                        {item.location && (
                          <p className="text-sm text-gray-500">
                            Location: {item.location}
                          </p>
                        )}
                        {item.speaker && (
                          <p className="text-sm text-gray-500">
                            Speaker: {item.speaker}
                          </p>
                        )}

                        {/* Sub-items */}
                        {item.subItems && item.subItems.length > 0 && (
                          <div className="mt-2 space-y-2">
                            {item.subItems.map((sub, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2 bg-gray-50 border border-gray-200 rounded-md px-3 py-2"
                              >
                                <CornerDownRight className="w-4 h-4 text-blue-500 mt-1" />

                                {/* TITLE + TIME wrapper */}
                                <div className="flex justify-between w-full">
                                  <span className="text-sm text-gray-700">
                                    {sub.title}
                                  </span>

                                  {sub.time && (
                                    <span className="text-xs text-gray-500 text-right">
                                      {sub.time}
                                    </span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        * The tentative agenda for The 15th International Conference of the
        Asia-Pacific Federation for Information Technology in Agriculture 2025
      </div>
    </div>
  );
}
