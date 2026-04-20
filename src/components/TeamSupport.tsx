import { Link } from "react-router-dom";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";

const team = [
  {
    name: "Anna Müller",
    role: "Account Manager Einkauf",
    initials: "AM",
    bg: "from-forest to-forest-mid",
    flags: ["🇩🇪", "🇬🇧", "🇷🇺"],
    quote: "Ich helfe Ihnen, in nur 15 Minuten alle offenen Fragen zu klären — versprochen.",
  },
  {
    name: "Markus Becker",
    role: "Senior Partner Manager",
    initials: "MB",
    bg: "from-forest-deep to-forest",
    flags: ["🇩🇪", "🇬🇧", "🇫🇷"],
    quote: "Mit über 12 Jahren Erfahrung im Ladungsträger-Handel kenne ich Ihre Herausforderungen.",
  },
];

const TeamSupport = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex px-3 py-1 rounded-full bg-forest/8 text-forest text-xs font-semibold mb-4">
          Persönlicher Kontakt
        </div>
        <h2 className="text-3xl lg:text-5xl font-extrabold text-ink mb-3">
          Wir sind für Sie da
        </h2>
        <p className="text-muted-foreground text-lg">
          Unser Team begleitet Sie persönlich — keine Hotlines, keine Bots, echte Menschen.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-10">
        {team.map((p) => (
          <div
            key={p.name}
            className="bg-card rounded-3xl p-7 border border-border/60 hover:shadow-card hover:-translate-y-1 transition-all"
          >
            <div className="flex items-start gap-5 mb-5">
              <div className={`shrink-0 h-20 w-20 rounded-full bg-gradient-to-br ${p.bg} flex items-center justify-center text-white text-2xl font-bold shadow-soft`}>
                {p.initials}
              </div>
              <div className="flex-1 min-w-0 pt-1">
                <h3 className="text-xl font-bold text-ink">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{p.role}</p>
                <div className="flex gap-1 text-base">
                  {p.flags.map((f, i) => <span key={i}>{f}</span>)}
                </div>
              </div>
            </div>

            <p className="text-sm italic text-foreground/80 mb-5 leading-relaxed border-l-2 border-forest/30 pl-4">
              „{p.quote}"
            </p>

            <div className="flex gap-2">
              <a
                href="#"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-forest/10 text-forest font-semibold text-sm hover:bg-forest hover:text-white transition-all"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href="#"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-muted text-ink font-semibold text-sm hover:bg-ink hover:text-white transition-all"
              >
                <Mail className="h-4 w-4" /> E-Mail
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <Link to="/auth/register" className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-cta text-white text-base font-semibold hover:bg-forest transition-all shadow-cta group">
          Demo buchen
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  </section>
);

export default TeamSupport;
