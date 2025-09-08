import {
  Calendar,
  MapPin,
  // Video,
  Map,
  Building,
  Clock,
  ExternalLink,
} from "lucide-react";

export default function ConferenceTnV() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text pb-3 text-transparent mb-6">
          Time and Venue
        </h1>
        <p className="text-lg text-gray-600">
          The International Conference on APFITA 2025 will be held on
        </p>
      </div>

      <div className="bg-white border-2 rounded-lg shadow-md overflow-hidden">
        <div className="grid md:grid-cols-2 p-6 gap-4">
          {/* Date & Time Section */}
          <div className="flex flex-col space-y-4">
            <h2 className="flex items-center gap-2 text-2xl font-bold mb-2">
              <Calendar className="h-6 w-6 text-blue-600" />
              Date & Time
            </h2>
            <div className="flex flex-col justify-center">
              <p className="text-gray-600 mb-6">
                Mark your calendar for this important event
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="min-w-[4rem] h-16 bg-blue-100 rounded-lg flex flex-col items-center justify-center px-4">
                  <span className="text-sm font-medium text-blue-600">NOV</span>
                  <span className="text-2xl font-bold text-blue-600">
                    17-19
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <p className="font-semibold">November 17–19, 2025</p>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <p className="text-sm text-gray-600">
                      09:00 AM - 05:00 PM (GMT+7)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-t border-gray-200 md:hidden" />

          {/* Venue Section */}
          <div className="space-y-4">
            <h2 className="flex items-center gap-2 text-2xl font-bold mb-2">
              <MapPin className="h-6 w-6 text-blue-600" />
              Venue
            </h2>

            {/* Offline Venue */}
            <div className="p-4 rounded-lg border-2 border-blue-500">
              <div className="flex items-start gap-3 min-w-full">
                <Building className="h-5 w-5 text-blue-600 shrink-0 mt-1" />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">Venue</p>
                    <span className="px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                      Available
                    </span>
                  </div>
                  <p className="font-medium text-blue-600 mt-2">
                    IPB International Convention Center
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Botani Square Building 2nd Floor Jl. Pajajaran, Bogor, West
                    Java, Indonesia
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <ExternalLink className="h-3 w-3 text-gray-400" />
                    <a
                      href="https://www.instagram.com/ipbconventioncenter/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      more info
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/PnFnaPDAVSi7r5LG8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300 flex items-center justify-center gap-2"
            >
              <Map className="h-4 w-4" />
              View Venue Location
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
