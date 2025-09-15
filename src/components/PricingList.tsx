import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Check, Calendar } from "lucide-react";
import { motion } from "framer-motion";
// import type React from "react";
import { pricingTiers } from "@/data/conference";

export default function ConferencePricing() {
  // const navigate = useNavigate();
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState<number | null>(null);

  // Animation variants
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
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  // Handle registration button click
  // const handleRegister = (registrationType: string) => {
  //   // Navigate to registration page with the selected tier as a query parameter
  //   navigate(`/register?type=${registrationType}`);
  // };

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
          Select your registration package and be part of the innovation shaping
          the future of agriculture
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {pricingTiers.map((tier, index) => {
          // const Icon = tier.icon;
          // const isPopular = tier.popular;
          const isHovered = isHovering === index;

          return (
            <motion.div
              key={tier.name}
              variants={itemVariants}
              onMouseEnter={() => setIsHovering(index)}
              onMouseLeave={() => setIsHovering(null)}
              onClick={() => tier.isAvailable && setSelectedTier(index)} // hanya select jika available
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                (isHovered || selectedTier === index) && tier.isAvailable
                  ? "transform scale-105 shadow-2xl z-10"
                  : "shadow-lg"
              } ${
                !tier.isAvailable
                  ? "opacity-70 grayscale pointer-events-none"
                  : ""
              }`}
            >
              {/* Ribbon */}
              {!tier.isAvailable && (
                <div className="absolute -right-12 top-6 rotate-45 bg-gray-300 text-gray-800 py-1 w-40 text-center text-sm font-bold z-20">
                  Coming Soon
                </div>
              )}

              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-90`}
              />

              {/* Content */}
              <div className="relative p-8 text-white h-full flex flex-col">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <tier.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{tier.name}</h3>
                  </div>
                  <p className="text-white/80">{tier.description}</p>
                </div>

                <div className="mb-8">
                  {tier.isAvailable ? (
                    <div className="flex items-end gap-1">
                      <p className="text-4xl font-bold">{tier.price}</p>
                      {tier.popular && (
                        <div className="text-sm line-through text-white/70 mb-1.5">
                          IDR 2,950,000
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-2xl font-semibold text-white/80">TBA</p>
                  )}
                  <p className="text-sm mt-1 text-white/80">
                    {tier.priceDetail}
                  </p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 relative group">
                      <div className="bg-white/20 rounded-full p-0.5 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-white">
                        {feature.text}
                        {feature.tooltip && (
                          <span className="ml-2 text-white/80 cursor-help relative group">
                            ⓘ
                            {/* Tooltip container */}
                            <div className="absolute -left-16 top-full mt-1 text-xs w-32 bg-black text-white rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                              {feature.tooltip}
                            </div>
                          </span>
                        )}
                      </span>
                    </li>
                  ))}

                </ul>
              </div>
            </motion.div>

            // <motion.div
            //   key={tier.name}
            //   variants={itemVariants}
            //   onMouseEnter={() => setIsHovering(index)}
            //   onMouseLeave={() => setIsHovering(null)}
            //   onClick={() => setSelectedTier(index)}
            //   className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
            //     isHovered || selectedTier === index
            //       ? "transform scale-105 shadow-2xl z-10"
            //       : "shadow-lg"
            //   }`}
            // >
            //   {/* Background gradient */}
            //   <div
            //     className={`absolute inset-0 bg-gradient-to-br ${
            //       tier.color
            //     } opacity-${isPopular ? "100" : isHovered ? "90" : "80"}`}
            //   ></div>

            //   {/* Content */}
            //   <div className="relative p-8 text-white h-full flex flex-col">
            //     {tier.badge && (
            //       <div className="absolute -right-12 top-6 rotate-45 bg-yellow-400 text-blue-900 py-1 w-40 text-center text-sm font-bold">
            //         {tier.badge}
            //       </div>
            //     )}

            //     <div className="mb-6">
            //       <div className="flex items-center gap-3 mb-3">
            //         <div className="p-2 bg-white/20 rounded-lg">
            //           <Icon className="w-6 h-6 text-white" />
            //         </div>
            //         <h3 className="text-2xl font-bold">{tier.name}</h3>
            //       </div>
            //       <p className="text-white/80">{tier.description}</p>
            //     </div>

            //     <div className="mb-8">
            //       <div className="flex items-end gap-1">
            //         <p className="text-4xl font-bold">{tier.price}</p>
            //         {isPopular && (
            //           <div className="text-sm line-through text-white/70 mb-1.5">
            //             IDR 2,950,000
            //           </div>
            //         )}
            //       </div>
            //       <p className="text-sm mt-1 text-white/80">
            //         {tier.priceDetail}
            //       </p>
            //     </div>

            //     <ul className="space-y-4 mb-8 flex-grow">
            //       {tier.features.map((feature) => (
            //         <li key={feature} className="flex items-start gap-3">
            //           <div className="bg-white/20 rounded-full p-0.5 mt-0.5">
            //             <Check className="w-4 h-4 text-white" />
            //           </div>
            //           <span className="text-sm">{feature}</span>
            //         </li>
            //       ))}
            //     </ul>

            /* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the parent onClick
                    handleRegister(tier.registrationType);
                  }}
                  className={`w-full py-4 px-6 rounded-lg text-base font-semibold flex items-center justify-center gap-2
                    ${
                      isPopular
                        ? "bg-yellow-400 text-blue-900"
                        : "bg-white text-gray-900"
                    } 
                    transition-all duration-300 hover:shadow-lg cursor-pointer`}
                >
                  Register Now
                  <ArrowRight className="w-4 h-4" />
                </motion.button> */
            //   </div>
            // </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
