
export default function Hero() {
  return (
    <section id="inicio" className="page-hero page-hero-home">
      <img src="/baru.jpg" alt="Volcán Barú desde Las Nubes Hostal" style={{
        position:"absolute", inset:0, width:"100%", height:"100%",
        objectFit:"cover", objectPosition:"center 55%",
      }} />
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(26,42,26,0.4) 0%, rgba(26,42,26,0.15) 40%, rgba(26,42,26,0.85) 100%)", zIndex:1 }} />
      <div style={{ position:"relative", zIndex:2, textAlign:"center", color:"white", padding:"2rem", maxWidth:700 }}>
        <span className="animate-fade-up" style={{
          display:"inline-block", fontSize:"0.7rem", letterSpacing:"0.32em",
          textTransform:"uppercase", color:"var(--sun-lt)",
          border:"1px solid rgba(232,160,32,0.6)", padding:"0.35rem 1.2rem", marginBottom:"1.5rem",
        }}>🌿 Cerro Punta, Chiriquí · Panamá</span>

        <h1 className="animate-fade-up-1" style={{
          fontFamily:"'Playfair Display',serif",
          fontSize:"clamp(2.8rem,6.5vw,5.5rem)", fontWeight:400, lineHeight:1.1, marginBottom:"1.2rem",
        }}>
          Tu refugio<br />en <em style={{ fontStyle:"italic", color:"var(--sun-lt)" }}>la montaña</em>
        </h1>

        <p className="animate-fade-up-2" style={{ fontWeight:300, fontSize:"1.1rem", lineHeight:1.7, opacity:0.92, marginBottom:"2.5rem" }}>
          A más de 2,000 metros de altura, al pie del Volcán Barú.<br />
          Paz, naturaleza y autenticidad te esperan.
        </p>

        <div className="animate-fade-up-3" style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
          <a href="#contacto" className="btn-primary"
            onClick={e=>{e.preventDefault();document.getElementById("contacto")?.scrollIntoView({behavior:"smooth"});}}>
            Reservar ahora
          </a>
          <a href="#nosotros" className="btn-outline"
            onClick={e=>{e.preventDefault();document.getElementById("nosotros")?.scrollIntoView({behavior:"smooth"});}}>
            Conoce el hostal
          </a>
        </div>
      </div>
      <div className="animate-bounce-y" style={{
        position:"absolute", bottom:"2.5rem", left:"50%",
        display:"flex", flexDirection:"column", alignItems:"center", gap:"0.5rem",
        color:"rgba(255,255,255,0.65)", fontSize:"0.68rem", letterSpacing:"0.22em",
        textTransform:"uppercase", zIndex:2,
      }}>
        Descubre
        <div style={{ width:1, height:40, background:"rgba(255,255,255,0.4)" }} />
      </div>
    </section>
  );
}
