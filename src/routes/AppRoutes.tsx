import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Conference from "@/pages/Conference";
import Comingsoon from "@/pages/Comingsoon";
import TimeSchedule from "@/pages/TimeSchedule";
import Venue from "@/pages/Venue";
import GuideLines from "@/pages/GuideLines";
import Submissions from "@/pages/Submissions";
import Committees from "@/pages/Committees";
// import About from "../pages/About";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Comingsoon />} />
      <Route path="/dev" element={<Home />} />
      <Route path="/conference" element={<Conference />} />
      <Route path="/time-schedule" element={<TimeSchedule />} />
      <Route path="/guidelines" element={<GuideLines />} />
      <Route path="/submissions" element={<Submissions />} />
      <Route path="/venue" element={<Venue />} />
      <Route path="/committees" element={<Committees />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
