"use client";

import { motion } from "framer-motion";
import { Check, Clock, Building2, User } from "lucide-react";

interface Reviewer {
  name: string;
  title: string;
  status: "Confirmed" | "TBC";
  institution: string;
}

const reviewers: Reviewer[] = [
  {
    name: "Dra. Medria Kusuma Dewi Hardhienata, M.T., PhD",
    title: "Reviewer",
    status: "Confirmed",
    institution: "IPB University",
  },
  {
    name: "Dr. Ir. Sri Wahjuni, M.T.",
    title: "Reviewer",
    status: "Confirmed",
    institution: "IPB University",
  },
  {
    name: "Dr. Yani Nurhadryani, S.Si., M.T.",
    title: "Reviewer",
    status: "Confirmed",
    institution: "IPB University",
  },
  {
    name: "Prof. Dan A. Iancu",
    title: "Reviewer",
    status: "TBC",
    institution: "Stanford University",
  },
  {
    name: "Prof. Robert De Souza",
    title: "Reviewer",
    status: "TBC",
    institution: "NUS",
  },
  {
    name: "Imran Ali",
    title: "Reviewer",
    status: "TBC",
    institution: "Australia",
  },
  {
    name: "Nishinomiya",
    title: "Reviewer",
    status: "TBC",
    institution: "Japan",
  },
];

export default function Reviewers() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-blue-900 mb-6">
            Conference Reviewers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our esteemed panel of international reviewers ensures the highest
            quality of academic contributions.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-blue-700 text-white p-6">
              <div className="grid grid-cols-12 gap-6 text-lg font-semibold">
                <div className="col-span-5 md:col-span-4">Name</div>
                <div className="col-span-3 md:col-span-2">Status</div>
                <div className="col-span-4 md:col-span-6">Institution</div>
              </div>
            </div>

            {/* Reviewer List */}
            <div className="divide-y divide-gray-200">
              {reviewers.map((reviewer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 hover:bg-gray-50 transition-all"
                >
                  <div className="grid grid-cols-12 gap-6 items-center">
                    <div className="col-span-5 md:col-span-4">
                      <div className="flex items-start gap-4">
                        <User className="w-6 h-6 text-blue-600 flex-shrink-0" />
                        <div>
                          <p className="text-lg font-medium text-gray-900">
                            {reviewer.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {reviewer.title}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-3 md:col-span-2">
                      {reviewer.status === "Confirmed" ? (
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-base bg-green-100 text-green-700">
                          <Check className="w-4 h-4" />
                          Confirmed
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-base bg-yellow-100 text-yellow-700">
                          <Clock className="w-4 h-4" />
                          TBC
                        </span>
                      )}
                    </div>
                    <div className="col-span-4 md:col-span-6">
                      <div className="flex items-center gap-3">
                        <Building2 className="w-5 h-5 text-gray-400" />
                        <span className="text-lg text-gray-600">
                          {reviewer.institution}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center text-base text-gray-500">
            * TBC: To Be Confirmed
          </div>
        </div>
      </div>
    </section>
  );
}
