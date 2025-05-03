import { BrowserRouter, useLocation } from "react-router-dom";
import AppRoutes from "@/routes/AppRoutes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/MobileSidebar";
import { useState } from "react";

function LayoutWrapper() {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Halaman yang tidak pakai layout
  const noLayoutRoutes = ["/selamat-ya-mas-pian"];
  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      <AppRoutes />
      {!hideLayout && <Footer />}
      {!hideLayout && (
        <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper />
    </BrowserRouter>
  );
}
