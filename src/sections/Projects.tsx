import { projects } from "@/data/portfolio";
import { asset } from "@/lib/asset";

export function Projects() {
  return (
    <section id="projects" className="wrap pad-x" style={{ padding: "130px 40px 60px", maxWidth: "1320px", margin: "0 auto" }}>
      <div
        className="section-head"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "46px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <div className="eyebrow" style={{ marginBottom: "16px" }} data-reveal>
            ( 01 ) — Selected Work
          </div>
          <h2 className="h-section" data-reveal data-reveal-delay="80">
            Featured Projects
          </h2>
        </div>
        <p
          style={{ maxWidth: "320px", fontSize: "15px", lineHeight: 1.55, color: "var(--sub)" }}
          data-reveal
          data-reveal-delay="160"
        >
          Six builds across AI agents, product and full-stack — scroll to flip through the deck.
        </p>
      </div>

      <div style={{ position: "relative" }}>
        {projects.map((project, i) => (
          <article
            key={project.num}
            data-card
            style={{ position: "sticky", top: `${96 + i * 22}px`, marginBottom: i === projects.length - 1 ? 0 : "26px" }}
          >
            <div
              className="proj-card-inner"
              style={{
                background: "var(--card)",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                boxShadow: "0 26px 64px rgba(38,35,24,.22)",
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "1.05fr .95fr",
                minHeight: "430px",
              }}
            >
              <div
                style={{
                  padding: "46px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "24px",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "18px", marginBottom: "18px" }}>
                    <span style={{ fontFamily: "var(--serif)", fontSize: "54px", lineHeight: 0.8, color: "var(--accent)" }}>
                      {project.num}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "11px",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        color: "var(--sub)",
                      }}
                    >
                      {project.meta}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontWeight: 400,
                      fontSize: "clamp(28px,3.2vw,46px)",
                      lineHeight: 1,
                      letterSpacing: "-.5px",
                      marginBottom: "16px",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p style={{ fontSize: "15.5px", lineHeight: 1.6, color: "var(--sub)", maxWidth: "480px" }}>
                    {project.description}
                  </p>
                </div>
                <div>
                  <div style={{ display: "flex", gap: "9px", flexWrap: "wrap", marginBottom: "24px" }}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-magnetic
                    data-cursor
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 600,
                      fontSize: "14px",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "9px",
                      borderBottom: "1.5px solid var(--ink)",
                      paddingBottom: "3px",
                    }}
                  >
                    View on GitHub <span style={{ fontFamily: "var(--serif)" }}>↗</span>
                  </a>
                </div>
              </div>
              <div className="proj-media" style={{ position: "relative", overflow: "hidden", background: "var(--panel)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(project.image)}
                  alt={project.imageAlt}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
