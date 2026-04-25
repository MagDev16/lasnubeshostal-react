import { useState, useEffect } from "react";
import { IMG_LOGO } from "@/data/images";

const links = [
  { label:"Inicio",        href:"#inicio" },
  { label:"Nosotros",      href:"#nosotros" },
  { label:"Servicios",     href:"#servicios" },
  { label:"Habitaciones",  href:"#habitaciones" },
  { label:"Galería",       href:"#galeria" },
  { label:"Reseñas",       href:"#resenas" },
  { label:"Ubicación",     href:"#mapa" },
  { label:"Contacto",      href:"#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [active, setActive]         = useState("#inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = links.map(l => l.href.replace("#",""));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${ids[i]}`); break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setActive(href);
    setDrawerOpen(false);
    document.body.style.overflow = "";
    document.getElementById(href.replace("#",""))?.scrollIntoView({ behavior:"smooth" });
  };

  const toggleDrawer = () => {
    setDrawerOpen(o => {
      document.body.style.overflow = !o ? "hidden" : "";
      return !o;
    });
  };

  return (
    <>
      <nav style={{
        position:"fixed", top:0, width:"100%", zIndex:200,
        display:"flex", alignItems:"center", justifyContent:"space-between",
        padding: scrolled ? "0.65rem 3rem" : "1rem 3rem",
        background: scrolled ? "rgba(26,42,26,0.98)" : "rgba(26,42,26,0.94)",
        backdropFilter:"blur(12px)",
        transition:"padding 0.3s, background 0.3s",
        borderBottom: scrolled ? "1px solid rgba(232,160,32,0.15)" : "none",
      }}>
        {/* Logo */}
        <a href="#inicio" onClick={e=>{e.preventDefault();go("#inicio");}}
          style={{ display:"flex", alignItems:"center", gap:"0.7rem", textDecoration:"none" }}>
          <img src={IMG_LOGO} alt="Las Nubes Hostal" style={{
            width:46, height:46, borderRadius:"50%",
            objectFit:"cover", objectPosition:"center",
            border:"2px solid var(--sun)",
            boxShadow:"0 2px 12px rgba(232,160,32,0.3)",
          }} />
          <div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"1rem", color:"var(--cloud)", letterSpacing:"0.04em", lineHeight:1.2 }}>Las Nubes Hostal</div>
            <div style={{ fontSize:"0.6rem", color:"var(--sun-lt)", letterSpacing:"0.2em", textTransform:"uppercase" }}>Cerro Punta · Panamá</div>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="nav-desktop" style={{ display:"flex", gap:"1.6rem", listStyle:"none", alignItems:"center" }}>
          {links.slice(1,-1).map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e=>{e.preventDefault();go(l.href);}} style={{
                color: active===l.href ? "var(--sun-lt)" : "rgba(250,247,242,0.75)",
                textDecoration:"none", fontSize:"0.76rem", fontWeight:300,
                letterSpacing:"0.1em", textTransform:"uppercase", transition:"color 0.2s",
                borderBottom: active===l.href ? "1px solid var(--sun)" : "1px solid transparent",
                paddingBottom:2,
              }}
              onMouseEnter={e=>(e.currentTarget.style.color="var(--sun-lt)")}
              onMouseLeave={e=>{if(active!==l.href)(e.currentTarget.style.color="rgba(250,247,242,0.75)");}}
              >{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contacto" onClick={e=>{e.preventDefault();go("#contacto");}} className="btn-primary"
              style={{ padding:"0.5rem 1.2rem", fontSize:"0.76rem" }}>
              Reservar
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button onClick={toggleDrawer} className="nav-hamburger"
          style={{ background:"none", border:"none", cursor:"pointer", display:"none", flexDirection:"column", gap:5, padding:6 }}
          aria-label="Menú">
          {[0,1,2].map(i=>(
            <span key={i} style={{
              display:"block", width:24, height:2, background:"var(--cloud)",
              borderRadius:2, transition:"transform 0.3s, opacity 0.3s",
              transform: drawerOpen ? (i===0?"translateY(7px) rotate(45deg)":i===2?"translateY(-7px) rotate(-45deg)":"none") : "none",
              opacity: drawerOpen && i===1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Overlay */}
      {drawerOpen && (
        <div onClick={toggleDrawer} className="animate-fade-in"
          style={{ position:"fixed", inset:0, zIndex:198, background:"rgba(0,0,0,0.55)", backdropFilter:"blur(3px)" }} />
      )}

      {/* Drawer */}
      <div style={{
        position:"fixed", top:0, right:0, width:"min(300px,82vw)", height:"100vh",
        zIndex:199, background:"var(--dark)", padding:"5.5rem 2.5rem 2.5rem",
        transform: drawerOpen ? "translateX(0)" : "translateX(100%)",
        transition:"transform 0.35s cubic-bezier(0.4,0,0.2,1)",
        boxShadow:"-8px 0 40px rgba(0,0,0,0.5)",
        overflowY:"auto",
      }}>
        {/* Logo in drawer */}
        <div style={{ display:"flex", alignItems:"center", gap:"0.7rem", marginBottom:"2rem", paddingBottom:"1.5rem", borderBottom:"1px solid rgba(232,160,32,0.2)" }}>
          <img src={IMG_LOGO} alt="Las Nubes Hostal" style={{ width:42, height:42, borderRadius:"50%", objectFit:"cover", border:"2px solid var(--sun)" }} />
          <span style={{ fontFamily:"'Playfair Display',serif", color:"var(--cloud)", fontSize:"0.95rem" }}>Las Nubes Hostal</span>
        </div>

        <ul style={{ listStyle:"none" }}>
          {links.map(l=>(
            <li key={l.href} style={{ borderBottom:"1px solid rgba(255,255,255,0.07)" }}>
              <a href={l.href} onClick={e=>{e.preventDefault();go(l.href);}} style={{
                display:"block", padding:"0.95rem 0",
                color: active===l.href ? "var(--sun-lt)" : "rgba(245,242,237,0.82)",
                textDecoration:"none", fontSize:"0.92rem",
                letterSpacing:"0.1em", textTransform:"uppercase", fontWeight:300,
                transition:"color 0.2s",
              }}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contacto" onClick={e=>{e.preventDefault();go("#contacto");}} className="btn-primary"
          style={{ marginTop:"2rem", display:"block", textAlign:"center", padding:"1rem" }}>
          Hacer una Reserva →
        </a>

        <div style={{ marginTop:"2rem", display:"flex", gap:"1rem", flexWrap:"wrap" }}>
          <a href="https://instagram.com/lasnubeshostal" target="_blank" rel="noreferrer"
            style={{ color:"rgba(245,242,237,0.45)", fontSize:"0.75rem", textDecoration:"none" }}>📷 @lasnubeshostal</a>
          <a href="tel:+50768109090"
            style={{ color:"rgba(245,242,237,0.45)", fontSize:"0.75rem", textDecoration:"none" }}>📞 +507 6810 9090</a>
        </div>
      </div>
    </>
  );
}
