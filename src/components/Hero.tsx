import { Link } from "react-router-dom";
import { ArrowRight, Check, LayoutDashboard, Store, FileText, TrendingUp, Package } from "lucide-react";

const DashboardMockup = () => (
  <div className="relative w-full max-w-[560px] mx-auto animate-float">
    {/* Glow */}
    <div className="absolute -inset-8 bg-gradient-to-tr from-forest-light/30 via-forest-mid/20 to-transparent rounded-[2rem] blur-2xl -z-10" />

    <div
      className="bg-white rounded-2xl shadow-float overflow-hidden border border-border/40"
      style={{ transform: "rotate(2deg)" }}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-muted/60 border-b border-border/60">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="ml-3 text-[10px] text-muted-foreground font-medium">app.pacurion.de/dashboard</div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-16 bg-forest-deep py-4 flex flex-col items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-white/15 flex items-center justify-center">
            <LayoutDashboard className="h-4 w-4 text-white" />
          </div>
          <div className="h-9 w-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center">
            <Store className="h-4 w-4 text-white/70" />
          </div>
          <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center">
            <FileText className="h-4 w-4 text-white/70" />
          </div>
          <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center">
            <Package className="h-4 w-4 text-white/70" />
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 p-5 bg-background">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-[10px] text-muted-foreground">Übersicht</div>
              <div className="text-sm font-semibold text-ink">Marktplatz</div>
            </div>
            <div className="h-7 w-7 rounded-full bg-forest-mid flex items-center justify-center text-white text-[10px] font-bold">
              TM
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { l: "Bestellungen", v: "248", c: "text-forest" },
              { l: "Ersparnis", v: "€42K", c: "text-forest-mid" },
              { l: "Lieferanten", v: "37", c: "text-wood" },
            ].map((s) => (
              <div key={s.l} className="bg-white rounded-lg p-2.5 border border-border/40">
                <div className="text-[8px] text-muted-foreground font-medium uppercase">{s.l}</div>
                <div className={`text-base font-bold ${s.c}`}>{s.v}</div>
              </div>
            ))}
          </div>

          {/* Mini table */}
          <div className="bg-white rounded-lg border border-border/40 overflow-hidden">
            <div className="px-3 py-2 bg-muted/40 flex items-center justify-between border-b border-border/40">
              <div className="text-[10px] font-semibold text-ink">Aktuelle Anfragen</div>
              <TrendingUp className="h-3 w-3 text-forest" />
            </div>
            {[
              { id: "AN-2841", item: "Europalette EUR1", qty: "1.200", status: "Aktiv", color: "bg-forest/15 text-forest" },
              { id: "AN-2840", item: "Gitterbox 800×600", qty: "340", status: "Vergleich", color: "bg-wood/15 text-wood" },
              { id: "AN-2839", item: "Einwegpalette", qty: "5.800", status: "Bestellt", color: "bg-forest-mid/15 text-forest-mid" },
            ].map((r) => (
              <div key={r.id} className="px-3 py-2 flex items-center justify-between border-b border-border/40 last:border-0">
                <div>
                  <div className="text-[10px] font-medium text-ink">{r.item}</div>
                  <div className="text-[8px] text-muted-foreground">{r.id} · {r.qty} Stk.</div>
                </div>
                <span className={`text-[8px] font-semibold px-1.5 py-0.5 rounded ${r.color}`}>{r.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Floating chip */}
    <div className="absolute -left-6 top-20 bg-white rounded-xl shadow-card p-3 border border-border/40 hidden md:block" style={{ transform: "rotate(-4deg)" }}>
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-forest/10 flex items-center justify-center">
          <Check className="h-4 w-4 text-forest" strokeWidth={3} />
        </div>
        <div>
          <div className="text-[10px] text-muted-foreground">Ersparnis heute</div>
          <div className="text-sm font-bold text-forest">+€ 8.420</div>
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-hero">
      {/* Subtle leaf pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--forest)) 1px, transparent 0)`,
        backgroundSize: "32px 32px"
      }} />

      <div className="container grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
        {/* LEFT */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/8 text-forest text-xs font-semibold border border-forest/15 mb-6">
            <span>🌿</span>
            KI-gestützte B2B Beschaffung
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-extrabold text-ink leading-[1.05] text-balance mb-6">
            Ladungsträger beschaffen —{" "}
            <span className="text-forest">digital, schnell,</span>{" "}
            zum besten Preis
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mb-8">
            Europaletten, Gitterboxen und Transportverpackungen über eine Plattform.
            KI vergleicht <span className="font-semibold text-ink">600+ Lieferanten</span> in Sekunden.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Link to="/auth/register" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-cta text-cta-foreground font-semibold shadow-cta hover:shadow-float hover:-translate-y-0.5 transition-all">
              Kostenlos starten
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/auth/register" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border-2 border-forest text-forest font-semibold hover:bg-forest hover:text-white transition-all">
              Demo buchen
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {["Kostenlose Nutzung", "Kein Risiko", "Setup in 5 Minuten"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-5 w-5 rounded-full bg-forest/10 flex items-center justify-center">
                  <Check className="h-3 w-3 text-forest" strokeWidth={3} />
                </span>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:pl-4">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
};

export default Hero;
