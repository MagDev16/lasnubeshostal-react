import PageLayout from "@/components/layout/PageLayout";
import PageHero   from "@/components/layout/PageHero";
import Resenas    from "@/components/sections/Resenas";
import { IMG_EXT_TERRACE2 } from "@/data/images";

export default function ResenasPage() {
  return (
    <PageLayout>
      <PageHero
        tag="Opiniones"
        title={<>Lo que dicen<br /><em style={{ color: "var(--sun-lt)", fontStyle: "italic" }}>nuestros huéspedes</em></>}
        subtitle="Más de 29 reseñas reales de viajeros que eligieron Las Nubes Hostal."
        image={IMG_EXT_TERRACE2}
        imagePosition="center 50%"
      />
      <Resenas />
    </PageLayout>
  );
}
