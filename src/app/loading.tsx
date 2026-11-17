export default function Loading() {
  return (
    <main aria-label="Loading portfolio" style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#fffaf9", color: "#8051ed", fontFamily: "Arial, sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ width: 56, height: 56, margin: "0 auto 16px", display: "grid", placeItems: "center", borderRadius: 16, color: "white", fontSize: 18, fontWeight: 700, background: "linear-gradient(140deg,#8051ed,#d879d4)" }}>YP</div>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3 }}>ENTERING THE UNIVERSE…</p>
      </div>
    </main>
  );
}
