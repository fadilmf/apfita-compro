"use client";

import { motion } from "framer-motion";
import logo_tes from "@/assets/tes.png";
import logo_brain from "@/assets/logo_brain.png";
import logo_conf from "@/assets/logo_conf.png";
import logo_utama from "@/assets/logo_utama.png";

// Define an array of sponsors with their logos
const sponsors = [
  { id: 1, logo: logo_tes, alt: "Sponsor 1" },
  { id: 2, logo: logo_brain, alt: "Sponsor 2" },
  { id: 3, logo: logo_conf, alt: "Sponsor 3" },
  { id: 4, logo: logo_utama, alt: "Sponsor 4" },
  // Add more logos as needed
];

const partners = [
  { id: 1, logo1: logo_tes, logo2: logo_brain, alt: "Partner 1" },
  { id: 2, logo1: logo_conf, logo2: logo_utama, alt: "Partner 2" },
  // Add more partner logos as needed
];

export default function Sponsors() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Sponsors</h2>

        {/* Grand Sponsor Section */}
        <div className="mb-20">
          {" "}
          {/* Increased margin-bottom */}
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

        {/* Sponsors Section */}
        <div className="mb-20">
          {" "}
          {/* Increased margin-bottom */}
          <h3 className="text-3xl font-semibold text-center mb-8">Sponsors</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {sponsors.map((sponsor) => (
              <motion.div
                key={sponsor.id}
                className="sponsor-card flex justify-center items-center"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.alt}
                  className="w-32 h-32 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partnership Section */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-8">
            Partnership
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {partners.map((partner) => (
              <motion.div
                key={partner.id}
                className="sponsor-card flex justify-center items-center"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={partner.logo1 || "/placeholder.svg"}
                  alt={`${partner.alt} Logo 1`}
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
