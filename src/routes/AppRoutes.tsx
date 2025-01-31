import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Comingsoon from "@/pages/Comingsoon";
// import About from "../pages/About";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Comingsoon />} />
      <Route path="/dev" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
