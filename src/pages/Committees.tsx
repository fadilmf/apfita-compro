import Header from "@/components/Header";
import Reviewers from "@/components/Reviewers";
import CommitteesContent from "@/components/CommitteesContent";

const Venue = () => {
  return (
    <>
      <Header />
      <div className="lg:min-h-screen bg-gray-50">
        <CommitteesContent />
      </div>
      <div className="lg:min-h-screen bg-white">
        <Reviewers />
      </div>
    </>
  );
};

export default Venue;
