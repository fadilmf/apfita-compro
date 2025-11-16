import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Conference from "@/pages/Conference";
import TimeSchedule from "@/pages/TimeSchedule";
import Venue from "@/pages/Venue";
import Submissions from "@/pages/Submissions";
import Committees from "@/pages/Committees";
import ContactUs from "@/pages/ContactUs";
import ConferencePrice from "@/pages/Pricing";
import BoardMembers from "@/pages/BoardMembers";
import Links from "@/pages/LinksPage";
import NotFound from "@/pages/NotFound";

import MainLayout from "@/components/layout/MainLayout";
import NoLayout from "@/components/layout/NoLayout";

const AppRoutes = () => (
  <Routes>
    {/* Halaman dengan Navbar + Footer */}
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/conference" element={<Conference />} />
      <Route path="/time-schedule" element={<TimeSchedule />} />
      <Route path="/submissions" element={<Submissions />} />
      <Route path="/registration" element={<ConferencePrice />} />
      <Route path="/venue" element={<Venue />} />
      <Route path="/committees" element={<Committees />} />
      <Route path="/board-members" element={<BoardMembers />} />
      <Route path="/contact" element={<ContactUs />} />
    </Route>

    {/* Halaman TANPA Navbar & Footer */}
    <Route element={<NoLayout />}>
      <Route path="/linktree" element={<Links />} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
