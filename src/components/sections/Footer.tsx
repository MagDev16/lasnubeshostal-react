import { useNavigate } from "react-router-dom";

const LOGO_SRC = "/LNH-logo.png";

const navLinks = [
  { label:"Inicio",       href:"/" },
  { label:"Nosotros",     href:"/nosotros" },
  { label:"Servicios",    href:"/servicios" },
  { label:"Habitaciones", href:"/habitaciones" },
  { label:"Galería",      href:"/galeria" },
  { label:"Contacto",     href:"/contacto" },
];

const serviceLinks = [
  "WiFi Gratis","Parking Privado","Pet Friendly",
  "Tours Senderismo","Chimenea","Cocina Compartida",
];

const social = [
  { icon:"📷", label:"@lasnubeshostal",   href:"https://instagram.com/lasnubeshostal", external:true },
  { icon:"💬", label:"+507 6810 9090",    href:"https://wa.me/50768109090",           external:true },
  { icon:"📞", label:"Llamar ahora",      href:"tel:+50768109090",                    external:false },
  { icon:"✉️", label:"Hacer una reserva", href:"/contacto",                           external:false },
];

export default function Footer() {
  const navigate = useNavigate();

  const go = (href: string, external: boolean) => {
    if (external || href.startsWith("tel:")) return;
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ background:"var(--dark)", marginTop:"auto" }}>
      <div style={{ padding:"4rem clamp(1.5rem,6vw,4rem) 2rem" }}>
        <div className="footer-grid" style={{
          display:"grid", gridTemplateColumns:"1.4fr 1fr 1fr 1fr",
          gap:"3rem", paddingBottom:"3rem",
          borderBottom:"1px solid rgba(255,255,255,0.08)", marginBottom:"2rem",
        }}>
          {/* Brand */}
          <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
            <button onClick={() => { navigate("/"); window.scrollTo(0,0); }} style={{
              background:"none", border:"none", cursor:"pointer", padding:0,
              display:"flex", alignItems:"center", gap:"0.8rem", textAlign:"left",
            }}>
              <img src={LOGO_SRC} alt="Las Nubes Hostal" style={{
                width:52, height:52, borderRadius:"50%",
                objectFit:"cover", border:"2px solid var(--sun)",
                boxShadow:"0 2px 12px rgba(232,160,32,0.25)",
              }} />
              <div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.05rem", color:"var(--cloud)" }}>Las Nubes Hostal</div>
                <div style={{ fontSize:"0.6rem", color:"var(--sun-lt)", letterSpacing:"0.15em", textTransform:"uppercase" }}>Cerro Punta · Panamá</div>
              </div>
            </button>
            <p style={{ fontSize:"0.84rem", color:"rgba(250,247,242,0.5)", lineHeight:1.7, fontWeight:300, maxWidth:240 }}>
              Tu refugio en la montaña, al pie del Volcán Barú. El único lugar en Panamá donde duermes entre las nubes.
            </p>
            <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}>
              <span style={{ background:"var(--forest)", color:"var(--sun-lt)", fontFamily:"'Playfair Display',serif", fontSize:"1rem", fontWeight:700, padding:"0.3rem 0.7rem", borderRadius:2 }}>4.4</span>
              <span style={{ fontSize:"0.78rem", color:"rgba(250,247,242,0.5)" }}><span aria-hidden="true">⭐⭐⭐⭐⭐</span> · 29 reseñas</span>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 style={{ fontSize:"0.68rem", letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--sun-lt)", marginBottom:"1.2rem", fontWeight:700 }}>Navegación</h4>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"0.7rem" }}>
              {navLinks.map(l => (
                <li key={l.href}>
                  <button onClick={() => { navigate(l.href); window.scrollTo(0,0); }} style={{
                    background:"none", border:"none", cursor:"pointer", padding:0,
                    color:"rgba(250,247,242,0.52)", fontSize:"0.87rem", fontWeight:300,
                    transition:"color 0.2s", fontFamily:"'Lato', sans-serif",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--sun-lt)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,247,242,0.52)")}
                  >{l.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 style={{ fontSize:"0.68rem", letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--sun-lt)", marginBottom:"1.2rem", fontWeight:700 }}>Servicios</h4>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"0.7rem" }}>
              {serviceLinks.map(l => (
                <li key={l}>
                  <button onClick={() => { navigate("/servicios"); window.scrollTo(0,0); }} style={{
                    background:"none", border:"none", cursor:"pointer", padding:0,
                    color:"rgba(250,247,242,0.52)", fontSize:"0.87rem", fontWeight:300,
                    transition:"color 0.2s", fontFamily:"'Lato', sans-serif",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--sun-lt)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,247,242,0.52)")}
                  >{l}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 style={{ fontSize:"0.68rem", letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--sun-lt)", marginBottom:"1.2rem", fontWeight:700 }}>Contacto & RRSS</h4>
            <div style={{ display:"flex", flexDirection:"column", gap:"0.8rem" }}>
              {social.map(s => (
                s.external || s.href.startsWith("tel:") ? (
                  <a key={s.label} href={s.href} target={s.external ? "_blank" : undefined} rel="noreferrer"
                    style={{ display:"flex", alignItems:"center", gap:"0.7rem", color:"rgba(250,247,242,0.52)", textDecoration:"none", fontSize:"0.84rem", fontWeight:300, transition:"color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--sun-lt)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,247,242,0.52)")}
                  >
                    <span aria-hidden="true" style={{ width:30, height:30, borderRadius:"50%", background:"rgba(255,255,255,0.07)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.85rem", flexShrink:0 }}>{s.icon}</span>
                    {s.label}
                  </a>
                ) : (
                  <button key={s.label} onClick={() => go(s.href, s.external)} style={{
                    background:"none", border:"none", cursor:"pointer", padding:0,
                    display:"flex", alignItems:"center", gap:"0.7rem",
                    color:"rgba(250,247,242,0.52)", fontSize:"0.84rem", fontWeight:300,
                    transition:"color 0.2s", fontFamily:"'Lato', sans-serif",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--sun-lt)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,247,242,0.52)")}
                  >
                    <span aria-hidden="true" style={{ width:30, height:30, borderRadius:"50%", background:"rgba(255,255,255,0.07)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.85rem", flexShrink:0 }}>{s.icon}</span>
                    {s.label}
                  </button>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"0.5rem" }}>
          <p style={{ fontSize:"0.76rem", color:"rgba(250,247,242,0.28)" }}>
            © 2026 <strong style={{ color:"rgba(250,247,242,0.38)" }}>Las Nubes Hostal</strong> · Negocio familiar García · Cerro Punta, Panamá
          </p>
          <p style={{ fontSize:"0.76rem", color:"rgba(250,247,242,0.28)" }}>
            El alto de Las Nubes, Chiriquí ·{" "}
            <a href="tel:+50768109090" style={{ color:"rgba(250,247,242,0.38)", textDecoration:"none" }}>+507 6810 9090</a>
          </p>
        </div>
      </div>

    </footer>
  );
}
