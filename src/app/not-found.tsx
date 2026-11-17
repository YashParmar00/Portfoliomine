import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center" style={{ background: "#fffaf9", color: "#171b3c" }}>
      <div className="max-w-lg">
        <p className="text-xs tracking-[.25em] font-semibold" style={{ color: "#8051ed" }}>YP / WRONG UNIVERSE</p>
        <h1 className="mt-5 text-7xl font-bold tracking-tight">404</h1>
        <h2 className="mt-3 text-2xl font-semibold">This page drifted away.</h2>
        <p className="mt-3 text-sm leading-7" style={{ color: "#707694" }}>The page you’re looking for doesn’t exist or may have moved. Let’s get you back to the portfolio.</p>
        <Link href="/" className="inline-flex mt-7 rounded-full px-6 py-3 text-sm font-semibold text-white" style={{ background: "linear-gradient(110deg,#7544e9,#d879d4)" }}>Back to home ↗</Link>
      </div>
    </main>
  );
}
