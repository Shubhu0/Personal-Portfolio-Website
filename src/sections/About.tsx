import { books, certifications, education, hobbies, toolbox } from "@/data/portfolio";

const cardBase: React.CSSProperties = {
  padding: "34px",
  border: "1px solid var(--line)",
  borderRadius: "8px",
  background: "var(--panel)",
};

const microLabel: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: "11px",
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "var(--sub)",
};

function ToolboxRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <span style={{ display: "flex", gap: "14px", paddingRight: "14px" }} aria-hidden={ariaHidden || undefined}>
      {toolbox.map((tool) => (
        <span
          key={tool.label}
          style={{
            fontFamily: "var(--serif)",
            fontSize: "30px",
            padding: "6px 22px",
            border: "1px solid var(--line)",
            borderRadius: "40px",
            color: tool.accent ? "var(--accent)" : undefined,
            whiteSpace: "nowrap",
          }}
        >
          {tool.label}
        </span>
      ))}
    </span>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="pad-x"
      style={{ padding: "130px 40px 90px", maxWidth: "1320px", margin: "0 auto" }}
    >
      <div style={{ marginBottom: "70px" }}>
        <div className="eyebrow" style={{ marginBottom: "16px" }} data-reveal>
          ( 03 ) — About
        </div>
        <h2 className="h-section" style={{ maxWidth: "780px" }} data-reveal data-reveal-delay="80">
          A glimpse into my world
        </h2>
      </div>

      {/* Education */}
      <div className="about-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" }}>
        {education.map((edu, i) => (
          <div key={edu.index} data-reveal data-reveal-delay={i === 0 ? undefined : "100"} style={cardBase}>
            <div style={{ ...microLabel, marginBottom: "22px" }}>Education · {edu.index}</div>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: "34px", lineHeight: 1.02, marginBottom: "6px" }}>
              {edu.degree}
            </h3>
            <p style={{ fontSize: "15px", color: "var(--ink)", marginBottom: "4px" }}>{edu.school}</p>
            <p style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--sub)", marginBottom: "16px" }}>
              {edu.period}
            </p>
            <p style={{ fontSize: "14px", lineHeight: 1.55, color: "var(--sub)" }}>{edu.description}</p>
          </div>
        ))}
      </div>

      {/* Toolbox marquee */}
      <div data-reveal style={{ border: "1px solid var(--line)", borderRadius: "8px", overflow: "hidden", marginBottom: "24px" }}>
        <div style={{ ...microLabel, padding: "22px 26px 0" }}>
          My toolbox <span style={{ opacity: 0.6, textTransform: "none" }}>— hover to pause</span>
        </div>
        <div style={{ overflow: "hidden", padding: "18px 0 24px" }}>
          <div
            data-toolbox
            style={{
              display: "flex",
              width: "max-content",
              whiteSpace: "nowrap",
              animation: "mqr 40s linear infinite",
              willChange: "transform",
              cursor: "default",
            }}
          >
            <ToolboxRow />
            <ToolboxRow ariaHidden />
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div
        data-reveal
        style={{ border: "1px solid var(--line)", borderRadius: "8px", background: "var(--panel)", padding: "30px 32px", marginBottom: "24px" }}
      >
        <div style={microLabel}>Certifications</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginTop: "18px" }}>
          {certifications.map((cert) => (
            <span
              key={`${cert.org}-${cert.name}`}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                padding: "14px 20px",
                border: "1px solid var(--line)",
                borderRadius: "12px",
                background: "var(--bg)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "9px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                }}
              >
                {cert.org}
              </span>
              <span style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: "15px" }}>{cert.name}</span>
            </span>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px" }}>
        {/* Reads */}
        <div data-reveal style={cardBase}>
          <div style={{ ...microLabel, marginBottom: "8px" }}>My reads</div>
          <h3 style={{ fontFamily: "var(--serif)", fontSize: "30px", marginBottom: "24px" }}>
            Books that shaped my thinking
          </h3>
          <div style={{ display: "flex", gap: "22px", flexWrap: "wrap" }}>
            {books.map((book) => (
              <div
                key={book.title}
                style={{
                  width: "150px",
                  aspectRatio: "3 / 4.4",
                  borderRadius: "5px",
                  background: book.color === "accent" ? "var(--accent)" : "var(--ink)",
                  color: "var(--bg)",
                  padding: "18px 15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 18px 44px rgba(38,35,24,.26)",
                  transform: `rotate(${book.rotate}deg)`,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "9px",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    opacity: book.color === "accent" ? 0.6 : 0.55,
                  }}
                >
                  {book.category}
                </span>
                <span>
                  <span style={{ display: "block", fontFamily: "var(--serif)", fontSize: "24px", lineHeight: 1.04 }}>
                    {book.title}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--mono)",
                      fontSize: "10px",
                      marginTop: "10px",
                      opacity: book.color === "accent" ? 0.75 : 0.7,
                    }}
                  >
                    {book.author}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div data-reveal data-reveal-delay="100" style={cardBase}>
          <div style={{ ...microLabel, marginBottom: "8px" }}>Beyond the code</div>
          <h3 style={{ fontFamily: "var(--serif)", fontSize: "30px", marginBottom: "24px" }}>Where my curiosity goes</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {hobbies.map((hobby) => (
              <span
                key={hobby}
                data-cursor
                style={{
                  fontFamily: "var(--sans)",
                  fontWeight: 500,
                  fontSize: "15px",
                  padding: "11px 18px",
                  border: "1px solid var(--line)",
                  borderRadius: "40px",
                }}
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
