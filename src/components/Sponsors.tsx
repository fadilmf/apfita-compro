"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import logo_tes from "@/assets/tes.png";

gsap.registerPlugin(ScrollTrigger);

export default function Sponsors() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const grandSponsor = sectionRef.current?.querySelector(".grand-sponsor");
    const sponsorCards = sectionRef.current?.querySelectorAll(".sponsor-card");

    if (grandSponsor && sponsorCards) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        defaults: { duration: 1.5, ease: "power3.out" },
      });

      tl.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );

      // Animate Grand Sponsor
      tl.fromTo(
        grandSponsor,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
        },
        "-=0.3"
      );

      // Animate Sponsor Cards
      sponsorCards.forEach((card, i) => {
        tl.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            delay: i * 0.1,
          },
          "-=0.8"
        );
      });

      // Subtle floating effect
      gsap.to([grandSponsor, ...sponsorCards], {
        y: "+=10",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 2,
        stagger: 0.1,
      });
    }
  }, []);

  return (
    <div ref={sectionRef} className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Sponsors</h2>

        {/* Grand Sponsor Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-center mb-8">
            Grand Sponsors
          </h3>
          <motion.div
            className="grand-sponsor flex justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={logo_tes || "/placeholder.svg"}
              alt="Grand Sponsor"
              className="w-64 h-64 object-contain"
            />
          </motion.div>
        </div>

        {/* Sponsors and Partnerships Section */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-8">Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                className="sponsor-card flex justify-center items-center"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={logo_tes || "/placeholder.svg"}
                  alt={`Sponsor ${index + 1}`}
                  className="w-32 h-32 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-semibold text-center mb-8">
            Patnership
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                className="sponsor-card flex justify-center items-center"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={logo_tes || "/placeholder.svg"}
                  alt={`Sponsor ${index + 1}`}
                  className="w-32 h-32 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
