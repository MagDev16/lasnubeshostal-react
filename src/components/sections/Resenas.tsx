import { useState, useEffect, useRef } from "react";
import { useReveal } from "@/hooks/useReveal";

const ratings = [
  { label:"Personal",                score:4.4, pct:87 },
  { label:"Instalaciones y servicios", score:4.4, pct:88 },
  { label:"Limpieza",                score:4.4, pct:87 },
  { label:"Confort",                 score:4.2, pct:84 },
  { label:"Relación calidad-precio", score:4.3, pct:86 },
  { label:"Ubicación",               score:4.3, pct:86 },
  { label:"WiFi",                    score:5.0, pct:100, accent:true },
];

const reviews = [
  { name:"Yariela",  origin:"🇵🇦 Panamá",    initial:"Y", text:"El lugar hermoso, las vistas divinas, muy cómodo. Las instalaciones muy lindas y acogedoras, aceptaron mis mascotas, para mí fue muy importante. La atención de Claudio estuvo genial, definitivamente un lugar que recomendaría." },
  { name:"Carlos",   origin:"🇵🇦 Panamá",    initial:"C", text:"Excelente lugar, Claudio es un muy buen host, 100% recomendado. El clima es muy fresco, queda cerca del Parque la Amistad. El lugar también es pet friendly, si tienen mascotas pueden llevarlas." },
  { name:"Carmen",   origin:"🇵🇦 Panamá",    initial:"C", text:"Nos agradó la atención del anfitrión. La vista a las montañas, la chimenea, en general nos sentimos en casa. Gracias Claudio por hacernos sentir tan bienvenidos." },
  { name:"Marta",    origin:"🇵🇦 Panamá",    initial:"M", text:"Un lugar único en Panamá. Despertar con esa vista al Volcán Barú es algo que no olvidarás. El anfitrión Claudio es muy atento y el ambiente del hostal es muy familiar." },
  { name:"Roberto",  origin:"🇵🇦 Panamá",    initial:"R", text:"Fuimos en familia con mascotas y todo fue perfecto. El jardín es precioso, el clima muy fresco y las vistas increíbles. La cocina compartida muy bien equipada. Definitivamente volvemos." },
  { name:"Alejandra",origin:"🇨🇴 Colombia",   initial:"A", text:"Increíble experiencia. La chimenea por las noches con esa vista al volcán no tiene precio. Claudio es un anfitrión de primera. Muy recomendado para quienes buscan desconectarse." },
];

function StarRating({ score }: { score: number }) {
  return (
    <span style={{ color:"var(--ember)", fontSize:"0.85rem", letterSpacing:1 }}>
      {[1,2,3,4,5].map(s => (
        <span key={s} style={{ opacity: s <= Math.round(score) ? 1 : 0.25 }}>★</span>
      ))}
    </span>
  );
}

function ReviewCard({ review, width }: { review: typeof reviews[0]; width: string }) {
  return (
    <div style={{
      background:"white", padding:"2rem", borderRadius:2,
      borderLeft:"3px solid var(--moss)", boxShadow:"0 2px 12px rgba(0,0,0,0.06)",
      flex:`0 0 ${width}`, minWidth:0, boxSizing:"border-box",
    }}>
      <span style={{ fontFamily:"'Playfair Display',serif", fontSize:"3rem", color:"var(--sage)", lineHeight:0.5, display:"block", marginBottom:"0.8rem" }}>"</span>
      <p style={{ fontSize:"0.92rem", lineHeight:1.7, color:"#5A5550", fontStyle:"italic", marginBottom:"1.2rem" }}>{review.text}</p>
      <div style={{ display:"flex", alignItems:"center", gap:"0.8rem" }}>
        <div style={{ width:38, height:38, borderRadius:"50%", background:"var(--forest)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Playfair Display',serif", color:"var(--stone)", fontSize:"0.9rem", flexShrink:0 }}>{review.initial}</div>
        <div>
          <div style={{ fontSize:"0.85rem", fontWeight:700, color:"var(--dark)" }}>{review.name}</div>
          <div style={{ fontSize:"0.75rem", color:"#999" }}>{review.origin}</div>
          <StarRating score={5} />
        </div>
      </div>
    </div>
  );
}

export default function Resenas({ hideHeader }: { hideHeader?: boolean } = {}) {
  const ref = useReveal();
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Mobile: 1 item, Desktop: 2 items
  const visibleCount = isMobile ? 1 : 2;
  const total = reviews.length;
  const totalPages = total - visibleCount + 1;

  // Reset current when switching between mobile/desktop
  useEffect(() => { setCurrent(0); }, [isMobile]);

  const goTo = (idx: number) => setCurrent(Math.max(0, Math.min(idx, totalPages - 1)));
  const next = () => goTo(current + 1 >= totalPages ? 0 : current + 1);
  const prev = () => goTo(current - 1 < 0 ? totalPages - 1 : current - 1);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 4500);
  };
  useEffect(() => { resetTimer(); return () => clearInterval(timerRef.current); }, [current, visibleCount]);

  const cardWidth = isMobile ? "100%" : "calc(50% - 0.75rem)";
  const gapPx = isMobile ? 0 : 24;

  return (
    <section id="resenas" ref={ref as React.RefObject<HTMLElement>} style={{ background:"var(--cloud)", padding:"6rem clamp(1.5rem,6vw,5rem)", overflow:"hidden" }}>
      {!hideHeader && <>
        <span className="section-tag">Lo que dicen nuestros huéspedes</span>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2rem,4vw,3rem)", color:"var(--dark)", lineHeight:1.2, marginBottom:"2.5rem" }}>
          Reseñas <em style={{ color:"var(--moss)" }}>reales</em>
        </h2>
      </>}

      {/* Ratings */}
      <div className="reveal" style={{ display:"flex", gap:"3rem", flexWrap:"wrap", alignItems:"center", marginBottom:"3rem" }}>
        <div style={{ textAlign:"center" }}>
          <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"5rem", color:"var(--forest)", lineHeight:1 }}>4.4</div>
          <StarRating score={4.4} />
          <div style={{ fontSize:"0.82rem", color:"var(--ember)", letterSpacing:"0.1em", textTransform:"uppercase", marginTop:"0.3rem" }}>Fabuloso · 29 reseñas</div>
        </div>
        <div style={{ flex:1, minWidth:240 }}>
          {ratings.map(r => (
            <div key={r.label} style={{ display:"flex", alignItems:"center", gap:"1rem", marginBottom:"0.55rem" }}>
              <span style={{ fontSize:"0.8rem", color:"var(--warm-mid)", width:170, flexShrink:0 }}>{r.label}</span>
              <div style={{ flex:1, height:6, background:"#e0ddd8", borderRadius:3, overflow:"hidden" }}>
                <div style={{ height:"100%", width:`${r.pct}%`, background: r.accent ? "var(--ember)" : "var(--forest)", borderRadius:3 }} />
              </div>
              <span style={{ fontSize:"0.8rem", fontWeight:700, color:"var(--dark)", width:28, textAlign:"right" }}>{r.score.toFixed(1)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div style={{ overflow:"hidden" }}>
        <div style={{
          display:"flex",
          gap: isMobile ? 0 : "1.5rem",
          transition:"transform 0.7s cubic-bezier(0.4,0,0.2,1)",
          transform: isMobile
            ? `translateX(calc(-${current} * 100%))`
            : `translateX(calc(-${current} * (50% + ${gapPx}px)))`,
        }}>
          {reviews.map(r => <ReviewCard key={r.name} review={r} width={cardWidth} />)}
        </div>
      </div>

      {/* Controls */}
      <div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:"1rem", marginTop:"2rem" }}>
        <button onClick={()=>{prev();resetTimer();}} style={{ width:40, height:40, borderRadius:"50%", border:"2px solid var(--forest)", background:"transparent", color:"var(--forest)", cursor:"pointer", fontSize:"1rem", display:"flex", alignItems:"center", justifyContent:"center", transition:"background 0.2s, color 0.2s" }}
          onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="var(--forest)";(e.currentTarget as HTMLElement).style.color="white";}}
          onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="transparent";(e.currentTarget as HTMLElement).style.color="var(--forest)";}}>←</button>
        <div style={{ display:"flex", gap:"0.5rem", alignItems:"center" }}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button key={i} onClick={()=>{goTo(i);resetTimer();}} style={{ width: i===current ? 20 : 8, height:8, borderRadius:4, background: i===current ? "var(--forest)" : "#d0ccc7", border:"none", cursor:"pointer", transition:"background 0.3s, width 0.3s" }} />
          ))}
        </div>
        <button onClick={()=>{next();resetTimer();}} style={{ width:40, height:40, borderRadius:"50%", border:"2px solid var(--forest)", background:"transparent", color:"var(--forest)", cursor:"pointer", fontSize:"1rem", display:"flex", alignItems:"center", justifyContent:"center", transition:"background 0.2s, color 0.2s" }}
          onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="var(--forest)";(e.currentTarget as HTMLElement).style.color="white";}}
          onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="transparent";(e.currentTarget as HTMLElement).style.color="var(--forest)";}}>→</button>
      </div>
    </section>
  );
}
