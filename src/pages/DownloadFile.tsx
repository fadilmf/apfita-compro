// import Endorsement from "@/components/Endorsement";
// ... rest of your code
import Navbar from "@/components/Navbar";
// import Comingsoon from "@/components/ComingSoon";
import Header from "@/components/Header";
import Download from "@/components/Download";
import GuideLinesContent from "@/components/GuideLinesContent";

// import Sponsors from "@/components/Sponsors";

const DownloadFile = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <Download />
      </div>
      <div className="min-h-screen bg-white">
        <GuideLinesContent />
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

export default DownloadFile;
