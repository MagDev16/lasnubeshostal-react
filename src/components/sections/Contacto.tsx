import { useState } from "react";

export default function Contacto() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
  };

  const inputStyle: React.CSSProperties = {
    border: "1.5px solid #d8d4cd", padding: "0.85rem 1rem",
    fontFamily: "'Lato', sans-serif", fontSize: "0.9rem",
    background: "white", color: "var(--text)", borderRadius: 2,
    outline: "none", width: "100%", transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <section id="contacto" style={{ background: "var(--cream)", padding: "6rem clamp(1.5rem, 6vw, 5rem)" }}>
      <span className="section-tag">¿Listo para tu aventura?</span>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,4vw,3rem)", color: "var(--dark)", lineHeight: 1.2, marginBottom: "0.8rem" }}>
        Haz tu <em style={{ color: "var(--moss)" }}>reserva</em>
      </h2>
      <p style={{ fontWeight: 300, fontSize: "1rem", color: "var(--warm-mid)", marginBottom: "3rem" }}>
        Escríbenos y te respondemos enseguida. También puedes llamar o escribir por WhatsApp.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem", alignItems: "start" }}>
        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <label style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--forest)", fontWeight: 700 }}>Nombre</label>
              <input type="text" placeholder="Tu nombre" required style={inputStyle}
                onFocus={e => { e.currentTarget.style.borderColor="var(--moss)"; e.currentTarget.style.boxShadow="0 0 0 3px rgba(74,124,89,0.12)"; }}
                onBlur={e => { e.currentTarget.style.borderColor="#d8d4cd"; e.currentTarget.style.boxShadow="none"; }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <label style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--forest)", fontWeight: 700 }}>Email</label>
              <input type="email" placeholder="tu@email.com" required style={inputStyle}
                onFocus={e => { e.currentTarget.style.borderColor="var(--moss)"; e.currentTarget.style.boxShadow="0 0 0 3px rgba(74,124,89,0.12)"; }}
                onBlur={e => { e.currentTarget.style.borderColor="#d8d4cd"; e.currentTarget.style.boxShadow="none"; }} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {["Llegada", "Salida"].map(lbl => (
              <div key={lbl} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--forest)", fontWeight: 700 }}>{lbl}</label>
                <input type="date" style={inputStyle}
                  onFocus={e => { e.currentTarget.style.borderColor="var(--moss)"; e.currentTarget.style.boxShadow="0 0 0 3px rgba(74,124,89,0.12)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor="#d8d4cd"; e.currentTarget.style.boxShadow="none"; }} />
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <label style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--forest)", fontWeight: 700 }}>Habitación de interés</label>
            <select style={inputStyle}
              onFocus={e => { e.currentTarget.style.borderColor="var(--moss)"; e.currentTarget.style.boxShadow="0 0 0 3px rgba(74,124,89,0.12)"; }}
              onBlur={e => { e.currentTarget.style.borderColor="#d8d4cd"; e.currentTarget.style.boxShadow="none"; }}>
              <option>Habitación Familiar (4 personas)</option>
              <option>Suite Volcán (Matrimonial)</option>
              <option>Refugio Barú (Matrimonial)</option>
              <option>No lo sé aún</option>
            </select>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <label style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--forest)", fontWeight: 700 }}>Mensaje</label>
            <textarea placeholder="¿Viajan con mascotas, en familia, les interesa un tour de senderismo? Cuéntanos..." rows={4}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={e => { e.currentTarget.style.borderColor="var(--moss)"; e.currentTarget.style.boxShadow="0 0 0 3px rgba(74,124,89,0.12)"; }}
              onBlur={e => { e.currentTarget.style.borderColor="#d8d4cd"; e.currentTarget.style.boxShadow="none"; }} />
          </div>

          <button type="submit" style={{
            background: "var(--ember)", color: "white",
            padding: "1rem 2.2rem", border: "2px solid var(--ember)",
            fontFamily: "'Lato', sans-serif", fontSize: "0.82rem",
            letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700,
            borderRadius: 2, cursor: "pointer", alignSelf: "flex-start",
            transition: "background 0.2s, transform 0.2s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="#a8522a"; (e.currentTarget as HTMLElement).style.transform="translateY(-2px)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="var(--ember)"; (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}
          >Enviar consulta →</button>

          {sent && (
            <div style={{ color: "var(--moss)", fontSize: "0.9rem", padding: "0.8rem", background: "rgba(74,124,89,0.08)", borderRadius: 2 }}>
              ✓ ¡Mensaje enviado! Te contactamos en menos de 24 horas.
            </div>
          )}
        </form>

        {/* Contact info */}
        <div>
          {[
            { icon: "📞", label: "WhatsApp & Teléfono", content: <a href="tel:+50768109090" style={{ color: "var(--forest)", textDecoration: "none" }}>+507 6810 9090</a> },
            { icon: "📍", label: "Dirección", content: <>El alto de Las Nubes,<br />Cerro Punta, Chiriquí, Panamá</> },
            { icon: "🌐", label: "Idiomas", content: "Español · Inglés" },
            { icon: "📸", label: "Síguenos", content: (
              <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginTop: "0.3rem" }}>
                {[
                  { href: "https://instagram.com/lasnubeshostal", label: "📷 Instagram" },
                  { href: "https://wa.me/50768109090", label: "💬 WhatsApp" },
                ].map(btn => (
                  <a key={btn.label} href={btn.href} target="_blank" rel="noreferrer" style={{
                    display: "inline-flex", alignItems: "center", gap: "0.4rem",
                    background: "var(--forest)", color: "white", padding: "0.55rem 1rem",
                    borderRadius: 2, textDecoration: "none", fontSize: "0.78rem",
                    letterSpacing: "0.06em", border: "2px solid var(--forest)",
                    transition: "background 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="var(--moss)"; (e.currentTarget as HTMLElement).style.borderColor="var(--moss)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="var(--forest)"; (e.currentTarget as HTMLElement).style.borderColor="var(--forest)"; }}
                  >{btn.label}</a>
                ))}
              </div>
            )},
          ].map(item => (
            <div key={item.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1.8rem", paddingBottom: "1.8rem", borderBottom: "1px solid #e8e4dd" }}>
              <div style={{ width: 44, height: 44, background: "var(--forest)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>{item.icon}</div>
              <div>
                <strong style={{ display: "block", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ember)", marginBottom: "0.2rem" }}>{item.label}</strong>
                <span style={{ fontSize: "0.95rem", color: "var(--text)", lineHeight: 1.5 }}>{item.content}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
