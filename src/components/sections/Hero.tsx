import { IMG_HERO } from "@/data/images";

export default function Hero() {
  return (
    <section id="inicio" style={{ height:"100vh", position:"relative", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
      <img src={IMG_HERO} alt="Vista del Volcán Barú desde Las Nubes Hostal" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 40%" }} />
      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(26,40,32,0.45) 0%, rgba(26,40,32,0.15) 40%, rgba(26,40,32,0.82) 100%)", zIndex:1 }} />
      <div style={{ position:"relative", zIndex:2, textAlign:"center", color:"white", padding:"2rem", maxWidth:700 }}>
        <span className="animate-fade-up" style={{ display:"inline-block", fontSize:"0.72rem", letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--stone)", border:"1px solid var(--stone)", padding:"0.35rem 1.2rem", marginBottom:"1.5rem" }}>
          🌿 Cerro Punta, Chiriquí · Panamá
        </span>
        <h1 className="animate-fade-up-1" style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(3rem,7vw,6rem)", fontWeight:400, lineHeight:1.1, marginBottom:"1.2rem" }}>
          Tu refugio<br />en <em style={{ fontStyle:"italic", color:"var(--stone)" }}>la montaña</em>
        </h1>
        <p className="animate-fade-up-2" style={{ fontWeight:300, fontSize:"1.1rem", lineHeight:1.7, opacity:0.9, marginBottom:"2.5rem" }}>
          A más de 2,000 metros de altura, al pie del Volcán Barú.<br />
          Paz, naturaleza y autenticidad te esperan.
        </p>
        <div className="animate-fade-up-3" style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
          <a href="#contacto" style={{ background:"var(--ember)", color:"white", padding:"0.9rem 2.2rem", textDecoration:"none", fontSize:"0.85rem", letterSpacing:"0.1em", textTransform:"uppercase", borderRadius:2, border:"2px solid var(--ember)", fontWeight:700, transition:"background 0.2s, transform 0.2s", display:"inline-block" }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="#a8522a";(e.currentTarget as HTMLElement).style.transform="translateY(-2px)";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="var(--ember)";(e.currentTarget as HTMLElement).style.transform="translateY(0)";}}>
            Reservar ahora
          </a>
          <a href="#nosotros" style={{ border:"2px solid rgba(255,255,255,0.6)", color:"white", padding:"0.9rem 2.2rem", textDecoration:"none", fontSize:"0.85rem", letterSpacing:"0.1em", textTransform:"uppercase", borderRadius:2, transition:"border-color 0.2s, background 0.2s, transform 0.2s", display:"inline-block" }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="white";(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.1)";(e.currentTarget as HTMLElement).style.transform="translateY(-2px)";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.6)";(e.currentTarget as HTMLElement).style.background="transparent";(e.currentTarget as HTMLElement).style.transform="translateY(0)";}}>
            Conoce el hostal
          </a>
        </div>
      </div>
      <div className="animate-bounce-y" style={{ position:"absolute", bottom:"2.5rem", left:"50%", display:"flex", flexDirection:"column", alignItems:"center", gap:"0.5rem", color:"rgba(255,255,255,0.6)", fontSize:"0.7rem", letterSpacing:"0.2em", textTransform:"uppercase", zIndex:2 }}>
        Descubre
        <div style={{ width:1, height:40, background:"rgba(255,255,255,0.4)" }} />
      </div>
    </section>
  );
}
