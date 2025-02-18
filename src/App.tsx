import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/routes/AppRoutes";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MobileSidebar from "@/components/MobileSidebar";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Footer />
      <Navbar />
      <MobileSidebar />
    </BrowserRouter>
  );
}

export default App;
