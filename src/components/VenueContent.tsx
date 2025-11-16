import { useEffect, useRef } from "react";
import { MapPin, Navigation2, Car, BedDouble } from "lucide-react";
import { motion } from "framer-motion";

import Outdoor from "/src/assets/OutdoorVenue.jpg";
import Indoor from "/src/assets/IndoorVenue.jpg";

export default function VenueSectionRedesign() {
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateProgress = () => {
      const bar = progressRef.current;
      if (!bar) return;

      const top = bar.getBoundingClientRect().top;
      const wh = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - top / wh));

      bar.style.width = `${progress * 100}%`;
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const query = encodeURIComponent("IPB International Convention Center");

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* LIQUID BACKGROUND BLOBS */}
      <div className="absolute -top-32 -left-20 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 -right-20 w-72 h-72 bg-indigo-300/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* HEADER GLASS CARD */}
        <div className="relative w-full rounded-3xl shadow-2xl overflow-hidden bg-white/30 backdrop-blur-2xl border border-white/50">
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/40">
            <div
              ref={progressRef}
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300"
            />
          </div>

          <div className="p-10 sm:p-14 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-700 bg-clip-text text-transparent drop-shadow-2xl">
              IPB International Convention Center
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-indigo-900 font-semibold">
              <MapPin className="w-5 h-5" />
              <p className="text-lg sm:text-xl">Bogor, Indonesia</p>
            </div>
          </div>
        </div>

        {/* GRID CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* MAP - HIGHLIGHTED SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden bg-white/30 backdrop-blur-2xl border border-white/40 shadow-xl"
          >
            <div className="p-6 border-b border-white/40 bg-white/20 backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-indigo-900">
                Location Map
              </h2>
            </div>

            <div className="w-full h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px] overflow-hidden rounded-b-3xl">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=${
                  import.meta.env.VITE_GOOGLE_MAPS_API_KEY
                }&q=${query}`}
              ></iframe>
            </div>

            <div className="p-6 flex flex-wrap gap-3">
              <motion.a
                whileTap={{ scale: 0.92 }}
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:opacity-90 text-sm sm:text-base"
              >
                <Navigation2 className="w-4 h-4" />
                Open in Maps
              </motion.a>

              <motion.a
                whileTap={{ scale: 0.92 }}
                href="#how-to-reach"
                className="px-4 py-2 flex items-center gap-2 rounded-full backdrop-blur-xl bg-white/40 text-indigo-900 hover:bg-blue-600 hover:text-white border border-white/40 shadow text-sm sm:text-base"
              >
                <Car className="w-4 h-4" />
                How to Reach
              </motion.a>

              <motion.a
                whileTap={{ scale: 0.92 }}
                href="#nearby-hotels"
                className="px-4 py-2 flex items-center gap-2 rounded-full backdrop-blur-xl bg-white/40 text-indigo-900 hover:bg-blue-600 hover:text-white border border-white/40 shadow text-sm sm:text-base"
              >
                <BedDouble className="w-4 h-4" />
                Nearby Hotels
              </motion.a>
            </div>
          </motion.div>

          {/* INFO + IMAGES */}
          <div className="space-y-10">
            {/* INFORMATION CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-3xl p-6 sm:p-8 bg-white/30 backdrop-blur-2xl border border-white/40 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">
                Venue Information
              </h2>
              <p className="text-gray-800 leading-relaxed font-medium text-sm sm:text-base">
                IPB International Convention Center
                <br />
                Botani Square Building
                <br />
                Jl. Raya Pajajaran Raya Lt. 2<br />
                Kecamatan Bogor Tengah
                <br />
                Jawa Barat 16127
              </p>
            </motion.div>

            {/* IMAGES SECTION */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[Outdoor, Indoor].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-3xl p-3 bg-white/30 backdrop-blur-2xl border border-white/40 shadow-xl"
                >
                  <div className="aspect-video overflow-hidden rounded-2xl">
                    <img
                      src={img}
                      alt="Venue"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
