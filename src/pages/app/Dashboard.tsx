import { useState, useMemo } from "react";
import {
  ClipboardList, FileText, ExternalLink, BarChart3,
  ChevronLeft, ChevronRight, Calendar as CalIcon,
} from "lucide-react";

/* ───────── Card primitives ───────── */

const CardShell = ({
  title,
  icon: Icon,
  children,
  right,
}: {
  title: string;
  icon: typeof ClipboardList;
  children: React.ReactNode;
  right?: React.ReactNode;
}) => (
  <div className="bg-card rounded-lg border border-[#E8EEE9] shadow-sm overflow-hidden">
    <div className="flex items-center justify-between px-4 py-3 bg-[#4A8B6A] text-white">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4" strokeWidth={2} />
        <h3 className="text-sm font-semibold tracking-wide">{title}</h3>
      </div>
      {right}
    </div>
    <div>{children}</div>
  </div>
);

/* ───────── Aufgaben ───────── */

const tasks = [
  { label: "CP Dokument einreichen", date: "20.04.2026" },
  { label: "EPAL Dokument einreichen", date: "20.04.2026" },
];

const TasksCard = () => (
  <CardShell title="Aufgaben" icon={ClipboardList}>
    <div className="divide-y divide-[#E8EEE9]">
      {tasks.map((t, i) => (
        <div key={i} className="flex items-center gap-3 px-4 py-3 hover:bg-muted/30 transition-colors group">
          <FileText className="h-4 w-4 text-forest-mid shrink-0" strokeWidth={1.75} />
          <span className="flex-1 text-sm text-ink">{t.label}</span>
          <span className="px-2.5 py-0.5 rounded-full bg-destructive text-destructive-foreground text-[11px] font-semibold whitespace-nowrap">
            {t.date}
          </span>
          <button className="h-7 w-7 inline-flex items-center justify-center rounded-md text-muted-foreground hover:text-forest hover:bg-[#F0F7F3] transition-all" aria-label="Öffnen">
            <ExternalLink className="h-3.5 w-3.5" />
          </button>
        </div>
      ))}
      {/* Empty rows */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={`e${i}`} className="px-4 py-3 h-[49px]" />
      ))}
    </div>
  </CardShell>
);

/* ───────── Jahresumsatz ───────── */

const RevenueCard = () => {
  const [tab, setTab] = useState<"einkauf" | "verkauf">("einkauf");

  return (
    <CardShell title="Jahresumsatz" icon={BarChart3}>
      <div className="px-4 pt-3 border-b border-[#E8EEE9]">
        <div className="flex gap-6">
          {(["einkauf", "verkauf"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-3 text-xs font-bold tracking-wider uppercase border-b-2 transition-colors ${
                tab === t ? "border-forest text-forest" : "border-transparent text-muted-foreground hover:text-forest"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Empty donut */}
      <div className="flex flex-col items-center justify-center px-4 py-10 min-h-[260px]">
        <div className="relative mb-4">
          <svg width="180" height="180" viewBox="0 0 180 180">
            <circle cx="90" cy="90" r="70" fill="none" stroke="#E8EEE9" strokeWidth="22" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <div className="text-xs text-muted-foreground">Keine Daten</div>
            <div className="text-[10px] text-muted-foreground/60 mt-0.5">für 2026</div>
          </div>
        </div>

        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-cta text-white text-xs font-semibold uppercase tracking-wider hover:bg-forest transition-all shadow-cta">
          <BarChart3 className="h-3.5 w-3.5" /> Zum Reporting
        </button>
      </div>
    </CardShell>
  );
};

/* ───────── Calendar weeks ───────── */

const WeeksSection = () => {
  const [base, setBase] = useState(17);
  const weeks = useMemo(() => [base, base + 1, base + 2], [base]);

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <button
          onClick={() => setBase((b) => Math.max(1, b - 3))}
          className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-[#E8EEE9] bg-card text-forest hover:bg-[#F0F7F3] transition-all"
          aria-label="Vorherige Wochen"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-[#E8EEE9] bg-card text-forest hover:bg-[#F0F7F3] transition-all" aria-label="Kalender">
          <CalIcon className="h-4 w-4" />
        </button>
        <div className="px-3 h-8 inline-flex items-center text-sm font-medium text-ink bg-card border border-[#E8EEE9] rounded-md">
          2026-{String(weeks[0]).padStart(2, "0")} – 2026-{String(weeks[2]).padStart(2, "0")}
        </div>
        <button className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-[#E8EEE9] bg-card text-forest hover:bg-[#F0F7F3] transition-all" aria-label="Kalender">
          <CalIcon className="h-4 w-4" />
        </button>
        <button
          onClick={() => setBase((b) => b + 3)}
          className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-[#E8EEE9] bg-card text-forest hover:bg-[#F0F7F3] transition-all"
          aria-label="Nächste Wochen"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {weeks.map((w) => (
          <div key={w} className="bg-card rounded-lg border border-[#E8EEE9] shadow-sm overflow-hidden">
            <div className="bg-[#4A8B6A] text-white px-4 py-3 text-sm font-semibold">
              Kalenderwoche {w}
            </div>
            <div className="min-h-[200px] flex items-center justify-center px-4 py-8">
              <div className="text-center">
                <div className="inline-flex h-10 w-10 rounded-full bg-muted/60 items-center justify-center mb-2">
                  <CalIcon className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">Keine Aufträge</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ───────── Page ───────── */

const Dashboard = () => {
  return (
    <div className="space-y-5">
      <div className="grid lg:grid-cols-2 gap-4">
        <TasksCard />
        <RevenueCard />
      </div>
      <WeeksSection />
    </div>
  );
};

export default Dashboard;
