"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("Portfolio route error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, background: "#fffaf9", color: "#171b3c", fontFamily: "Arial, sans-serif", textAlign: "center" }}>
        <main style={{ maxWidth: 480 }}>
          <p style={{ color: "#8051ed", letterSpacing: 3, fontSize: 11 }}>YP / TEMPORARY INTERRUPTION</p>
          <h1 style={{ fontSize: 36 }}>A small detour.</h1>
          <p style={{ color: "#707694", lineHeight: 1.7 }}>Something went wrong while loading this page. Try again — your place in the universe is still here.</p>
          <button onClick={() => reset()} style={{ border: 0, borderRadius: 999, padding: "13px 22px", color: "white", background: "#8051ed", fontWeight: 700, cursor: "pointer" }}>Try again</button>
        </main>
      </body>
    </html>
  );
}
