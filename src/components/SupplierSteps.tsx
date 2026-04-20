import { ArrowRight, FileSearch, FileEdit, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Anfragen erhalten",
    desc: "Erhalten Sie passgenaue Anfragen aus Ihrem Produktbereich — automatisch gefiltert nach Region, Menge und Spezifikation.",
  },
  {
    icon: FileEdit,
    title: "Angebote abgeben",
    desc: "In Sekunden — manuell oder vollautomatisch über API. Hinterlegen Sie Preislisten und reagieren Sie schneller als Ihr Wettbewerb.",
  },
  {
    icon: PackageCheck,
    title: "Aufträge erhalten",
    desc: "Sichere Zahlung über Pacurion, kein Ausfallrisiko. Wir übernehmen Bonitätsprüfung und Inkasso — Sie liefern und werden bezahlt.",
  },
];

const SupplierSteps = () => (
  <section className="py-20 lg:py-28 bg-muted/40">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex px-3 py-1 rounded-full bg-forest/8 text-forest text-xs font-semibold mb-4">
          So einfach geht's
        </div>
        <h2 className="text-3xl lg:text-5xl font-extrabold text-ink mb-3">
          In 3 Schritten zum Auftrag
        </h2>
        <p className="text-muted-foreground text-lg">
          Vom Erstkontakt bis zur Auszahlung — komplett digital, mit voller Sicherheit.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="relative bg-card rounded-3xl p-8 lg:p-10 border border-border/60 hover:shadow-card hover:-translate-y-1 transition-all group"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-forest/10 rounded-2xl blur-lg group-hover:bg-forest/20 transition-colors" />
                <div className="relative h-16 w-16 rounded-2xl bg-forest text-white flex items-center justify-center shadow-soft">
                  <s.icon className="h-7 w-7" strokeWidth={1.75} />
                </div>
              </div>
              <span className="text-6xl font-extrabold text-forest/10 leading-none">
                0{i + 1}
              </span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-ink mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            <div className="mt-6 pt-6 border-t border-border/50 flex items-center text-forest font-semibold text-sm">
              Schritt {i + 1} von 3 <ArrowRight className="h-4 w-4 ml-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SupplierSteps;
