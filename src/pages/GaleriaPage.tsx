import PageLayout from "@/components/layout/PageLayout";
import PageHero   from "@/components/layout/PageHero";
import Galeria    from "@/components/sections/Galeria";
import { IMG_RAINBOW } from "@/data/images";

export default function GaleriaPage() {
  return (
    <PageLayout>
      <PageHero
        tag="Imágenes"
        title={<>Vive el<br /><em style={{ color: "var(--sun-lt)", fontStyle: "italic" }}>paisaje</em></>}
        subtitle="Cada rincón de Las Nubes Hostal tiene su propia historia que contar."
        image={IMG_RAINBOW}
        imagePosition="center 55%"
      />
      <Galeria hideHeader />
    </PageLayout>
  );
}
