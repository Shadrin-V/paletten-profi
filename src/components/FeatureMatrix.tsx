import { Check, X } from "lucide-react";

const features = [
  { name: "Plattformnutzung", basic: "✅", smart: "✅", prime: "✅" },
  { name: "Sofort-Kauf", basic: "✅", smart: "✅", prime: "✅" },
  { name: "Lieferantenvergleich", basic: "Standard", smart: "Erweitert", prime: "Premium" },
  { name: "Integration Bestandslieferanten", basic: "❌", smart: "✅", prime: "✅" },
  { name: "Reporting", basic: "Basis", smart: "Vollständig", prime: "Custom" },
  { name: "Supplycarrier als Vertragspartner", basic: "❌", smart: "✅", prime: "✅" },
  { name: "Datentransparenz", basic: "Eingeschränkt", smart: "✅", prime: "✅" },
  { name: "Compliance EUDR / LkSG", basic: "❌", smart: "✅", prime: "✅" },
  { name: "Persönlicher Einkaufsprofi", basic: "❌", smart: "❌", prime: "✅" },
  { name: "ERP-Schnittstelle", basic: "❌", smart: "❌", prime: "✅" },
  { name: "Unlimited Users", basic: "3 User", smart: "10 User", prime: "✅" },
];

const Cell = ({ value, accent }: { value: string; accent?: boolean }) => {
  if (value === "✅") {
    return (
      <span className={`inline-flex h-7 w-7 rounded-full items-center justify-center ${accent ? "bg-forest" : "bg-forest/15"}`}>
        <Check className={`h-4 w-4 ${accent ? "text-white" : "text-forest"}`} strokeWidth={3} />
      </span>
    );
  }
  if (value === "❌") {
    return (
      <span className="inline-flex h-7 w-7 rounded-full bg-muted items-center justify-center">
        <X className="h-4 w-4 text-muted-foreground" strokeWidth={2.5} />
      </span>
    );
  }
  return (
    <span className={`text-sm font-semibold ${accent ? "text-forest" : "text-foreground/80"}`}>
      {value}
    </span>
  );
};

const FeatureMatrix = () => (
  <section className="py-20 lg:py-28 bg-muted/40">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex px-3 py-1 rounded-full bg-forest/8 text-forest text-xs font-semibold mb-4">
          Vergleich
        </div>
        <h2 className="text-3xl lg:text-5xl font-extrabold text-ink mb-3">
          Alle Funktionen im Detail
        </h2>
        <p className="text-muted-foreground text-lg">
          Direkter Vergleich der drei Supplycarrier-Stufen.
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] bg-ink text-white">
          <div className="p-5 lg:p-6 text-sm font-semibold uppercase tracking-wider">Funktion</div>
          <div className="p-5 lg:p-6 text-center text-sm font-bold border-l border-white/10">Basic</div>
          <div className="p-5 lg:p-6 text-center text-sm font-bold border-l border-white/10 bg-forest relative">
            Smart
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-highlight text-white text-[10px] font-bold uppercase tracking-wider">
              Empfohlen
            </span>
          </div>
          <div className="p-5 lg:p-6 text-center text-sm font-bold border-l border-white/10">Prime</div>
        </div>

        {/* Rows */}
        {features.map((f, i) => (
          <div
            key={f.name}
            className={`grid grid-cols-[1.4fr_1fr_1fr_1fr] items-center ${
              i % 2 === 0 ? "bg-card" : "bg-muted/30"
            } border-t border-border/40`}
          >
            <div className="p-4 lg:p-5 text-sm font-medium text-ink">{f.name}</div>
            <div className="p-4 lg:p-5 text-center border-l border-border/40"><Cell value={f.basic} /></div>
            <div className="p-4 lg:p-5 text-center border-l border-border/40 bg-forest/5"><Cell value={f.smart} accent /></div>
            <div className="p-4 lg:p-5 text-center border-l border-border/40"><Cell value={f.prime} /></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureMatrix;
