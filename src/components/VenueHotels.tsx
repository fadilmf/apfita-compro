import { motion } from "framer-motion";
import {
  BedDouble,
  MapPin,
  Star,
  ExternalLink,
  Wifi,
  Car,
  Utensils,
  Dumbbell,
} from "lucide-react";

interface Hotel {
  name: string;
  distance: string;
  priceRange: string;
  amenities: string[];
  image?: string;
  link?: string;
  rating?: number;
  category?: string;
}

const hotels: Hotel[] = [
  {
    name: "IPB Convention Hotel",
    distance: "50 m",
    priceRange: "IDR 250k – USD 40",
    amenities: [
      "Restaurant",
      "Meeting rooms",
      "Direct access to Botani Square",
    ],
    image: "https://www.ipb.ac.id/wp-content/uploads/2023/11/3-scaled.jpeg",
    link: "https://blst.co.id/ipb-convention-hotel/",
    rating: 4.5,
    category: "Convention Hotel",
  },
  {
    name: "Favehotel Padjadjaran",
    distance: "200 m",
    priceRange: "USD 23+",
    amenities: ["Wi-Fi", "Pool", "Parking"],
    image:
      "https://www.hotelscombined.com/himg/2b/ca/e4/expediav2-739559-f585c8-407929.jpg",
    link: "https://favehotels.com/en/hotels/favehotel-padjadjaran-bogor",
    rating: 4.2,
    category: "Business Hotel",
  },
  {
    name: "Luminor Hotel Padjadjaran",
    distance: "150 m",
    priceRange: "USD 38+",
    amenities: ["Fitness center", "Bar", "Breakfast"],
    image:
      "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-mobile/tix-hotel/images-web/2023/12/22/2de7a12b-a112-473f-a88c-a9c7fe1eeb29-1703229355740-ed0b6172126300ae63ec24cf0901ddeb.jpg",
    link: "https://luminorhotel.com/bogor",
    rating: 4.3,
    category: "Luxury Hotel",
  },
  {
    name: "Hotel Santika Bogor",
    distance: "80 m",
    priceRange: "USD 40",
    amenities: ["Parking", "Breakfast"],
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/e7/d8/d0/hotel-santika-bogor.jpg?w=900&h=500&s=1",
    link: "https://www.santika.com/id/hotel/detail/4/Hotel_Santika_Bogor",
    rating: 4.1,
    category: "Premium Hotel",
  },
  {
    name: "Grand Savero Hotel",
    distance: "600 m",
    priceRange: "USD 22+",
    amenities: ["Pool", "Parking"],
    image:
      "https://images.trvl-media.com/lodging/94000000/93230000/93230000/93229971/afca8bdb.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    link: "https://www.grandsaverohotelbogor.com/",
    rating: 4.0,
    category: "Grand Hotel",
  },
];

const getAmenityIcon = (amenity: string) => {
  const amenityLower = amenity.toLowerCase();
  if (amenityLower.includes("wifi") || amenityLower.includes("wi-fi"))
    return <Wifi className="w-3 h-3" />;
  if (amenityLower.includes("parking") || amenityLower.includes("car"))
    return <Car className="w-3 h-3" />;
  if (
    amenityLower.includes("restaurant") ||
    amenityLower.includes("breakfast") ||
    amenityLower.includes("bar")
  )
    return <Utensils className="w-3 h-3" />;
  if (amenityLower.includes("fitness") || amenityLower.includes("gym"))
    return <Dumbbell className="w-3 h-3" />;
  return null;
};

export function VenueHotels() {
  return (
    <section
      id="nearby-hotels"
      className="relative scroll-mt-10 py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.05)_1px,transparent_0)] [background-size:24px_24px]" />

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full border border-blue-200/50">
            <BedDouble className="text-blue-600 w-6 h-6" />
            <span className="text-sm font-medium text-blue-700 uppercase tracking-wider">
              Nearby Hotels & Accommodation
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6">
            Hotels & Suites
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience world-class hospitality at these carefully curated
            accommodations, all within walking distance of the IPB Convention
            Center.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 text-sm text-amber-700 bg-amber-50 px-4 py-2 rounded-full border border-amber-200">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span className="font-medium">
              Book early for exclusive rates and availability
            </span>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {hotels.map((hotel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  {hotel.image && (
                    <>
                      <img
                        src={hotel.image || "/placeholder.svg"}
                        alt={hotel.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-slate-700 rounded-full border border-white/20">
                          {hotel.category}
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-semibold text-slate-700">
                          {hotel.rating}
                        </span>
                      </div>

                      {/* Distance Badge */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                        <MapPin className="w-3 h-3" />
                        <span className="text-xs font-medium">
                          {hotel.distance}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {hotel.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-emerald-600">
                        {hotel.priceRange}
                      </span>
                      <span className="text-sm text-slate-500">per night</span>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                      Amenities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.map((amenity, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 rounded-lg text-xs font-medium transition-colors border border-slate-200/50"
                        >
                          {getAmenityIcon(amenity)}
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  {hotel.link && (
                    <a
                      href={hotel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                      <span>View Details & Book</span>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </a>
                  )}
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        ></motion.div>
      </div>
    </section>
  );
}
