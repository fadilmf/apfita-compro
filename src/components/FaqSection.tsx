"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Search, ChevronDown } from "lucide-react";
import { faqData } from "@/data/faq";

export default function FAQSection() {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // detect screen size
  // useEffect(() => {
  //   const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
  //   checkScreen();
  //   window.addEventListener("resize", checkScreen);
  //   return () => window.removeEventListener("resize", checkScreen);
  // }, []);

  const filteredFaqs = useMemo(() => {
    if (!query) return faqData;
    return faqData.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query.toLowerCase()) ||
        faq.answer.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-balance">
          Find answers to common questions about APFITA 2025. Use the search bar
          below to quickly locate a topic.
        </p>
      </div>

      {/* Search Box */}
      <div className="relative w-full max-w-5xl mx-auto mb-14">
        {/* Gradient border wrapper */}
        <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500">
          {/* Inner white background */}
          <div className="w-full h-full rounded-[1rem] bg-white" />
        </div>

        {/* Search icon */}
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-800 w-5 h-5 pointer-events-none z-10" />

        {/* Input field */}
        <input
          type="text"
          placeholder="Search questions..."
          className="relative w-full pl-14 pr-6 py-4 text-base text-gray-800 placeholder-gray-400 bg-transparent rounded-2xl focus:outline-none focus:ring-0 z-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* FAQ List */}
      <motion.div layout className="grid gap-5 grid-cols-1">
        {filteredFaqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.05,
                duration: 0.4,
                ease: [0.25, 1, 0.5, 1],
              }}
              className={`rounded-2xl overflow-hidden backdrop-blur-lg border transition-all duration-500 ${
                isOpen
                  ? "bg-gradient-to-br from-blue-50/80 to-white/60 border-blue-300 shadow-[0_10px_25px_rgba(0,0,0,0.08)]"
                  : "bg-white/90 border-slate-200 hover:border-blue-200 hover:shadow-[0_6px_18px_rgba(0,0,0,0.05)]"
              }`}
            >
              {/* Header */}
              <motion.button
                layout
                onClick={() => setActiveIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center text-left px-6 py-5 group transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle
                    className={`w-5 h-5 mt-1 transition-colors duration-300 ${
                      isOpen
                        ? "text-blue-700"
                        : "text-slate-400 group-hover:text-blue-600"
                    }`}
                  />
                  <span
                    className={`font-semibold leading-snug tracking-tight transition-colors duration-300 ${
                      isOpen
                        ? "text-blue-800"
                        : "text-slate-900 group-hover:text-blue-700"
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>

                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isOpen
                        ? "text-blue-700"
                        : "text-slate-500 group-hover:text-blue-600"
                    }`}
                  />
                </motion.div>
              </motion.button>

              {/* Answer (Accordion) */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    layout
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
                    className="border-t border-blue-100 bg-gradient-to-br from-blue-50/80 to-white/60"
                  >
                    <div className="px-6 py-5 text-[15px] text-slate-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Footer Note */}
      <p className="text-center mt-12 text-sm text-gray-500">
        * If your question is not on the list, feel free to contact us.
      </p>
    </section>
  );
}
