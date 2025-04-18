"use client";

import { Check, GraduationCap, Users, Sparkles } from "lucide-react";
import type React from "react";

interface PricingTier {
  name: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  badge?: string;
}

export default function ConferencePricing() {
  // const [currency, setCurrency] = useState<Currency>("IDR")

  const pricingTiers: PricingTier[] = [
    {
      name: "Indonesian Presenter",
      description: "For presenters from Indonesia",
      icon: Sparkles,
      badge: "Most Popular",
      features: [
        "Full Conference Access",
        "Conference Materials",
        "Welcome Reception",
        "Gala Dinner",
        "Coffee Breaks",
        "Certificate of Attendance",
        "Conference Proceedings",
        "IDR 2,500,000/paper",
        "Discount 10% for Student",
        "Discount 50% for Second Paper",
      ],
    },
    {
      name: "International Presenter",
      description: "For presenters from outside Indonesia",
      icon: GraduationCap,
      features: [
        "Full Conference Access",
        "Conference Materials",
        "Welcome Reception",
        "Gala Dinner",
        "Coffee Breaks",
        "Certificate of Attendance",
        "Conference Proceedings",
        "USD 375/paper",
      ],
    },
    {
      name: "Indonesian Participant Only",
      description: "For non-presenting participants from Indonesia",
      icon: Users,
      features: [
        "Full Conference Access",
        "Conference Materials",
        "Welcome Reception",
        "Coffee Breaks",
        "Certificate of Attendance (E-certificate)",
        "No Paper Presentation",
        "IDR 100,000",
      ],
    },
  ];

  // const formatPrice = (amount: number) => {
  //   if (currency === "IDR") {
  //     return new Intl.NumberFormat("id-ID", {
  //       style: "currency",
  //       currency: "IDR",
  //       minimumFractionDigits: 0,
  //       maximumFractionDigits: 0,
  //     }).format(amount)
  //   }
  //   return new Intl.NumberFormat("en-US", {
  //     style: "currency",
  //     currency: "USD",
  //     minimumFractionDigits: 0,
  //     maximumFractionDigits: 0,
  //   }).format(amount * EXCHANGE_RATE.USD)
  // }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Registration Fee For APFITA 2025
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the registration package that best suits your needs
        </p>

        {/* Currency Switcher */}
        {/* <div className="mt-6 inline-flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
          {(["IDR", "USD"] as Currency[]).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                ${currency === c ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"}`}
            >
              {c}
            </button>
          ))}
        </div> */}
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingTiers.map((tier, index) => {
          const Icon = tier.icon;
          return (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 ${
                index === 0
                  ? "bg-blue-600 text-white shadow-xl"
                  : "bg-white border-2 border-gray-200"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-blue-900 text-sm font-semibold rounded-full">
                  {tier.badge}
                </span>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Icon
                    className={`w-5 h-5 ${
                      index === 0 ? "text-blue-200" : "text-blue-600"
                    }`}
                  />
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                </div>
                <p
                  className={`text-sm ${
                    index === 0 ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {tier.description}
                </p>
              </div>

              <div className="mb-6">
                <p className="text-3xl font-bold">
                  {index === 0
                    ? "IDR 2,500,000"
                    : index === 1
                    ? "USD 375"
                    : "IDR 100,000"}
                </p>
                <p
                  className={`text-sm mt-1 ${
                    index === 0 ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  {index === 0
                    ? "per paper"
                    : index === 1
                    ? "per paper"
                    : "with E-certificate"}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 mt-0.5 ${
                        index === 0 ? "text-blue-200" : "text-blue-600"
                      }`}
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/register"
                className={` block w-full py-3 px-6 rounded-lg text-sm font-semibold text-center 
                  ${
                    index === 0
                      ? "bg-white text-blue-600"
                      : "bg-blue-600 text-white"
                  }`}
              >
                Register Now
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
