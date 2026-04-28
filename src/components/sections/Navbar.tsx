import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LOGO_SRC = "/LNH-logo.png";

const links = [
  { label:"Nosotros",      href:"/nosotros",     section:"nosotros" },
  { label:"Servicios",     href:"/servicios",    section:"servicios" },
  { label:"Habitaciones",  href:"/habitaciones", section:"habitaciones" },
  { label:"Galería",       href:"/galeria",      section:"galeria" },
  { label:"Reseñas",       href:"/resenas",      section:"resenas" },
  { label:"Contacto",      href:"/contacto",     section:"contacto" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled]     = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [active, setActive]         = useState(location.pathname);
  const drawerRef   = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => { setActive(location.pathname); }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Focus trap inside drawer
  useEffect(() => {
    if (!drawerOpen) return;
    const drawer = drawerRef.current;
    if (!drawer) return;
    const focusable = drawer.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    first?.focus();

    const trap = (e: KeyboardEvent) => {
      if (e.key === "Escape") { closeDrawer(); return; }
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [drawerOpen]);

  const closeDrawer = () => {
    setDrawerOpen(false);
    document.body.style.overflow = "";
    hamburgerRef.current?.focus();
  };

  const go = (href: string, _section: string) => {
    setActive(href);
    closeDrawer();
    if (href === "/") {
      if (isHome) window.scrollTo({ top: 0, behavior: "smooth" });
      else { navigate("/"); window.scrollTo(0, 0); }
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  const toggleDrawer = () => {
    const next = !drawerOpen;
    setDrawerOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
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
        <a href="/" onClick={e=>{e.preventDefault();go("/","inicio");}}
          style={{ display:"flex", alignItems:"center", gap:"0.7rem", textDecoration:"none" }}>
          <img src={LOGO_SRC} alt="Las Nubes Hostal" style={{
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
          {links.slice(0,-1).map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e=>{e.preventDefault();go(l.href,l.section);}} style={{
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
            <a href="/contacto" onClick={e=>{e.preventDefault();go("/contacto","contacto");}} className="btn-primary"
              style={{ padding:"0.5rem 1.2rem", fontSize:"0.76rem" }}>
              Reservar
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          ref={hamburgerRef}
          onClick={toggleDrawer}
          className="nav-hamburger"
          style={{ background:"none", border:"none", cursor:"pointer", display:"none", flexDirection:"column", gap:5, padding:6 }}
          aria-label={drawerOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={drawerOpen}
          aria-controls="mobile-drawer"
        >
          {[0,1,2].map(i=>(
            <span key={i} aria-hidden="true" style={{
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
        <div onClick={closeDrawer} className="animate-fade-in"
          aria-hidden="true"
          style={{ position:"fixed", inset:0, zIndex:198, background:"rgba(0,0,0,0.55)", backdropFilter:"blur(3px)" }} />
      )}

      {/* Drawer */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        style={{
          position:"fixed", top:0, right:0, width:"min(300px,82vw)", height:"100vh",
          zIndex:199, background:"var(--dark)", padding:"5.5rem 2.5rem 2.5rem",
          transform: drawerOpen ? "translateX(0)" : "translateX(100%)",
          transition:"transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          boxShadow:"-8px 0 40px rgba(0,0,0,0.5)",
          overflowY:"auto",
          visibility: drawerOpen ? "visible" : "hidden",
        }}
      >
        {/* Logo in drawer */}
        <div style={{ display:"flex", alignItems:"center", gap:"0.7rem", marginBottom:"2rem", paddingBottom:"1.5rem", borderBottom:"1px solid rgba(232,160,32,0.2)" }}>
          <img src={LOGO_SRC} alt="" aria-hidden="true" style={{ width:42, height:42, borderRadius:"50%", objectFit:"cover", border:"2px solid var(--sun)" }} />
          <span style={{ fontFamily:"'Playfair Display',serif", color:"var(--cloud)", fontSize:"0.95rem" }}>Las Nubes Hostal</span>
        </div>

        <ul style={{ listStyle:"none" }}>
          {[{ label:"Inicio", href:"/", section:"inicio" }, ...links].map(l=>(
            <li key={l.href} style={{ borderBottom:"1px solid rgba(255,255,255,0.07)" }}>
              <a href={l.href} onClick={e=>{e.preventDefault();go(l.href,l.section);}} style={{
                display:"block", padding:"0.95rem 0",
                color: active===l.href ? "var(--sun-lt)" : "rgba(245,242,237,0.82)",
                textDecoration:"none", fontSize:"0.92rem",
                letterSpacing:"0.1em", textTransform:"uppercase", fontWeight:300,
                transition:"color 0.2s",
              }}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="/contacto" onClick={e=>{e.preventDefault();go("/contacto","contacto");}} className="btn-primary"
          style={{ marginTop:"2rem", display:"block", textAlign:"center", padding:"1rem" }}>
          Hacer una Reserva →
        </a>

        <div style={{ marginTop:"2rem", display:"flex", gap:"1rem", flexWrap:"wrap" }}>
          <a href="https://instagram.com/lasnubeshostal" target="_blank" rel="noreferrer"
            style={{ color:"rgba(245,242,237,0.45)", fontSize:"0.75rem", textDecoration:"none" }}>
            <span aria-hidden="true">📷</span> @lasnubeshostal
          </a>
          <a href="tel:+50768109090"
            style={{ color:"rgba(245,242,237,0.45)", fontSize:"0.75rem", textDecoration:"none" }}>
            <span aria-hidden="true">📞</span> +507 6810 9090
          </a>
        </div>
      </div>
    </>
  );
}
