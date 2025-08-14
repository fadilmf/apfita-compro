import { Mail, X, ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Clean, minimal email client logos with proper colors
const GmailLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="#EA4335"
      d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.727L12 10.91l9.637-7.09h.727c.904 0 1.636.732 1.636 1.636z"
    />
    <path
      fill="#FBBC04"
      d="M0 5.457c0-.904.732-1.636 1.636-1.636h.727L12 10.91V16.64L5.455 11.73V3.82L2.363 3.82z"
    />
    <path
      fill="#34A853"
      d="M18.545 11.73V20.002h3.819c.904 0 1.636-.732 1.636-1.636V5.457L12 16.64z"
    />
  </svg>
);

const YahooLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="#6001D2"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-1v-4l-2.5-5h1.2l1.8 3.6L12.3 8h1.2L11 13v4z"
    />
  </svg>
);

const OutlookLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path
      fill="#0078D4"
      d="M7 4h10c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
    />
    <path
      fill="#FFF"
      d="M12 7c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
    />
  </svg>
);

const emailClients = [
  {
    name: "Gmail",
    logo: GmailLogo,
    url: "https://mail.google.com/mail/?view=cm&to=",
    description: "Open in Gmail web app",
    color: "#EA4335",
  },
  {
    name: "Yahoo Mail",
    logo: YahooLogo,
    url: "https://compose.mail.yahoo.com/?to=",
    description: "Open in Yahoo Mail",
    color: "#6001D2",
  },
  {
    name: "Outlook",
    logo: OutlookLogo,
    url: "https://outlook.live.com/mail/0/deeplink/compose?to=",
    description: "Open in Outlook web app",
    color: "#0078D4",
  },
];

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function SmartEmailButton() {
  const email = "apfita2025@apps.ipb.ac.id";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleEmailClient = (clientUrl: string) => {
    window.open(`${clientUrl}${email}`, "_blank");
    setIsModalOpen(false);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Clean Main Button - matching the reference design */}
      <motion.button
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsModalOpen(true)}
        className="group border border-blue-200 block w-full p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 "
      >
        {/* Icon container with blue background like reference */}
        <div className="border-blue-600 relative w-16 h-16 mx-auto mb-4">
          <div className="border-blue-400 absolute inset-0 rounded-2xl bg-blue-300 blur-xl opacity-30 group-hover:opacity-40 transition duration-300" />
          <div className="border-cyan-400 relative z-10 w-full h-full rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          Get in touch via email — we'll open your email app and copy our
          address for you.
        </p>

        <div className="flex items-center justify-center">
          <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-300">
            Connect with us
          </span>
          <ExternalLink className="w-4 h-4 ml-1 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
        </div>
      </motion.button>

      {/* Clean Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
            >
              {/* Clean Modal Header */}
              <div className="relative p-6 border-b bg-blue-500">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-white">
                      Email Option
                    </h2>
                    <p className="text-white text-sm">
                      Choose your email client
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Address Display */}
              <div className="p-6 border-b border-gray-100">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 mb-1 font-medium">
                        Sending to:
                      </p>
                      <p className="font-mono text-sm text-gray-900 font-medium">
                        {email}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCopyEmail}
                      className="flex items-center space-x-1 px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-xs font-medium transition-colors duration-200"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Clean Email Client Options */}
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-4 font-medium">
                  Select your preferred email client:
                </p>
                <div className="space-y-3">
                  {emailClients.map((client, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleEmailClient(client.url)}
                      className="w-full flex items-center space-x-4 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 group"
                    >
                      {/* Clean logo container */}
                      <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-white flex items-center justify-center border border-gray-100 group-hover:border-gray-200 transition-all duration-200">
                        <client.logo />
                      </div>

                      <div className="flex-1 text-left">
                        <h3 className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-200">
                          {client.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {client.description}
                        </p>
                      </div>

                      <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center transition-colors duration-200">
                        <ExternalLink className="w-4 h-4 text-gray-500" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Clean Modal Footer */}
              <div className="bg-gray-50 p-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">
                    Email will open in a new tab
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium"
                  >
                    Cancel
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
