import { useState, useMemo } from "react";
import { ArrowRight, Calculator } from "lucide-react";

const fmt = (n: number) =>
  new Intl.NumberFormat("de-DE", { maximumFractionDigits: 0 }).format(n);

const SavingsCalculator = () => {
  const [qty, setQty] = useState(50000);
  const [price, setPrice] = useState(8);

  const { processSave, productSave, total } = useMemo(() => {
    const processBase = qty * price * 0.15;
    const productBase = qty * price;
    const processSave = processBase * 0.73;
    const productSave = productBase * 0.25;
    return { processSave, productSave, total: processSave + productSave };
  }, [qty, price]);

  const qtyMin = 500, qtyMax = 1_000_000;
  const priceMin = 1, priceMax = 20;
  const qtyProgress = ((qty - qtyMin) / (qtyMax - qtyMin)) * 100;
  const priceProgress = ((price - priceMin) / (priceMax - priceMin)) * 100;

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/8 text-forest text-xs font-semibold mb-4">
            <Calculator className="h-3.5 w-3.5" /> Einsparungs-Rechner
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-ink mb-3">
            Berechnen Sie Ihr Einsparpotenzial
          </h2>
          <p className="text-muted-foreground text-lg">
            In zwei Schritten zur transparenten Kostenanalyse Ihrer Ladungsträger-Beschaffung.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-card rounded-3xl shadow-card border border-border/50 overflow-hidden grid lg:grid-cols-2">
          {/* LEFT — controls */}
          <div className="p-8 lg:p-12 space-y-10">
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <label className="text-sm font-semibold text-ink">Ladungsträger pro Jahr</label>
                <span className="text-xl font-bold text-forest">{fmt(qty)}</span>
              </div>
              <input
                type="range"
                min={qtyMin}
                max={qtyMax}
                step={500}
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="slider-green w-full appearance-none bg-transparent cursor-pointer"
                style={{ ['--progress' as string]: `${qtyProgress}%` }}
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>500</span><span>1.000.000</span>
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-3">
                <label className="text-sm font-semibold text-ink">Ø Preis pro Einheit</label>
                <span className="text-xl font-bold text-forest">{price} €</span>
              </div>
              <input
                type="range"
                min={priceMin}
                max={priceMax}
                step={0.5}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="slider-green w-full appearance-none bg-transparent cursor-pointer"
                style={{ ['--progress' as string]: `${priceProgress}%` }}
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>1 €</span><span>20 €</span>
              </div>
            </div>

            <div className="text-xs text-muted-foreground bg-muted/50 rounded-lg p-4 border border-border/50">
              💡 Berechnung basiert auf durchschnittlichen Werten unserer 1.412 aktiven Partner.
              Tatsächliche Einsparungen können abweichen.
            </div>
          </div>

          {/* RIGHT — results */}
          <div className="p-8 lg:p-12 bg-gradient-to-br from-forest-deep to-forest text-white relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-forest-light/20 blur-3xl" />

            <div className="relative">
              <div className="text-sm font-medium text-white/70 uppercase tracking-wider mb-6">
                Ihre potenzielle Ersparnis
              </div>

              <div className="space-y-5 mb-6">
                <div className="flex items-baseline justify-between pb-4 border-b border-white/10">
                  <div>
                    <div className="text-sm text-white/80">Prozesskosten</div>
                    <div className="text-xs text-white/50">bis zu 73%</div>
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-forest-light">
                    {fmt(processSave)} €
                  </div>
                </div>

                <div className="flex items-baseline justify-between pb-4 border-b border-white/10">
                  <div>
                    <div className="text-sm text-white/80">Produktpreise</div>
                    <div className="text-xs text-white/50">bis zu 25%</div>
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-forest-light">
                    {fmt(productSave)} €
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 mb-6">
                <div className="text-xs text-white/70 uppercase tracking-wider mb-2">
                  Gesamt-Einsparpotenzial
                </div>
                <div className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight">
                  {fmt(total)} €
                </div>
                <div className="text-xs text-white/60 mt-2">pro Jahr</div>
              </div>

              <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white text-forest-deep font-semibold hover:bg-forest-light hover:text-white transition-all shadow-lg group">
                Jetzt berechnen lassen
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
