const navLink: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: "11px",
  letterSpacing: "1px",
  textTransform: "uppercase",
  textDecoration: "none",
  opacity: 0.7,
  transition: "opacity .3s",
};

export function Nav() {
  return (
    <nav
      id="nav"
      className="nav-bar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 40px",
        transition: "background .4s ease, border-color .4s ease, padding .4s ease",
        borderBottom: "1px solid transparent",
      }}
    >
      <a
        href="#top"
        data-nav
        data-cursor
        style={{
          fontFamily: "var(--serif)",
          fontSize: "25px",
          letterSpacing: "-.4px",
          textDecoration: "none",
          lineHeight: 1,
        }}
      >
        Shubhankar<span style={{ color: "var(--accent)" }}>.</span> M
      </a>
      <div className="nav-links" style={{ display: "flex", gap: "34px", alignItems: "center" }}>
        <a data-nav data-navlink="projects" href="#projects" style={navLink}>
          Projects
        </a>
        <a data-nav data-navlink="work" href="#work" style={navLink}>
          Work
        </a>
        <a data-nav data-navlink="about" href="#about" style={navLink}>
          About
        </a>
        <a
          data-nav
          data-magnetic
          data-cursor
          href="#contact"
          style={{
            fontFamily: "var(--mono)",
            fontSize: "11px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "11px 18px",
            border: "1.5px solid var(--ink)",
            borderRadius: "40px",
          }}
        >
          Let&apos;s Connect
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--accent)",
              display: "inline-block",
            }}
          />
        </a>
      </div>
    </nav>
  );
}
