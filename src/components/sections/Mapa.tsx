const items = [
  { icon: "📍", label: "Dirección",                      text: "El alto de Las Nubes, Cerro Punta, Las Nubes, Chiriquí, Panamá" },
  { icon: "🌿", label: "Parque Internacional La Amistad", text: "A solo 5 km — Patrimonio UNESCO" },
  { icon: "🏔️", label: "Parque Nacional Volcán Barú",    text: "A solo 12 km — La cima de Panamá" },
  { icon: "✈️", label: "Aeropuerto Enrique Malek (David)", text: "A 74 km — Vuelos desde Ciudad de Panamá" },
];

export default function Mapa() {
  return (
    <section id="mapa" style={{ background: "var(--forest)", padding: 0 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", minHeight: 500 }}>
        {/* Info */}
        <div style={{ padding: "5rem clamp(1.5rem, 5vw, 4rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span className="section-tag" style={{ color: "var(--stone)" }}>Cómo llegar</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "var(--cloud)", lineHeight: 1.2, marginBottom: "0.8rem" }}>
            En el corazón<br />
            de <em style={{ color: "var(--stone)" }}>Cerro Punta</em>
          </h2>
          <p style={{ color: "rgba(245,242,237,0.65)", fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            Muy buena ubicación (8.6). Rodeados de naturaleza y a pasos de los mejores parques de Panamá.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {items.map(it => (
              <div key={it.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1rem", flexShrink: 0,
                }}>{it.icon}</div>
                <div style={{ color: "rgba(245,242,237,0.85)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  <strong style={{ color: "var(--stone)", display: "block", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 2 }}>{it.label}</strong>
                  {it.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map iframe */}
        <div style={{ position: "relative", minHeight: 400 }}>
          <iframe
            title="Las Nubes Hostal location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31474.2!2d-82.5800!3d8.8780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa4f7a9b1234567%3A0xabcdef1234567890!2sCerro%20Punta%2C%20Chiriqui%2C%20Panama!5e0!3m2!1ses!2spa!4v1714000000000!5m2!1ses!2spa"
            style={{ width: "100%", height: "100%", minHeight: 400, border: "none", display: "block", filter: "saturate(0.8) contrast(0.92)" }}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
