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
import { motion, AnimatePresence } from "framer-motion";
import { schedule } from "@/data/schedule";

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
  break: { label: "Break / Coffee", icon: iconMap.break },
  special: { label: "Special Program", icon: iconMap.special },
  tour: { label: "Tour Activity", icon: iconMap.tour },
};

export default function TimeScheduleContent() {
  const [activeDay, setActiveDay] = useState(0);

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
              <span>IPB Convention Center, Bogor, Indonesia</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span>On-site</span>
            </div>
          </div>
        </div>
      </div>

      {/* Day Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {schedule.map((day, index) => (
          <button
            key={index}
            onClick={() => setActiveDay(index)}
            className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all
              ${
                activeDay === index
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {day.title}
          </button>
        ))}
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
                                <span className="text-sm text-gray-700">
                                  {sub.title}
                                </span>
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
