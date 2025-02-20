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
    date: "November 17-19, 2025",
    event: "The 15th APFITA event",
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
      <h2 className="text-4xl font-bold text-center mb-16 text-primary">
        IMPORTANT DATES
      </h2>
      <div className="w-full mx-auto px-6 relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dates.map((entry, index) => (
          <div
            key={index}
            ref={(el) => (elementsRef.current[index] = el)}
            className="date-entry flex items-center opacity-0"
          >
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 w-full h-full flex flex-col items-center text-center">
              <div className="icon-container mb-4 bg-primary p-3 rounded-full text-white mx-auto w-fit">
                {entry.icon}
              </div>
              <h3 className="text-lg font-semibold text-primary">
                {entry.event}
              </h3>
              <p className="text-lg mt-2 text-gray-600">{entry.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantDates;
