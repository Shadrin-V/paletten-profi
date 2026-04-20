import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home, Mail, Bell, Truck, Sparkles, ShoppingCart, AlertTriangle, TrendingDown,
  Edit3, FileText, Star, Flame, Users, Filter, ChevronDown,
} from "lucide-react";

interface NotifItem {
  id: string;
  title: string;
  desc: string;
  icon: typeof Bell;
}

const LEFT: NotifItem[] = [
  { id: "angebot_erhalten", title: "Angebot erhalten", desc: "Benachrichtigung über erhaltene Angebote inkl. Gegenvorschläge", icon: Bell },
  { id: "auftraege", title: "Aufträge", desc: "Aktualisierungen zu laufenden oder neuen Lieferungen", icon: Truck },
  { id: "exklusiv", title: "Exklusive Angebote", desc: "Erhaltene exklusive Job-Angebote mit Einzelsichtbarkeit", icon: Sparkles },
  { id: "spot", title: "Spot-Marktplatz", desc: "Benachrichtigung über neue Spot-Angebote", icon: ShoppingCart },
  { id: "reklamation", title: "Reklamation", desc: "Hinweis auf neue oder aktualisierte Reklamationen", icon: AlertTriangle },
  { id: "ueberboten", title: "Angebot überboten", desc: "Ihr Angebot wurde überboten — z.B. bei 1-Platz-Verlust", icon: TrendingDown },
];

const RIGHT: NotifItem[] = [
  { id: "bearbeitet", title: "Angebot bearbeitet/storniert", desc: "Hinweis auf bearbeitete oder stornierte Angebote", icon: Edit3 },
  { id: "ausschreibungen", title: "Ausschreibungen", desc: "Ausschreibungsabrufe und Verhandlungsstatus", icon: FileText },
  { id: "bewertungen", title: "Bewertungen", desc: "Erinnerungen an ausstehende Bewertungen", icon: Star },
  { id: "top", title: "Top Anfragen der Woche", desc: "Wöchentlicher Überblick über besonders gefragte Anfragen", icon: Flame },
  { id: "communities", title: "Communities", desc: "Einladungen oder neue Community-Anfragen", icon: Users },
  { id: "gefiltert", title: "Gefilterte Anfragen/Inserate", desc: "Ein neues Inserat oder eine Anfrage entspricht Ihrem Filter", icon: Filter },
];

const Toggle = ({ on, onChange }: { on: boolean; onChange: () => void }) => (
  <button
    onClick={onChange}
    role="switch"
    aria-checked={on}
    className={`relative h-6 w-11 rounded-full transition-colors shrink-0 ${on ? "bg-forest" : "bg-[#D9E2DC]"}`}
  >
    <span
      className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${on ? "translate-x-5" : "translate-x-0"}`}
    />
  </button>
);

const Row = ({ item, on, toggle }: { item: NotifItem; on: boolean; toggle: () => void }) => {
  const Icon = item.icon;
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-[#E8EEE9] hover:border-forest/40 transition-colors">
      <Toggle on={on} onChange={toggle} />
      <div className="flex-1 min-w-0">
        <div className="text-sm font-bold text-ink">{item.title}</div>
        <div className="text-[12px] text-muted-foreground mt-0.5 leading-snug">{item.desc}</div>
      </div>
      <div className="h-9 w-9 rounded-lg bg-[#F0F7F3] flex items-center justify-center shrink-0">
        <Icon className="h-4 w-4 text-forest" strokeWidth={1.75} />
      </div>
    </div>
  );
};

const MailEinstellungen = () => {
  const allIds = [...LEFT, ...RIGHT].map((i) => i.id);
  const [state, setState] = useState<Record<string, boolean>>(
    Object.fromEntries(allIds.map((id) => [id, true])),
  );
  const [lang, setLang] = useState("Deutsch");

  const toggle = (id: string) => setState((s) => ({ ...s, [id]: !s[id] }));

  return (
    <div>
      <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
        <Link to="/app/dashboard" className="flex items-center gap-1 hover:text-forest"><Home className="h-3.5 w-3.5" /> Start</Link>
        <span>/</span>
        <span className="flex items-center gap-1 text-ink"><Mail className="h-3.5 w-3.5" /> Mail-Einstellungen</span>
      </nav>

      <h1 className="text-2xl font-extrabold text-ink mb-6">Mail Einstellungen</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-3">
          {LEFT.map((item) => (
            <Row key={item.id} item={item} on={state[item.id]} toggle={() => toggle(item.id)} />
          ))}
        </div>
        <div className="space-y-3">
          {RIGHT.map((item) => (
            <Row key={item.id} item={item} on={state[item.id]} toggle={() => toggle(item.id)} />
          ))}

          <div className="pt-3">
            <label className="block text-[11px] font-semibold uppercase text-muted-foreground mb-1.5">
              Benachrichtigungssprache
            </label>
            <div className="relative">
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="w-full h-11 pl-3 pr-9 rounded-md border border-[#D9E2DC] bg-card text-sm appearance-none focus:outline-none focus:border-forest"
              >
                <option>Deutsch</option>
                <option>English</option>
                <option>Polski</option>
                <option>Français</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailEinstellungen;
