"use client";

import {
  FileText,
  Image,
  ActivityIcon as Function,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import type React from "react"; // Import React to fix the undeclared variable error

interface GuidelineCard {
  title: string;
  icon: React.ElementType;
  date: string;
  href: string;
}

export default function GuidelinesContent() {
  const guidelines: GuidelineCard[] = [
    {
      title: "Manuscript Preparation",
      icon: FileText,
      date: "Coming Soon",
      href: "/guidelines/manuscript",
    },
    {
      title: "Figures and tables",
      icon: Image,
      date: "Coming Soon",
      href: "/guidelines/figures",
    },
    {
      title: "Equations and mathematics",
      icon: Function,
      date: "Coming Soon",
      href: "/guidelines/equations",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-navy-900 mb-6">
          Guidelines for Author(s)
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Type of Articles: Research article includes original research paper in
          quantitative, qualitative or both; Review refers to systematic review,
          literature review, and topical issues of interest related to APFITA
          2025 Topics.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {guidelines.map((guide, index) => {
          const Icon = guide.icon;
          return (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Date Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                POSTED : {guide.date}
              </div>

              <div className="p-6 pt-16">
                {/* Icon */}
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {guide.title}
                </h3>

                {/* Button */}
                <a
                  href={guide.href}
                  className="inline-flex items-center justify-between w-full px-4 py-2 bg-amber-400 text-amber-900 rounded-lg font-medium hover:bg-amber-500 transition-colors duration-300 group/btn"
                >
                  <span>Download PDF</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Decorative Elements */}
              <div className="absolute inset-0 border-2 border-transparent hover:border-blue-600 rounded-xl transition-colors duration-300 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        * Please read the guidelines carefully before submitting your manuscript
      </div>
    </div>
  );
}
