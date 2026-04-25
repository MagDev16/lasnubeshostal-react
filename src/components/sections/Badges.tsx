const badges = [
  { icon: "⭐", score: "8.7", text: "Puntuación Fabulosa · 29 reseñas" },
  { icon: "📶", score: "10",  text: "WiFi gratis · Puntuación perfecta" },
  { icon: "🐾", score: "✓",  text: "Se admiten mascotas · Gratis" },
  { icon: "🅿️", score: "✓",  text: "Parking privado · Gratis" },
];

export default function Badges() {
  return (
    <div style={{
      background: "var(--forest)",
      display: "flex", justifyContent: "center",
      gap: "clamp(1.5rem, 4vw, 4rem)",
      padding: "2rem clamp(1rem, 4vw, 4rem)",
      flexWrap: "wrap",
    }}>
      {badges.map(b => (
        <div key={b.score + b.text} style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "var(--cloud)" }}>
          <span style={{ fontSize: "1.4rem" }}>{b.icon}</span>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--stone)", lineHeight: 1 }}>{b.score}</div>
            <div style={{ fontSize: "0.78rem", letterSpacing: "0.05em", opacity: 0.85 }}>{b.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
