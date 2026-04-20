import { ClipboardList, BarChart3, Truck } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Anfrage platzieren",
    text: "Beschreiben Sie Ihren Bedarf in Sekunden und erreichen Sie über 600 qualifizierte Lieferanten.",
  },
  {
    n: "02",
    icon: BarChart3,
    title: "Angebote vergleichen",
    text: "KI analysiert alle Angebote und empfiehlt das beste Preis-Leistungs-Verhältnis.",
  },
  {
    n: "03",
    icon: Truck,
    title: "Lieferung erhalten",
    text: "Wir übernehmen die komplette Abwicklung — Sie sind unser einziger Ansprechpartner.",
  },
];

const HowItWorks = () => (
  <section className="py-20 lg:py-28 bg-muted/40">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex px-3 py-1 rounded-full bg-forest/8 text-forest text-xs font-semibold mb-4">
          So funktioniert's
        </div>
        <h2 className="text-3xl lg:text-5xl font-extrabold text-ink mb-3">
          So einfach war es noch nie
        </h2>
        <p className="text-muted-foreground text-lg">
          Drei Schritte vom Bedarf bis zur Lieferung — komplett digital, persönlich begleitet.
        </p>
      </div>

      <div className="relative grid md:grid-cols-3 gap-8 lg:gap-6 max-w-6xl mx-auto">
        {/* Dashed connector line */}
        <svg className="absolute top-12 left-[16%] right-[16%] hidden md:block -z-10" height="2" preserveAspectRatio="none">
          <line x1="0" y1="1" x2="100%" y2="1" stroke="hsl(var(--forest-light))" strokeWidth="2" strokeDasharray="6 6" />
        </svg>

        {steps.map((s, i) => (
          <div key={s.n} className="text-center relative group">
            <div className="relative inline-flex mb-6">
              <div className="absolute inset-0 bg-forest/10 rounded-full blur-xl scale-110 group-hover:bg-forest/20 transition-colors" />
              <div className="relative h-24 w-24 rounded-full bg-white shadow-card border border-border/50 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <s.icon className="h-10 w-10 text-forest" strokeWidth={1.75} />
              </div>
              <span className="absolute -top-1 -right-1 h-9 w-9 rounded-full bg-cta text-white text-sm font-bold flex items-center justify-center shadow-cta">
                {i + 1}
              </span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-ink mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
