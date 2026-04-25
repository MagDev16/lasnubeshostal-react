import PageLayout  from "@/components/layout/PageLayout";
import PageHero    from "@/components/layout/PageHero";
import Servicios   from "@/components/sections/Servicios";
import { IMG_FIREPLACE_DAY } from "@/data/images";

export default function ServiciosPage() {
  return (
    <PageLayout>
      <PageHero
        tag="Comodidades"
        title={<>Todo lo que<br /><em style={{ color: "var(--sun-lt)", fontStyle: "italic" }}>necesitas aquí</em></>}
        subtitle="WiFi 10/10 · Pet friendly · Parking privado · Chimenea · Tours de senderismo y mucho más."
        image={IMG_FIREPLACE_DAY}
        imagePosition="center 40%"
      />
      <Servicios hideHeader />
    </PageLayout>
  );
}
