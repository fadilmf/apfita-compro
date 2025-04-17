// import Endorsement from "@/components/Endorsement";
// ... rest of your code
import Navbar from "@/components/Navbar";
// import Comingsoon from "@/components/ComingSoon";
import Header from "@/components/Header";
import SubmissionsContent from "@/components/SubmissionContent";

// import Sponsors from "@/components/Sponsors";

const TimeSchedule = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <SubmissionsContent />
      </div>
    </>
  );
};

export default TimeSchedule;
