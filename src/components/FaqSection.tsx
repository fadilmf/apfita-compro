"use client";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Search, ChevronDown } from "lucide-react";
import { faqData } from "@/data/faq";

export default function FAQSection() {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  // detect screen size
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

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
          Find answers to common questions about APFITA 2025. Use the search bar below to quickly locate a topic.
        </p>
      </div>

      {/* Search Box */}
      <div className="relative max-w-md mx-auto mb-12">
        <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search questions..."
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-blue-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* FAQ List */}
      <div
        className={`grid gap-4 ${
          isDesktop ? "md:grid-cols-2" : "grid-cols-1"
        }`}
      >
        {filteredFaqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03 }}
            className={`border border-gray-200 bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 ${
              isDesktop ? "p-6 hover:shadow-md" : ""
            }`}
          >
            {/* Header */}
            <button
              disabled={isDesktop}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className={`w-full flex justify-between items-center text-left ${
                isDesktop ? "cursor-default" : "px-5 py-4"
              }`}
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span
                  className={`font-medium text-gray-900 ${
                    !isDesktop && "group-hover:text-blue-700 transition-colors"
                  }`}
                >
                  {faq.question}
                </span>
              </div>
              {!isDesktop && (
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 shrink-0 ${
                    activeIndex === index ? "rotate-180 text-blue-600" : ""
                  }`}
                />
              )}
            </button>

            {/* Answer (Expanded / Static) */}
            {isDesktop ? (
              <div className="mt-3 text-gray-700 text-sm leading-relaxed bg-blue-50 rounded-xl p-4">
                {faq.answer}
              </div>
            ) : (
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="border-t border-blue-100 bg-blue-50"
                  >
                    <div className="px-5 py-4 text-gray-700 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </motion.div>
        ))}
      </div>

      {/* Footer Note */}
      <p className="text-center mt-12 text-sm text-gray-500">
        * If your question isn’t listed here, please contact us via email.
      </p>
    </section>
  );
}
