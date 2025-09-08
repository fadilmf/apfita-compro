"use client";

import { motion } from "framer-motion";
import {
  Banknote,
  ShieldCheck,
  FileText,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { PaymentDestinationCard } from "./PaymentDestinationCard";

const paymentGuidelines = [
  {
    title: "Presenters (with publication)",
    description:
      "After receiving the abstract acceptance notification email from the APFITA committee, you are requested to proceed with the payment according to the stated amount. The proof of payment can be uploaded at the following link.",
    icon: FileText,
    link: "https://ipb.link/payment-apfita25",
    buttonText: "Submit Payment Proof",
    gradient: "from-blue-600/20 to-blue-500/10",
    iconGradient: "from-blue-600 to-blue-500",
  },
  {
    title: "Presenters (without publication)",
    description:
      "After receiving the abstract acceptance notification email from the APFITA committee, you are requested to proceed with the payment according to the stated amount. The proof of payment can be uploaded at the following link.",
    icon: ShieldCheck,
    link: "https://ipb.link/payment-apfita25",
    buttonText: "Submit Payment Proof",
    gradient: "from-blue-700/20 to-blue-600/10",
    iconGradient: "from-blue-700 to-blue-600",
  },
  {
    title: "Participants only",
    description:
      "Payment is due upon registration through the online form accessible via the following link. The deadline for both registration and payment is November 5, 2025.",
    icon: Banknote,
    link: "https://forms.gle/PnSKa2DdMgbs6MXL6",
    buttonText: "Register & Pay",
    gradient: "from-blue-500/20 to-blue-400/10",
    iconGradient: "from-blue-500 to-blue-400",
  },
];

export default function PaymentGuidelines() {
  return (
    <div className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgb(37_99_235/0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgb(59_130_246/0.06),transparent_60%)] pointer-events-none" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-600/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 1.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center space-y-16 relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Sparkles className="w-8 h-8 text-blue-600" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text pb-3 text-transparent mb-6">
              Registration Payment Guidelines
            </h1>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Sparkles className="w-8 h-8 text-blue-500" />
            </motion.div>
          </div>
          <p className="text-xl text-blue-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose your payment method and follow the streamlined process
            designed for your convenience
          </p>
        </motion.div>
        <PaymentDestinationCard />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
              },
            },
          }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12 items-stretch"
        >
          {paymentGuidelines.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    },
                  },
                }}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-left border border-blue-200/50 hover:border-blue-600/30 h-full flex flex-col overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgb(37_99_235/0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.iconGradient} text-white mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                    <Icon className="w-8 h-8 relative z-10" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 mb-8 flex-grow text-balance">
                    {item.description}
                  </p>

                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-600/25 mt-auto font-medium text-base relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">{item.buttonText}</span>
                    <motion.div
                      whileHover={{ x: 2 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <ExternalLink className="w-5 h-5 relative z-10" />
                    </motion.div>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
