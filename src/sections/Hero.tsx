import { asset } from "@/lib/asset";

export function Hero() {
  return (
    <section
      className="pad-x"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 40px 40px",
        maxWidth: "1320px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "26px" }} data-hi="0">
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: "12px",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "var(--sub)",
          }}
        >
          Software Engineer
        </span>
        <span style={{ flex: "0 0 50px", height: "1px", background: "var(--line)" }} />
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: "12px",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "var(--sub)",
          }}
        >
          New York · 2026
        </span>
      </div>

      <div
        className="hero-grid"
        style={{ display: "grid", gridTemplateColumns: "1.55fr .9fr", gap: "48px", alignItems: "center" }}
      >
        <div>
          <h1
            id="heroH1"
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: "clamp(56px,9vw,148px)",
              lineHeight: 0.92,
              letterSpacing: "-2px",
            }}
          >
            <span style={{ display: "block", overflow: "hidden" }}>
              <span data-hero style={{ display: "block" }}>
                Shubhankar
              </span>
            </span>
            <span style={{ display: "block", overflow: "hidden" }}>
              <span data-hero style={{ display: "block" }}>
                Mishra<span style={{ fontStyle: "italic", color: "var(--accent)" }}> —</span>
              </span>
            </span>
          </h1>
          <p
            style={{ maxWidth: "540px", marginTop: "30px", fontSize: "19px", lineHeight: 1.55, color: "var(--sub)" }}
            data-hi="480"
          >
            I transform designs into functional, high-performing web applications — from full-stack React interfaces to
            scalable Java backends and cloud-native systems.
          </p>
          <div style={{ display: "flex", gap: "16px", marginTop: "38px", flexWrap: "wrap" }} data-hi="600">
            <a data-nav data-magnetic data-cursor href="#projects" className="btn btn--solid">
              Explore my work
              <span style={{ fontFamily: "var(--serif)", fontSize: "20px", lineHeight: 0 }}>↗</span>
            </a>
            <a data-nav data-magnetic data-cursor href="#about" className="btn btn--outline">
              About me
            </a>
          </div>
        </div>

        <div
          data-hi="180"
          style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}
        >
          <div
            style={{
              position: "relative",
              width: "clamp(240px,28vw,360px)",
              aspectRatio: "1",
              borderRadius: "50%",
              padding: "6px",
              background: "conic-gradient(from 150deg, var(--accent), #9c7a3e, var(--olive), var(--accent))",
              boxShadow: "0 22px 55px rgba(38,35,24,.24)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: "var(--bg)",
                padding: "6px",
                boxSizing: "border-box",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/avatar-circle.jpg")}
                alt="Shubhankar Mishra"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "50% 42%",
                  display: "block",
                }}
              />
            </div>
          </div>
          <div
            style={{
              background: "var(--bg)",
              border: "1px solid var(--line)",
              borderRadius: "40px",
              padding: "9px 16px",
              fontFamily: "var(--mono)",
              fontSize: "11px",
              letterSpacing: ".5px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 8px 30px rgba(39,32,25,.12)",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "var(--accent)",
                display: "inline-block",
                animation: "floaty 2.4s ease-in-out infinite",
              }}
            />
            Available for work
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "34px",
          left: "40px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          fontFamily: "var(--mono)",
          fontSize: "11px",
          letterSpacing: "1px",
          textTransform: "uppercase",
          color: "var(--sub)",
        }}
        data-hi="820"
      >
        <span
          style={{
            width: "30px",
            height: "30px",
            border: "1px solid var(--line)",
            borderRadius: "50%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ↓
        </span>
        Scroll to explore
      </div>
    </section>
  );
}
