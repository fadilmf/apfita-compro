import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import { motion } from "framer-motion";
import logo_tes from "@/assets/tes.png";

gsap.registerPlugin(ScrollTrigger); // Daftarkan ScrollTrigger

export default function Sponsors() {
  const sectionRef = useRef<HTMLDivElement | null>(null); // Reference for the section container

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".sponsor-card");

    if (cards) {
      // GSAP Timeline for a sequence animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom", // Mulai saat bagian atas section sponsor mencapai bagian bawah viewport
          end: "bottom top", // Berhenti saat bagian bawah section mencapai bagian atas viewport
          scrub: 1, // Memberikan efek smooth scroll
          onEnter: () => console.log("Section entered!"),
          onLeave: () => console.log("Section left!"),
        },
        defaults: { duration: 1.5, ease: "power3.out" }, // Menambahkan durasi lebih lama
      });

      tl.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 } // Fade in the whole section
      );

      cards.forEach((card, i) => {
        // Animating each card with delay and unique effects
        tl.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            rotate: -15,
            scale: 0.8,
            transformOrigin: "center",
          }, // Start state
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            scale: 1, // End state
            delay: i * 0.2, // Stagger effect
            duration: 1.2,
          },
          "-=0.5" // Overlap animations slightly
        );
      });

      // Add a subtle floating effect after the initial animations
      cards.forEach((card) => {
        gsap.to(card, {
          y: "+=10", // Float up and down
          repeat: -1, // Infinite loop
          yoyo: true, // Reverse direction
          ease: "sine.inOut",
          duration: 2,
          scrollTrigger: {
            trigger: card,
            start: "top bottom", // Mulai saat card terlihat di viewport
            end: "bottom top", // Berhenti saat card keluar dari viewport
            scrub: 1, // Efek smooth scroll
            onEnter: () => console.log(`Card ${card} entered`), // Debugging
            onLeave: () => console.log(`Card ${card} left`), // Debugging
          },
        });
      });
    }
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Sponsors Section */}
      <section className="py-32 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">Our Sponsors</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sponsor-card">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Platinum Sponsors
            </h3>
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={logo_tes}
              alt="Platinum Sponsor"
              className="mx-auto"
            />
          </div>
          <div className="sponsor-card">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Gold Sponsors
            </h3>
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={logo_tes}
              alt="Gold Sponsor"
              className="mx-auto"
            />
          </div>
          <div className="sponsor-card">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Silver Sponsors
            </h3>
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={logo_tes}
              alt="Silver Sponsor"
              className="mx-auto"
            />
          </div>
          <div className="sponsor-card">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Bronze Sponsors
            </h3>
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={logo_tes}
              alt="Bronze Sponsor"
              className="mx-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
