"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Topic {
  title: string;
  items: string[];
}

export default function ConferenceTopics() {
  // Changed to array for multiple expanded sections
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);

  const topics: Topic[] = [
    {
      title: "Digital Transformation in Agro-Maritime Industry",
      items: [
        "Enhancement of agricultural and fisheries production",
        "Improvement of efficiency and competitiveness in the agro-maritime industry",
        "Utilization of advanced digital technology in the agro-maritime industry",
      ],
    },
    {
      title:
        "Governance, Sustainability, and Socioeconomic Aspects of the Agro-Maritime Industry",
      items: [
        "Enhancement of transparency and traceability systems in the agro-maritime industry",
        "Study of social, economic, and sustainability aspects of the agro-maritime industry",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-navy-900 mb-4">
          Themes and Topics
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          The 4th International Conference on Applied Sciences (ICAS) 2024
          "Multidisciplinary Research Collaboration for Environmental, Social
          and Governance (ESG) Issues"
        </p>
      </div>

      {/* Topics Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-400 ml-6" />

        {/* Topics */}
        <div className="space-y-8">
          {topics.map((topic, index) => (
            <div key={index} className="relative pl-16">
              {/* Timeline Dot */}
              <div
                className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center
                ${index === 0 ? "bg-blue-500" : "bg-blue-400"}`}
              >
                <span className="text-white font-bold">{index + 1}</span>
              </div>

              {/* Topic Content */}
              <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
                <button
                  onClick={() => {
                    setExpandedSections((prev) => {
                      if (prev.includes(index)) {
                        return prev.filter((i) => i !== index);
                      } else {
                        return [...prev, index];
                      }
                    });
                  }}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {topic.title}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300
                      ${expandedSections.includes(index) ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {expandedSections.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-4 space-y-2">
                        {topic.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: itemIndex * 0.1 }}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                            <span className="text-gray-600">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
