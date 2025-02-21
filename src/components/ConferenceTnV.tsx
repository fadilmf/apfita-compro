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
        <h1 className="text-4xl font-bold text-navy-900 mb-4">
          Time and Venue
        </h1>
        <p className="text-lg text-gray-600">
          The International Conference on APFITA 2025 will be held on
        </p>
      </div>

      <div className="bg-white border-2 rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold mb-2">
            <Calendar className="h-6 w-6 text-blue-600" />
            Date & Time
          </h2>
          <p className="text-gray-600 mb-6">
            Mark your calendar for this important event
          </p>

          <div className="flex flex-col gap-6">
            {/* Date & Time Section */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="min-w-[4rem] h-16 bg-blue-100 rounded-lg flex flex-col items-center justify-center px-4">
                <span className="text-sm font-medium text-blue-600">NOV</span>
                <span className="text-2xl font-bold text-blue-600">17-19</span>
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

            <hr className="border-t border-gray-200" />

            {/* Venue Section */}
            <div className="space-y-4">
              <h2 className="flex items-center gap-2 text-2xl font-bold mb-2">
                <MapPin className="h-6 w-6 text-blue-600" />
                Venue
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
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
                        Botani Square Building 2nd Floor Jl. Pajajaran, Bogor,
                        West Java, Indonesia
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
              </div>
            </div>

            {/* Online Venue */}
            {/* <div className="p-4 rounded-lg border-2 border-gray-200">
                  <div className="flex items-start gap-3">
                    <Video className="h-5 w-5 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">Online Session</p>
                        <span className="px-2 py-1 text-xs font-semibold text-blue-600 bg-gray-100 rounded-full">
                          Coming Soon
                        </span>
                      </div>
                      <p className="font-medium text-blue-600 mt-2">
                        Zoom Meeting
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Join us virtually through Zoom platform
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Meeting ID & Password Coming Soon
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Action Buttons */}
            <div className="grid gap-3 sm:grid-cols-2 mt-4">
              <a
                href="https://maps.app.goo.gl/PnFnaPDAVSi7r5LG8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300 flex items-center justify-center gap-2"
              >
                <Map className="h-4 w-4" />
                View Venue Location
              </a>
              {/* <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 flex items-center justify-center gap-2 opacity-50 cursor-not-allowed"
                onClick={(e) => e.preventDefault()} // Mencegah klik
              >
                <Video className="h-4 w-4" />
                Join Virtual Meeting
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
