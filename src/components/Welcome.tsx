"use client";

import { Calendar, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";
import type React from "react";
import ImageCarousel from "./ImageCarousel";

const Carousel: React.FC = () => {
  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
      <ImageCarousel />
    </div>
  );
};

const Welcome: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16"
        >
          {/* Left Side - Carousel */}
          <Carousel />

          {/* Right Side - Content */}
          <div className="space-y-4 sm:space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight"
            >
              Welcome to The 15<sup>th</sup> International Conference of APFITA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg text-gray-700 leading-relaxed"
            >
              The Asia-Pacific Federation for Information Technology in
              Agriculture (APFITA) brings together global experts in
              agricultural information technology for knowledge exchange and
              collaboration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 text-gray-700"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span>November 17-19, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Bogor, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span>On-site </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
            Why Attend APFITA 2025?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            APFITA 2025 will highlight Indonesia's role as a leading agrarian
            country with significant potential in applying IT to support
            sustainable agro-maritime industry systems. This event will be a
            strategic venue for researchers to:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Exchange ideas and knowledge",
              "Enhance insights and foster collaboration",
              "Disseminate research findings",
              "Explore Scopus-indexed publication opportunities",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-3">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
