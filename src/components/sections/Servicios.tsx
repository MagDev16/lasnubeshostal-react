import { useReveal } from "@/hooks/useReveal";

const servicios = [
  { icon: "📶", title: "WiFi Gratis",          desc: "Conexión en todo el establecimiento. Puntuación 10/10." },
  { icon: "🅿️", title: "Parking Privado",      desc: "Estacionamiento privado gratuito. Sin reservas necesarias." },
  { icon: "🐾", title: "Pet Friendly",          desc: "Tus mascotas son bienvenidas. Gratis. Familia incluye a todos." },
  { icon: "🍳", title: "Cocina Compartida",     desc: "Cocina a tu ritmo. Mesa, utensilios, nevera y tetera." },
  { icon: "🏡", title: "Jardín & Terraza",      desc: "Espacios exteriores para disfrutar del paisaje montañoso." },
  { icon: "🔥", title: "Chimenea",              desc: "Sala con chimenea y vista panorámica al Volcán Barú." },
  { icon: "🚿", title: "Baño Privado",          desc: "Cada habitación con baño privado, ducha y ropa de cama." },
  { icon: "🥾", title: "Tours de Senderismo",   desc: "Guía certificado ATP. Excursiones al Parque La Amistad." },
];

export default function Servicios() {
  const ref = useReveal();
  return (
    <section id="servicios" ref={ref} style={{ background: "var(--forest)", padding: "6rem clamp(1.5rem, 6vw, 5rem)" }}>
      <span className="section-tag" style={{ color: "var(--stone)" }}>Comodidades</span>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3rem)", color: "var(--cloud)", lineHeight: 1.2, marginBottom: "0.8rem" }}>
        Todo lo que<br />necesitas aquí
      </h2>
      <p style={{ color: "rgba(245,242,237,0.65)", fontWeight: 300, fontSize: "1rem", marginBottom: "3rem" }}>
        Puntuación de servicios: 8.8 — Diseñados para que tu estancia sea perfecta.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "1.5rem" }}>
        {servicios.map((s, i) => (
          <div
            key={s.title}
            className="reveal"
            style={{
              background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
              padding: "2rem 1.5rem", borderRadius: 2,
              transition: "background 0.3s, transform 0.3s",
              transitionDelay: `${i * 0.06}s`,
              cursor: "default",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.11)"; (e.currentTarget as HTMLElement).style.transform="translateY(-4px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{s.icon}</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "var(--stone)", marginBottom: "0.5rem" }}>{s.title}</div>
            <div style={{ fontSize: "0.84rem", opacity: 0.72, lineHeight: 1.6, fontWeight: 300, color: "var(--cloud)" }}>{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
