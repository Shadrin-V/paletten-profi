import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import logo from "@/assets/logo.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Produkte", href: "#produkte" },
    { label: "Beschaffungslösungen", href: "#loesungen" },
    { label: "Für Lieferanten", href: "#lieferanten" },
    { label: "Über uns", href: "#ueber" },
    { label: "Newsletter", href: "#newsletter" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-18 items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Pacurion" className="h-8 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-forest transition-colors rounded-md hover:bg-muted/60"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="flex items-center gap-1.5 text-sm font-medium text-foreground/70 hover:text-forest transition-colors">
            <Globe className="h-4 w-4" />
            DE
          </button>
          <button className="px-4 py-2 text-sm font-semibold rounded-md border-2 border-forest text-forest hover:bg-forest hover:text-white transition-all">
            Demo buchen
          </button>
          <button className="px-4 py-2 text-sm font-semibold rounded-md bg-cta text-cta-foreground hover:bg-forest transition-all shadow-cta">
            Anmelden
          </button>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-4 space-y-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-foreground/80"
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-3 border-t border-border">
            <button className="px-4 py-2 text-sm font-semibold rounded-md border-2 border-forest text-forest">
              Demo buchen
            </button>
            <button className="px-4 py-2 text-sm font-semibold rounded-md bg-cta text-cta-foreground">
              Anmelden
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
