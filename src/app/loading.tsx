export default function Loading() {
  return (
    <main aria-label="Loading portfolio" className="min-h-screen grid place-items-center" style={{ background: "#fffaf9", color: "#8051ed" }}>
      <div className="text-center">
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl text-lg font-bold text-white" style={{ background: "linear-gradient(140deg,#8051ed,#d879d4)" }}>YP</div>
        <p className="text-xs font-semibold tracking-[.22em]">ENTERING THE UNIVERSE…</p>
      </div>
    </main>
  );
}
