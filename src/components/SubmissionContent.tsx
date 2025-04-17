"use client";

import type React from "react";
import logo from "@/assets/Logo-IOP.jpg";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ExternalLink,
  Mail,
  AlertCircle,
  Calendar,
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Submissions</h1>
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
          {activeTab === "publication" && (
            <TabContent>
              <div className="flex justify-center items-center min-h-[60vh] bg-gradient-to-br from-gray-100 to-white p-6 rounded-2xl">
                <motion.div
                  className="bg-white shadow-lg border border-gray-200 rounded-2xl px-8 py-6 md:px-14 md:py-8 max-w-xl text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {/* LOGO */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={logo}
                      alt="IOP Conference Series Logo"
                      className="h-12 md:h-16 object-contain"
                    />
                  </div>

                  {/* TEKS */}
                  <motion.h2
                    className="text-lg md:text-xl text-gray-600 mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    This content is reserved by:
                  </motion.h2>
                  <motion.h1
                    className="text-2xl md:text-4xl font-bold text-gray-900 mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="text-red-600">IOP</span> Conference Series
                  </motion.h1>
                  <motion.h2
                    className="text-lg md:text-2xl font-semibold text-black mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Earth and Environmental Science (EES)
                  </motion.h2>

                  {/* <motion.p
                    className="text-gray-600 text-sm md:text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    All accepted papers from APFITA 2025 will be published in
                    the IOP Conference Series: Earth and Environmental Science,
                    which is indexed in Scopus and other major scientific
                    databases.
                  </motion.p> */}

                  {/* <motion.div
                    className="mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <a
                      href="https://publishingsupport.iopscience.iop.org/author-guidelines-for-conference-proceedings/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      View IOP Author Guidelines
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </motion.div> */}
                </motion.div>
              </div>
            </TabContent>
          )}

          {activeTab === "submission" && (
            <TabContent>
              <div className="space-y-8">
                {/* Current Phase Banner */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
                  <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full text-amber-800 font-medium mb-4">
                    <Calendar className="w-4 h-4" />
                    Current Phase: Abstract Submission
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Abstract Submission Now Open!
                  </h3>
                  <p className="text-gray-700 max-w-3xl mx-auto mb-4">
                    We are currently accepting abstracts for APFITA 2025. Full
                    paper submission will open after abstract acceptance.
                  </p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdZQs2D5FP6ngoz8g4EXFnTdRw7B0dxMxJNGBUmeOSQEVomOA/viewform?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Submit Abstract Now
                    <ExternalLink className="w-4 h-4" />
                  </a>
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
                        Two-phase submission process
                      </p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {/* Phase 1: Abstract Submission */}
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="font-bold text-blue-600">1</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Phase 1: Abstract Submission
                        </h3>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          OPEN NOW
                        </span>
                      </div>
                      <div className="ml-10 space-y-3">
                        <p className="text-gray-600 text-sm">
                          Submit your abstract (250-300 words) through the
                          Google Form. Include title, authors, affiliations, and
                          keywords.
                        </p>
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSdZQs2D5FP6ngoz8g4EXFnTdRw7B0dxMxJNGBUmeOSQEVomOA/viewform?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
                        >
                          Abstract Submission Form
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* Phase 2: Full Paper Submission */}
                    <div className="border-l-4 border-gray-300 pl-4">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <span className="font-bold text-gray-500">2</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-500">
                          Phase 2: Full Paper Submission
                        </h3>
                        <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">
                          COMING SOON
                        </span>
                      </div>
                      <div className="ml-10 space-y-3">
                        <p className="text-gray-500 text-sm">
                          After abstract acceptance, you will be invited to
                          submit your full paper using the IOP template. Details
                          will be provided to authors with accepted abstracts.
                        </p>
                      </div>
                    </div>

                    {/* Important Dates */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        Important Dates
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="font-medium text-blue-800">
                            Abstract Submission Deadline
                          </p>
                          <p className="text-blue-600">July 31, 2025</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="font-medium text-gray-800">
                            Abstract Acceptance Notification
                          </p>
                          <p className="text-gray-600">August 15, 2025</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="font-medium text-gray-800">
                            Full Paper Submission Deadline
                          </p>
                          <p className="text-gray-600">September 30, 2025</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="font-medium text-gray-800">
                            Final Acceptance Notification
                          </p>
                          <p className="text-gray-600">October 15, 2025</p>
                        </div>
                      </div>
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
                              href="/contact"
                              className="text-blue-600 hover:text-blue-700 underline"
                            >
                              contact-us!
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
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
                    notify the committee immediately after abstract acceptance.
                    Send requests to{" "}
                    <a
                      href="mailto:apfita2025@apps.ipb.ac.id"
                      className="text-blue-600 hover:text-blue-700 underline"
                    >
                      apfita2025@apps.ipb.ac.id
                    </a>{" "}
                    with subject "Participation without publication" followed by
                    your Abstract ID.
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
