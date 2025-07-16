import { Banknote } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function PaymentDestinationCard() {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative overflow-hidden rounded-xl border border-blue-100 bg-white p-6 md:p-8 shadow-lg"
    >
      {/* Badge */}
      <div className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
        Official
      </div>

      {/* Icon and Title */}
      <div className="flex items-center gap-3 mb-5">
        <div className="bg-blue-600 text-white p-2 rounded-md shadow-sm">
          <Banknote className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm text-blue-600 font-medium uppercase tracking-wide">
            Bank Transfer Info
          </p>
          <h3 className="text-xl font-bold text-gray-900">
            Payment Destination
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2 text-gray-700 text-sm md:text-base">
        <p>
          <span className="font-medium">Bank:</span> BNI
        </p>
        <p>
          <span className="font-medium">Account Number:</span> 3893705
        </p>
        <p>
          <span className="font-medium">Account Name:</span> Rektor IPB C/Q Kerjasama IPB
        </p>
      </div>

      {/* Optional footer note */}
      <p className="mt-6 text-xs text-gray-500">
        Please ensure the payment reference includes your full name and registration ID if applicable.
      </p>
    </motion.div>
  );
}
