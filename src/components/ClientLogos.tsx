const logos = [
  "BOSCH", "SIEMENS", "DHL Group", "BASF", "Continental",
  "Lufthansa Cargo", "Henkel", "ThyssenKrupp", "Mercedes-Benz", "Bayer",
];

const ClientLogos = () => (
  <section className="py-16 lg:py-20 bg-muted/30 border-y border-border/50">
    <div className="container">
      <div className="text-center mb-10">
        <h3 className="text-xl lg:text-2xl font-bold text-ink mb-2">Erfolgreiche Partner</h3>
        <p className="text-sm text-muted-foreground">
          Vertrauen Sie dem Marktführer in der digitalen Ladungsträgerbeschaffung
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/60 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-12 animate-marquee w-max">
          {[...logos, ...logos].map((l, i) => (
            <div
              key={i}
              className="shrink-0 px-8 py-4 text-2xl font-bold text-ink/40 hover:text-forest transition-colors tracking-tight whitespace-nowrap"
              style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.04em" }}
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ClientLogos;
