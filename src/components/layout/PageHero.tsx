import { useNavigate } from "react-router-dom";

interface PageHeroProps {
  tag: string;
  title: React.ReactNode;
  subtitle?: string;
  image: string;
  imagePosition?: string;
  breadcrumb?: string;
}

export default function PageHero({ tag, title, subtitle, image, imagePosition = "center 50%", breadcrumb }: PageHeroProps) {
  const navigate = useNavigate();
  return (
    <section style={{
      position: "relative",
      height: "60vh",
      minHeight: 340,
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden",
    }}>
      {/* Background */}
      <img src={image} alt="" style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "cover", objectPosition: imagePosition,
      }} />
      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to bottom, rgba(26,42,26,0.3) 0%, rgba(26,42,26,0.15) 30%, rgba(26,42,26,0.82) 100%)",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, width: "100%", padding: "0 clamp(1.5rem,6vw,5rem) 4rem" }}>
        {/* Breadcrumb */}
        <div style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <button onClick={() => navigate("/")} style={{
            background: "none", border: "none", cursor: "pointer",
            color: "rgba(255,255,255,0.6)", fontSize: "0.72rem",
            letterSpacing: "0.12em", textTransform: "uppercase", padding: 0,
            transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--sun-lt)")}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
          >Inicio</button>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.7rem" }}>›</span>
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            {breadcrumb || tag}
          </span>
        </div>

        <span style={{
          display: "inline-block", fontSize: "0.68rem", letterSpacing: "0.28em",
          textTransform: "uppercase", color: "var(--sun-lt)",
          border: "1px solid rgba(232,160,32,0.55)", padding: "0.3rem 1rem",
          marginBottom: "0.9rem",
        }}>{tag}</span>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
          fontWeight: 400, lineHeight: 1.1,
          color: "white", margin: 0,
        }}>{title}</h1>

        {subtitle && (
          <p style={{
            marginTop: "0.8rem", fontWeight: 300,
            fontSize: "1rem", color: "rgba(255,255,255,0.8)",
            maxWidth: 520, lineHeight: 1.6,
          }}>{subtitle}</p>
        )}
      </div>
    </section>
  );
}
