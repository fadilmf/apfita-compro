"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Calendar, ArrowRight, AlertCircle } from "lucide-react";

interface DateEntry {
  date: string;
  event: string;
  icon: React.ReactNode;
}

// Same dates data, unchanged.
const dates: DateEntry[] = [
  {
    date: "April 14, 2025",
    event: "Abstract Reception",
    icon: <Calendar className="w-6 h-6" />,
  },
  {
    date: "July 30, 2025",
    event: "Abstract Submission Deadline",
    icon: <Calendar className="w-6 h-6" />,
  },
  // Add the rest...
];

const phases = [
  {
    name: "Abstract Submission Phase",
    description: "Submit your abstract",
    startDate: "April 14, 2025",
    endDate: "July 30, 2025",
  },
  // Add the rest...
];

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const [nextEvent, setNextEvent] = useState<DateEntry | null>(null);
  const [currentPhase, setCurrentPhase] = useState<(typeof phases)[0] | null>(
    null
  );
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const now = new Date();
    const upcomingDates = dates
      .map((date) => ({ ...date, dateObj: new Date(date.date) }))
      .filter((date) => date.dateObj > now)
      .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());

    if (upcomingDates.length > 0) {
      setNextEvent(upcomingDates[0]);
    }

    const currentPhaseIndex = phases.findIndex((phase) => {
      const startDate = new Date(phase.startDate);
      const endDate = new Date(phase.endDate);
      return now >= startDate && now <= endDate;
    });

    if (currentPhaseIndex !== -1) {
      setCurrentPhase(phases[currentPhaseIndex]);
    }

    setLoading(false);

    const timer = setInterval(() => {
      const now = new Date();
      const targetDate = upcomingDates[0]?.dateObj;
      if (targetDate) {
        const difference = targetDate.getTime() - now.getTime();
        if (difference <= 0) {
          upcomingDates.shift();
          if (upcomingDates.length > 0) {
            setNextEvent(upcomingDates[0]);
          } else {
            clearInterval(timer);
            setNextEvent(null);
          }
          return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!nextEvent && !currentPhase) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-bold text-blue-600 mb-3">
          All events have passed
        </h3>
        <p className="text-gray-600">
          Thank you for your interest in APFITA 2025!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg w-full px-4 sm:px-6 md:px-8">
      <div className="flex justify-between gap-6">
        {/* Current Phase Section */}
        {currentPhase && (
          <div className="animate-pulse flex-1 mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              <h3 className="text-lg font-semibold text-yellow-700">
                {currentPhase.name}
              </h3>
            </div>
            <p className="text-yellow-600 text-sm">
              {currentPhase.description}
            </p>

            {/* Action button */}
            {getActionButtonForPhase(currentPhase.name)}
          </div>
        )}

        {/* Next Event Countdown */}
        {nextEvent && (
          <div className="flex-1 text-center mb-6 p-4 bg-white border border-blue-200 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">
              Next Important Date
            </h2>
            <div className="flex items-center justify-center gap-2 text-lg text-blue-800">
              <Calendar className="w-5 h-5" />
              <span>{nextEvent.date}</span>
              <ArrowRight className="w-5 h-5" />
              <span className="font-semibold">{nextEvent.event}</span>
            </div>

            {/* Countdown */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-3 text-center border border-blue-100"
                >
                  <div className="text-xl font-semibold text-blue-600">
                    {item.value < 10 ? `0${item.value}` : item.value}
                  </div>
                  <div className="text-xs uppercase text-gray-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

function getActionButtonForPhase(phaseName: string): React.ReactNode {
  switch (phaseName) {
    case "Abstract Submission Phase":
      return (
        <a
          href="/submissions"
          className="mt-3 bg-yellow-600 hover:bg-yellow-700 text-black text-sm py-1.5 px-4 rounded-full transition-colors duration-300 flex items-center justify-center gap-1 mx-auto"
        >
          <span>Submit Abstract</span>
        </a>
      );
    case "Full Paper Submission Phase":
      return (
        <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm py-1.5 px-4 rounded-full transition-colors duration-300 flex items-center gap-1 mx-auto">
          <span>Submit Full Paper</span>
        </button>
      );
    case "Registration Phase":
      return (
        <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm py-1.5 px-4 rounded-full transition-colors duration-300 flex items-center gap-1 mx-auto">
          <span>Register Now</span>
        </button>
      );
    case "Conference Phase":
      return (
        <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm py-1.5 px-4 rounded-full transition-colors duration-300 flex items-center gap-1 mx-auto">
          <span>View Schedule</span>
        </button>
      );
    default:
      return null;
  }
}

export default CountdownTimer;
