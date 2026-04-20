import { Star, Quote } from "lucide-react";

const Testimonial = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container">
      <div className="max-w-4xl mx-auto bg-muted/50 rounded-3xl p-8 lg:p-16 relative border border-border/50">
        <Quote className="absolute top-8 left-8 lg:top-12 lg:left-12 h-20 w-20 text-forest/10" strokeWidth={1} fill="currentColor" />

        <div className="relative text-center">
          <p className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-ink leading-tight tracking-tight text-balance mb-10">
            „Mit der Plattform konnten wir unsere Beschaffungskosten um{" "}
            <span className="text-forest">23% reduzieren</span> und den manuellen Aufwand
            nahezu eliminieren."
          </p>

          <div className="flex flex-col items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-forest to-forest-mid flex items-center justify-center text-white text-xl font-bold shadow-card">
              TM
            </div>
            <div>
              <div className="font-bold text-ink">Thomas Müller</div>
              <div className="text-sm text-muted-foreground">Leiter Einkauf · Mustermann Logistics GmbH</div>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-highlight fill-highlight" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonial;
