import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Verliere ich durch die Plattform meine direkten Kundenkontakte?",
    a: "Nein. Bestandskunden bleiben Ihre Kunden — Supplycarrier fungiert lediglich als digitales Werkzeug. Sie behalten die volle Kontrolle über Kommunikation, Konditionen und Beziehungen. Neue Kunden gewinnen Sie zusätzlich über unser Netzwerk.",
  },
  {
    q: "Entsteht Preisdruck durch die Plattform?",
    a: "Nein. Supplycarrier ist kein reiner Preisvergleicher. Wir bewerten Angebote ganzheitlich — Qualität, Liefertreue, Zertifizierungen und Service fließen ein. Faire Margen sind die Grundlage stabiler Partnerschaften.",
  },
  {
    q: "Welche Kosten entstehen für mich als Lieferant?",
    a: "Die Plattformnutzung ist für Lieferanten 100% kostenlos. Es gibt keine Listing-Gebühren, keine monatlichen Kosten und keine Provisionen auf Bestandskunden. Sie zahlen lediglich eine geringe Erfolgsgebühr bei Neukunden.",
  },
  {
    q: "Wie läuft die Zahlungsabwicklung ab?",
    a: "Supplycarrier übernimmt die komplette Zahlungsabwicklung. Sie erhalten Ihr Geld pünktlich und garantiert — wir tragen das Bonitätsrisiko des Endkunden. Standardzahlungsziel: 14 Tage nach Lieferung.",
  },
  {
    q: "Wie schnell wird mein Account verifiziert?",
    a: "Die Verifizierung erfolgt in der Regel innerhalb von 24-48 Stunden nach Einreichung Ihrer Unterlagen. Unser Onboarding-Team begleitet Sie persönlich durch den gesamten Prozess.",
  },
  {
    q: "Welche Dokumente benötige ich zur Registrierung?",
    a: "Handelsregisterauszug, Gewerbeanmeldung, Umsatzsteuer-ID sowie ein aktuelles Produktportfolio mit Preisliste. Optional: Zertifikate (EPAL, ISO, FSC) für höhere Sichtbarkeit.",
  },
  {
    q: "Kann ich automatisch Angebote abgeben?",
    a: "Ja. Über unsere API oder Excel-Upload können Sie Preislisten hinterlegen, sodass passende Anfragen automatisch ein Angebot erhalten. Sie sparen massiv Zeit und reagieren schneller als der Wettbewerb.",
  },
  {
    q: "Was ist der Unterschied zwischen Anfrage und Ausschreibung?",
    a: "Anfragen sind kurzfristige Bedarfsmeldungen (Spot-Geschäft). Ausschreibungen sind langfristige Rahmenverträge mit definierten Mengen und Konditionen über mehrere Monate oder Jahre.",
  },
  {
    q: "Ist die Plattform wirklich kostenlos?",
    a: "Ja, die Grundnutzung ist und bleibt kostenlos. Es gibt keine versteckten Gebühren. Premium-Funktionen wie API-Anbindung oder dedizierter Account Manager sind optional buchbar.",
  },
  {
    q: "Wie werde ich bei neuen Anfragen benachrichtigt?",
    a: "Per E-Mail, Push-Benachrichtigung in der App, optional per WhatsApp oder SMS. Sie können Filter setzen (Region, Produktart, Mindestmenge), um nur relevante Anfragen zu erhalten.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-muted/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex px-3 py-1 rounded-full bg-forest/8 text-forest text-xs font-semibold mb-4">
            FAQ
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-ink mb-3">
            Häufig gestellte Fragen
          </h2>
          <p className="text-muted-foreground text-lg">
            Antworten auf die wichtigsten Fragen unserer Lieferanten-Partner.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`bg-card rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? "border-forest/40 shadow-soft" : "border-border/60"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-4 p-5 lg:p-6 text-left"
                >
                  <span className="text-base lg:text-lg font-semibold text-ink">{f.q}</span>
                  <span className={`shrink-0 mt-0.5 h-8 w-8 rounded-full flex items-center justify-center transition-all ${
                    isOpen ? "bg-forest text-white rotate-180" : "bg-muted text-forest"
                  }`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 lg:px-6 pb-6 text-muted-foreground leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
