"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function MiniCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-11-17T00:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl 
      bg-white/10 backdrop-blur-xl shadow-[0_0_30px_-5px_rgba(59,130,246,0.25)]
      border border-white/10"
    >
      {[
        { value: timeLeft.days, label: "DAYS" },
        { value: timeLeft.hours, label: "HOURS" },
        { value: timeLeft.minutes, label: "MINUTES" },
        { value: timeLeft.seconds, label: "SECONDS" },
      ].map((item, i) => (
        <div key={i} className="relative w-16 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.value}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-3xl font-bold bg-gradient-to-b from-blue-300 to-blue-500 
                bg-clip-text text-transparent drop-shadow-sm select-none"
            >
              {item.value < 10 ? `0${item.value}` : item.value}
            </motion.div>
          </AnimatePresence>
          <div className="mt-1 text-[10px] tracking-wide text-blue-200 font-medium uppercase">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}
