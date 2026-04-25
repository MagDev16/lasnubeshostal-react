import { useReveal } from "@/hooks/useReveal";
import { IMG_HERO, IMG_INSTAGRAM, IMG_ROOM1, IMG_ROOM2, IMG_ROOM3, IMG_HOST } from "@/data/images";

const photos = [
  { src: IMG_HERO,       alt: "Vista exterior con jardín y montañas", span2: true },
  { src: IMG_INSTAGRAM,  alt: "Exterior con flores y jardín" },
  { src: IMG_ROOM1,      alt: "Habitación del hostal" },
  { src: IMG_ROOM2,      alt: "Baño del hostal" },
  { src: IMG_ROOM3,      alt: "Paisaje al atardecer" },
  { src: IMG_HOST,       alt: "Anfitrión Claudio García" },
];

export default function Galeria() {
  const ref = useReveal();
  return (
    <section id="galeria" ref={ref} style={{ background: "var(--cream)", padding: "6rem clamp(1.5rem, 6vw, 5rem)" }}>
      <span className="section-tag">Imágenes</span>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3rem)", color: "var(--dark)", lineHeight: 1.2, marginBottom: "0.8rem" }}>
        Vive el <em style={{ color: "var(--moss)" }}>paisaje</em>
      </h2>
      <p style={{ fontWeight: 300, fontSize: "1rem", color: "var(--warm-mid)", marginBottom: "2.5rem" }}>
        Cada rincón de Las Nubes Hostal tiene su propia historia que contar.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "280px 280px",
        gap: "0.8rem",
      }}>
        {photos.map((p, i) => (
          <div key={i} className="reveal" style={{
            overflow: "hidden", borderRadius: 2, position: "relative",
            gridColumn: p.span2 ? "span 2" : undefined,
            transitionDelay: `${i * 0.07}s`,
          }}>
            <img src={p.src} alt={p.alt} style={{
              width: "100%", height: "100%", objectFit: "cover", display: "block",
              transition: "transform 0.5s",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(26,40,32,0.45) 0%, transparent 50%)",
              opacity: 0, transition: "opacity 0.3s",
              pointerEvents: "none",
            }} className="gal-overlay" />
          </div>
        ))}
      </div>

      <p style={{ marginTop: "1.5rem", fontSize: "0.8rem", color: "#999", textAlign: "center" }}>
        📸 Síguenos en Instagram:{" "}
        <a href="https://instagram.com/lasnubeshostal" target="_blank" rel="noreferrer"
          style={{ color: "var(--moss)", textDecoration: "none" }}>@lasnubeshostal</a>
      </p>
    </section>
  );
}
