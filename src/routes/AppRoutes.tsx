import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
// import About from "../pages/About";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
