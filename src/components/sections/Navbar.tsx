import { useState, useEffect } from "react";

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
      // Update active link based on scroll position
      const sections = links.map(l => l.href.replace("#",""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeDrawer = () => setDrawerOpen(false);

  const handleNavClick = (href: string) => {
    setActive(href);
    closeDrawer();
    // Smooth scroll
    const id = href.replace("#","");
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });
  };

  return (
    <>
      <nav style={{ position:"fixed", top:0, width:"100%", zIndex:200, display:"flex", alignItems:"center", justifyContent:"space-between", padding: scrolled ? "0.75rem 3.5rem" : "1.2rem 3.5rem", background:"rgba(26,40,32,0.96)", backdropFilter:"blur(10px)", transition:"padding 0.3s" }}>
        {/* Logo */}
        <a href="#inicio" onClick={e=>{e.preventDefault();handleNavClick("#inicio");}} style={{ display:"flex", alignItems:"center", gap:"0.75rem", textDecoration:"none" }}>
          <div style={{ width:42, height:42, borderRadius:"50%", background:"var(--forest)", border:"2px solid var(--stone)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.95rem", color:"var(--stone)", fontFamily:"'Playfair Display',serif", fontWeight:700 }}>LN</div>
          <span style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.05rem", color:"var(--cloud)", letterSpacing:"0.05em" }}>Las Nubes Hostal</span>
        </a>

        {/* Desktop links */}
        <ul style={{ display:"flex", gap:"1.8rem", listStyle:"none", alignItems:"center" }} className="nav-desktop">
          {links.slice(1,-1).map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e=>{e.preventDefault();handleNavClick(l.href);}} style={{ color: active===l.href ? "var(--stone)" : "rgba(245,242,237,0.75)", textDecoration:"none", fontSize:"0.78rem", fontWeight:300, letterSpacing:"0.1em", textTransform:"uppercase", transition:"color 0.2s", borderBottom: active===l.href ? "1px solid var(--stone)" : "1px solid transparent", paddingBottom:2 }}
                onMouseEnter={e=>(e.currentTarget.style.color="var(--stone)")}
                onMouseLeave={e=>{if(active!==l.href)(e.currentTarget.style.color="rgba(245,242,237,0.75)");}}
              >{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contacto" onClick={e=>{e.preventDefault();handleNavClick("#contacto");}} style={{ background:"var(--ember)", color:"white", padding:"0.5rem 1.3rem", borderRadius:2, fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", textDecoration:"none", border:"2px solid var(--ember)", transition:"background 0.2s, transform 0.2s", display:"inline-block" }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="#a8522a";(e.currentTarget as HTMLElement).style.transform="translateY(-1px)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="var(--ember)";(e.currentTarget as HTMLElement).style.transform="translateY(0)";}}>
              Reservar
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button onClick={()=>setDrawerOpen(!drawerOpen)} className="nav-hamburger" style={{ background:"none", border:"none", cursor:"pointer", display:"none", flexDirection:"column", gap:5, padding:4 }} aria-label="Menú">
          {[0,1,2].map(i=>(
            <span key={i} style={{ display:"block", width:24, height:2, background:"var(--cloud)", borderRadius:2, transition:"transform 0.3s, opacity 0.3s",
              transform: drawerOpen ? (i===0?"translateY(7px) rotate(45deg)":i===2?"translateY(-7px) rotate(-45deg)":"none") : "none",
              opacity: drawerOpen && i===1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Overlay */}
      {drawerOpen && (
        <div onClick={closeDrawer} className="animate-fade-in" style={{ position:"fixed", inset:0, zIndex:198, background:"rgba(0,0,0,0.5)", backdropFilter:"blur(2px)" }} />
      )}

      {/* Drawer */}
      <div style={{ position:"fixed", top:0, right:0, width:"min(300px,82vw)", height:"100vh", zIndex:199, background:"var(--dark)", padding:"5.5rem 2.5rem 2.5rem", transform: drawerOpen ? "translateX(0)" : "translateX(100%)", transition:"transform 0.35s cubic-bezier(0.4,0,0.2,1)", boxShadow:"-8px 0 32px rgba(0,0,0,0.4)" }}>
        <ul style={{ listStyle:"none" }}>
          {links.map(l=>(
            <li key={l.href} style={{ borderBottom:"1px solid rgba(255,255,255,0.07)" }}>
              <a href={l.href} onClick={e=>{e.preventDefault();handleNavClick(l.href);}} style={{ display:"block", padding:"1rem 0", color: active===l.href ? "var(--stone)" : "rgba(245,242,237,0.85)", textDecoration:"none", fontSize:"0.95rem", letterSpacing:"0.1em", textTransform:"uppercase", fontWeight:300, transition:"color 0.2s" }}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contacto" onClick={e=>{e.preventDefault();handleNavClick("#contacto");}} style={{ marginTop:"2rem", display:"block", textAlign:"center", background:"var(--ember)", color:"white", padding:"1rem", borderRadius:2, textDecoration:"none", fontSize:"0.85rem", letterSpacing:"0.12em", textTransform:"uppercase", fontWeight:700 }}>
          Hacer una Reserva →
        </a>
        <div style={{ marginTop:"2rem", display:"flex", gap:"1rem" }}>
          <a href="https://instagram.com/lasnubeshostal" target="_blank" rel="noreferrer" style={{ color:"rgba(245,242,237,0.5)", fontSize:"0.78rem", textDecoration:"none" }}>@lasnubeshostal</a>
          <a href="tel:+50768109090" style={{ color:"rgba(245,242,237,0.5)", fontSize:"0.78rem", textDecoration:"none" }}>+507 6810 9090</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .nav-desktop { gap: 1.2rem !important; } }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
          nav { padding: 1rem 1.5rem !important; }
        }
      `}</style>
    </>
  );
}
