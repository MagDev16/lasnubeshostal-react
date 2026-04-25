import { useReveal } from "@/hooks/useReveal";
import { useState, useRef, useEffect } from "react";

const servicios = [
  { icon:"📶", title:"WiFi Gratis",         desc:"Conexión en todo el establecimiento. Puntuación 10/10 por nuestros huéspedes." },
  { icon:"🅿️", title:"Parking Privado",     desc:"Estacionamiento privado gratuito. Sin reservas necesarias." },
  { icon:"🐾", title:"Pet Friendly",         desc:"Tus mascotas son bienvenidas. Gratis. La familia incluye a todos." },
  { icon:"🍳", title:"Cocina Compartida",    desc:"Cocina a tu ritmo. Mesa, utensilios, nevera y tetera disponibles." },
  { icon:"🏡", title:"Jardín & Terraza",     desc:"Espacios exteriores para disfrutar del paisaje montañoso." },
  { icon:"🔥", title:"Chimenea",             desc:"Sala con chimenea y vistas panorámicas al Volcán Barú." },
  { icon:"🚿", title:"Baño Privado",         desc:"Cada habitación con baño privado, ducha y ropa de cama." },
  { icon:"🥾", title:"Tours Senderismo",     desc:"Guía certificado ATP. Excursiones al Parque La Amistad y Volcán Barú." },
];

// Mobile carousel
function ServiciosMobileCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const next = () => setCurrent(c => (c + 1) % servicios.length);
  const prev = () => setCurrent(c => (c - 1 + servicios.length) % servicios.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 3500);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div style={{ marginTop:"2rem" }}>
      <div style={{ overflow:"hidden", borderRadius:2 }}>
        <div style={{ display:"flex", transition:"transform 0.6s cubic-bezier(0.4,0,0.2,1)", transform:`translateX(-${current * 100}%)` }}>
          {servicios.map(s => (
            <div key={s.title} style={{ minWidth:"100%", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", padding:"2.5rem 2rem", flexShrink:0 }}>
              <div style={{ fontSize:"2.5rem", marginBottom:"1rem" }}>{s.icon}</div>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.2rem", color:"var(--stone)", marginBottom:"0.6rem" }}>{s.title}</div>
              <div style={{ fontSize:"0.9rem", opacity:0.75, lineHeight:1.7, fontWeight:300, color:"var(--cloud)" }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:"1rem", marginTop:"1.5rem" }}>
        <button onClick={prev} style={{ width:36, height:36, borderRadius:"50%", border:"2px solid rgba(255,255,255,0.3)", background:"transparent", color:"white", cursor:"pointer", fontSize:"0.9rem", transition:"border-color 0.2s" }}>←</button>
        <div style={{ display:"flex", gap:"0.4rem" }}>
          {servicios.map((_,i) => (
            <button key={i} onClick={()=>setCurrent(i)} style={{ width: i===current ? 20 : 7, height:7, borderRadius:4, background: i===current ? "var(--stone)" : "rgba(255,255,255,0.25)", border:"none", cursor:"pointer", transition:"width 0.3s, background 0.3s" }} />
          ))}
        </div>
        <button onClick={next} style={{ width:36, height:36, borderRadius:"50%", border:"2px solid rgba(255,255,255,0.3)", background:"transparent", color:"white", cursor:"pointer", fontSize:"0.9rem", transition:"border-color 0.2s" }}>→</button>
      </div>
    </div>
  );
}

export default function Servicios() {
  const ref = useReveal();
  return (
    <section id="servicios" ref={ref as React.RefObject<HTMLElement>} style={{ background:"var(--forest)", padding:"6rem clamp(1.5rem,6vw,5rem)" }}>
      <span className="section-tag" style={{ color:"var(--stone)" }}>Comodidades</span>
      <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2rem,4vw,3rem)", color:"var(--cloud)", lineHeight:1.2, marginBottom:"0.8rem" }}>
        Todo lo que<br />necesitas aquí
      </h2>
      <p style={{ color:"rgba(245,242,237,0.65)", fontWeight:300, fontSize:"1rem", marginBottom:0 }}>
        Puntuación de servicios: 8.8 — Diseñados para que tu estancia sea perfecta.
      </p>

      {/* Desktop grid */}
      <div className="servicios-desktop" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))", gap:"1.5rem", marginTop:"3rem" }}>
        {servicios.map((s,i) => (
          <div key={s.title} className="reveal" style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", padding:"2rem 1.5rem", borderRadius:2, transition:"background 0.3s, transform 0.3s", transitionDelay:`${i*0.06}s`, cursor:"default" }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.11)";(e.currentTarget as HTMLElement).style.transform="translateY(-4px)";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.06)";(e.currentTarget as HTMLElement).style.transform="translateY(0)";}}>
            <div style={{ fontSize:"2rem", marginBottom:"1rem" }}>{s.icon}</div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.1rem", color:"var(--stone)", marginBottom:"0.5rem" }}>{s.title}</div>
            <div style={{ fontSize:"0.84rem", opacity:0.72, lineHeight:1.6, fontWeight:300, color:"var(--cloud)" }}>{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="servicios-mobile">
        <ServiciosMobileCarousel />
      </div>

      <style>{`
        .servicios-mobile { display: none; }
        @media (max-width: 768px) {
          .servicios-desktop { display: none !important; }
          .servicios-mobile { display: block; }
        }
      `}</style>
    </section>
  );
}
