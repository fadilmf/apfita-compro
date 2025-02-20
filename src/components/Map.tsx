import { MapPin } from "lucide-react";

interface VenueMapProps {
  title: string;
  location: string;
  description: string;
  isOnline?: boolean;
}

export default function Map({
  title,
  location,
  description,
  isOnline = false,
}: VenueMapProps) {
  const query = encodeURIComponent("IPB International Convention Center");

  return (
    <div className="flex flex-col lg:flex-row bg-[#001B3F] rounded-lg overflow-hidden">
      {/* Map Section */}
      <div className="w-full lg:w-1/2 h-[400px]">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${
            import.meta.env.VITE_GOOGLE_MAPS_API_KEY
          }&q=${query}`}
        ></iframe>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 p-8 flex flex-col items-start justify-center bg-gradient-to-br from-[#001B3F] to-[#002B5C]">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-4xl font-bold text-white tracking-tight">
            {title}
          </h2>
          <div className="mt-2 mb-6">
            <span className="text-blue-100 text-sm">
              {isOnline ? "On-site" : "On-site"}
            </span>
          </div>

          <div className="flex items-start gap-2 mb-4">
            <MapPin className="w-5 h-5 mt-1 text-white/80" />
            <p className="text-lg font-semibold text-white">{location}</p>
          </div>

          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
