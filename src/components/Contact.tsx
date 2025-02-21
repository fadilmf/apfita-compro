"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneIcon as WhatsApp,
  Mail,
  Instagram,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

const contactMethods = [
  {
    name: "WhatsApp",
    icon: WhatsApp,
    href: "https://wa.me/6281274513242",
    color: "text-green-600",
    hoverColor: "group-hover:text-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    description: "Quick responses, Standby CS, typically within an hour",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:apfita2025@apps.ipb.ac.id",
    color: "text-blue-600",
    hoverColor: "group-hover:text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    description: "For detailed inquiries, we'll reply within 24 hours",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/apfita2025",
    color: "text-purple-600",
    hoverColor: "group-hover:text-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    description: "Follow us for updates and behind-the-scenes content",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Contact() {
  const [hoveredMethod, setHoveredMethod] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-Navy-900 mb-4 sm:mb-6"
          >
            We're Here to Help
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Have questions about APFITA 2025? Our friendly team is just a
            message away. Choose your preferred method to connect with us.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {contactMethods.map((method) => (
            <motion.div
              key={method.name}
              variants={itemVariants}
              onMouseEnter={() => setHoveredMethod(method.name)}
              onMouseLeave={() => setHoveredMethod(null)}
            >
              <a
                href={method.href}
                className={`group block p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 ${method.borderColor}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full ${method.bgColor} flex items-center justify-center`}
                >
                  <method.icon
                    className={`w-8 h-8 ${method.color} ${method.hoverColor} transition-all duration-300`}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {method.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {method.description}
                </p>
                <div className="flex items-center justify-center text-sm font-medium">
                  <span className={`${method.color}`}>Connect with us</span>
                  <ExternalLink className={`w-4 h-4 ml-1 ${method.color}`} />
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {hoveredMethod && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-8 text-center"
            >
              <p className="text-lg text-gray-700">
                <CheckCircle className="inline-block w-5 h-5 text-green-500 mr-2" />
                {hoveredMethod === "WhatsApp" &&
                  "Our WhatsApp team is available 24/7 for urgent inquiries."}
                {hoveredMethod === "Email" &&
                  "Emails are handled by our dedicated support team for thorough assistance."}
                {hoveredMethod === "Instagram" &&
                  "Our Instagram is managed by the APFITA 2025 social media team."}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-lg text-gray-600">
            We look forward to assisting you!
          </p>
          <p className="mt-2 text-blue-600 font-medium">
            Your questions and feedback help us improve APFITA 2025.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
