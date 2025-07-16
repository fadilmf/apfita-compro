import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/routes/AppRoutes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterNew";
import { useEffect } from "react";
import ScrollToHash from "@/components/ScrollToHash";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
