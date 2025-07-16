// import Endorsement from "@/components/Endorsement";
// ... rest of your code
// import Navbar from "@/components/Navbar";
// import Comingsoon from "@/components/ComingSoon";
import Header from "@/components/Header";
import BoardMembersContent from "@/components/BoardMembersContent";
// import Reviewers from "@/components/Reviewers";

// import Sponsors from "@/components/Sponsors";

const BoardMembers = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <BoardMembersContent />
      </div>
    </>
  );
};

export default BoardMembers;
