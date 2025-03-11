import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneIcon as WhatsApp,
  Mail,
  Instagram,
  CheckCircle,
  ExternalLink,
  X,
  User,
} from "lucide-react";

const contactMethods = [
  {
    name: "WhatsApp",
    icon: WhatsApp,
    href: "#", // Changed to # to handle click in component
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

const whatsappContacts = [
  {
    name: "General Support",
    number: "+62-812-7451-3242",
    department: "Customer Service",
  },
  {
    name: "Technical Support",
    number: "+62 822-1426-9503",
    department: "IT Department",
  },
  {
    name: "Admin Support1",
    number: "+62 859-2158-3103",
    department: "Team Admin",
  },
  {
    name: "Admin Support2",
    number: "+62 812-8257-5650",
    department: "Team Admin",
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

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.2,
    },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Contact() {
  const [hoveredMethod, setHoveredMethod] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    }

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const handleContactMethodClick = (method: string, href: string) => {
    if (method === "WhatsApp") {
      setIsModalOpen(true);
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  const openWhatsApp = (number: string) => {
    window.open(
      `https://wa.me/${number.replace(/[^0-9]/g, "")}`,
      "_blank",
      "noopener,noreferrer"
    );
    setIsModalOpen(false);
  };

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
              <button
                onClick={() =>
                  handleContactMethodClick(method.name, method.href)
                }
                className={`group block w-full p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 ${method.borderColor}`}
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
              </button>
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

      {/* WhatsApp Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />

            <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
              <motion.div
                ref={modalRef}
                className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="bg-green-500 text-white p-4 flex justify-between items-center">
                  <h3 className="text-xl font-bold">
                    WhatsApp Contact Options
                  </h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-1 rounded-full hover:bg-green-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-4">
                  <p className="text-gray-600 mb-4">
                    Please select the appropriate contact for your inquiry:
                  </p>

                  <div className="space-y-3">
                    {whatsappContacts.map((contact, index) => (
                      <button
                        key={index}
                        onClick={() => openWhatsApp(contact.number)}
                        className="w-full p-3 flex items-start border border-gray-200 rounded-lg hover:bg-green-50 transition-colors"
                      >
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <User className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-gray-800">
                            {contact.name}
                          </div>
                          <div className="text-green-600">{contact.number}</div>
                          <div className="text-xs text-gray-500">
                            {contact.department}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <p className="mt-4 text-sm text-gray-500 text-center">
                    Our team is available Monday-Friday, 9am-5pm (GMT+7)
                  </p>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
