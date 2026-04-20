import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section id="newsletter" className="py-20 lg:py-28">
      <div className="container">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-newsletter px-8 py-14 lg:p-16 relative overflow-hidden shadow-float">
          {/* mesh accents */}
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-forest-light/30 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-wood/15 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold mb-5 border border-white/15">
                <Mail className="h-3.5 w-3.5" /> Monatlicher Forecast
              </div>
              <h2 className="text-3xl lg:text-5xl font-extrabold leading-[1.1] mb-4 text-balance">
                Bleiben Sie immer einen Schritt voraus
              </h2>
              <p className="text-white/80 text-lg max-w-md">
                Unser monatlicher Preisforecast für Europaletten und Ladungsträger — direkt in Ihr Postfach.
              </p>
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-2 flex flex-col sm:flex-row gap-2 border border-white/15"
            >
              <input
                type="email"
                required
                placeholder="ihre@firma.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent px-4 py-3 text-white placeholder:text-white/50 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-forest-deep font-semibold hover:bg-forest-light hover:text-white transition-all group whitespace-nowrap"
              >
                Abonnieren
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
