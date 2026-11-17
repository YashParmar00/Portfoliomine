import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "#fffaf9", color: "#171b3c", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: 480 }}>
        <p style={{ color: "#8051ed", letterSpacing: 3, fontSize: 11, fontWeight: 700 }}>YP / WRONG UNIVERSE</p>
        <h1 style={{ margin: "20px 0 8px", fontSize: 76, letterSpacing: -5 }}>404</h1>
        <h2 style={{ margin: 0, fontSize: 25 }}>This page drifted away.</h2>
        <p style={{ color: "#707694", lineHeight: 1.8, fontSize: 14 }}>The page you’re looking for doesn’t exist or may have moved. Let’s get you back to the portfolio.</p>
        <Link href="/" style={{ display: "inline-block", marginTop: 18, borderRadius: 999, padding: "14px 23px", color: "white", background: "linear-gradient(110deg,#7544e9,#d879d4)", fontSize: 13, fontWeight: 700, textDecoration: "none" }}>Back to home ↗</Link>
      </div>
    </main>
  );
}
