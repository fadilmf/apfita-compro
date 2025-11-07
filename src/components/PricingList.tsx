import { useState } from "react";
import {
  CheckCircle2,
  Users,
  Sparkles,
  Globe,
  Calendar,
  Frown,
  HeartHandshake,
} from "lucide-react";
import { motion } from "framer-motion";
import type React from "react";

interface PricingTier {
  name: string;
  description: string;
  icon: React.ElementType;
  features: { text: string; tooltip?: string }[];
  badge?: string;
  price: string;
  priceDetail: string;
  color: string;
  registrationType: string;
  popular?: boolean;
  isAvailable: boolean;
}

export default function ConferencePricing() {
  const [isHovering, setIsHovering] = useState<number | null>(null);

  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSdZQs2D5FP6ngoz8g4EXFnTdRw7B0dxMxJNGBUmeOSQEVomOA/viewform";

  const pricingTiers: PricingTier[] = [
    {
      name: "Indonesian Presenter",
      description: "For academic presenters from Indonesia",
      icon: Sparkles,
      badge: "Most Popular",
      popular: true,
      price: "IDR 2,500,000",
      priceDetail: "per paper",
      color: "from-blue-600 to-blue-800",
      registrationType: "indonesian-presenter",
      features: [
        { text: "10% Discount for IPB Students" },
        { text: "50% Discount for Second Paper (IPB Students Only)" },
        { text: "Official Certificate of Presentation" },
        { text: "Publication in Conference Proceedings" },
        { text: "Exclusive Conference Souvenir" },
        { text: "Complimentary Lunch for All Conference Days" },
        { text: "Coffee & Refreshment Breaks" },
        { text: "Invitation to Gala Dinner Event" },
        { text: "Networking Opportunities with Experts" },
      ],
      isAvailable: false,
    },
    {
      name: "International Presenter",
      description: "For presenters from outside Indonesia",
      icon: Globe,
      price: "USD 375",
      priceDetail: "per paper",
      color: "from-blue-500 to-blue-700",
      registrationType: "international-presenter",
      features: [
        { text: "Official Certificate of Presentation" },
        { text: "Publication in Conference Proceedings" },
        { text: "Exclusive Conference Souvenir" },
        { text: "Complimentary Lunch for All Conference Days" },
        { text: "Coffee & Refreshment Breaks" },
        { text: "Invitation to Gala Dinner Event" },
        { text: "Access to All Conference Sessions" },
        { text: "Networking with Global Researchers" },
        { text: "Digital Access to All Presentations" },
      ],
      isAvailable: false,
    },
    {
      name: "Indonesian Presenter Only",
      description: "Without IOP publication",
      icon: Sparkles,
      price: "IDR 750,000",
      priceDetail: "per paper",
      color: "from-blue-500 to-blue-700",
      registrationType: "indonesian-only",
      features: [
        { text: "Official Certificate of Presentation" },
        { text: "Conference Proceedings (local)" },
        { text: "Exclusive Conference Souvenir" },
        { text: "Complimentary Lunch for All Conference Days" },
        { text: "Coffee & Refreshment Breaks" },
        { text: "Invitation to Gala Dinner Event" },
        { text: "Networking with Experts" },
      ],
      isAvailable: false,
    },
    {
      name: "International Presenter Only",
      description: "Without IOP publication",
      icon: Globe,
      price: "USD 267",
      priceDetail: "per paper",
      color: "from-blue-500 to-blue-700",
      registrationType: "international-only",
      features: [
        { text: "Official Certificate of Presentation" },
        { text: "Conference Proceedings (local)" },
        { text: "Exclusive Conference Souvenir" },
        { text: "Complimentary Lunch for All Conference Days" },
        { text: "Coffee & Refreshment Breaks" },
        { text: "Invitation to Gala Dinner Event" },
        { text: "Networking with Global Researchers" },
      ],
      isAvailable: false,
    },
    {
      name: "Participant Only",
      description: "For non-presenting attendees from Indonesia",
      icon: Users,
      price: "IDR 500,000",
      priceDetail: "per day",
      color: "from-blue-400 to-blue-600",
      registrationType: "participant-only",
      features: [
        { text: "Digital E-Certificate of Attendance" },
        { text: "Access to All Conference Sessions" },
        { text: "Complimentary Lunch for All Conference Days" },
        { text: "Coffee & Refreshment Breaks" },
        { text: "Networking Opportunities" },
        { text: "Access to Digital Materials" },
        { text: "Participation in Q&A Sessions" },
      ],
      isAvailable: true,
    },
    {
      name: "International Participant Only",
      description: "For non-presenting attendees",
      icon: Users,
      price: "USD 50",
      priceDetail: "per day",
      color: "from-blue-400 to-blue-600",
      registrationType: "international-participant-only",
      features: [
        { text: "Digital E-Certificate of Attendance" },
        { text: "Access to All Conference Sessions" },
        { text: "Complimentary Lunch for All Conference Days" },
        { text: "Coffee & Refreshment Breaks" },
        { text: "Networking Opportunities" },
        { text: "Access to Digital Materials" },
        { text: "Participation in Q&A Sessions" },
      ],
      isAvailable: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-white to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 mb-4">
          <Calendar className="w-4 h-4" />
          <span className="text-sm font-medium">
            APFITA 2025 Registration Now Open
          </span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text pb-3 text-transparent mb-6">
          Join the Premier Agricultural Technology Conference
        </h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Choose your registration package and help make this event lively,
          inspiring, and full of meaningful connections
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {pricingTiers.map((tier, index) => {
          const isHovered = isHovering === index;
          const isClosed = !tier.isAvailable;
          const isStillOpen = tier.name.includes("Participant");

          return (
            <motion.div
              key={tier.name}
              variants={itemVariants}
              onMouseEnter={() => setIsHovering(index)}
              onMouseLeave={() => setIsHovering(null)}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                isHovered && !isClosed
                  ? "transform scale-105 shadow-2xl z-10"
                  : "shadow-md"
              } ${isClosed ? "opacity-70 grayscale" : ""}`}
            >
              {isClosed && (
                <div className="absolute -right-12 top-6 rotate-45 bg-gray-400 text-gray-900 py-1 w-40 text-center text-sm font-bold z-20">
                  Closed
                </div>
              )}

              <div
                className={`absolute inset-0 bg-gradient-to-br ${tier.color} ${
                  isClosed ? "opacity-40" : "opacity-90"
                }`}
              />

              {tier.isAvailable && (
                <div className="absolute -inset-[2px] rounded-2xl bg-[conic-gradient(from_0deg,#60a5fa,#3b82f6,#1e40af,#60a5fa)] blur-xl opacity-80 animate-spin-slow z-0" />
              )}

              <div className="relative p-8 text-white h-full flex flex-col">
                <div className="mb-6 flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <tier.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{tier.name}</h3>
                </div>

                <p className="text-white/80 mb-4">{tier.description}</p>

                <div className="mb-6">
                  <p className="text-4xl font-bold">{tier.price}</p>
                  <p className="text-sm text-white/80">{tier.priceDetail}</p>
                </div>

                {/* UX-improved feature list */}
                <ul className="space-y-2 mb-8 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm group"
                    >
                      <CheckCircle2 className="w-4 h-4 text-white/80 group-hover:text-white transition-colors duration-200" />
                      <span className="text-white/90 group-hover:text-white">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {isClosed ? (
                  <div className="flex items-center gap-2 text-sm text-white/80 italic mt-auto">
                    <Frown className="w-4 h-4" />
                    <span>
                      Registration closed — we’ll miss those who couldn’t join
                      😢
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center mt-auto gap-3">
                    <motion.a
                      href={formUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full text-center py-3 rounded-lg bg-white/20 hover:bg-white/30 text-white font-semibold backdrop-blur-md transition-all duration-200"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <HeartHandshake className="w-5 h-5" />
                        <span>Register Now</span>
                      </div>
                    </motion.a>
                    {isStillOpen && (
                      <p className="text-sm text-yellow-200 italic text-center">
                        Your presence means a lot — let’s make this event warm,
                        supportive, and full of good energy!
                      </p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
