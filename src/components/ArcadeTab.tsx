// Fixed, edge-docked "Insert Coin" pull-tab linking to the gamified
// (pixel-quest) portfolio. Stateless, always-mounted overlay. Styling lives in
// globals.css (.arcade-tab), matching the rest of the site's global-CSS pattern.
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
      <span className="stick" aria-hidden="true">
        🕹️
      </span>
      <span className="coin-label" aria-hidden="true">
        INSERT COIN
      </span>
    </a>
  );
}
