import PageLayout    from "@/components/layout/PageLayout";
import PageHero      from "@/components/layout/PageHero";
import Habitaciones  from "@/components/sections/Habitaciones";
import { IMG_ROOM_DOUBLE } from "@/data/images";

export default function HabitacionesPage() {
  return (
    <PageLayout>
      <PageHero
        tag="Alojamiento"
        title={<>Habitaciones<br /><em style={{ color: "var(--sun-lt)", fontStyle: "italic" }}>con alma</em></>}
        subtitle="Tres espacios únicos con baño privado, vistas a la montaña y toda la calidez de un hogar familiar panameño."
        image={IMG_ROOM_DOUBLE}
        imagePosition="center 50%"
      />
      <Habitaciones />
    </PageLayout>
  );
}
