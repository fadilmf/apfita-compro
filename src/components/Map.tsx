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
  // Replace spaces with plus signs for the query parameter
  const query = encodeURIComponent("Sekolah Vokasi Institut Pertanian Bogor");

  return (
    <div className="grid lg:grid-cols-2 gap-6 bg-gradient-to-br from-blue-950 to-blue-900 rounded-lg overflow-hidden">
      <div className="w-full h-[400px] lg:h-full min-h-[400px]">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${query}`}
        ></iframe>
      </div>
      <div className="p-8 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
        <div className="inline-flex items-center bg-blue-800/50 text-blue-100 rounded-full px-4 py-1 text-sm mb-6">
          {isOnline ? "Online" : "On-site"}
        </div>
        <div className="space-y-4 text-gray-200">
          <p className="text-xl font-semibold">{location}</p>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}
