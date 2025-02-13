import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logoConf from "/src/assets/logo_conf.png";
import logoBrain from "/src/assets/logo_brain.png";
import logoUtama from "/src/assets/logo_utama.png";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const comingSoonRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animasi teks "Coming Soon"
    if (comingSoonRef.current) {
      gsap.fromTo(
        comingSoonRef.current,
        {
          opacity: 0, // Mulai dari transparan
          y: 50, // Mulai dari posisi lebih rendah
          scale: 0.8, // Mulai dengan ukuran lebih kecil
        },
        {
          opacity: 1, // Akhirnya penuh terlihat
          y: 0, // Posisi akhir di posisi normal
          scale: 1, // Ukuran teks kembali ke normal
          duration: 1.5, // Durasi animasi
          ease: "power3.out", // Ease out untuk pergerakan lebih halus
        }
      );
    }

    textRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: index * 0.2 }
        );
      }
    });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 pt-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://www.djkn.kemenkeu.go.id/files/images/2024/03/tugu_kujang_bogor.jpeg')",
        }}
      ></div>

      {/* Blur & Gray Transparent Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10" />
      {/* Logos */}
      <div className="relative flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-12 p-8 rounded-2xl bg-gradient-to-br from-white/70 via-white/60 to-white/50 backdrop-blur-lg border border-white/40 shadow-2xl overflow-hidden">
        {/* Shiny Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-transparent opacity-0 rounded-2xl animate-shiny pointer-events-none"></div>

        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 to-green-200/50 opacity-10 rounded-2xl pointer-events-none"></div>

        {/* Main Logos */}
        <img
          src={logoUtama || "/placeholder.svg"}
          alt="Utama Logo"
          className="w-64 sm:w-80 h-auto object-contain"
        />
        <div className="flex space-x-4">
          <img
            src={logoConf || "/placeholder.svg"}
            alt="APFITA Logo"
            className="w-24 sm:w-28 h-auto object-contain"
          />
          <img
            src={logoBrain || "/placeholder.svg"}
            alt="Brain Logo"
            className="w-24 sm:w-28 h-auto object-contain"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center max-w-4xl mx-auto">
        <h1
          ref={comingSoonRef}
          className="text-6xl sm:text-7xl md:text-8xl font-extrabold mb-6 text-blue-600 tracking-wider drop-shadow-lg"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          APFITA 2025
        </h1>

        <div
          ref={(el) => (textRefs.current[1] = el)}
          className="text-2xl sm:text-3xl text-white mb-6 leading-relaxed"
        >
          The 15th International Conference of Asia-Pacific Federation for
          Information Technology in Agriculture
        </div>
        <div
          ref={(el) => (textRefs.current[2] = el)}
          className="text-xl sm:text-2xl text-white font-semibold mb-8 px-4"
        >
          "Innovative Digital Technology for Global Agro-Maritime Industry"
        </div>
      </div>
    </div>
  );
}
