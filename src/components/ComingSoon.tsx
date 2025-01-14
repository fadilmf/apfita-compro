import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "@/assets/logo_apfita.png"; // Path logo
import logo_brain from "@/assets/logo_brain.png";
import logo_utama from "@/assets/logo_utama.png";
import { Leaf, Paperclip, PlaneTakeoff, Tractor } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ComingSoon() {
  const sectionRef = useRef<HTMLDivElement | null>(null); // Reference for the whole section
  const iconsRef = useRef<HTMLDivElement[]>([]); // Reference for all the icons
  const textRefs = useRef<HTMLDivElement[]>([]); // References for text lines

  useEffect(() => {
    // Text Animation
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Staggered text animation
    timeline.fromTo(
      textRefs.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.3 }
    );

    // Floating icons animation
    iconsRef.current.forEach((icon, i) => {
      gsap.to(icon, {
        y: "+=10",
        repeat: -1,
        yoyo: true,
        duration: 2 + i * 0.2,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-white via-blue-50 to-gray-100 overflow-hidden"
    >
      {/* Floating Icons */}
      <div
        className="absolute top-10 left-6 sm:top-16 sm:left-12 w-12 sm:w-16 h-12 sm:h-16 bg-green-400 rounded-full shadow-lg flex items-center justify-center"
        ref={(el) => iconsRef.current.push(el!)}
      >
        <Paperclip className="w-6 sm:w-8 h-6 sm:h-8" />
      </div>
      <div
        className="absolute top-32 right-6 sm:top-40 sm:right-12 w-10 sm:w-12 h-10 sm:h-12 bg-yellow-300 rounded-full shadow-lg flex items-center justify-center"
        ref={(el) => iconsRef.current.push(el!)}
      >
        <Leaf className="w-5 sm:w-6 h-5 sm:h-6" />
      </div>
      <div
        className="absolute bottom-16 left-6 sm:bottom-24 sm:left-16 w-16 sm:w-20 h-16 sm:h-20 bg-blue-300 rounded-full shadow-lg flex items-center justify-center"
        ref={(el) => iconsRef.current.push(el!)}
      >
        <Tractor className="w-8 sm:w-10 h-8 sm:h-10" />
      </div>
      <div
        className="absolute bottom-20 right-6 sm:bottom-32 sm:right-20 w-10 sm:w-14 h-10 sm:h-14 bg-red-300 rounded-full shadow-lg flex items-center justify-center"
        ref={(el) => iconsRef.current.push(el!)}
      >
        <PlaneTakeoff className="w-5 sm:w-7 h-5 sm:h-7" />
      </div>

      {/* Logos */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
        <img
          src={logo}
          alt="APFITA Logo"
          className="w-24 sm:w-28 h-auto object-contain"
        />
        <img
          src={logo_brain}
          alt="Brain Logo"
          className="w-24 sm:w-28 h-auto object-contain"
        />
        <img
          src={logo_utama}
          alt="Utama Logo"
          className="w-24 sm:w-28 h-auto object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="text-center">
        <div
          ref={(el) => textRefs.current.push(el!)}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-black"
          style={{
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "4px",
          }}
        >
          Coming Soon
        </div>
        <div
          ref={(el) => textRefs.current.push(el!)}
          className="text-xl sm:text-2xl font-extrabold text-black drop-shadow-lg"
        >
          APFITA 2025
        </div>
        <div
          ref={(el) => textRefs.current.push(el!)}
          className="text-lg sm:text-xl text-black mt-4 drop-shadow-md max-w-lg mx-auto"
        >
          The 15th International Conference of Asia-Pacific Federation for
          Information Technology in Agriculture
        </div>
        <div
          ref={(el) => textRefs.current.push(el!)}
          className="text-md sm:text-lg text-black mt-2 drop-shadow-sm max-w-lg mx-auto"
        >
          "Innovative Digital Technology for Global Agro-Maritime Industry"
        </div>
        <div
          ref={(el) => textRefs.current.push(el!)}
          className="text-sm sm:text-md text-black mt-2 drop-shadow-sm"
        >
          Bogor, Indonesia
        </div>
        <div
          ref={(el) => textRefs.current.push(el!)}
          className="text-sm sm:text-md text-black mt-2 drop-shadow-sm"
        >
          17-19 November 2025
        </div>
        <div
          ref={(el) => textRefs.current.push(el!)}
          className="text-sm sm:text-md text-black mt-2 drop-shadow-sm"
        >
          Organized by APFITA 2025
        </div>
      </div>
    </div>
  );
}
