import { useReveal } from "@/hooks/useReveal";
import { IMG_ROOM1, IMG_ROOM2, IMG_EXTERIOR, IMG_FIREPLACE_CHAIR, IMG_FIREPLACE_WIDE, IMG_TERRACE } from "@/data/images";

const rooms = [
  {
    img: IMG_EXTERIOR,
    type: "Habitación Familiar",
    name: "Sala de las Nubes",
    capacity: "👥 Hasta 4 personas",
    desc: "Espaciosa habitación familiar con amplias vistas al jardín y las montañas. Perfecta para familias o grupos de amigos que buscan comodidad y naturaleza.",
    tags: ["4 personas", "Baño privado", "Armario", "Vista jardín"],
    price: "Consultar disponibilidad",
    highlight: "Ideal para familias",
  },
  {
    img: IMG_FIREPLACE_CHAIR,
    type: "Habitación Doble",
    name: "Suite Volcán",
    capacity: "👥 2 personas",
    desc: "Habitación matrimonial con baño privado y vista panorámica directa al Volcán Barú. Relájate junto a la chimenea y despierta con el amanecer sobre el volcán.",
    tags: ["Matrimonial", "Baño privado", "Vista volcán", "Chimenea"],
    price: "Consultar disponibilidad",
    highlight: "La más solicitada ⭐",
  },
  {
    img: IMG_FIREPLACE_WIDE,
    type: "Habitación Doble",
    name: "Refugio Barú",
    capacity: "👥 2 personas",
    desc: "Segunda habitación matrimonial con baño privado, calefacción y vistas al valle de Cerro Punta. El espacio perfecto para una escapada romántica en la montaña.",
    tags: ["Matrimonial", "Baño privado", "Calefacción", "Vista valle"],
    price: "Consultar disponibilidad",
    highlight: "Escapada romántica",
  },
];

const allAmenities = [
  { icon:"🛏️", label:"Ropa de cama incluida" },
  { icon:"🚿", label:"Baño privado con ducha" },
  { icon:"📶", label:"WiFi gratis (10/10)" },
  { icon:"🔑", label:"Armario con llave" },
  { icon:"🌡️", label:"Calefacción" },
  { icon:"🪟", label:"Ventanas panorámicas" },
  { icon:"🐾", label:"Pet friendly" },
  { icon:"🅿️", label:"Parking gratuito" },
];

export default function Habitaciones() {
  const ref = useReveal();
  return (
    <section id="habitaciones" ref={ref as React.RefObject<HTMLElement>} style={{ background:"var(--cloud)", padding:"6rem clamp(1.5rem,6vw,5rem)" }}>
      <span className="section-tag">Alojamiento</span>
      <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2rem,4vw,3rem)", color:"var(--dark)", lineHeight:1.2, marginBottom:"0.8rem" }}>
        Habitaciones<br /><em style={{ color:"var(--moss)" }}>con alma</em>
      </h2>
      <p style={{ fontWeight:300, fontSize:"1rem", color:"var(--warm-mid)", marginBottom:"3rem", maxWidth:560 }}>
        Tres espacios únicos diseñados para el descanso auténtico. Cada uno con baño privado, vistas a la montaña y toda la calidez de un hogar familiar.
      </p>

      {/* Room cards */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"2rem", marginBottom:"4rem" }}>
        {rooms.map((r, i) => (
          <div key={r.name} className="reveal" style={{ borderRadius:2, overflow:"hidden", boxShadow:"0 4px 24px rgba(0,0,0,0.08)", background:"white", transition:"transform 0.3s, box-shadow 0.3s", transitionDelay:`${i*0.1}s` }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-6px)";(e.currentTarget as HTMLElement).style.boxShadow="0 12px 40px rgba(0,0,0,0.14)";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(0)";(e.currentTarget as HTMLElement).style.boxShadow="0 4px 24px rgba(0,0,0,0.08)";}}>
            {/* Image */}
            <div style={{ position:"relative", height:240, overflow:"hidden" }}>
              <img src={r.img} alt={r.name} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block", transition:"transform 0.5s" }}
                onMouseEnter={e=>(e.currentTarget.style.transform="scale(1.05)")}
                onMouseLeave={e=>(e.currentTarget.style.transform="scale(1)")} />
              {/* Highlight badge */}
              <div style={{ position:"absolute", top:"1rem", right:"1rem", background:"var(--ember)", color:"white", fontSize:"0.68rem", fontWeight:700, letterSpacing:"0.08em", padding:"0.3rem 0.8rem", borderRadius:20 }}>
                {r.highlight}
              </div>
            </div>
            {/* Info */}
            <div style={{ padding:"1.5rem" }}>
              <div style={{ fontSize:"0.68rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--ember)", marginBottom:"0.4rem" }}>{r.type}</div>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.3rem", color:"var(--dark)", marginBottom:"0.4rem" }}>{r.name}</div>
              <div style={{ fontSize:"0.78rem", color:"var(--moss)", fontWeight:700, marginBottom:"0.8rem" }}>{r.capacity}</div>
              <div style={{ fontSize:"0.88rem", color:"var(--warm-mid)", lineHeight:1.7, marginBottom:"1rem" }}>{r.desc}</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem", marginBottom:"1.2rem" }}>
                {r.tags.map(t=>(
                  <span key={t} style={{ background:"var(--cloud)", color:"var(--forest)", fontSize:"0.7rem", padding:"0.25rem 0.7rem", borderRadius:20 }}>{t}</span>
                ))}
              </div>
              <a href="#contacto" style={{ display:"block", textAlign:"center", background:"var(--forest)", color:"white", padding:"0.75rem", borderRadius:2, textDecoration:"none", fontSize:"0.8rem", letterSpacing:"0.1em", textTransform:"uppercase", fontWeight:700, border:"2px solid var(--forest)", transition:"background 0.2s" }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="var(--moss)";(e.currentTarget as HTMLElement).style.borderColor="var(--moss)";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="var(--forest)";(e.currentTarget as HTMLElement).style.borderColor="var(--forest)";}}>
                Consultar disponibilidad →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* All amenities grid */}
      <div className="reveal" style={{ background:"var(--forest)", borderRadius:2, padding:"3rem clamp(1.5rem,5vw,4rem)" }}>
        <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.5rem", color:"var(--cloud)", marginBottom:"0.5rem" }}>
          Todas las habitaciones incluyen
        </h3>
        <p style={{ color:"rgba(245,242,237,0.6)", fontSize:"0.88rem", marginBottom:"2rem", fontWeight:300 }}>
          Sin costos ocultos. Todo lo que necesitas para una estancia perfecta.
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))", gap:"1rem" }}>
          {allAmenities.map(a=>(
            <div key={a.label} style={{ display:"flex", alignItems:"center", gap:"0.7rem" }}>
              <span style={{ fontSize:"1.3rem" }}>{a.icon}</span>
              <span style={{ color:"rgba(245,242,237,0.85)", fontSize:"0.85rem" }}>{a.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
