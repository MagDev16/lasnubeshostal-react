import { useReveal } from "@/hooks/useReveal";
import { IMG_ROOM1, IMG_ROOM2, IMG_ROOM3 } from "@/data/images";

const rooms = [
  {
    img: IMG_ROOM1, type: "Habitación Familiar", name: "Sala de las Nubes",
    desc: "Habitación para 4 personas ideal para familias. Amplia y acogedora con armario y baño privado.",
    tags: ["4 personas", "Baño privado", "Armario"],
  },
  {
    img: IMG_ROOM2, type: "Habitación Doble", name: "Suite Volcán",
    desc: "Cama matrimonial doble con baño privado. Vista panorámica al Volcán Barú desde tu ventana.",
    tags: ["Matrimonial", "Baño privado", "Vista volcán"],
  },
  {
    img: IMG_ROOM3, type: "Habitación Doble", name: "Refugio Barú",
    desc: "Segunda habitación matrimonial con baño propio. Calefacción y todo el confort de la montaña.",
    tags: ["Matrimonial", "Baño privado", "Calefacción"],
  },
];

export default function Habitaciones() {
  const ref = useReveal();
  return (
    <section id="habitaciones" ref={ref} style={{ background: "var(--cloud)", padding: "6rem clamp(1.5rem, 6vw, 5rem)" }}>
      <span className="section-tag">Alojamiento</span>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3rem)", color: "var(--dark)", lineHeight: 1.2, marginBottom: "0.8rem" }}>
        Habitaciones<br /><em style={{ color: "var(--moss)" }}>con alma</em>
      </h2>
      <p style={{ fontWeight: 300, fontSize: "1rem", color: "var(--warm-mid)", marginBottom: "3rem" }}>
        Privadas y compartidas, cada espacio diseñado para el descanso auténtico en la montaña.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
        {rooms.map((r, i) => (
          <div key={r.name} className="reveal" style={{
            borderRadius: 2, overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            background: "white", transition: "transform 0.3s, box-shadow 0.3s",
            transitionDelay: `${i * 0.1}s`,
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform="translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow="0 12px 40px rgba(0,0,0,0.14)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform="translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow="0 4px 24px rgba(0,0,0,0.08)"; }}
          >
            <img src={r.img} alt={r.name} style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }} />
            <div style={{ padding: "1.5rem" }}>
              <div style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ember)", marginBottom: "0.4rem" }}>{r.type}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "var(--dark)", marginBottom: "0.5rem" }}>{r.name}</div>
              <div style={{ fontSize: "0.84rem", color: "var(--warm-mid)", lineHeight: 1.6 }}>{r.desc}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "1rem" }}>
                {r.tags.map(t => (
                  <span key={t} style={{
                    background: "var(--cloud)", color: "var(--forest)",
                    fontSize: "0.7rem", padding: "0.25rem 0.7rem", borderRadius: 20,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
