import "./index.css";
import Navbar       from "@/components/sections/Navbar";
import Hero         from "@/components/sections/Hero";
import Badges       from "@/components/sections/Badges";
import Nosotros     from "@/components/sections/Nosotros";
import Servicios    from "@/components/sections/Servicios";
import Habitaciones from "@/components/sections/Habitaciones";
import Galeria      from "@/components/sections/Galeria";
import Resenas      from "@/components/sections/Resenas";
import Mapa         from "@/components/sections/Mapa";
import Contacto     from "@/components/sections/Contacto";
import Footer       from "@/components/sections/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
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
    </>
  );
}
