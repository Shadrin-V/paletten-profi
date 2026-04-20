import { Link } from "react-router-dom";
import { ArrowRight, Building2, Briefcase } from "lucide-react";

const SupplierCTA = () => (
  <section id="lieferanten" className="py-20 lg:py-28 bg-muted/40">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {/* Left — supplier */}
        <div className="bg-forest text-white rounded-3xl p-8 lg:p-12 relative overflow-hidden group">
          <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-forest-light/20 blur-3xl group-hover:bg-forest-light/30 transition-colors" />
          <div className="relative">
            <div className="inline-flex h-12 w-12 rounded-xl bg-white/10 items-center justify-center mb-6">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
              Sind Sie Lieferant?
            </h3>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Erreichen Sie tausende Einkäufer — kostenlos, digital, sicher.
            </p>
            <Link to="/auth/register" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white text-forest-deep font-semibold hover:bg-forest-light hover:text-white transition-all group/btn">
              Als Partner werden
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right — buyer */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 border border-border/50 shadow-soft relative overflow-hidden group">
          <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-forest-light/10 blur-3xl" />
          <div className="relative">
            <div className="inline-flex h-12 w-12 rounded-xl bg-forest/10 items-center justify-center mb-6">
              <Briefcase className="h-6 w-6 text-forest" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-ink mb-4 leading-tight">
              Für Einkäufer
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Demo buchen und Plattform kostenlos testen.
            </p>
            <Link to="/auth/register" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-cta text-white font-semibold hover:bg-forest transition-all shadow-cta group/btn">
              Demo vereinbaren
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SupplierCTA;
