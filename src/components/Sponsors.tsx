"use client";

import type React from "react";

import { motion } from "framer-motion";
import { ArrowRight, Award, Zap, Globe } from "lucide-react";
import logoBrain from "/src/assets/logo_brain.png";
import logoTelU from "/src/assets/Logo Tel U.png";
import logoKementan from "/src/assets/Logo Kementan.png";
import logoUNIKOM from "/src/assets/Logo UNIKOM.png";
import logoUNPAD from "/src/assets/Logo UNPAD.png";
import logoGUNDAR from "/src/assets/Logo Gunadarma.png";
import logoUMB from "/src/assets/LogoUMBandung.png";
import logoHIPI from "/src/assets/LogoHIPI.jpg";
import { useState } from "react";

// Array sponsor
const sponsors = [
  { id: 1, logo: logoBrain, alt: "BRAIN IPB University", type: "grand" },
  { id: 2, logo: logoBrain, alt: "BRAIN IPB University", type: "regular" },
];

const partners = [
  {
    id: 1,
    logo: logoKementan,
    alt: "Kementerian Pertanian Republik Indonesia",
  },
  { id: 2, logo: logoUMB, alt: "Universitas Muhammadiyah Bandung" },
  { id: 3, logo: logoTelU, alt: "Telkom University" },
  { id: 4, logo: logoUNIKOM, alt: "Universitas Komputer Indonesia" },
  { id: 5, logo: logoUNPAD, alt: "Universitas Padjadjaran" },
  { id: 6, logo: logoGUNDAR, alt: "Universitas Gunadarma" },
  { id: 7, logo: logoHIPI, alt: "Himpunan Informatika Pertanian Indonesia" },
];

// Variants animasi
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// Tooltip component
function Tooltip({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap z-50">
          {text}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
}

export default function Sponsors() {
  return (
    <div className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-navy-900 mb-6"
          >
            Empower the Future of AgriTech
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Join us in shaping the future of agriculture through innovative
            technology.
          </motion.p>
        </motion.div>

        {/* Sponsors */}
        {sponsors.length > 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mb-20"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-semibold text-center mb-12"
            >
              Our Esteemed Sponsors
            </motion.h3>

            {/* Grand Sponsors */}
            <div className="mb-16">
              <h4 className="text-2xl font-medium text-center mb-8 text-blue-600">
                Grand Sponsors
              </h4>
              <div className="flex justify-center">
                {sponsors
                  .filter((s) => s.type === "grand")
                  .map((sponsor) => (
                    <motion.div
                      key={sponsor.id}
                      className="mx-8"
                      whileHover={{ scale: 1.05 }}
                      variants={itemVariants}
                    >
                      <Tooltip text={sponsor.alt}>
                        <img
                          src={sponsor.logo || "/placeholder.svg"}
                          alt={sponsor.alt}
                          width={200}
                          height={200}
                          className="object-contain"
                        />
                      </Tooltip>
                    </motion.div>
                  ))}
              </div>
            </div>

            {/* Regular Sponsors */}
            <div>
              <h4 className="text-2xl font-medium text-center mb-8 text-blue-600">
                Sponsors
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
                {sponsors
                  .filter((s) => s.type === "regular")
                  .map((sponsor) => (
                    <motion.div
                      key={sponsor.id}
                      className="flex justify-center items-center"
                      whileHover={{ scale: 1.1 }}
                      variants={itemVariants}
                    >
                      <Tooltip text={sponsor.alt}>
                        <img
                          src={sponsor.logo || "/placeholder.svg"}
                          alt={sponsor.alt}
                          width={150}
                          height={150}
                          className="object-contain"
                        />
                      </Tooltip>
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-8 text-navy-900"
          >
            Become a Sponsor
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto"
          >
            Elevate your brand's visibility and contribute to the advancement of
            agricultural technology.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Award,
                title: "Brand Exposure",
                description: "Showcase your brand to a targeted audience.",
              },
              {
                icon: Zap,
                title: "Innovation Leadership",
                description:
                  "Position your company at the forefront of agricultural innovation.",
              },
              {
                icon: Globe,
                title: "Global Networking",
                description:
                  "Connect with potential partners and industry leaders.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div variants={itemVariants} className="text-center">
            <a
              href="/sponsor-info"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Proposal Sponsors
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Partnerships */}
        {partners.length > 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-semibold text-center mb-12"
            >
              Our Valued Partners and Co-Host
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
            >
              {partners.map((partner) => (
                <motion.div
                  key={partner.id}
                  className="flex justify-center items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Tooltip text={partner.alt}>
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.alt}
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </Tooltip>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
