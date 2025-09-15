import { Users, Sparkles, Globe } from "lucide-react";

export interface PricingTier {
  name: string;
  description: string;
  icon: React.ElementType;
  features: {
    text: string;
    tooltip?: string;
    isBlink?: boolean;
  }[];
  badge?: string;
  price: string;
  priceDetail: string;
  color: string;
  registrationType: string;
  popular?: boolean;
  isAvailable: boolean; 
}

export const pricingTiers: PricingTier[] = [
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
        {
          text: "10% Discount for IPB Students",
          tooltip:
            "Valid only for IPB students with student ID",
          isBlink: true,
        },
        {
          text: "50% Discount for Second Paper (IPB Students Only)",
          tooltip:
            "Applicable only for IPB students and if both papers are submitted by the same author",
          isBlink: true,
        },
        { text: "Official Certificate of Presentation" },
        { text: "Publication in Conference Proceedings" },
        { text: "Exclusive Conference Souvenir" },
        { text: "Complimentary Lunch for All Conference Days" },
        { text: "Coffee & Refreshment Breaks" },
        { text: "Invitation to Gala Dinner Event" },
        { text: "Networking Opportunities with Experts" },
      ],
      isAvailable: true,
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
      isAvailable: true,
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
        { text: "Publication in Conference Proceedings" },
        { text: "Exclusive Conference Souvenir" },
        { text: "Complimentary Lunch for All Conference Days" },
        { text: "Coffee & Refreshment Breaks" },
        { text: "Invitation to Gala Dinner Event" },
        { text: "Access to All Conference Sessions" },
        { text: "Networking with Global Researchers" },
        { text: "Digital Access to All Presentations" },
      ],
      isAvailable: true,
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
        { text: "Publication in Conference Proceedings" },
        { text: "Exclusive Conference Souvenir" },
        { text: "Complimentary Lunch for All Conference Days" },
        { text: "Coffee & Refreshment Breaks" },
        { text: "Invitation to Gala Dinner Event" },
        { text: "Access to All Conference Sessions" },
        { text: "Networking with Global Researchers" },
        { text: "Digital Access to All Presentations" },
      ],
      isAvailable: true,
    },
    {
      name: "Participant Only",
      description: "For non-presenting attendees from Indonesia",
      icon: Users,
      price: "IDR 100,000",
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
  ];