// Fixed, edge-docked pull-tab linking to the gamified (pixel-quest) portfolio.
// Stateless, always-mounted overlay. Styling lives in globals.css (.arcade-tab),
// matching the rest of the site's global-CSS pattern.
//
// Both the pointer and touch variants are rendered; globals.css shows the right
// pair per device via input-type media queries (pointer/mouse => joystick +
// "INSERT COIN"; touch => 👆 + "TAP TO PLAY"), and scales them fluidly with the
// viewport. Doing the swap in CSS (not JS) keeps it hydration-safe under static
// export.
export function ArcadeTab() {
  return (
    <a
      className="arcade-tab"
      href="https://shubhu0.github.io/pixel-quest-portfolio/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Play the gamified version of my portfolio"
    >
      <span className="slot" aria-hidden="true" />
      <span className="stick stick--pointer" aria-hidden="true">
        🕹️
      </span>
      <span className="stick stick--touch" aria-hidden="true">
        👆
      </span>
      <span className="coin-label label--pointer" aria-hidden="true">
        INSERT COIN
      </span>
      <span className="coin-label label--touch" aria-hidden="true">
        TAP TO PLAY
      </span>
    </a>
  );
}
