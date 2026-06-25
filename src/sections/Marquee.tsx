const items = ["FULL-STACK ENGINEER", "REACT", "JAVA / SPRING BOOT", "AWS CLOUD", "DATA SCIENCE"];

const GAP = "  ";

function MarqueeRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <span
      aria-hidden={ariaHidden || undefined}
      style={{ fontFamily: "var(--serif)", fontSize: "46px", lineHeight: 1, color: "var(--ink)" }}
    >
      {items.map((item) => (
        <span key={item}>
          {item}
          {GAP}
          <span style={{ color: "var(--accent)" }}>✦</span>
          {GAP}
        </span>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        padding: "20px 0",
        background: "var(--panel2)",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          whiteSpace: "nowrap",
          animation: "mq 32s linear infinite",
          willChange: "transform",
        }}
      >
        <MarqueeRow />
        <MarqueeRow ariaHidden />
      </div>
    </div>
  );
}
