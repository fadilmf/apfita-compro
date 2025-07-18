import { useEffect, useRef } from "react";
import { MapPin, Navigation2, Car, BedDouble } from "lucide-react";
import { motion } from "framer-motion";

import Outdoor from "/src/assets/OutdoorVenue.jpg";
import Indoor from "/src/assets/IndoorVenue.jpg";

export default function VenueSection() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      const el = progressRef.current;
      if (!el) return;

      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const progress = Math.max(0, Math.min(1, 1 - elementTop / windowHeight));

      el.style.width = `${progress * 100}%`;
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const query = encodeURIComponent("IPB International Convention Center");

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Venue Header Card */}
        <div className="relative w-full overflow-hidden bg-white rounded-xl shadow-lg">
          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-blue-100">
            <div
              ref={progressRef}
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-200"
            />
          </div>

          <div className="p-6 sm:p-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6">
                IPB Convention Center
              </h1>
              <div className="flex items-center justify-center gap-2 text-blue-600">
                <MapPin className="w-5 h-5" />
                <p className="text-lg sm:text-xl">Bogor, Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Venue Content */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Images Section */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <img
                  src={Outdoor || "/placeholder.svg"}
                  alt="IPB Convention Center Exterior"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <img
                  src={Indoor || "/placeholder.svg"}
                  alt="IPB Convention Center Interior"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Info and Map Section */}
          <div className="space-y-6 sm:space-y-8">
            {/* Venue Info Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-blue-100">
              <div className="h-2 bg-blue-600 rounded-full mb-4"></div>
              <h2 className="text-xl sm:text-2xl font-bold text-blue-950 mb-4">
                Venue Information
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-950 mb-2">Address</h3>
                  <p className="text-gray-600">
                    IPB Convention Center
                    <br />
                    Botani Square Building, Jl. Raya Pajajaran Raya Lt. 2,
                    RT.04/RW.05, Tegallega, Kecamatan Bogor Tengah, Kota Bogor,
                    Jawa Barat 16127
                  </p>
                </div>
                {/* Animated Buttons */}
                <motion.div
                  className="flex flex-wrap items-center gap-3 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                >
                  {/* Directions */}
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white ring-1 ring-blue-600 hover:ring-0 transition-colors text-sm font-medium shadow-sm"
                  >
                    <Navigation2 className="w-4 h-4" />
                    Get Directions
                  </motion.a>

                  {/* How to Reach */}
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href="#how-to-reach"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white ring-1 ring-blue-600 hover:ring-0 transition-colors text-sm font-medium shadow-sm"
                  >
                    <Car className="w-4 h-4" />
                    How to Reach
                  </motion.a>

                  {/* Nearby Hotels */}
                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href="#nearby-hotels"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white ring-1 ring-blue-600 hover:ring-0 transition-colors text-sm font-medium shadow-sm"
                  >
                    <BedDouble className="w-4 h-4" />
                    Nearby Hotels
                  </motion.a>
                </motion.div>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-white rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-blue-100">
              <div className="w-full h-[300px] sm:h-[400px]">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?key=${
                    import.meta.env.VITE_GOOGLE_MAPS_API_KEY
                  }&q=${query}`}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
