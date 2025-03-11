import { useEffect, useRef } from "react";
import { MapPin, Navigation2 } from "lucide-react";

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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 mb-4">
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
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
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
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
                >
                  <Navigation2 className="w-4 h-4" />
                  Get Directions
                </a>
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
