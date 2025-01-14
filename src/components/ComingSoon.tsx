import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ComingSoon() {
  const sectionRef = useRef<HTMLDivElement | null>(null); // Reference for the whole section
  const iconsRef = useRef<HTMLDivElement[]>([]); // Reference for all the icons
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Fade In and Scale Up Effect
      timeline.fromTo(
        textRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 1.5 }
      );

      // Bounce Animation
      timeline.to(textRef.current, {
        y: -20, // Move up
        repeat: -1, // Infinite bounce
        yoyo: true, // Reverse the motion
        duration: 0.8,
        ease: "power1.inOut",
      });

      // Glow Animation
      gsap.to(textRef.current, {
        textShadow: "0px 0px 20px rgba(255, 255, 255, 1)", // Glow effect
        repeat: -1, // Infinite
        yoyo: true, // Reverse the glow
        duration: 1.5,
      });
    }
    if (sectionRef.current) {
      // Text Animation
      gsap.fromTo(
        sectionRef.current.querySelector(".text"),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
      );

      // Icons Animation (Floating effect)
      iconsRef.current.forEach((icon, i) => {
        gsap.to(icon, {
          y: "+=10",
          repeat: -1,
          yoyo: true,
          duration: 2 + i * 0.2,
          ease: "sine.inOut",
        });
      });
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-zinc-400 via-gray-300 to-gray-200 overflow-hidden"
    >
      {/* Floating Icons */}
      <div
        className="absolute top-20 left-20 w-16 h-16 bg-green-500 rounded-full shadow-lg icon"
        ref={(el) => iconsRef.current.push(el!)}
      ></div>
      <div
        className="absolute top-40 right-24 w-12 h-12 bg-yellow-400 rounded-full shadow-lg icon"
        ref={(el) => iconsRef.current.push(el!)}
      ></div>
      <div
        className="absolute bottom-32 left-10 w-20 h-20 bg-red-400 rounded-full shadow-lg icon"
        ref={(el) => iconsRef.current.push(el!)}
      ></div>
      <div
        className="absolute bottom-24 right-32 w-14 h-14 bg-blue-300 rounded-full shadow-lg icon"
        ref={(el) => iconsRef.current.push(el!)}
      ></div>

      {/* Coming Soon Content */}
      <div className="text-center text">
        <div
          ref={textRef}
          className="text-5xl font-bold text-white mb-3"
          style={{
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "4px",
          }}
        >
          Coming Soon
        </div>
        <p className="text-lg text-gray-600 mb-8">
          Get ready for the <strong>APFITA 2025</strong>, an inspiring event
          focused on agriculture, innovation, and technology!
        </p>
        <div className="mt-8">
          <button className="px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
