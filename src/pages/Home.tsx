// import Endorsement from "@/components/Endorsement";
// ... rest of your code
import Navbar from "@/components/Navbar";
// import Comingsoon from "@/components/ComingSoon";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import Welcome from "@/components/Welcome";
import Imdates from "@/components/ImportantDates";
import Countdown from "@/components/CountdownTimer";
import ConferencePricing from "@/components/ConferencePricing";
import Map from "@/components/Map";

const Home = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50">
        <Navbar />
      </nav>

      <Hero />
      <Countdown />
      <Welcome />
      <Imdates />
      <ConferencePricing />
      <Sponsors />
      <div className="container mx-auto px-4 py-12">
        <Map
          title="EVENT VENUE"
          location="IPB International Convention Center"
          description="A distinguished convention center in Bogor, West Java, proudly managed by IPB University. It combines academic excellence with world-class facilities, making it the perfect venue for conferences, exhibitions, and prestigious events."
          isOnline={true}
        />
      </div>
      {/* <Endorsement /> */}

      {/* Important Dates */}
      {/* <section className="py-16 bg-blue-600 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Important Dates
        </h2>
        <ul className="space-y-4 text-lg text-center">
          <li>Abstract Submission Deadline: August 1, 2025</li>
          <li>Notification of Acceptance: September 1, 2025</li>
          <li>Early Bird Registration Deadline: October 1, 2025</li>
          <li>Conference Dates: November 6-8, 2025</li>
        </ul>
      </section> */}
    </>
  );
};

export default Home;
