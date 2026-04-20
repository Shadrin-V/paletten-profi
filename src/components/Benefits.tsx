import { Leaf, Handshake, TrendingDown, ShieldCheck, Headphones, Network } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Kostenlos",
    desc: "Keine Lizenzgebühren, keine versteckten Kosten. Sie zahlen nur für die Ladungsträger, die Sie kaufen.",
  },
  {
    icon: Handshake,
    title: "Fester Vertragspartner",
    desc: "Pacurion wird Ihr alleiniger Vertragspartner — eine Rechnung, ein Ansprechpartner, volle Sicherheit.",
  },
  {
    icon: TrendingDown,
    title: "Bester Preis",
    desc: "KI-gestützter Vergleich von 600+ Lieferanten garantiert den besten Marktpreis zum Bestellzeitpunkt.",
  },
  {
    icon: ShieldCheck,
    title: "Liefersicherheit",
    desc: "Geprüfte Lieferanten und Backup-Partner sichern Ihre Versorgung — auch bei Engpässen.",
  },
  {
    icon: Headphones,
    title: "Kundenservice",
    desc: "Persönliche Betreuung von echten Beschaffungsprofis — telefonisch, per Mail oder im Chat.",
  },
  {
    icon: Network,
    title: "Partnernetzwerk",
    desc: "Zugang zum größten Netzwerk geprüfter Ladungsträger-Lieferanten in Europa — auf einen Klick.",
  },
];

interface Props {
  title?: string;
  subtitle?: string;
  variant?: "buyer" | "supplier";
}

const Benefits = ({ title = "Ihre Vorteile auf einen Blick", subtitle = "Sechs Gründe, warum führende Unternehmen auf Pacurion setzen.", variant = "buyer" }: Props) => {
  const supplierBenefits = [
    { icon: Leaf, title: "100% kostenlos", desc: "Keine Listing-Gebühren, keine Provisionen auf Bestandskunden, keine Mindestumsätze." },
    { icon: Network, title: "Neue Märkte", desc: "Erreichen Sie tausende qualifizierte B2B-Einkäufer in 17 europäischen Ländern." },
    { icon: ShieldCheck, title: "Kein Ausfallrisiko", desc: "Pacurion übernimmt das Bonitätsrisiko — Sie erhalten Ihr Geld pünktlich und garantiert." },
    { icon: TrendingDown, title: "Geringerer Vertriebsaufwand", desc: "Digitale Anfragen, automatische Angebotserstellung — weniger Telefonate, mehr Abschlüsse." },
    { icon: Handshake, title: "Stabile Partnerschaft", desc: "Langfristige Rahmenverträge und planbare Abnahmemengen statt unsicherer Spot-Geschäfte." },
    { icon: Headphones, title: "Persönlicher Support", desc: "Dedizierter Account Manager hilft beim Onboarding und der Optimierung Ihrer Verkäufe." },
  ];

  const items = variant === "supplier" ? supplierBenefits : benefits;

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex px-3 py-1 rounded-full bg-forest/8 text-forest text-xs font-semibold mb-4">
            Vorteile
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-ink mb-3">{title}</h2>
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((b) => (
            <div
              key={b.title}
              className="group bg-card rounded-2xl p-7 border border-border/60 hover:border-forest/30 hover:shadow-card transition-all hover:-translate-y-1"
            >
              <div className="inline-flex h-12 w-12 rounded-xl bg-forest/10 items-center justify-center mb-5 group-hover:bg-forest group-hover:scale-110 transition-all">
                <b.icon className="h-6 w-6 text-forest group-hover:text-white transition-colors" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
