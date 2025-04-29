"use client";

import type React from "react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import {
  Calendar,
  FileText,
  Bell,
  FileCheck,
  CreditCard,
  Users,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

interface DateEntry {
  date: string;
  event: string;
  icon: React.ReactNode;
}

const dates: DateEntry[] = [
  {
    date: "April 14, 2025",
    event: "Abstract Reception",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    date: "July 30, 2025",
    event: "Abstract Submission Deadline",
    icon: <Calendar className="w-6 h-6" />,
  },
  {
    date: "August 15, 2025",
    event: "Accepted Abstracts Announcement",
    icon: <Bell className="w-6 h-6" />,
  },
  {
    date: "September 30, 2025",
    event: "Full Paper Submission Deadline",
    icon: <FileCheck className="w-6 h-6" />,
  },
  {
    date: "October 31, 2025",
    event: "Accepted Full Paper Announcement",
    icon: <Bell className="w-6 h-6" />,
  },
  {
    date: "November 5, 2025",
    event: "Participant Registration Payment",
    icon: <CreditCard className="w-6 h-6" />,
  },
  {
    date: "November 17-19, 2025",
    event: "15th APFITA Conference",
    icon: <Users className="w-6 h-6" />,
  },
];

const ImportantDates: React.FC = () => {
  const containerRef = useRef(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      elementsRef.current.forEach((el) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="py-20 bg-white relative overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-16 text-blue-600">
        IMPORTANT DATES
      </h2>
      <div className="w-full max-w-6xl mx-auto px-6 relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dates.map((entry, index) => (
          <div
            key={index}
            ref={(el) => (elementsRef.current[index] = el)}
            className="date-entry flex items-center opacity-0"
          >
            <div className="bg-white rounded-lg shadow-md p-6 w-full h-full flex flex-col items-center text-center border border-blue-100 hover:shadow-lg transition-shadow duration-300">
              <div className="icon-container mb-4 bg-blue-500 p-3 rounded-full text-white mx-auto w-fit">
                {entry.icon}
              </div>
              <p className="text-lg font-bold text-blue-600 mb-2">
                {entry.date}
              </p>
              <div className="w-12 h-0.5 bg-blue-200 mb-2"></div>
              <h3 className="text-lg font-semibold text-gray-700">
                {entry.event}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantDates;
