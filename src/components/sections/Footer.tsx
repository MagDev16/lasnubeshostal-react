const navLinks = ["Inicio","Nosotros","Servicios","Habitaciones","Galería","Reseñas"];
const serviceLinks = ["WiFi Gratis","Parking Privado","Pet Friendly","Tours Senderismo","Chimenea","Cocina Compartida"];
const social = [
  { icon: "📷", label: "@lasnubeshostal", href: "https://instagram.com/lasnubeshostal" },
  { icon: "💬", label: "+507 6810 9090",  href: "https://wa.me/50768109090" },
  { icon: "📞", label: "Llamar ahora",    href: "tel:+50768109090" },
  { icon: "✉️", label: "Hacer una reserva", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--dark)", padding: "4rem clamp(1.5rem, 6vw, 4rem) 2rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "3rem", paddingBottom: "3rem", borderBottom: "1px solid rgba(255,255,255,0.08)", marginBottom: "2rem" }}
           className="footer-grid">

        {/* Brand */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--forest)", border: "2px solid var(--stone)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display', serif", color: "var(--stone)", fontSize: "1rem", fontWeight: 700 }}>LN</div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "var(--cloud)" }}>Las Nubes Hostal</span>
          </div>
          <p style={{ fontSize: "0.84rem", color: "rgba(245,242,237,0.5)", lineHeight: 1.7, fontWeight: 300, maxWidth: 240 }}>
            Tu refugio en la montaña, al pie del Volcán Barú. El único lugar en Panamá donde duermes entre las nubes.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span style={{ background: "var(--forest)", color: "var(--stone)", fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700, padding: "0.3rem 0.7rem", borderRadius: 2 }}>8.7</span>
            <span style={{ fontSize: "0.78rem", color: "rgba(245,242,237,0.5)" }}>Fabuloso · 29 reseñas</span>
          </div>
        </div>

        {/* Navegación */}
        <div>
          <h4 style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--stone)", marginBottom: "1.2rem", fontWeight: 700 }}>Navegación</h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
            {navLinks.map(l => (
              <li key={l}><a href={`#${l.toLowerCase()}`} style={{ color: "rgba(245,242,237,0.55)", textDecoration: "none", fontSize: "0.88rem", fontWeight: 300, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color="var(--stone)")}
                onMouseLeave={e => (e.currentTarget.style.color="rgba(245,242,237,0.55)")}
              >{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Servicios */}
        <div>
          <h4 style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--stone)", marginBottom: "1.2rem", fontWeight: 700 }}>Servicios</h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
            {serviceLinks.map(l => (
              <li key={l}><a href="#servicios" style={{ color: "rgba(245,242,237,0.55)", textDecoration: "none", fontSize: "0.88rem", fontWeight: 300, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color="var(--stone)")}
                onMouseLeave={e => (e.currentTarget.style.color="rgba(245,242,237,0.55)")}
              >{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--stone)", marginBottom: "1.2rem", fontWeight: 700 }}>Contacto & RRSS</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {social.map(s => (
              <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.7rem", color: "rgba(245,242,237,0.55)", textDecoration: "none", fontSize: "0.85rem", fontWeight: 300, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color="var(--stone)")}
                onMouseLeave={e => (e.currentTarget.style.color="rgba(245,242,237,0.55)")}
              >
                <span style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", flexShrink: 0 }}>{s.icon}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
        <p style={{ fontSize: "0.78rem", color: "rgba(245,242,237,0.3)" }}>
          © 2026 <strong style={{ color: "rgba(245,242,237,0.4)" }}>Las Nubes Hostal</strong> · Negocio familiar García · Cerro Punta, Panamá
        </p>
        <p style={{ fontSize: "0.78rem", color: "rgba(245,242,237,0.3)" }}>
          El alto de Las Nubes, Chiriquí ·{" "}
          <a href="tel:+50768109090" style={{ color: "rgba(245,242,237,0.4)", textDecoration: "none" }}>+507 6810 9090</a>
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
