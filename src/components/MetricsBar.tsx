const stats = [
  { v: "1.412", l: "Partner" },
  { v: "17", l: "Länder" },
  { v: "574.100", l: "Ladungsträger / Monat" },
  { v: "Ø 73%", l: "Prozesskostenersparnis" },
];

const MetricsBar = () => (
  <section className="bg-cta text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--forest-light)) 0%, transparent 40%), radial-gradient(circle at 80% 50%, hsl(var(--forest-mid)) 0%, transparent 40%)`
    }} />
    <div className="container relative grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/15">
      {stats.map((s, i) => (
        <div key={i} className="py-8 lg:py-10 px-4 text-center lg:px-8">
          <div className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-1">{s.v}</div>
          <div className="text-xs lg:text-sm text-white/70 font-medium uppercase tracking-wider">{s.l}</div>
        </div>
      ))}
    </div>
  </section>
);

export default MetricsBar;
