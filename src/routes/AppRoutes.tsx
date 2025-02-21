import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Conference from "@/pages/Conference";
// import Comingsoon from "@/pages/Comingsoon";
import TimeSchedule from "@/pages/TimeSchedule";
import Venue from "@/pages/Venue";
import GuideLines from "@/pages/GuideLines";
import Submissions from "@/pages/Submissions";
import Committees from "@/pages/Committees";
import Download from "@/pages/DownloadFile";
import ContactUs from "@/pages/ContactUs";
import NotFound from "@/pages/NotFound"; // Import halaman 404

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/conference" element={<Conference />} />
    <Route path="/time-schedule" element={<TimeSchedule />} />
    <Route path="/guidelines" element={<GuideLines />} />
    <Route path="/submissions" element={<Submissions />} />
    <Route path="/venue" element={<Venue />} />
    <Route path="/committees" element={<Committees />} />
    <Route path="/download" element={<Download />} />
    <Route path="/contact" element={<ContactUs />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
