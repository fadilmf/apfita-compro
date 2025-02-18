import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/routes/AppRoutes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/MobileSidebar";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
      <Footer />
      <Sidebar
        isOpen={false}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </BrowserRouter>
  );
}

export default App;
