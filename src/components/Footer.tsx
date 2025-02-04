import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Conference", href: "/conference" },
    { name: "Time Schedule", href: "/schedule" },
    { name: "Guidelines", href: "/guidelines" },
    { name: "Submissions", href: "/submissions" },
    { name: "Venue", href: "/venue" },
    { name: "Committees", href: "/committees" },
    { name: "Download", href: "/download" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-100 to-blue-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Contact Section */}
          <div className="space-y-6">
            <img
              src="/src/assets/logo_conf.png"
              alt="Logo APFITA 2025"
              className="w-48"
            />
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>IPB Baranangsiang, Indonesia</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:info@ipb.com"
                  className="hover:text-white transition-colors"
                >
                  info@ipb.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+628111220536"
                  className="hover:text-white transition-colors"
                >
                  +628111220536 (Support)
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6">
              Navigation
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Sponsors Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">
              Grand Sponsors & Partners
            </h3>
            <div className="space-y-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Sarx8pE25lD0iuryK67JrrfLq5Zugu.png"
                alt="E3S Web of Conferences"
                className="bg-white p-2 rounded-lg w-[150px]"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Sarx8pE25lD0iuryK67JrrfLq5Zugu.png"
                alt="Horizon Research Publishing"
                className="bg-white p-2 rounded-lg w-[150px]"
              />
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-blue-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} APFITA 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
