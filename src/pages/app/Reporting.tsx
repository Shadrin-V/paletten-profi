import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, BarChart3, Calendar, Download, ChevronDown, Filter } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList, Tooltip } from "recharts";

const fmtEur = (v: number) => v.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
const fmtNum = (v: number) => v.toLocaleString("de-DE");

const umsatzMonat = [
  { name: "2026-03", value: 2250 },
  { name: "2026-04", value: 12668.4 },
];
const mengeMonat = [
  { name: "2026-03", value: 500 },
  { name: "2026-04", value: 1224 },
];
const umsatzStandort = [{ name: "Melle", value: 14918.4 }];
const mengeStandort = [{ name: "Melle", value: 1724 }];

const ChartCard = ({
  title, legends, data, yLabel, formatter,
}: {
  title: string;
  legends: { color: "filled" | "outline"; value: string; label: string }[];
  data: { name: string; value: number }[];
  yLabel: string;
  formatter: (v: number) => string;
}) => (
  <div className="bg-card rounded-xl border border-[#E8EEE9] shadow-sm p-5">
    <h3 className="text-sm font-bold text-ink mb-3">{title}</h3>
    <div className="flex flex-wrap gap-2 mb-4">
      {legends.map((l, i) => (
        <div key={i} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F7F6] border border-[#E8EEE9] text-xs">
          <span className={`h-2.5 w-2.5 rounded-full ${l.color === "filled" ? "bg-forest" : "border-2 border-forest bg-transparent"}`} />
          <span className="font-bold text-ink">{l.value}</span>
          <span className="text-muted-foreground">{l.label}</span>
        </div>
      ))}
    </div>
    <div className="h-[260px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 12, left: 8, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E8EEE9" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#6B7773" }} axisLine={{ stroke: "#E8EEE9" }} tickLine={false} />
          <YAxis
            tick={{ fontSize: 11, fill: "#6B7773" }}
            axisLine={{ stroke: "#E8EEE9" }}
            tickLine={false}
            label={{ value: yLabel, angle: -90, position: "insideLeft", style: { fill: "#6B7773", fontSize: 11 } }}
            tickFormatter={(v) => v.toLocaleString("de-DE")}
          />
          <Tooltip
            cursor={{ fill: "rgba(42,92,63,0.06)" }}
            contentStyle={{ borderRadius: 8, border: "1px solid #E8EEE9", fontSize: 12 }}
            formatter={(v: number) => formatter(v)}
          />
          <Bar dataKey="value" fill="hsl(var(--forest))" radius={[4, 4, 0, 0]} maxBarSize={70}>
            <LabelList dataKey="value" position="top" formatter={(v: number) => formatter(v)} style={{ fontSize: 11, fill: "#1A2B22", fontWeight: 600 }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const Reporting = () => {
  const [type, setType] = useState("Verkauf");
  const [von, setVon] = useState("2026-01-01");
  const [bis, setBis] = useState("2026-04-30");

  return (
    <div>
      <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
        <Link to="/app/dashboard" className="flex items-center gap-1 hover:text-forest"><Home className="h-3.5 w-3.5" /> Start</Link>
        <span>/</span>
        <span className="flex items-center gap-1 text-ink"><BarChart3 className="h-3.5 w-3.5" /> Reporting</span>
      </nav>

      <div className="bg-card rounded-xl border border-[#E8EEE9] shadow-sm p-4 mb-5">
        <div className="flex flex-wrap items-end gap-3">
          <div className="flex-1 min-w-[180px]">
            <label className="block text-[11px] font-semibold uppercase text-muted-foreground mb-1.5">Verkauf/Einkauf</label>
            <div className="relative">
              <select value={type} onChange={(e) => setType(e.target.value)} className="w-full h-10 pl-3 pr-9 rounded-md border border-[#D9E2DC] bg-white text-sm appearance-none focus:outline-none focus:border-forest">
                <option>Verkauf</option>
                <option>Einkauf</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
          <div className="flex-1 min-w-[180px]">
            <label className="block text-[11px] font-semibold uppercase text-muted-foreground mb-1.5">Von</label>
            <div className="relative">
              <input type="date" value={von} onChange={(e) => setVon(e.target.value)} className="w-full h-10 pl-3 pr-9 rounded-md border border-[#D9E2DC] bg-white text-sm focus:outline-none focus:border-forest" />
              <Calendar className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
          <div className="flex-1 min-w-[180px]">
            <label className="block text-[11px] font-semibold uppercase text-muted-foreground mb-1.5">Bis</label>
            <div className="relative">
              <input type="date" value={bis} onChange={(e) => setBis(e.target.value)} className="w-full h-10 pl-3 pr-9 rounded-md border border-[#D9E2DC] bg-white text-sm focus:outline-none focus:border-forest" />
              <Calendar className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
          <button className="inline-flex items-center gap-1.5 h-10 px-5 rounded-md bg-cta text-cta-foreground text-sm font-semibold hover:bg-forest transition-colors shadow-cta">
            <Download className="h-4 w-4" /> EXPORTIEREN
          </button>
        </div>

        <div className="mt-3 pt-3 border-t border-[#E8EEE9] flex flex-wrap items-center gap-2">
          {["PRODUKT", "PRODUKTZUSTAND"].map((l) => (
            <button key={l} className="inline-flex items-center gap-1.5 h-9 px-3 rounded-md border border-[#D9E2DC] bg-white text-xs font-semibold text-foreground/75 hover:border-forest hover:text-forest">
              {l} <ChevronDown className="h-3.5 w-3.5" />
            </button>
          ))}
          <button className="inline-flex items-center gap-1.5 h-9 px-3 rounded-md border border-[#D9E2DC] bg-white text-xs font-semibold text-foreground/75 hover:border-forest hover:text-forest">
            <Filter className="h-3.5 w-3.5" /> FILTER <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ChartCard
          title="Umsatz im Monat"
          legends={[
            { color: "filled", value: fmtEur(14918.4), label: "Realisierter Umsatz" },
            { color: "outline", value: fmtEur(0), label: "Offener Umsatz" },
          ]}
          data={umsatzMonat}
          yLabel="Umsatz in €"
          formatter={fmtEur}
        />
        <ChartCard
          title="Menge im Monat"
          legends={[
            { color: "filled", value: fmtNum(1724), label: "Realisierte Menge" },
            { color: "outline", value: "0", label: "Offene Menge" },
          ]}
          data={mengeMonat}
          yLabel="Menge"
          formatter={fmtNum}
        />
        <ChartCard
          title="Umsatz pro Standort"
          legends={[{ color: "filled", value: fmtEur(14918.4), label: "Melle" }]}
          data={umsatzStandort}
          yLabel="Umsatz in €"
          formatter={fmtEur}
        />
        <ChartCard
          title="Menge pro Standort"
          legends={[{ color: "filled", value: fmtNum(1724), label: "Melle" }]}
          data={mengeStandort}
          yLabel="Menge"
          formatter={fmtNum}
        />
      </div>
    </div>
  );
};

export default Reporting;
