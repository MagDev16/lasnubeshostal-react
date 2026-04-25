import { useReveal } from "@/hooks/useReveal";
import { IMG_VOLCANO, IMG_EXTERIOR, IMG_FIREPLACE_CHAIR, IMG_TERRACE, IMG_FIREPLACE_WIDE, IMG_INSTAGRAM } from "@/data/images";

const photos = [
  { src: IMG_VOLCANO,         alt: "Vista del Volcán Barú al atardecer con arcoíris", span2: true },
  { src: IMG_EXTERIOR,        alt: "Exterior del hostal con jardín y volcán de fondo" },
  { src: IMG_FIREPLACE_CHAIR, alt: "Sala con chimenea y vista panorámica" },
  { src: IMG_TERRACE,         alt: "Terraza y área exterior con montañas" },
  { src: IMG_FIREPLACE_WIDE,  alt: "Sala de estar con chimenea y vistas al valle" },
  { src: IMG_INSTAGRAM,       alt: "Las Nubes Hostal jardín y flores" },
];

export default function Galeria() {
  const ref = useReveal();
  return (
    <section id="galeria" ref={ref as React.RefObject<HTMLElement>} style={{ background:"var(--cream)", padding:"6rem clamp(1.5rem,6vw,5rem)" }}>
      <span className="section-tag">Imágenes</span>
      <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2rem,4vw,3rem)", color:"var(--dark)", lineHeight:1.2, marginBottom:"0.8rem" }}>
        Vive el <em style={{ color:"var(--moss)" }}>paisaje</em>
      </h2>
      <p style={{ fontWeight:300, fontSize:"1rem", color:"var(--warm-mid)", marginBottom:"2.5rem" }}>
        Cada rincón de Las Nubes Hostal tiene su propia historia que contar.
      </p>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gridTemplateRows:"280px 280px", gap:"0.8rem" }}>
        {photos.map((p, i) => (
          <div key={i} className="reveal" style={{ overflow:"hidden", borderRadius:2, position:"relative", gridColumn: p.span2 ? "span 2" : undefined, transitionDelay:`${i*0.07}s`, cursor:"pointer" }}>
            <img src={p.src} alt={p.alt} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block", transition:"transform 0.5s" }}
              onMouseEnter={e=>(e.currentTarget.style.transform="scale(1.06)")}
              onMouseLeave={e=>(e.currentTarget.style.transform="scale(1)")} />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(26,40,32,0.5) 0%,transparent 55%)", opacity:0, transition:"opacity 0.3s" }}
              onMouseEnter={e=>(e.currentTarget.style.opacity="1")}
              onMouseLeave={e=>(e.currentTarget.style.opacity="0")} />
          </div>
        ))}
      </div>
      <p style={{ marginTop:"1.5rem", fontSize:"0.8rem", color:"#999", textAlign:"center" }}>
        📸 Síguenos en Instagram:{" "}
        <a href="https://instagram.com/lasnubeshostal" target="_blank" rel="noreferrer" style={{ color:"var(--moss)", textDecoration:"none" }}>@lasnubeshostal</a>
      </p>
      <style>{`
        @media(max-width:600px){
          #galeria .reveal { grid-column: span 1 !important; }
          #galeria > div > div:nth-child(2) { display:none; }
        }
      `}</style>
    </section>
  );
}
