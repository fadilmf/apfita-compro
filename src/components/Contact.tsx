import { motion } from "framer-motion";
import { PhoneIcon as WhatsApp, Mail, Instagram } from "lucide-react";

const contactMethods = [
  {
    name: "WhatsApp",
    icon: WhatsApp,
    href: "https://wa.me/6282214269503",
    color: "bg-green-500",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:contact@apfita2025.com",
    color: "bg-blue-500",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/apfita2025",
    color: "bg-pink-500",
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
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-navy-900 mb-6"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Have questions about APFITA 2025? We're here to help! Reach out to
            us through any of the following channels.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {contactMethods.map((method) => (
            <motion.div key={method.name} variants={itemVariants}>
              <a
                href={method.href}
                className={`block p-8 rounded-2xl shadow-lg ${method.color} text-white transition-shadow hover:shadow-xl`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <method.icon className="w-20 h-20 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold">{method.name}</h3>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center text-gray-600"
        >
          <p>We look forward to hearing from you!</p>
          <p className="mt-2">Our team will respond as soon as possible.</p>
        </motion.div>
      </div>
    </div>
  );
}
