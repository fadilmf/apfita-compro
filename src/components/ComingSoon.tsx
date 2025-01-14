import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "@/assets/logo_apfita.png"; // Ganti dengan path logo APFITA Anda
import logo_brain from "@/assets/logo_brain.png";
import logo_utama from "@/assets/logo_utama.png";

import { Leaf, Paperclip, PlaneTakeoff, Tractor } from "lucide-react";
import { motion } from "framer-motion";

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
    }

    if (sectionRef.current) {
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
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-white via-zinc-50 to-zinc-100 overflow-hidden"
    >
      {/* Floating Icons */}
      <div
        className="absolute top-20 left-10 w-16 h-16 bg-green-400 rounded-full shadow-lg icon flex items-center justify-center"
        ref={(el) => iconsRef.current.push(el!)}
      >
        <Paperclip />
      </div>
      <div
        className="absolute top-40 right-12 w-12 h-12 bg-yellow-300 rounded-full shadow-lg icon flex items-center justify-center"
        ref={(el) => iconsRef.current.push(el!)}
      >
        <Leaf />
      </div>
      <div
        className="absolute bottom-24 left-16 w-20 h-20 bg-blue-300 rounded-full shadow-lg icon flex items-center justify-center"
        ref={(el) => iconsRef.current.push(el!)}
      >
        <Tractor />
      </div>
      <div
        className="absolute bottom-32 right-20 w-14 h-14 bg-red-300 rounded-full shadow-lg icon flex items-center justify-center"
        ref={(el) => iconsRef.current.push(el!)}
      >
        <PlaneTakeoff />
      </div>

      {/* Logo */}
      <div className="flex space-x-16">
        <img
          src={logo}
          alt="APFITA Logo"
          className="w-28 h-auto mb-6 object-contain"
        />
        <img
          src={logo_brain}
          alt="Brain Logo"
          className="w-28 h-auto mb-6 object-contain"
        />
        <img
          src={logo_utama}
          alt="Utama Logo"
          className="w-28 h-auto mb-6 object-contain"
        />
      </div>

      {/* Coming Soon Text */}
      <div className="text-center text-black">
        <div
          ref={textRef}
          className="text-5xl md:text-6xl font-extrabold mb-4 text-black"
          style={{
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "4px",
          }}
        >
          Coming Soon
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-2xl font-extrabold text-black drop-shadow-lg"
      >
        APFITA 2025
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-xl text-black mt-4 drop-shadow-md"
      >
        The 15th International Conference of Asia-Pacific Federation for
        Information Technology in Agriculture
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="text-lg text-black mt-2 max-w-4xl drop-shadow-md"
      >
        "Innovative Digital Technology for Global Agro-Maritime Industry"
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.9 }}
        className="text-md text-black mt-2 drop-shadow-sm"
      >
        Bogor, Indonesia
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.9 }}
        className="text-md text-black mt-2 drop-shadow-sm"
      >
        17-19 November 2025
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.9 }}
        className="text-md text-black mt-2 drop-shadow-sm"
      >
        Organized by APFITA 2025
      </motion.p>
    </div>
  );
}
