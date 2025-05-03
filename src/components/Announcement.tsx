"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface ScrollingAnnouncementProps {
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
  speed = 80, // default speed in pixels per second
}: ScrollingAnnouncementProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    // Kill any existing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    // Create the content wrapper if it doesn't exist
    const scroller = scrollerRef.current;

    // Clear any existing content first
    scroller.innerHTML = "";

    // Create the content container
    const contentContainer = document.createElement("div");
    contentContainer.className = "flex";

    // Add the announcements
    announcements.forEach((text) => {
      const span = document.createElement("span");
      span.className = "mx-8 text-sm sm:text-base font-medium";
      span.innerHTML = `${text} <span class="mx-4"> • </span>`;
      contentContainer.appendChild(span);
    });

    // Add the initial content
    scroller.appendChild(contentContainer);

    // Wait for the DOM to update and measure
    setTimeout(() => {
      if (!containerRef.current || !scrollerRef.current) return;

      const contentWidth = contentContainer.offsetWidth;
      const containerWidth = containerRef.current.offsetWidth;

      // Create enough duplicates to ensure continuous scrolling
      const totalCopiesNeeded = Math.ceil((containerWidth * 3) / contentWidth);

      for (let i = 0; i < totalCopiesNeeded; i++) {
        const clone = contentContainer.cloneNode(true);
        scroller.appendChild(clone);
      }

      // Set initial position
      gsap.set(scroller, { x: 0 });

      // Create a simple infinite scrolling animation
      animationRef.current = gsap.to(scroller, {
        x: `-=${contentWidth}`,
        duration: contentWidth / speed,
        ease: "none",
        repeat: -1,
        onRepeat: () => {
          // When we've scrolled one full content width, reset position to create illusion of infinite scroll
          const currentX = gsap.getProperty(scroller, "x") as number;
          if (currentX <= -contentWidth) {
            gsap.set(scroller, { x: currentX + contentWidth });
          }
        },
      });
    }, 100);

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [speed, announcements]);

  return (
    <div
      ref={containerRef}
      className={`${backgroundColor} ${textColor} py-2 overflow-hidden z-40 ${className}`}
    >
      <div ref={scrollerRef} className="inline-flex whitespace-nowrap"></div>
    </div>
  );
}
