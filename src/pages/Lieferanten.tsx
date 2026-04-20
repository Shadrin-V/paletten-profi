import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SupplierSteps from "@/components/SupplierSteps";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import TeamSupport from "@/components/TeamSupport";
import warehouse from "@/assets/warehouse.jpg";

const Lieferanten = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — split */}
      <section className="relative pt-24 lg:pt-28 overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[640px]">
          {/* Left */}
          <div className="bg-gradient-forest text-white relative overflow-hidden flex items-center">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `radial-gradient(circle at 20% 100%, hsl(var(--forest-light)) 0%, transparent 50%)`
            }} />
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px"
            }} />

            <div className="relative px-6 lg:px-16 py-16 lg:py-24 max-w-2xl ml-auto lg:ml-0 lg:mr-0">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold border border-white/20 mb-6">
                🌿 Für Lieferanten
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] mb-6 text-balance">
                Werden Sie <span className="text-forest-light">Partner</span>
              </h1>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-8 max-w-lg">
                Digitaler Vertriebskanal — kostenlos, sicher, europaweit. Erreichen Sie tausende qualifizierte B2B-Einkäufer auf einer Plattform.
              </p>

              <button className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-forest-deep font-semibold hover:bg-forest-light hover:text-white transition-all shadow-cta">
                Jetzt Partner werden
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8">
                {["100% kostenlos", "Kein Ausfallrisiko", "24h Verifizierung"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-sm text-white/90">
                    <span className="h-5 w-5 rounded-full bg-white/15 flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </span>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — image */}
          <div className="relative bg-muted overflow-hidden min-h-[400px] lg:min-h-full">
            <img
              src={warehouse}
              alt="Lagerhalle mit Europaletten und Gitterboxen"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />

            {/* Floating stat card */}
            <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 lg:right-auto lg:max-w-xs bg-white/95 backdrop-blur rounded-2xl p-5 shadow-float border border-white/40">
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">
                Aktive Anfragen heute
              </div>
              <div className="text-3xl font-extrabold text-forest mb-1">1.847</div>
              <div className="text-xs text-muted-foreground">+ 23% gegenüber Vorwoche</div>
            </div>
          </div>
        </div>
      </section>

      <SupplierSteps />
      <Benefits
        variant="supplier"
        title="Ihre Vorteile als Supplycarrier-Partner"
        subtitle="Sechs gute Gründe, Ihren Vertrieb digital zu erweitern."
      />
      <FAQ />
      <TeamSupport />
      <Footer />
    </main>
  );
};

export default Lieferanten;
