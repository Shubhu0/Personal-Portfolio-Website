import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section
      id="work"
      className="pad-x"
      style={{
        padding: "110px 40px",
        background: "var(--panel2)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="wrap" style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <div
          className="section-head"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "60px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: "16px" }} data-reveal>
              ( 02 ) — Career
            </div>
            <h2 className="h-section" data-reveal data-reveal-delay="80">
              Where I&apos;ve Worked
            </h2>
          </div>
          <p
            style={{ maxWidth: "300px", fontSize: "15px", lineHeight: 1.55, color: "var(--sub)" }}
            data-reveal
            data-reveal-delay="160"
          >
            Roles across finance, enterprise software and data — and what I built in each.
          </p>
        </div>

        {experience.map((job, i) => (
          <div
            key={job.company}
            data-exp
            data-cursor
            className="exp-row"
            style={{
              display: "grid",
              gridTemplateColumns: "300px 1fr 1.4fr",
              gap: "30px",
              alignItems: "baseline",
              padding: "30px 16px",
              borderTop: "1px solid var(--line)",
              borderBottom: i === experience.length - 1 ? "1px solid var(--line)" : undefined,
              transition: "color .35s ease, padding-left .35s ease, background .35s ease",
              cursor: "default",
            }}
          >
            <span style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
              <span style={{ fontFamily: "var(--serif)", fontSize: "clamp(22px,2.4vw,32px)", lineHeight: 1.05 }}>
                {job.company}
              </span>
              <span style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: ".5px", color: "var(--sub)" }}>
                {job.period}
              </span>
            </span>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: ".5px",
                color: "var(--sub)",
              }}
            >
              {job.role}
            </span>
            <span style={{ fontSize: "15px", lineHeight: 1.55, color: "var(--sub)" }}>{job.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
