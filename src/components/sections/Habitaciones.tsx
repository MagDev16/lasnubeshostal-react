import { useReveal } from "@/hooks/useReveal";
import { useNavigate } from "react-router-dom";
import { IMG_ROOM_DOUBLE, IMG_FIREPLACE_DAY, IMG_INTERIOR_HALL, IMG_EXT_TERRACE2 } from "@/data/images";

const rooms = [
  {
    img: IMG_ROOM_DOUBLE,
    type:"Habitación Familiar",
    name:"Sala de las Nubes",
    capacity:"👥 Hasta 4 personas",
    desc:"Habitación amplia y acogedora con camas para 4 personas, armarios de madera y baño privado. Perfecta para familias o grupos de amigos que buscan comodidad y naturaleza.",
    tags:["4 personas","Baño privado","Armario de madera","WiFi"],
    highlight:"Ideal para familias",
    color:"var(--moss)",
  },
  {
    img: IMG_FIREPLACE_DAY,
    type:"Habitación Doble",
    name:"Suite Volcán",
    capacity:"👥 2 personas",
    desc:"Habitación matrimonial con baño privado y acceso directo a la sala con chimenea. Despierta con el amanecer sobre el Volcán Barú y relájate frente al fuego por las noches.",
    tags:["Matrimonial","Baño privado","Chimenea","Vista volcán"],
    highlight:"⭐ La más solicitada",
    color:"var(--ember)",
  },
  {
    img: IMG_INTERIOR_HALL,
    type:"Habitación Doble",
    name:"Refugio Barú",
    capacity:"👥 2 personas",
    desc:"Segunda habitación matrimonial con baño privado y calefacción. Ambiente rústico auténtico con madera local, perfecta para una escapada romántica en la montaña.",
    tags:["Matrimonial","Baño privado","Calefacción","Vista valle"],
    highlight:"Escapada romántica",
    color:"var(--brown)",
  },
];

const amenities = [
  {icon:"🛏️",label:"Ropa de cama incluida"},
  {icon:"🚿",label:"Baño privado con ducha"},
  {icon:"📶",label:"WiFi gratis (10/10)"},
  {icon:"🔑",label:"Armario con cerradura"},
  {icon:"🌡️",label:"Calefacción"},
  {icon:"🪟",label:"Ventanas panorámicas"},
  {icon:"🐾",label:"Pet friendly"},
  {icon:"🅿️",label:"Parking gratuito"},
];

export default function Habitaciones({ hideHeader }: { hideHeader?: boolean } = {}) {
  const ref = useReveal();
  const navigate = useNavigate();
  return (
    <section id="habitaciones" ref={ref as React.RefObject<HTMLElement>}
      style={{ background:"var(--cloud)", padding:"6rem clamp(1.5rem,6vw,5rem)" }}>
      {!hideHeader && <>
        <span className="section-tag">Alojamiento</span>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2rem,4vw,3rem)", color:"var(--dark)", lineHeight:1.2, marginBottom:"0.8rem" }}>
          Habitaciones<br /><em style={{ color:"var(--moss)" }}>con alma</em>
        </h2>
        <p style={{ fontWeight:300, fontSize:"1rem", color:"var(--warm-mid)", marginBottom:"3rem", maxWidth:560 }}>
          Tres espacios únicos con baño privado, vistas a la montaña y toda la calidez de un hogar familiar panameño.
        </p>
      </>}

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"2rem", marginBottom:"4rem" }}>
        {rooms.map((r,i) => (
          <div key={r.name} className="reveal" style={{
            borderRadius:2, overflow:"hidden",
            boxShadow:"0 4px 24px rgba(0,0,0,0.09)",
            background:"white", transition:"transform 0.3s, box-shadow 0.3s",
            transitionDelay:`${i*0.1}s`,
          }}
          onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-6px)";(e.currentTarget as HTMLElement).style.boxShadow="0 16px 48px rgba(0,0,0,0.14)";}}
          onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(0)";(e.currentTarget as HTMLElement).style.boxShadow="0 4px 24px rgba(0,0,0,0.09)";}}>
            <div style={{ position:"relative", height:240, overflow:"hidden" }}>
              <img src={r.img} alt={r.name} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block", transition:"transform 0.5s" }}
                onMouseEnter={e=>(e.currentTarget.style.transform="scale(1.05)")}
                onMouseLeave={e=>(e.currentTarget.style.transform="scale(1)")} />
              <div style={{ position:"absolute", top:"1rem", right:"1rem", background:r.color, color:"white", fontSize:"0.68rem", fontWeight:700, letterSpacing:"0.08em", padding:"0.3rem 0.8rem", borderRadius:20 }}>
                {r.highlight}
              </div>
            </div>
            <div style={{ padding:"1.6rem" }}>
              <div style={{ fontSize:"0.68rem", letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--ember)", marginBottom:"0.35rem" }}>{r.type}</div>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.35rem", color:"var(--dark)", marginBottom:"0.35rem" }}>{r.name}</div>
              <div style={{ fontSize:"0.78rem", color:"var(--moss)", fontWeight:700, marginBottom:"0.8rem" }}>{r.capacity}</div>
              <div style={{ fontSize:"0.88rem", color:"var(--warm-mid)", lineHeight:1.7, marginBottom:"1rem" }}>{r.desc}</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem", marginBottom:"1.3rem" }}>
                {r.tags.map(t=>(
                  <span key={t} style={{ background:"var(--khaki)", color:"var(--forest)", fontSize:"0.7rem", padding:"0.25rem 0.7rem", borderRadius:20 }}>{t}</span>
                ))}
              </div>
              <button className="btn-forest"
                onClick={() => { navigate("/contacto"); window.scrollTo(0,0); }}
                style={{ display:"block", textAlign:"center", width:"100%", cursor:"pointer", fontFamily:"'Lato',sans-serif" }}>
                Consultar disponibilidad →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Amenities */}
      <div className="reveal" style={{ background:"var(--forest)", borderRadius:2, padding:"3rem clamp(1.5rem,5vw,4rem)" }}>
        <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.5rem", color:"var(--cloud)", marginBottom:"0.5rem" }}>
          Todas las habitaciones incluyen
        </h3>
        <p style={{ color:"rgba(250,247,242,0.6)", fontSize:"0.88rem", marginBottom:"2rem", fontWeight:300 }}>
          Sin costos ocultos. Todo lo que necesitas para una estancia perfecta.
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))", gap:"1rem" }}>
          {amenities.map(a=>(
            <div key={a.label} style={{ display:"flex", alignItems:"center", gap:"0.7rem" }}>
              <span style={{ fontSize:"1.3rem" }}>{a.icon}</span>
              <span style={{ color:"rgba(250,247,242,0.85)", fontSize:"0.85rem" }}>{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
