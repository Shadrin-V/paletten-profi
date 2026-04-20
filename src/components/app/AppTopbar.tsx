import { Link, useLocation } from "react-router-dom";
import { Home, HelpCircle, MessageSquare, User, ChevronDown, Globe, ChevronRight } from "lucide-react";

const LABELS: Record<string, string> = {
  app: "Start",
  dashboard: "Dashboard",
  marktplatz: "Marktplatz",
  "inserate-boerse": "Inseratebörse",
  anfragen: "Meine Anfragen",
  ausschreibungen: "Meine Ausschreibungen",
  inserate: "Meine Inserate",
  angebote: "Meine Angebote",
  auftraege: "Meine Aufträge",
  unternehmen: "Unternehmen",
  auslieferungen: "Auslieferungen",
  beschaffung: "Beschaffung",
  kontrakte: "Kontrakte",
  stammdaten: "Stammdaten",
  produktvorlagen: "Produktvorlagen",
  angebotsservices: "Angebotsservices",
  communities: "Communities",
  reporting: "Reporting",
  mail: "Mail-Einstellungen",
  benutzer: "Benutzer",
  dokumente: "Dokumente",
};

const IconBtn = ({ children, label }: { children: React.ReactNode; label: string }) => (
  <button
    aria-label={label}
    className="h-9 w-9 rounded-full border border-[#E8EEE9] bg-card text-forest-mid hover:text-forest hover:border-forest hover:bg-[#F0F7F3] flex items-center justify-center transition-all"
  >
    {children}
  </button>
);

const AppTopbar = () => {
  const location = useLocation();
  const parts = location.pathname.split("/").filter(Boolean);

  return (
    <header className="sticky top-0 z-30 h-12 bg-card border-b border-[#E8EEE9] flex items-center justify-between px-5">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm" aria-label="Breadcrumb">
        <Link to="/app/dashboard" className="flex items-center gap-1.5 text-muted-foreground hover:text-forest transition-colors">
          <Home className="h-3.5 w-3.5" />
          <span>Start</span>
        </Link>
        {parts.slice(1).map((p, i) => {
          const isLast = i === parts.length - 2;
          const path = "/" + parts.slice(0, i + 2).join("/");
          const label = LABELS[p] ?? p.charAt(0).toUpperCase() + p.slice(1);
          return (
            <span key={path} className="flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3 text-muted-foreground/60" />
              {isLast ? (
                <span className="font-semibold text-ink">{label}</span>
              ) : (
                <Link to={path} className="text-muted-foreground hover:text-forest transition-colors">
                  {label}
                </Link>
              )}
            </span>
          );
        })}
      </nav>

      {/* Right tools */}
      <div className="flex items-center gap-2">
        <IconBtn label="Hilfe"><HelpCircle className="h-4 w-4" /></IconBtn>
        <IconBtn label="Nachrichten">
          <span className="relative">
            <MessageSquare className="h-4 w-4" />
            <span className="absolute -top-1.5 -right-1.5 h-2 w-2 rounded-full bg-destructive ring-2 ring-card" />
          </span>
        </IconBtn>
        <IconBtn label="Konto"><User className="h-4 w-4" /></IconBtn>

        <button className="ml-1 h-9 px-3 inline-flex items-center gap-1.5 rounded-full border border-[#E8EEE9] text-sm font-medium text-foreground/80 hover:text-forest hover:border-forest transition-all">
          <Globe className="h-3.5 w-3.5" /> DE
          <ChevronDown className="h-3 w-3" />
        </button>
      </div>
    </header>
  );
};

export default AppTopbar;
