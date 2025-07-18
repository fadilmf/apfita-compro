// import { useState } from "react";
// import { ChevronDown } from "lucide-react";
import {
  motion,
  // AnimatePresence
} from "framer-motion";

interface Topic {
  title: string;
  items: string[];
}

export default function ConferenceTopics() {
  // const [expandedSections, setExpandedSections] = useState<number[]>([0]);

  const topics: Topic[] = [
    {
      title: "Increase in agricultural and fishery production",
      items: [""],
    },
    {
      title:
        "Improving the efficiency and competitiveness of the agro-maritime industry",
      items: [""],
    },
    {
      title:
        "Increasing transparency and traceability of the agro-maritime industry system",
      items: [""],
    },
    {
      title:
        "The use of advanced digital technology in the agro-maritime industry",
      items: [""],
    },
    {
      title:
        "A study on the agro-maritime industry's social, economic, and sustainability aspects",
      items: [""],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 lg:py-16">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text pb-3 text-transparent mb-6">
          Themes and Topics
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          The 15th International Conference on APFITA 2025
          <br></br>
          <strong>
            "Innovative Digital Technology for Global and Sustainable
            Agro-Maritime Industry"
          </strong>
        </p>
      </motion.div>

      {/* Topics Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-3 md:left-0 top-[5%] bottom-[12%] sm:bottom-[10%] w-0.5 bg-gradient-to-b from-blue-500 to-blue-400 ml-3 sm:ml-6" />

        {/* Topics */}
        <div className="space-y-6 sm:space-y-8">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-16"
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-0 top-[20%] w-12 h-12 rounded-full flex items-center justify-center
                ${index === 0 ? "bg-blue-500" : "bg-blue-400"}`}
              >
                <span className="text-white font-bold text-sm sm:text-base">
                  {index + 1}
                </span>
              </div>

              {/* Topic Content */}
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-xl border border-blue-100">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {topic.title}
                </h3>
                {/* <button
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
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {topic.title}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-500 transition-transform duration-300
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
                            className="flex items-start space-x-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                            <span className="text-gray-600 text-sm sm:text-base">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
