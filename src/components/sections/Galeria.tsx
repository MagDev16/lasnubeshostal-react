import { useState, useEffect } from "react";
import { useReveal } from "@/hooks/useReveal";
import {
  IMG_RAINBOW, IMG_EXT_GARDEN, IMG_FIREPLACE_DAY, IMG_EXT_TERRACE2,
  IMG_NIGHT_STARS, IMG_EXT_MURAL, IMG_EXT_VOLCANO, IMG_INTERIOR_HALL,
  IMG_ROOM_DOUBLE, IMG_EXTERIOR,
} from "@/data/images";

const photos = [
  { src: IMG_RAINBOW,      alt: "Arcoíris sobre Las Nubes Hostal",              span2: true },
  { src: IMG_EXT_GARDEN,   alt: "Exterior con jardín y mural colorido" },
  { src: IMG_FIREPLACE_DAY,alt: "Sala de chimenea con vista panorámica al valle" },
  { src: IMG_EXT_TERRACE2, alt: "Terraza cubierta con vista a las montañas" },
  { src: IMG_NIGHT_STARS,  alt: "Hostal de noche bajo un cielo estrellado" },
  { src: IMG_EXT_MURAL,    alt: "Fachada con mural artístico y jardín" },
  { src: IMG_EXT_VOLCANO,  alt: "Vista del Volcán Barú desde el hostal" },
  { src: IMG_INTERIOR_HALL,alt: "Pasillo interior con sala de estar" },
  { src: IMG_ROOM_DOUBLE,  alt: "Habitación doble con madera rústica" },
  { src: IMG_EXTERIOR,     alt: "Exterior del hostal con jardín y volcán" },
];

function Lightbox({ photo, onClose, onPrev, onNext }: {
  photo: typeof photos[0];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div role="dialog" aria-modal="true" aria-label={photo.alt} onClick={onClose} style={{
      position:"fixed", inset:0, zIndex:1000,
      background:"rgba(0,0,0,0.92)", display:"flex",
      alignItems:"center", justifyContent:"center",
    }}>
      {/* Close */}
      <button aria-label="Cerrar imagen" onClick={onClose} style={{
        position:"absolute", top:"1.5rem", right:"1.5rem",
        background:"rgba(255,255,255,0.15)", border:"none", color:"white",
        width:42, height:42, borderRadius:"50%", cursor:"pointer",
        fontSize:"1.3rem", display:"flex", alignItems:"center", justifyContent:"center",
      }}>✕</button>

      {/* Prev */}
      <button aria-label="Imagen anterior" onClick={e=>{e.stopPropagation();onPrev();}} style={{
        position:"absolute", left:"1.5rem",
        background:"rgba(255,255,255,0.15)", border:"none", color:"white",
        width:48, height:48, borderRadius:"50%", cursor:"pointer",
        fontSize:"1.4rem", display:"flex", alignItems:"center", justifyContent:"center",
      }}>←</button>

      {/* Image */}
      <img
        src={photo.src}
        alt={photo.alt}
        onClick={e=>e.stopPropagation()}
        style={{
          maxWidth:"90vw", maxHeight:"88vh",
          objectFit:"contain", borderRadius:2,
          boxShadow:"0 8px 60px rgba(0,0,0,0.6)",
        }}
      />

      {/* Next */}
      <button aria-label="Imagen siguiente" onClick={e=>{e.stopPropagation();onNext();}} style={{
        position:"absolute", right:"1.5rem",
        background:"rgba(255,255,255,0.15)", border:"none", color:"white",
        width:48, height:48, borderRadius:"50%", cursor:"pointer",
        fontSize:"1.4rem", display:"flex", alignItems:"center", justifyContent:"center",
      }}>→</button>

      {/* Caption */}
      <div style={{
        position:"absolute", bottom:"1.5rem", left:"50%",
        transform:"translateX(-50%)",
        color:"rgba(255,255,255,0.7)", fontSize:"0.82rem",
        background:"rgba(0,0,0,0.4)", padding:"0.4rem 1rem", borderRadius:20,
        whiteSpace:"nowrap",
      }}>{photo.alt}</div>
    </div>
  );
}

export default function Galeria({ hideHeader }: { hideHeader?: boolean } = {}) {
  const ref = useReveal();
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIdx(i);
  const closeLightbox = () => setLightboxIdx(null);
  const prevPhoto = () => setLightboxIdx(i => i !== null ? (i - 1 + photos.length) % photos.length : null);
  const nextPhoto = () => setLightboxIdx(i => i !== null ? (i + 1) % photos.length : null);

  return (
    <section id="galeria" ref={ref as React.RefObject<HTMLElement>}
      style={{ background:"var(--cream)", padding:"6rem clamp(1.5rem,6vw,5rem)" }}>
      {!hideHeader && <>
        <span className="section-tag">Imágenes</span>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2rem,4vw,3rem)", color:"var(--dark)", lineHeight:1.2, marginBottom:"0.8rem" }}>
          Vive el <em style={{ color:"var(--moss)" }}>paisaje</em>
        </h2>
        <p style={{ fontWeight:300, fontSize:"1rem", color:"var(--warm-mid)", marginBottom:"2.5rem" }}>
          Cada rincón de Las Nubes Hostal tiene su propia historia que contar.
        </p>
      </>}

      {/* Main grid */}
      <div className="galeria-grid" style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gridTemplateRows:"280px 220px 220px",
        gap:"0.75rem",
      }}>
        {photos.map((p, i) => (
          <div key={i} className="reveal" onClick={() => openLightbox(i)} style={{
            overflow:"hidden", borderRadius:2, position:"relative",
            gridColumn: i===0 ? "span 2" : undefined,
            transitionDelay:`${i*0.05}s`, cursor:"zoom-in",
          }}>
            <img src={p.src} alt={p.alt} style={{
              width:"100%", height:"100%", objectFit:"cover", display:"block",
              transition:"transform 0.5s",
            }}
            onMouseEnter={e=>(e.currentTarget.style.transform="scale(1.06)")}
            onMouseLeave={e=>(e.currentTarget.style.transform="scale(1)")} />
            <div style={{
              position:"absolute", inset:0,
              background:"linear-gradient(to top,rgba(26,42,26,0.55) 0%,transparent 55%)",
              opacity:0, transition:"opacity 0.3s", pointerEvents:"none",
            }}
            onMouseEnter={e=>(e.currentTarget.style.opacity="1")}
            onMouseLeave={e=>(e.currentTarget.style.opacity="0")} />
          </div>
        ))}
      </div>

      <p style={{ marginTop:"1.5rem", fontSize:"0.8rem", color:"var(--text-muted)", textAlign:"center" }}>
        📸 Síguenos en Instagram:{" "}
        <a href="https://instagram.com/lasnubeshostal" target="_blank" rel="noreferrer"
          style={{ color:"var(--moss)", textDecoration:"none" }}>@lasnubeshostal</a>
      </p>

      {lightboxIdx !== null && (
        <Lightbox
          photo={photos[lightboxIdx]}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </section>
  );
}
