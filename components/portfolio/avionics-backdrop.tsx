"use client";

export function AvionicsBackdrop() {
  return (
    <div className="avionics-root" aria-hidden>
      {/* Instrument panel base */}
      <div className="avionics-panel-base" />

      {/* Primary flight display grid */}
      <div className="avionics-hud-grid" />

      {/* Scanline CRT overlay */}
      <div className="avionics-scanlines" />

      {/* Vignette / canopy shadow */}
      <div className="avionics-canopy" />

      {/* Corner HUD brackets */}
      <div className="avionics-bracket avionics-bracket-tl" />
      <div className="avionics-bracket avionics-bracket-tr" />
      <div className="avionics-bracket avionics-bracket-bl" />
      <div className="avionics-bracket avionics-bracket-br" />

      {/* Side instrument strips */}
      <div className="avionics-side-rail avionics-side-rail-left">
        <span>ATT</span>
        <span>IAS</span>
        <span>ALT</span>
        <span>HDG</span>
        <span>VS</span>
      </div>
      <div className="avionics-side-rail avionics-side-rail-right">
        <span>NAV</span>
        <span>COM</span>
        <span>XPDR</span>
        <span>MFD</span>
        <span>ENG</span>
      </div>

      {/* Bottom glare shield / glareshield lights */}
      <div className="avionics-glareshield">
        <div className="avionics-led" />
        <div className="avionics-led avionics-led-amber" />
        <div className="avionics-led" />
        <div className="avionics-ticker">SYS NOMINAL · PFD ONLINE · MFD ONLINE · LINK SECURE</div>
        <div className="avionics-led" />
        <div className="avionics-led avionics-led-amber" />
        <div className="avionics-led" />
      </div>

      {/* Soft phosphor bloom */}
      <div className="avionics-bloom" />
    </div>
  );
}
