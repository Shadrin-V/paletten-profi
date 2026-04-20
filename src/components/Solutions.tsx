import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    price: "Kostenlos",
    desc: "Bis zu 18% Produktkosten sparen",
    features: [
      "Zugang zu 600+ Lieferanten",
      "KI-Sofortkauf",
      "Marktpreise in Echtzeit",
      "Persönlicher Support",
    ],
    cta: "Starten",
    style: "basic",
  },
  {
    name: "Smart",
    price: "Empfohlen",
    desc: "Bis zu 25% Produkt + 40% Prozesskosten sparen",
    features: [
      "Alle Basic-Funktionen",
      "Integration Ihrer Lieferanten",
      "Vollständiges Reporting",
      "Pacurion als Vertragspartner",
      "Datentransparenz",
    ],
    cta: "Starten",
    style: "smart",
    badge: "Empfohlen",
  },
  {
    name: "Prime",
    price: "Premium",
    desc: "Bis zu 73% Prozesskosten sparen",
    features: [
      "Alle Smart-Funktionen",
      "Ihr persönlicher Einkaufsprofi",
      "Komplettes Beschaffungsmanagement",
      "ERP-Anbindung",
      "24/7 Support",
    ],
    cta: "Demo buchen",
    style: "prime",
  },
];

const Card = ({ tier }: { tier: typeof tiers[number] }) => {
  const isSmart = tier.style === "smart";
  const isPrime = tier.style === "prime";

  const base = "relative rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-2 flex flex-col";
  const variant = isPrime
    ? "bg-cta text-white shadow-float border-t-4 border-forest-light"
    : isSmart
    ? "bg-white shadow-card border-t-[6px] border-forest"
    : "bg-card border border-border/60 border-t-4 border-t-forest-mid hover:shadow-card";

  return (
    <div className={`${base} ${variant}`}>
      {tier.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-highlight text-white text-xs font-bold uppercase tracking-wide shadow-lg">
            {tier.badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className={`text-2xl font-extrabold ${isPrime ? "text-white" : "text-ink"}`}>
          {tier.name}
        </h3>
        <div className={`text-sm font-semibold mt-1 ${isPrime ? "text-forest-light" : "text-forest"}`}>
          {tier.price}
        </div>
      </div>

      <p className={`text-base mb-8 leading-relaxed ${isPrime ? "text-white/80" : "text-muted-foreground"}`}>
        {tier.desc}
      </p>

      <ul className="space-y-3 mb-10 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span className={`shrink-0 mt-0.5 h-5 w-5 rounded-full flex items-center justify-center ${
              isPrime ? "bg-forest-light/25" : "bg-forest/10"
            }`}>
              <Check className={`h-3 w-3 ${isPrime ? "text-forest-light" : "text-forest"}`} strokeWidth={3} />
            </span>
            <span className={`text-sm ${isPrime ? "text-white/90" : "text-foreground/80"}`}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      <Link
        to="/auth/register"
        className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold transition-all group ${
          isPrime
            ? "bg-white text-forest-deep hover:bg-forest-light hover:text-white"
            : isSmart
            ? "bg-cta text-white hover:bg-forest shadow-cta"
            : "border-2 border-forest text-forest hover:bg-forest hover:text-white"
        }`}
      >
        {tier.cta}
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

const Solutions = () => (
  <section id="loesungen" className="py-20 lg:py-28 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex px-3 py-1 rounded-full bg-forest/8 text-forest text-xs font-semibold mb-4">
          Beschaffungslösungen
        </div>
        <h2 className="text-3xl lg:text-5xl font-extrabold text-ink mb-3">
          Die richtige Lösung für Ihren Bedarf
        </h2>
        <p className="text-muted-foreground text-lg">
          Vom Einsteiger bis zum Großeinkäufer — drei Stufen, die mit Ihnen wachsen.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {tiers.map((t) => <Card key={t.name} tier={t} />)}
      </div>
    </div>
  </section>
);

export default Solutions;
