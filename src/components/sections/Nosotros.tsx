import { useReveal } from "@/hooks/useReveal";
import { IMG_INSTAGRAM } from "@/data/images";

const features = [
  { icon: "🏕️", title: "Tours de Senderismo", desc: "Guía certificado ATP incluido" },
  { icon: "🔥", title: "Chimenea acogedora",  desc: "Con vista panorámica al volcán" },
  { icon: "🌍", title: "Bilingüe",             desc: "Atención en Español e Inglés" },
  { icon: "🌿", title: "Jardín y terraza",     desc: "Vistas al jardín y a la montaña" },
];

export default function Nosotros() {
  const ref = useReveal();

  return (
    <section id="nosotros" ref={ref} style={{
      display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "5rem", alignItems: "center",
      padding: "6rem clamp(1.5rem, 6vw, 5rem)",
      background: "var(--cream)",
    }}>
      {/* Image */}
      <div className="reveal" style={{ position: "relative" }}>
        <img src={IMG_INSTAGRAM} alt="Las Nubes Hostal jardín" style={{
          width: "100%", aspectRatio: "4/5", objectFit: "cover",
          borderRadius: 2, display: "block",
        }} />
        <div style={{
          position: "absolute", bottom: "-1.5rem", right: "-1rem",
          background: "var(--forest)", color: "var(--cloud)",
          padding: "1.4rem", textAlign: "center", borderRadius: 2,
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.4rem", color: "var(--stone)", display: "block", lineHeight: 1 }}>2,000+</span>
          <span style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.8 }}>metros de altura</span>
        </div>
      </div>

      {/* Text */}
      <div className="reveal" style={{ transitionDelay: "0.15s" }}>
        <span className="section-tag">Nuestra Historia</span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.2, marginBottom: "1.2rem", color: "var(--dark)" }}>
          Un proyecto<br />
          de familia <em style={{ fontStyle: "italic", color: "var(--moss)" }}>García</em>
        </h2>
        <div style={{ width: "3rem", height: "2px", background: "var(--ember)", marginBottom: "1.4rem" }} />
        <p style={{ fontWeight: 300, fontSize: "1.02rem", lineHeight: 1.8, color: "var(--warm-mid)", marginBottom: "1rem" }}>
          Las Nubes Hostal nació del sueño de los hermanos García: crear un refugio auténtico donde viajeros
          de todo el mundo pudieran conectar con la naturaleza más pura de Panamá. Esta encantadora casa
          reformada de los años 70 combina el encanto rústico con la comodidad moderna.
        </p>
        <p style={{ fontWeight: 300, fontSize: "1.02rem", lineHeight: 1.8, color: "var(--warm-mid)" }}>
          Ubicados en el corazón de Cerro Punta, con vistas espectaculares al Volcán Barú y a pasos del
          Parque Internacional La Amistad, somos el único lugar en Panamá donde puedes dormir entre las nubes.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "2rem" }}>
          {features.map(f => (
            <div key={f.title} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
              <div style={{
                width: 32, height: 32, background: "var(--sage)", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.9rem", flexShrink: 0, marginTop: 2,
              }}>{f.icon}</div>
              <div style={{ fontSize: "0.88rem", color: "var(--warm-mid)", lineHeight: 1.5 }}>
                <strong style={{ color: "var(--dark)", display: "block", fontSize: "0.9rem" }}>{f.title}</strong>
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
