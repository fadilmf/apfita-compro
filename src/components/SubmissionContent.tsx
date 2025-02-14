"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ExternalLink,
  Mail,
  AlertCircle,
  BookOpen,
  Award,
  ArrowRight,
  Check,
} from "lucide-react";

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
  const [activeTab, setActiveTab] = useState("publication");

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Submissions</h1>
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              Authors with manuscripts accepted for presentation at the 15
              <sup>th</sup> APFITA 2025 will have several options for
              publication. By default, the accepted manuscripts will be
              published through{" "}
              <span className="font-medium text-blue-600">
                Option 1: E3S Web of Conferences
              </span>{" "}
              (Scopus indexed proceeding) and non-accepted manuscripts will be
              published in an ISBN book chapter. In addition to that, selected
              manuscripts could be published in a number of journals.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          {["publication", "submission"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-8 py-3 rounded-full text-sm font-medium
                transition-all duration-300 transform
                ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-white text-blue-600 hover:bg-blue-50 hover:scale-105"
                }
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "publication" && (
            <TabContent>
              <div className="grid md:grid-cols-2 gap-8">
                {/* E3S Web of Conferences */}
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        Option 1: E3S Web of Conferences
                      </h2>
                      <p className="text-blue-600 text-sm">
                        Scopus indexed proceeding
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Requirements */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Check className="w-4 h-4 text-blue-600" />
                        Requirements
                      </h3>
                      <ul className="space-y-3">
                        {[
                          "Manuscripts must be in English",
                          "Maximum 25% similarity score allowed",
                          "Must use E3S Web of Conferences template",
                          "Willing to revise manuscript according to reviewer input",
                          "Two-phase review process: before and after conference",
                        ].map((req, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Important Notes */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-blue-600" />
                        Important Notes
                      </h3>
                      <ul className="space-y-3">
                        {[
                          "Committee may cancel manuscripts that don't match template or fail similarity test",
                          "Jury's decision on article acceptance cannot be contested",
                          "Non-passing manuscripts can be published in ISBN book chapter",
                        ].map((note, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                            {note}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="https://www.e3s-conferences.org/about-the-journal/58-for-authors/instructions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm group"
                    >
                      View Author Guidelines
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Universal Journal */}
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        Option 2: Universal Journal
                      </h2>
                      <p className="text-blue-600 text-sm">
                        International peer-reviewed journal
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-600">
                      The Universal Journal of Agricultural Research publishes
                      high-quality research manuscripts in all areas of
                      agriculture. Additional publication costs may apply.
                    </p>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Journal Features
                      </h3>
                      <ul className="space-y-3">
                        {[
                          "Peer-reviewed publication process",
                          "International editorial board",
                          "Rapid publication timeline",
                          "Wide research area coverage",
                        ].map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="https://www.hrpub.org/journals/jour_info.php?id=04"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm group"
                    >
                      More Information & Template
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </TabContent>
          )}

          {activeTab === "submission" && (
            <TabContent>
              <div className="space-y-8">
                {/* Submission Guidelines */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        Initial Submission Guidelines
                      </h2>
                      <p className="text-blue-600 text-sm">
                        Follow these steps to submit your manuscript
                      </p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Required Steps */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Required Steps
                      </h3>
                      <ul className="space-y-4">
                        {[
                          {
                            text: "Submit full manuscript through EasyChair Submission System",
                            link: "https://easychair.org/cfp/icas2024",
                          },
                          {
                            text: "Use E3S Web of Conferences Template for initial submission",
                          },
                          {
                            text: "Selected journal manuscripts will require reformatting (additional cost applies)",
                          },
                        ].map((step, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                              <span className="text-sm font-medium text-blue-600">
                                {i + 1}
                              </span>
                            </div>
                            <div className="text-sm text-gray-600">
                              {step.text}
                              {step.link && (
                                <a
                                  href={step.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className=" text-blue-600 hover:text-blue-700 mt-1 flex items-center gap-1"
                                >
                                  Visit submission system
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">
                        Contact Information
                      </h3>
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="text-sm text-gray-600">
                            For further inquiries, please contact:{" "}
                            <a
                              href="mailto:i@apps.ipb.ac.id"
                              className="text-blue-600 hover:text-blue-700 underline"
                            >
                              mas-arci
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <a
                      href="https://easychair.org/cfp/icas2024"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors duration-300 font-semibold text-center pointer-events-none opacity-50"
                    >
                      Submit Manuscript
                    </a>
                  </div>
                </div>

                {/* Participation Without Publication */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <AlertCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        Participation Without Publication
                      </h2>
                      <p className="text-blue-600 text-sm">
                        Important information for non-publishing participants
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    Authors wishing to participate without publication should
                    notify the committee immediately after manuscript
                    acceptance. Send requests to{" "}
                    <a
                      href="mailto:icas.sv@apps.ipb.ac.id"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      icas.sv@apps.ipb.ac.id
                    </a>{" "}
                    with subject "Participation without publication" followed by
                    your Submission Number.
                  </p>
                </div>
              </div>
            </TabContent>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
