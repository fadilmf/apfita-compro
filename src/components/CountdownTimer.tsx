"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { dates, type DateEntry, phases } from "@/data/imdatesData";

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
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary/20 rounded-full animate-spin border-t-primary"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-ping border-t-primary/40"></div>
        </div>
      </div>
    );
  }

  if (!nextEvent && !currentPhase) {
    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-card via-card to-muted/50 backdrop-blur-xl border border-border/50 p-8 rounded-2xl shadow-2xl text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-3">
            All Events Complete
          </h3>
          <p className="text-muted-foreground text-lg">
            Thank you for your interest in APFITA 2025!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-6 relative mb-12">
      <div className="relative overflow-hidden bg-gradient-to-br from-card via-card to-muted/30 backdrop-blur-xl border border-border/50 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-50"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10">
          {nextEvent && (
            <div className="text-center space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                  Next Schedule
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xl text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-medium">{nextEvent.date}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary hidden sm:block" />
                  <span className="font-semibold text-foreground">
                    {nextEvent.event}
                  </span>
                </div>
              </div>

              {/* Countdown Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    label: "Days",
                    value: timeLeft.days,
                    color: "from-blue-600 to-blue-700",
                  },
                  {
                    label: "Hours",
                    value: timeLeft.hours,
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    label: "Minutes",
                    value: timeLeft.minutes,
                    color: "from-blue-400 to-blue-500",
                  },
                  {
                    label: "Seconds",
                    value: timeLeft.seconds,
                    color: "from-blue-300 to-blue-400",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "relative overflow-hidden bg-gradient-to-br from-card to-muted/50 backdrop-blur-sm",
                      "rounded-2xl shadow-xl border border-border/50 p-6 text-center",
                      "hover:scale-105 transition-all duration-300 group/card"
                    )}
                  >
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-5 group-hover/card:opacity-10 transition-opacity",
                        item.color
                      )}
                    ></div>

                    <div className="relative z-10 space-y-2">
                      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
                        {item.value < 10 ? `0${item.value}` : item.value}
                      </div>
                      <div className="text-sm uppercase tracking-wider font-medium text-muted-foreground">
                        {item.label}
                      </div>
                    </div>

                    {/* Subtle glow effect */}
                    <div
                      className={cn(
                        "absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-20 transition-opacity duration-300",
                        "bg-gradient-to-br",
                        item.color,
                        "blur-xl"
                      )}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
