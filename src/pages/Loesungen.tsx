import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SavingsCalculator from "@/components/SavingsCalculator";
import Solutions from "@/components/Solutions";
import FeatureMatrix from "@/components/FeatureMatrix";
import Benefits from "@/components/Benefits";
import Newsletter from "@/components/Newsletter";

const Loesungen = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-forest text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 15% 100%, hsl(var(--forest-light)) 0%, transparent 45%), radial-gradient(circle at 85% 0%, hsl(var(--forest-mid)) 0%, transparent 45%)`
        }} />
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }} />

        <div className="container relative text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold border border-white/20 mb-6">
            🌿 Beschaffungslösungen
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] mb-6 text-balance">
            Die richtige Beschaffungs­lösung für Ihr Unternehmen
          </h1>
          <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Von der einfachen Spot-Beschaffung bis zum vollständigen Outsourcing — wir haben das passende Modell für jede Unternehmensgröße.
          </p>
        </div>
      </section>

      <SavingsCalculator />
      <Solutions />
      <FeatureMatrix />
      <Benefits title="Warum Supplycarrier?" subtitle="Sechs Gründe, warum führende Unternehmen auf unsere Plattform setzen." />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Loesungen;
