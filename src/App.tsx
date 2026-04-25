import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Layout & sections (home page)
import Navbar           from "@/components/sections/Navbar";
import Hero             from "@/components/sections/Hero";
import Badges           from "@/components/sections/Badges";
import Nosotros         from "@/components/sections/Nosotros";
import Servicios        from "@/components/sections/Servicios";
import Habitaciones     from "@/components/sections/Habitaciones";
import Galeria          from "@/components/sections/Galeria";
import Resenas          from "@/components/sections/Resenas";
import Mapa             from "@/components/sections/Mapa";
import Contacto         from "@/components/sections/Contacto";
import Footer           from "@/components/sections/Footer";

// Independent pages
import NosotrosPage     from "@/pages/NosotrosPage";
import ServiciosPage    from "@/pages/ServiciosPage";
import HabitacionesPage from "@/pages/HabitacionesPage";
import GaleriaPage      from "@/pages/GaleriaPage";
import ContactoPage     from "@/pages/ContactoPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <Badges />
        <Nosotros />
        <Servicios />
        <Habitaciones />
        <Galeria />
        <Resenas />
        <Mapa />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"             element={<HomePage />} />
        <Route path="/nosotros"     element={<NosotrosPage />} />
        <Route path="/servicios"    element={<ServiciosPage />} />
        <Route path="/habitaciones" element={<HabitacionesPage />} />
        <Route path="/galeria"      element={<GaleriaPage />} />
        <Route path="/resenas"      element={<HomePage />} />
        <Route path="/ubicacion"    element={<ContactoPage />} />
        <Route path="/contacto"     element={<ContactoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
