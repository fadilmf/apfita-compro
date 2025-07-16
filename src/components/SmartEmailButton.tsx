import { Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
// import { toast } from "sonner";

export default function SmartEmailButton() {
  const email = "apfita2025@apps.ipb.ac.id";
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    // toast.success("Email copied to clipboard!");

    setTimeout(() => setCopied(false), 2000);

    // Open mail client
    window.location.href = `mailto:${email}`;
  };

  return (
    <button
      onClick={handleClick}
      className="group block w-full p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-blue-200"
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center relative">
        <Mail className="w-8 h-8 text-blue-600 group-hover:text-blue-800 transition-all duration-300" />
        {copied && (
          <div className="absolute -top-1 -right-1 bg-green-500 w-4 h-4 rounded-full flex items-center justify-center">
            Email copied to clipboard! <Check className="w-3 h-3 text-white" />
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
      <p className="text-sm text-gray-600 mb-4">Get in touch via email — we’ll open your email app and copy our address for you.</p>
      <div className="flex items-center justify-center text-sm font-medium">
        <span className="text-blue-600 group-hover:text-blue-800">Connect with us</span>
        <Copy className="w-4 h-4 ml-1 text-blue-600 group-hover:text-blue-800" />
      </div>
    </button>
  );
}
