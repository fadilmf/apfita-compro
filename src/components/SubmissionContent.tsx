// "use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
} from "lucide-react";
import GuidelinesContent from "@/components/GuideLinesContent";
import SubmissionTemplateContent from "./SubmissionTemplateContent";
import SubmissionPhaseContent from "./SubmissionPhaseContent";
import SubmissionPhaseTimeline from "./SubmissionPhaseTimeline";

interface TabContentProps {
  children: React.ReactNode;
}

function TabContent({ children }: TabContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default function SubmissionsContent() {
  const [activeTab, setActiveTab] = useState("guideline");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const validTabs = ["guideline", "submission", "template"];
    if (validTabs.includes(hash)) {
      setActiveTab(hash);

      // Tunggu sedikit lalu scroll ke elemen setelah render
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300); // cukup delay 300ms untuk nunggu render tab
    }
  }, []);

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text pb-3 text-transparent mb-6">
            Submissions
          </h1>
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              Authors with manuscripts accepted for presentation at the 15
              <sup>th</sup> APFITA 2025 will have their papers published in the
              conference proceedings. The proceedings will be{" "}
              <span className="font-medium text-blue-600">reserved by IOP</span>{" "}
              and indexed in reputable databases.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          {["guideline", "submission", "template"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
              }}
              className={`
                px-8 py-3 rounded-full text-sm font-medium
                transition-all duration-300 transform
                ${
                  activeTab === tab
                    ? "bg-blue-800 text-white shadow-lg scale-105"
                    : "bg-white text-blue-800 ring-1 ring-blue-800 hover:ring-0 hover:bg-blue-50 hover:scale-105"
                }
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {tab === "submission" && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse">
                  <span className="sr-only">New notification</span>
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "guideline" && (
            <TabContent>
              <div
                id="guideline"
                className="scroll-mt-5 flex justify-center items-center bg-blue-50/30 p-6 rounded-2xl"
              >
                <GuidelinesContent />
              </div>
            </TabContent>
          )}
          {activeTab === "template" && (
            <TabContent>
              <div
                id="template"
                className="scroll-mt-5 flex justify-center items-center bg-blue-50/30 p-6 rounded-2xl"
              >
                <SubmissionTemplateContent />
              </div>
            </TabContent>
          )}

          {activeTab === "submission" && (
            <TabContent>
              <div id="submission" className="scroll-mt-5 space-y-8">
                {/* Current Phase Banner */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <SubmissionPhaseContent />
                </div>

                {/* Submission Process */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        Submission Process
                      </h2>
                      <p className="text-blue-600 text-sm">
                        Three-phase submission process
                      </p>
                    </div>
                  </div>

                  <SubmissionPhaseTimeline />
                  
                </div>
              </div>
            </TabContent>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
