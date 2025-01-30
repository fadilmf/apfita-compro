// import Endorsement from "@/components/Endorsement";
import Navbar from "@/components/Navbar";
// import Comingsoon from "@/components/ComingSoon";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import Welcome from "@/components/Welcome";
import Imdates from "@/components/ImportantDates";
// import Hero from "@/components/Hero";
// import Sponsors from "@/components/Sponsors";

const Home = () => {
  return (
    <>
      <Hero />
      <Navbar />
      <Welcome />
      <Imdates />
      <Sponsors />
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
