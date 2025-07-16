import Header from "@/components/Header";
import VenueContent from "@/components/VenueContent";
import Transport from "@/components/Transport";
import { VenueHotels } from "@/components/VenueHotels";
// import Sponsors from "@/components/Sponsors";

const Venue = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-50">
        <VenueContent />
      </div>
      <Transport />
      <div className="bg-gradient-to-bl to-blue-50 from-green-50">
        <VenueHotels />
      </div>
    </>
  );
};

export default Venue;
