import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/routes/AppRoutes";
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
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
