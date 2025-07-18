import { motion } from "framer-motion";
import { Banknote, ShieldCheck, FileText } from "lucide-react";
import { PaymentDestinationCard } from "./PaymentDestinationCard";

const paymentGuidelines = [
  {
    title: "Presenters (with publication)",
    description:
      "Payment is required AFTER abstract acceptance. Further instructions will be provided by email.",
    icon: FileText,
  },
  {
    title: "Presenters (without publication)",
    description:
      "Payment is required AFTER abstract acceptance. Further instructions will be provided by email.",
    icon: ShieldCheck,
  },
  {
    title: "Participants only",
    description: "Payment is due UPON REGISTRATION via the online form.",
    icon: Banknote,
  },
];

export default function PaymentGuidelines() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text pb-3 text-transparent mb-6"
        >
          Payment Guidelines
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-5"
        >
          {paymentGuidelines.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-md transition-all text-left"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <PaymentDestinationCard />
      </div>
    </section>
  );
}
