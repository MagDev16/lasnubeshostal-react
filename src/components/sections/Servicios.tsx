import { useReveal } from "@/hooks/useReveal";
import { useState, useEffect, useRef } from "react";

const servicios = [
  {icon:"📶",title:"WiFi Gratis",        desc:"Conexión en todo el establecimiento. Puntuación 10/10 por nuestros huéspedes."},
  {icon:"🅿️",title:"Parking Privado",    desc:"Estacionamiento privado gratuito. Sin necesidad de reserva previa."},
  {icon:"🐾",title:"Pet Friendly",        desc:"Tus mascotas son bienvenidas. Gratis. La familia incluye a todos."},
  {icon:"🍳",title:"Cocina Compartida",   desc:"Cocina a tu ritmo. Mesa, utensilios, nevera y tetera disponibles."},
  {icon:"🏡",title:"Jardín & Terraza",    desc:"Espacios exteriores para disfrutar del paisaje montañoso."},
  {icon:"🔥",title:"Chimenea",            desc:"Sala con chimenea y vistas panorámicas al Volcán Barú. Calefacción incluida."},
  {icon:"🚿",title:"Baño Privado",        desc:"Cada habitación con baño privado, ducha y ropa de cama."},
  {icon:"🥾",title:"Tours Senderismo",    desc:"Guía certificado ATP. Excursiones al Parque La Amistad y Volcán Barú."},
];

function MobileCarousel() {
  const [idx, setIdx] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval>>();
  const next = () => setIdx(i=>(i+1)%servicios.length);
  const prev = () => setIdx(i=>(i-1+servicios.length)%servicios.length);
  useEffect(()=>{ timer.current=setInterval(next,3500); return()=>clearInterval(timer.current); },[]);

  const s = servicios[idx];
  return (
    <div style={{ marginTop:"2rem" }}>
      {/* Single card — full width, no overflow issues */}
      <div style={{
        background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.15)",
        padding:"2.5rem 2rem", borderRadius:4, minHeight:180,
        display:"flex", flexDirection:"column", gap:"0.8rem",
      }}>
        <div style={{ fontSize:"2.5rem" }}>{s.icon}</div>
        <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.2rem", color:"var(--sun-lt)" }}>{s.title}</div>
        <div style={{ fontSize:"0.9rem", color:"rgba(250,247,242,0.75)", lineHeight:1.7, fontWeight:300 }}>{s.desc}</div>
      </div>

      {/* Controls */}
      <div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:"1rem", marginTop:"1.5rem" }}>
        <button onClick={prev} style={{ width:36,height:36,borderRadius:"50%",border:"1.5px solid rgba(255,255,255,0.3)",background:"transparent",color:"white",cursor:"pointer",fontSize:"0.9rem" }}>←</button>
        <div style={{ display:"flex", gap:"5px" }}>
          {servicios.map((_,i)=>(
            <button key={i} onClick={()=>setIdx(i)} style={{ width:i===idx?20:7,height:7,borderRadius:4,background:i===idx?"var(--sun)":"rgba(255,255,255,0.25)",border:"none",cursor:"pointer",transition:"width 0.3s,background 0.3s" }} />
          ))}
        </div>
        <button onClick={next} style={{ width:36,height:36,borderRadius:"50%",border:"1.5px solid rgba(255,255,255,0.3)",background:"transparent",color:"white",cursor:"pointer",fontSize:"0.9rem" }}>→</button>
      </div>
    </div>
  );
}

export default function Servicios() {
  const ref = useReveal();
  return (
    <section id="servicios" ref={ref as React.RefObject<HTMLElement>}
      style={{ background:"var(--forest)", padding:"6rem clamp(1.5rem,6vw,5rem)" }}>
      <span className="section-tag" style={{ color:"var(--sun-lt)" }}>Comodidades</span>
      <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2rem,4vw,3rem)", color:"var(--cloud)", lineHeight:1.2, marginBottom:"0.8rem" }}>
        Todo lo que<br />necesitas aquí
      </h2>
      <p style={{ color:"rgba(250,247,242,0.65)", fontWeight:300, fontSize:"1rem" }}>
        Puntuación de servicios: 8.8 — Diseñados para que tu estancia sea perfecta.
      </p>

      {/* Desktop grid */}
      <div className="svc-desktop" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))", gap:"1.5rem", marginTop:"3rem" }}>
        {servicios.map((s,i)=>(
          <div key={s.title} className="reveal" style={{
            background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.12)",
            padding:"2rem 1.5rem", borderRadius:2, cursor:"default",
            transition:"background 0.3s, transform 0.3s", transitionDelay:`${i*0.06}s`,
          }}
          onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.13)";(e.currentTarget as HTMLElement).style.transform="translateY(-4px)";}}
          onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.07)";(e.currentTarget as HTMLElement).style.transform="translateY(0)";}}>
            <div style={{ fontSize:"2rem", marginBottom:"1rem" }}>{s.icon}</div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.1rem", color:"var(--sun-lt)", marginBottom:"0.5rem" }}>{s.title}</div>
            <div style={{ fontSize:"0.84rem", opacity:0.72, lineHeight:1.6, fontWeight:300, color:"var(--cloud)" }}>{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="svc-mobile"><MobileCarousel /></div>

      <style>{`
        .svc-mobile { display:none; }
        @media(max-width:768px){ .svc-desktop{ display:none!important; } .svc-mobile{ display:block; } }
      `}</style>
    </section>
  );
}
