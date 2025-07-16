import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Conference from "@/pages/Conference";
// import Comingsoon from "@/pages/Comingsoon";
import TimeSchedule from "@/pages/TimeSchedule";
import Venue from "@/pages/Venue";
import Submissions from "@/pages/Submissions";
import Committees from "@/pages/Committees";
// import Download from "@/pages/DownloadFile";
import Congrats from "@/pages/Congrats";
import ContactUs from "@/pages/ContactUs";
import NotFound from "@/pages/NotFound"; // Import halaman 404
import ConferencePrice from "@/pages/Pricing";
import BoardMembers from "@/pages/BoardMembers";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/conference" element={<Conference />} />
    <Route path="/time-schedule" element={<TimeSchedule />} />
    <Route path="/submissions" element={<Submissions />} />
    <Route path="/regfee" element={<ConferencePrice />} />
    <Route path="/venue" element={<Venue />} />
    <Route path="/committees" element={<Committees />} />
    <Route path="/board-members" element={<BoardMembers />} />
    <Route path="/contact" element={<ContactUs />} />
    <Route path="/selamat-ya-mas-pian" element={<Congrats />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
