import { social } from "@/data/portfolio";

const footerLink: React.CSSProperties = { textDecoration: "none", opacity: 0.75 };

export function Contact() {
  return (
    <section
      id="contact"
      className="pad-x"
      style={{ padding: "130px 40px 70px", background: "var(--ink)", color: "var(--bg)", position: "relative", overflow: "hidden" }}
    >
      <div className="wrap" style={{ maxWidth: "1320px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div className="eyebrow" style={{ marginBottom: "30px" }} data-reveal>
          ( 04 ) — Contact
        </div>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 400,
            fontSize: "clamp(46px,8.5vw,140px)",
            lineHeight: 0.92,
            letterSpacing: "-2px",
            maxWidth: "1100px",
          }}
          data-reveal
          data-reveal-delay="80"
        >
          Let&apos;s create something <span style={{ fontStyle: "italic", color: "var(--accent)" }}>amazing</span> together
        </h2>
        <p
          style={{ maxWidth: "520px", marginTop: "34px", fontSize: "18px", lineHeight: 1.55, color: "rgba(241,236,225,.7)" }}
          data-reveal
          data-reveal-delay="160"
        >
          If you think I&apos;d be a great fit for your team and you&apos;re excited about building innovative products —
          let&apos;s connect.
        </p>
        <a
          href={social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          data-magnetic
          data-cursor
          data-invert
          data-reveal
          data-reveal-delay="220"
          style={{
            fontFamily: "var(--sans)",
            fontWeight: 600,
            fontSize: "16px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "40px",
            padding: "18px 30px",
            background: "var(--bg)",
            color: "var(--ink)",
            borderRadius: "46px",
          }}
        >
          Get in touch <span style={{ fontFamily: "var(--serif)", fontSize: "22px", lineHeight: 0 }}>↗</span>
        </a>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "24px",
            marginTop: "120px",
            paddingTop: "30px",
            borderTop: "1px solid rgba(241,236,225,.18)",
          }}
        >
          <div style={{ fontFamily: "var(--serif)", fontSize: "24px" }}>
            Shubhankar<span style={{ color: "var(--accent)" }}>.</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: "26px",
              fontFamily: "var(--mono)",
              fontSize: "12px",
              letterSpacing: ".5px",
              textTransform: "uppercase",
            }}
          >
            <a href={social.twitter} target="_blank" rel="noopener noreferrer" data-invert style={footerLink}>
              Twitter
            </a>
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" data-invert style={footerLink}>
              Instagram
            </a>
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" data-invert style={footerLink}>
              LinkedIn
            </a>
          </div>
          <div style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "rgba(241,236,225,.5)" }}>
            © 2026 — All rights reserved
          </div>
        </div>
      </div>
    </section>
  );
}
