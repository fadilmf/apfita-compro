"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AgendaItem {
  title: string;
  type?: "break" | "session" | "special";
  speaker?: string;
}

interface DaySchedule {
  title: string;
  date: string;
  agenda: AgendaItem[];
}

export default function TimeScheduleContent() {
  const [activeDay, setActiveDay] = useState(0);

  const schedule: DaySchedule[] = [
    {
      title: "Day One",
      date: "Monday, November 17, 2025",
      agenda: [
        { title: "Registration" },
        { title: "Indonesia National Anthem", type: "special" },
        {
          title: "Greeting Address: Chairman Steering Committee",
          type: "special",
        },
        {
          title: "Opening Speech: Rector of IPB University Indonesia",
          type: "special",
        },
        { title: "Photo session, Coffee Break", type: "break" },
        { title: "Keynote Speaker", type: "session" },
        { title: "Invited Speaker", type: "session" },
        { title: "Minister of Agriculture", speaker: "TBC", type: "session" },
        {
          title: "Head of National Nutrition Agency",
          speaker: "TBC",
          type: "session",
        },
        {
          title: "Head of National Food Agency",
          speaker: "TBC",
          type: "session",
        },
        { title: "from APFITA", type: "session" },
        { title: "Lunch Break", type: "break" },
        { title: "Parallel Session", type: "session" },
        { title: "Break", type: "break" },
        { title: "Gala Dinner", type: "special" },
      ],
    },
    {
      title: "Day Two",
      date: "Tuesday, November 18, 2025",
      agenda: [
        { title: "Registration" },
        { title: "Opening", type: "special" },
        { title: "Keynote Speech", type: "session" },
        {
          title: "Invited Speaker (schedule subject to change)",
          type: "session",
        },
        {
          title: "Minister of National Development Planning/BPN Head",
          type: "session",
        },
        { title: "Minister of Environment", type: "session" },
        { title: "Minister of Marine Affairs and Fisheries", type: "session" },
        {
          title: "from APFITA and Universities from Home and Abroad",
          type: "session",
        },
        { title: "Break", type: "break" },
        { title: "Board Meeting", type: "session" },
        { title: "Lunch Break", type: "break" },
        { title: "Parallel Sessions", type: "session" },
        { title: "Break", type: "break" },
        { title: "Best Paper Award APFITA 2025", type: "special" },
        { title: "Closing Addressed by BRAIN IPB University", type: "special" },
        { title: "Closing Remarks", type: "special" },
      ],
    },
    {
      title: "Day Three",
      date: "Wednesday, November 19, 2025",
      agenda: [
        { title: "Registration" },
        { title: "Technical Tour", type: "special" },
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Time Schedule</h1>
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
              <span>On-site</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span>Mode of Conduct: On-site</span>
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
              {schedule[activeDay].agenda.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex gap-4 p-4 rounded-lg border ${
                    item.type === "break"
                      ? "bg-orange-50 border-orange-200"
                      : item.type === "special"
                      ? "bg-blue-50 border-blue-200"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-sm border">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    {item.speaker && (
                      <p className="text-sm text-gray-500 mt-1">
                        {item.speaker}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
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
