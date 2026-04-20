import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Building2, Plus, Star, Pencil, Trash2 } from "lucide-react";

type Tab = "stammdaten" | "adressen" | "umfragen";

interface Field {
  label: string;
  value: string;
  readonly?: boolean;
  type?: string;
}

const Stammdaten = () => {
  const [tab, setTab] = useState<Tab>("stammdaten");
  const [pub, setPub] = useState({
    kennung: "12862",
    mitarbeiter: "30",
    gruendung: "2011",
    kapazitaet: "4800",
  });
  const [priv, setPriv] = useState({
    unternehmen: "Schäfer GmbH & Co. KG",
    adresse: "Vierhausen 7",
    plz: "49324",
    ort: "Melle",
    webseite: "https://holz-schaefer.de/",
    land: "Deutschland",
    kreditoren: "",
  });

  const tabs: { id: Tab; label: string }[] = [
    { id: "stammdaten", label: "Stammdaten" },
    { id: "adressen", label: "Lieferadressen / Rechnungsadressen" },
    { id: "umfragen", label: "Umfragen" },
  ];

  const FloatField = ({
    label, value, onChange, readonly,
  }: { label: string; value: string; onChange?: (v: string) => void; readonly?: boolean }) => (
    <div className="relative group">
      <input
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        readOnly={readonly}
        className={`peer w-full h-14 px-3 pt-5 pb-1 rounded-md border text-sm text-ink outline-none transition-colors ${
          readonly
            ? "bg-[#F5F7F6] border-[#E8EEE9] cursor-not-allowed"
            : "bg-white border-[#D9E2DC] focus:border-forest focus:ring-2 focus:ring-forest/15"
        }`}
        placeholder=" "
      />
      <label className="pointer-events-none absolute left-3 top-1.5 text-[11px] font-medium text-muted-foreground">
        {label}
      </label>
    </div>
  );

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
        <Link to="/app/dashboard" className="flex items-center gap-1 hover:text-forest"><Home className="h-3.5 w-3.5" /> Start</Link>
        <span>/</span>
        <span className="flex items-center gap-1 text-ink"><Building2 className="h-3.5 w-3.5" /> Unternehmen</span>
      </nav>

      {/* Tabs */}
      <div className="border-b border-[#E8EEE9] mb-6">
        <div className="flex gap-6">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`relative py-3 text-[13px] font-semibold uppercase tracking-wide transition-colors ${
                tab === t.id ? "text-forest" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
              {tab === t.id && <span className="absolute -bottom-px left-0 right-0 h-[3px] bg-forest rounded-t" />}
            </button>
          ))}
        </div>
      </div>

      {tab === "stammdaten" && (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg border border-[#E8EEE9] shadow-sm p-6">
              <h2 className="text-base font-bold text-ink mb-5">Öffentliche Informationen</h2>
              <div className="space-y-4">
                <FloatField label="Unternehmenskennung" value={pub.kennung} readonly />
                <FloatField label="Mitarbeiterzahl" value={pub.mitarbeiter} onChange={(v) => setPub({ ...pub, mitarbeiter: v })} />
                <FloatField label="Gründungsjahr" value={pub.gruendung} onChange={(v) => setPub({ ...pub, gruendung: v })} />
                <FloatField label="Produktionskapazität in Stück p.a." value={pub.kapazitaet} onChange={(v) => setPub({ ...pub, kapazitaet: v })} />
              </div>
            </div>
            <div className="bg-card rounded-lg border border-[#E8EEE9] shadow-sm p-6">
              <h2 className="text-base font-bold text-ink mb-5">Private Informationen</h2>
              <div className="space-y-4">
                <FloatField label="Unternehmen" value={priv.unternehmen} onChange={(v) => setPriv({ ...priv, unternehmen: v })} />
                <FloatField label="Adresse" value={priv.adresse} onChange={(v) => setPriv({ ...priv, adresse: v })} />
                <div className="grid grid-cols-3 gap-3">
                  <FloatField label="Postleitzahl" value={priv.plz} onChange={(v) => setPriv({ ...priv, plz: v })} />
                  <div className="col-span-2"><FloatField label="Ort" value={priv.ort} onChange={(v) => setPriv({ ...priv, ort: v })} /></div>
                </div>
                <FloatField label="Webseite" value={priv.webseite} onChange={(v) => setPriv({ ...priv, webseite: v })} />
                <div className="relative">
                  <select
                    value={priv.land}
                    onChange={(e) => setPriv({ ...priv, land: e.target.value })}
                    className="peer w-full h-14 px-3 pt-5 pb-1 rounded-md border border-[#D9E2DC] bg-white text-sm text-ink outline-none focus:border-forest focus:ring-2 focus:ring-forest/15 appearance-none"
                  >
                    <option>Deutschland</option>
                    <option>Österreich</option>
                    <option>Schweiz</option>
                    <option>Polen</option>
                  </select>
                  <label className="pointer-events-none absolute left-3 top-1.5 text-[11px] font-medium text-muted-foreground">Land</label>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-base">🇩🇪</span>
                </div>
                <FloatField label="Kreditoren Nr." value={priv.kreditoren} onChange={(v) => setPriv({ ...priv, kreditoren: v })} />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button className="px-6 py-2.5 rounded-md bg-cta text-cta-foreground font-semibold text-sm hover:bg-forest transition-colors shadow-cta">
              SPEICHERN
            </button>
          </div>
        </>
      )}

      {tab === "adressen" && (
        <div className="bg-card rounded-lg border border-[#E8EEE9] shadow-sm overflow-hidden">
          <div className="p-5 flex items-center justify-between border-b border-[#E8EEE9]">
            <h2 className="text-base font-bold text-ink">Lieferadressen / Rechnungsadressen</h2>
            <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-cta text-cta-foreground text-sm font-semibold hover:bg-forest transition-colors">
              <Plus className="h-4 w-4" /> Neue Adresse hinzufügen
            </button>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-[#F5F7F6] text-[11px] uppercase tracking-wide text-muted-foreground">
              <tr>
                {["Label", "Straße", "PLZ", "Ort", "Land", "Standard", "Aktionen"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Hauptlager Melle", str: "Vierhausen 7", plz: "49324", ort: "Melle", land: "Deutschland", standard: true },
                { label: "Außenlager Osnabrück", str: "Industriestr. 12", plz: "49074", ort: "Osnabrück", land: "Deutschland", standard: false },
              ].map((r, i) => (
                <tr key={i} className="border-t border-[#E8EEE9]">
                  <td className="px-4 py-3 font-medium text-ink">{r.label}</td>
                  <td className="px-4 py-3 text-foreground/80">{r.str}</td>
                  <td className="px-4 py-3 text-foreground/80">{r.plz}</td>
                  <td className="px-4 py-3 text-foreground/80">{r.ort}</td>
                  <td className="px-4 py-3 text-foreground/80">{r.land}</td>
                  <td className="px-4 py-3">
                    {r.standard && <Star className="h-4 w-4 fill-highlight text-highlight" />}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button className="h-8 w-8 rounded-md hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-forest"><Pencil className="h-4 w-4" /></button>
                      <button className="h-8 w-8 rounded-md hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === "umfragen" && (
        <div className="bg-card rounded-lg border border-[#E8EEE9] shadow-sm p-12 text-center">
          <p className="text-muted-foreground">Aktuell sind keine Umfragen verfügbar.</p>
        </div>
      )}
    </div>
  );
};

export default Stammdaten;
