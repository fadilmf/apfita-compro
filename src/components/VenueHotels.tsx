import { motion } from "framer-motion";
import { BedDouble } from "lucide-react";

interface Hotel {
  name: string;
  distance: string;
  priceRange: string;
  amenities: string[];
  image?: string;
  link?: string;
}

const hotels: Hotel[] = [
  {
    name: "IPB Convention Hotel",
    distance: "50 m",
    priceRange: "IDR 250k – USD 40",
    amenities: ["Restaurant", "Meeting rooms", "Direct access to Botani Square"],
    image: "https://www.ipb.ac.id/wp-content/uploads/2023/11/3-scaled.jpeg",
    link: "https://blst.co.id/ipb-convention-hotel/",
  },
  {
    name: "Favehotel Padjadjaran",
    distance: "200 m",
    priceRange: "USD 23+",
    amenities: ["Wi-Fi", "Pool", "Parking"],
    image: "https://www.hotelscombined.com/himg/2b/ca/e4/expediav2-739559-f585c8-407929.jpg",
    link: "https://favehotels.com/en/hotels/favehotel-padjadjaran-bogor",
  },
  {
    name: "Luminor Hotel Padjadjaran",
    distance: "150 m",
    priceRange: "USD 38+",
    amenities: ["Fitness center", "Bar", "Breakfast"],
    image: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-mobile/tix-hotel/images-web/2023/12/22/2de7a12b-a112-473f-a88c-a9c7fe1eeb29-1703229355740-ed0b6172126300ae63ec24cf0901ddeb.jpg",
    link: "https://luminorhotel.com/bogor",
  },
  {
    name: "Hotel Santika Bogor",
    distance: "80 m",
    priceRange: "USD 40",
    amenities: ["Parking", "Breakfast"],
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/e7/d8/d0/hotel-santika-bogor.jpg?w=900&h=500&s=1",
    link: "https://www.santika.com/id/hotel/detail/4/Hotel_Santika_Bogor",
  },
  {
    name: "Grand Savero Hotel",
    distance: "600 m",
    priceRange: "USD 22+",
    amenities: ["Pool", "Parking"],
    image: "https://images.trvl-media.com/lodging/94000000/93230000/93230000/93229971/afca8bdb.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    link: "https://www.grandsaverohotelbogor.com/",
  },
];

export function VenueHotels() {
  return (
    <section id="nearby-hotels" className="container scroll-mt-10 mx-auto px-4 py-12">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
            >
            <div className="flex items-center justify-center gap-2  mb-4">
                <BedDouble className="text-blue-600 size-10" />
                <h2 className="text-4xl font-bold text-navy-900">
                    Nearby Hotels & Accommodation
                </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Here are some recommended hotels within walking distance to the IPB Convention Center. We suggest booking early as availability may be limited during the event dates.
            </p>
        </motion.div>
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((h, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
                {h.image && (
                <img
                    src={h.image}
                    alt={h.name}
                    className="w-full h-40 object-cover"
                />
                )}
                <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{h.name}</h3>
                <span className="text-sm text-gray-500">{h.distance}</span>
                <span className="text-sm text-gray-700 my-1">{h.priceRange}</span>
                <div className="flex flex-wrap gap-1 text-xs text-gray-600 mb-4">
                    {h.amenities.map((a) => (
                    <span key={a} className="px-2 py-1 bg-gray-100 rounded">
                        {a}
                    </span>
                    ))}
                </div>
                {h.link && (
                    <a
                    href={h.link}
                    target="_blank"
                    className="mt-auto text-blue-600 hover:underline text-sm font-medium"
                    >
                    View Details
                    </a>
                )}
                </div>
            </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}