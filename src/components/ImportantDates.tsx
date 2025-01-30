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
  UserCheck,
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
    date: "April 1, 2025",
    event: "Abstract submission opens",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    date: "July 30, 2025",
    event: "Abstract submission deadline",
    icon: <Calendar className="w-6 h-6" />,
  },
  {
    date: "August 15, 2025",
    event: "Notification of accepted abstracts",
    icon: <Bell className="w-6 h-6" />,
  },
  {
    date: "September 30, 2025",
    event: "Full paper submission deadline",
    icon: <FileCheck className="w-6 h-6" />,
  },
  {
    date: "October 31, 2025",
    event: "Notification of accepted full papers",
    icon: <Bell className="w-6 h-6" />,
  },
  {
    date: "November 5, 2025",
    event: "Registration deadline",
    icon: <UserCheck className="w-6 h-6" />,
  },
  {
    date: "November 5, 2025",
    event: "Publication fee payment deadline",
    icon: <CreditCard className="w-6 h-6" />,
  },
  {
    date: "November 17–19, 2025",
    event: "The 15th APFITA event",
    icon: <Users className="w-6 h-6" />,
  },
];

const ImportantDates: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<SVGPathElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !timelineRef.current || !markerRef.current)
      return;

    gsap.set(markerRef.current, {
      motionPath: { path: timelineRef.current, alignOrigin: [0.5, 0.5] },
    });

    gsap.to(markerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
      motionPath: { path: timelineRef.current, alignOrigin: [0.5, 0.5] },
      ease: "none",
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="py-20 bg-gray-100 relative overflow-hidden"
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-primary">
        Important Dates
      </h2>
      <div className="max-w-5xl mx-auto px-6 relative flex flex-col items-start">
        <svg
          className="absolute left-10 w-1 h-full"
          style={{ overflow: "visible" }}
        >
          <path
            ref={timelineRef}
            d="M0,0 L0,1600"
            stroke="hsl(var(--primary))"
            strokeWidth="4"
            strokeDasharray="8,8"
          />
        </svg>
        <div
          ref={markerRef}
          className="absolute w-5 h-5 bg-primary rounded-full left-10 transform -translate-x-1/2 z-10"
        ></div>

        {dates.map((entry, index) => (
          <div
            key={index}
            className="date-entry flex items-center mb-16 relative ml-16"
          >
            <div className="w-5 h-5 bg-primary rounded-full absolute left-10"></div>
            <div className="ml-10 bg-white rounded-lg shadow-lg p-6 w-80 text-center">
              <div className="icon-container mb-4 bg-primary p-3 rounded-full text-white mx-auto w-fit">
                {entry.icon}
              </div>
              <h3 className="text-lg font-semibold text-primary">
                {entry.date}
              </h3>
              <p className="mt-2 text-gray-600">{entry.event}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantDates;
