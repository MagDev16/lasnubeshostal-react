import PageLayout from "@/components/layout/PageLayout";
import PageHero   from "@/components/layout/PageHero";
import Contacto   from "@/components/sections/Contacto";
import Mapa       from "@/components/sections/Mapa";

export default function ContactoPage() {
  return (
    <PageLayout>
      <PageHero
        tag="Reservas & Contacto"
        title={<>Haz tu<br /><em style={{ color: "var(--sun-lt)", fontStyle: "italic" }}>reserva</em></>}
        subtitle="Escríbenos y te respondemos enseguida. También puedes llamar o escribir por WhatsApp."
        image="/baru.jpg"
        imagePosition="center 60%"
      />
      <Contacto hideHeader />
      <Mapa />
    </PageLayout>
  );
}
