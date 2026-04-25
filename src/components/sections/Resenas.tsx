import { useState, useEffect, useRef } from "react";
import { useReveal } from "@/hooks/useReveal";

const ratings = [
  { label: "Personal",               score: 8.7, pct: 87 },
  { label: "Instalaciones y servicios", score: 8.8, pct: 88 },
  { label: "Limpieza",               score: 8.7, pct: 87 },
  { label: "Confort",                score: 8.4, pct: 84 },
  { label: "Relación calidad-precio", score: 8.6, pct: 86 },
  { label: "Ubicación",              score: 8.6, pct: 86 },
  { label: "WiFi",                   score: 10,  pct: 100, accent: true },
];

const reviews = [
  { name: "Yariela", origin: "🇵🇦 Panamá", initial: "Y",
    text: "El lugar hermoso, las vistas divinas, muy cómodo. Las instalaciones muy lindas y acogedoras, aceptaron mis mascotas. La atención de Claudio estuvo genial, definitivamente lo recomendaría." },
  { name: "Carlos",  origin: "🇵🇦 Panamá", initial: "C",
    text: "Excelente lugar, Claudio es un muy buen host, 100% recomendado. El clima es muy fresco, queda cerca del Parque la Amistad. El lugar también es pet friendly." },
  { name: "Carmen",  origin: "🇵🇦 Panamá", initial: "C",
    text: "Nos agradó la atención del anfitrión. La vista a las montañas, la chimenea, en general nos sentimos en casa. Gracias Claudio por hacernos sentir tan bienvenidos." },
  { name: "Marta",   origin: "🇵🇦 Panamá", initial: "M",
    text: "Un lugar único en Panamá. Despertar con esa vista al Volcán Barú es algo que no olvidarás. El anfitrión Claudio es muy atento y el ambiente es muy familiar." },
  { name: "Roberto", origin: "🇵🇦 Panamá", initial: "R",
    text: "Fuimos en familia con mascotas y todo fue perfecto. El jardín es precioso, el clima muy fresco y las vistas increíbles. La cocina compartida muy bien equipada." },
];

export default function Resenas() {
  const ref = useReveal();
  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(360);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const goTo = (idx: number) => setCurrent((idx + reviews.length) % reviews.length);
  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 4500);
  };

  useEffect(() => { resetTimer(); return () => clearInterval(timerRef.current); }, [current]);

  useEffect(() => {
    const update = () => {
      if (trackRef.current?.firstElementChild) {
        const w = (trackRef.current.firstElementChild as HTMLElement).offsetWidth;
        setCardWidth(w + 24); // gap=24
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section id="resenas" ref={ref} style={{ background: "var(--cloud)", padding: "6rem clamp(1.5rem, 6vw, 5rem)", overflow: "hidden" }}>
      <span className="section-tag">Lo que dicen nuestros huéspedes</span>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3rem)", color: "var(--dark)", lineHeight: 1.2, marginBottom: "2.5rem" }}>
        Reseñas <em style={{ color: "var(--moss)" }}>reales</em>
      </h2>

      {/* Ratings */}
      <div className="reveal" style={{ display: "flex", gap: "3rem", flexWrap: "wrap", alignItems: "center", marginBottom: "3rem" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "5rem", color: "var(--forest)", lineHeight: 1 }}>8.7</div>
          <div style={{ fontSize: "0.82rem", color: "var(--ember)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Fabuloso · 29 reseñas</div>
        </div>
        <div style={{ flex: 1, minWidth: 240 }}>
          {ratings.map(r => (
            <div key={r.label} style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.55rem" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--warm-mid)", width: 170, flexShrink: 0 }}>{r.label}</span>
              <div style={{ flex: 1, height: 6, background: "#e0ddd8", borderRadius: 3, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${r.pct}%`, background: r.accent ? "var(--ember)" : "var(--forest)", borderRadius: 3 }} />
              </div>
              <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--dark)", width: 28, textAlign: "right" }}>{r.score}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div style={{ overflow: "hidden" }}>
        <div ref={trackRef} className="carousel-track" style={{ transform: `translateX(-${current * cardWidth}px)` }}>
          {reviews.map(r => (
            <div key={r.name + r.text} style={{
              background: "white", padding: "2rem", borderRadius: 2,
              borderLeft: "3px solid var(--moss)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              minWidth: 340, maxWidth: 340, flexShrink: 0,
            }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", color: "var(--sage)", lineHeight: 0.5, display: "block", marginBottom: "0.8rem" }}>"</span>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#5A5550", fontStyle: "italic", marginBottom: "1.2rem" }}>{r.text}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <div style={{
                  width: 38, height: 38, borderRadius: "50%", background: "var(--forest)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Playfair Display', serif", color: "var(--stone)", fontSize: "0.9rem", flexShrink: 0,
                }}>{r.initial}</div>
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--dark)" }}>{r.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "#999" }}>{r.origin}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", marginTop: "2rem" }}>
        <button onClick={() => { prev(); resetTimer(); }} style={{
          width: 40, height: 40, borderRadius: "50%", border: "2px solid var(--forest)",
          background: "transparent", color: "var(--forest)", cursor: "pointer",
          fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background 0.2s, color 0.2s",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="var(--forest)"; (e.currentTarget as HTMLElement).style.color="white"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="transparent"; (e.currentTarget as HTMLElement).style.color="var(--forest)"; }}
        >←</button>

        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          {reviews.map((_, i) => (
            <button key={i} onClick={() => { goTo(i); resetTimer(); }} style={{
              width: i === current ? 20 : 8, height: 8, borderRadius: 4,
              background: i === current ? "var(--forest)" : "#d0ccc7",
              border: "none", cursor: "pointer",
              transition: "background 0.3s, width 0.3s",
            }} />
          ))}
        </div>

        <button onClick={() => { next(); resetTimer(); }} style={{
          width: 40, height: 40, borderRadius: "50%", border: "2px solid var(--forest)",
          background: "transparent", color: "var(--forest)", cursor: "pointer",
          fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background 0.2s, color 0.2s",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="var(--forest)"; (e.currentTarget as HTMLElement).style.color="white"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="transparent"; (e.currentTarget as HTMLElement).style.color="var(--forest)"; }}
        >→</button>
      </div>
    </section>
  );
}
