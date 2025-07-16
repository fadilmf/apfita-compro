import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface AnnouncementProps {
  announcements: string[];
  backgroundColor?: string;
  textColor?: string;
  className?: string;
  speed?: number; // pixels per second
}

export default function Announcement({
  announcements,
  backgroundColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  speed = 80,
}: AnnouncementProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!scrollerRef.current || !containerRef.current) return;

    const scroller = scrollerRef.current;
    const totalWidth = scroller.scrollWidth;

    // Reset posisi & animasi sebelumnya
    animationRef.current?.kill();
    gsap.set(scroller, { x: 0 });

    // Jalankan animasi
    animationRef.current = gsap.to(scroller, {
      x: `-=${totalWidth / 2}`,
      duration: totalWidth / speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % (totalWidth / 2)),
      },
    });

    return () => {
      animationRef.current?.kill();
    };
  }, [announcements, speed]);

  // Duplikasikan isi agar scroll tampak tak berujung
  const rendered = [...announcements, ...announcements];

  return (
    <div
      ref={containerRef}
      className={`${backgroundColor} ${textColor} py-2 overflow-hidden z-40 ${className}`}
    >
      <div
        ref={scrollerRef}
        className="flex whitespace-nowrap w-max"
        style={{ willChange: "transform" }}
      >
        {rendered.map((text, index) => (
          <span
            key={index}
            className="mx-8 text-sm sm:text-base font-medium flex-shrink-0"
          >
            {text} <span className="mx-4">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
