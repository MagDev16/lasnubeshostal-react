import PageLayout from "@/components/layout/PageLayout";
import PageHero   from "@/components/layout/PageHero";
import Nosotros   from "@/components/sections/Nosotros";
import { IMG_EXTERIOR } from "@/data/images";

export default function NosotrosPage() {
  return (
    <PageLayout>
      <PageHero
        tag="Nuestra Historia"
        title={<>Un proyecto de<br /><em style={{ color: "var(--sun-lt)", fontStyle: "italic" }}>familia García</em></>}
        subtitle="Conoce el sueño que convirtió una casa de los años 70 en el refugio más auténtico de Cerro Punta."
        image={IMG_EXTERIOR}
        imagePosition="center 60%"
      />
      <Nosotros />
    </PageLayout>
  );
}
