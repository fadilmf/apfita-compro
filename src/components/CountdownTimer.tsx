"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DateEntry, Phase } from "@/data/imdatesData";

interface CountdownTimerProps {
  currentPhase: Phase | null;
  nextEvent: DateEntry | null;
  phases: Phase[];
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  currentPhase,
  nextEvent,
  phases
}) => {

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  useEffect(() => {
    const getTargetDate = () => {
      if (currentPhase) {
        // countdown ke akhir fase
        return new Date(currentPhase.endDate);
      } else if (nextEvent) {
        // countdown ke start fase berikutnya
        const nextPhase = phases.find(p => p.id === nextEvent.phaseId);
        if (nextPhase) return new Date(nextPhase.startDate);
      }
      return null;
    };

    const targetDate = getTargetDate();
    if (!targetDate) return;

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [nextEvent, currentPhase]);

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
                    <span className="font-medium">{nextEvent.deadline}</span>
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
                  { label: "Days", value: timeLeft.days, color: "from-blue-600 to-blue-700" },
                  { label: "Hours", value: timeLeft.hours, color: "from-blue-500 to-blue-600" },
                  { label: "Minutes", value: timeLeft.minutes, color: "from-blue-400 to-blue-500" },
                  { label: "Seconds", value: timeLeft.seconds, color: "from-blue-300 to-blue-400" },
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
