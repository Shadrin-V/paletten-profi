import { useState } from "react";
import {
  Info, Plus, ArrowUpDown, ChevronDown, Filter as FilterIcon, MoreVertical,
  ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight,
  ClipboardList, ChevronsLeft as DoubleChevron, RefreshCw,
} from "lucide-react";
import pallet from "@/assets/pallet.jpg";
import { INSERATE, type Inserat } from "./inserateData";

const statusBadge = (s: Inserat["status"]) => {
  const map = {
    verfuegbar: { bg: "bg-[#DCF1E2]", text: "text-[#1F6B3A]", label: "Verfügbar" },
    verkauft: { bg: "bg-[#2A5C3F]", text: "text-white", label: "Verkauft" },
    abgelaufen: { bg: "bg-[#FCE3E3]", text: "text-[#B91C1C]", label: "Abgelaufen" },
  } as const;
  const v = map[s];
  return <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold ${v.bg} ${v.text}`}>{v.label}</span>;
};

const klasseBadge = (k: "A" | "B" | "Neu") => {
  const map = {
    A: "bg-[#DCF1E2] text-[#1F6B3A] border-[#BFE3CB]",
    B: "bg-[#DDEBFA] text-[#1F4F8A] border-[#C2DBF4]",
    Neu: "bg-[#DCF1E2] text-[#1F6B3A] border-[#BFE3CB]",
  } as const;
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${map[k]}`}>
      {k === "Neu" ? "Neu" : `Klasse ${k}`}
    </span>
  );
};

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#EEF1EF] text-[#1A2B22] border border-[#E0E5E1]">
    {children}
  </span>
);

const FilterPill = ({ label }: { label: string }) => (
  <button className="inline-flex items-center gap-1.5 px-3 h-8 rounded-md bg-white border border-[#E8EEE9] text-[11px] font-bold tracking-wide text-[#4A8B6A] hover:border-[#4A8B6A]">
    {label}
    <ChevronDown className="h-3 w-3" />
  </button>
);

const Inserate = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selected = selectedId ? INSERATE.find((i) => i.id === selectedId) ?? null : null;

  return (
    <div className="-m-5 lg:-m-6 h-[calc(100vh-48px)] flex flex-col bg-white">
      <div className="flex-1 flex min-h-0">
        {/* LEFT */}
        <aside className="w-[410px] shrink-0 border-r border-[#E8EEE9] flex flex-col bg-white">
          <div className="px-4 pt-4 pb-3 border-b border-[#E8EEE9]">
            <button className="w-full inline-flex items-center justify-center gap-2 h-10 rounded-md bg-[#1B5240] hover:bg-[#2A5C3F] text-white text-[12px] font-bold tracking-wide transition-colors mb-3">
              <Plus className="h-4 w-4" />
              NEUES INSERAT
            </button>
            <div className="flex items-center gap-2 mb-2">
              <button className="inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-wide text-[#4A8B6A] hover:text-[#2A5C3F]">
                <ArrowUpDown className="h-3.5 w-3.5" />
                SORTIEREN
              </button>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <FilterPill label="PRODUKT" />
              <button className="inline-flex items-center gap-1.5 px-3 h-8 rounded-md bg-[#2A5C3F] text-white text-[11px] font-bold tracking-wide hover:bg-[#1B5240]">
                <FilterIcon className="h-3.5 w-3.5" />
                FILTER
                <ChevronDown className="h-3 w-3" />
              </button>
              <button className="ml-auto h-8 w-8 inline-flex items-center justify-center rounded-md text-[#6B7771] hover:bg-[#F0F7F3]">
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {INSERATE.map((it) => {
              const active = it.id === selectedId;
              return (
                <button
                  key={it.id}
                  onClick={() => setSelectedId(it.id)}
                  className={`w-full text-left border-b border-[#E8EEE9] transition-colors relative ${
                    active ? "bg-[#F0F7F3]" : "bg-white hover:bg-[#F7F9F8]"
                  }`}
                >
                  {active && <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#2A5C3F]" />}
                  <div className="px-4 pt-3 pb-1">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold tracking-wider bg-[#EEF1EF] text-[#4A8B6A]">
                      {it.productType}
                    </span>
                  </div>
                  <div className="px-4 pb-4">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 text-[13px]">
                        <ClipboardList className="h-4 w-4 text-[#4A8B6A]" />
                        <span className="font-semibold text-[#1A2B22]">Inserat: {it.id}</span>
                        <span className="text-[#6B7771]">| {it.date}</span>
                      </div>
                      {statusBadge(it.status)}
                    </div>
                    <div className="pl-6 text-[12px] text-[#6B7771] mb-2">
                      {it.zip} | {it.city} | {it.country}
                    </div>
                    <div className="pl-6 flex items-center gap-2 mb-1">
                      <span className="text-[13px] font-semibold text-[#1A2B22]">
                        {it.qty} {it.unit} x {it.product}
                      </span>
                      {klasseBadge(it.klasse)}
                    </div>
                    <div className="pl-6 text-[12px] text-[#1A2B22]">
                      <b>{it.pricePerUnit}</b> / Stück
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="border-t border-[#E8EEE9] px-4 py-2 flex items-center justify-between text-[12px] text-[#6B7771]">
            <span>1-{INSERATE.length} von {INSERATE.length}</span>
            <div className="flex items-center gap-1">
              <button className="h-7 w-7 inline-flex items-center justify-center rounded text-[#6B7771] hover:bg-[#F0F7F3]"><ChevronsLeft className="h-4 w-4" /></button>
              <button className="h-7 w-7 inline-flex items-center justify-center rounded text-[#6B7771] hover:bg-[#F0F7F3]"><ChevronLeft className="h-4 w-4" /></button>
              <button className="h-7 w-7 inline-flex items-center justify-center rounded text-[#6B7771] hover:bg-[#F0F7F3]"><ChevronRight className="h-4 w-4" /></button>
              <button className="h-7 w-7 inline-flex items-center justify-center rounded text-[#6B7771] hover:bg-[#F0F7F3]"><ChevronsRight className="h-4 w-4" /></button>
            </div>
          </div>
        </aside>

        {/* RIGHT */}
        <section className="flex-1 flex flex-col min-w-0 bg-[#F7F9F8]">
          {!selected ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8">
              <DoubleChevron className="h-20 w-20 text-[#1A2B22] mb-6" strokeWidth={1.5} />
              <h2 className="text-[22px] font-bold text-[#1A2B22] mb-6">Wähle ein Inserat aus</h2>
              <div className="max-w-md flex items-start gap-3 rounded-lg bg-[#EAF3F4] border border-[#CFE3E5] px-4 py-3">
                <Info className="h-5 w-5 text-[#3A7E86] shrink-0 mt-0.5" />
                <p className="text-[13px] leading-relaxed text-[#2C4F52]">
                  Hier erstellen Sie schnell und einfach neue Inserate und vermarkten Ihre verfügbaren Bestände an unsere Partner.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-[18px] font-bold text-[#1A2B22]">Inserat Nr. {selected.id}</h2>
                  {statusBadge(selected.status)}
                </div>

                <div className="grid grid-cols-2 gap-5 mb-6">
                  <DetailCard title="Standort">
                    <Row label="Adresse" value={`${selected.zip} ${selected.city}, ${selected.country}`} />
                    <Row label="Erstellt am" value={selected.date} />
                  </DetailCard>
                  <DetailCard title="Preis & Menge">
                    <Row label="Menge" value={`${selected.qty} ${selected.unit}`} />
                    <Row label="Preis pro Stück" value={selected.pricePerUnit} />
                  </DetailCard>
                </div>

                <h3 className="text-[15px] font-bold text-[#1A2B22] mb-3">Inseratspositionen</h3>
                <div className="bg-white rounded-lg border border-[#E8EEE9] shadow-sm p-5 flex gap-5">
                  <img src={pallet} alt={selected.product} loading="lazy" width={140} height={140}
                    className="h-[140px] w-[140px] object-contain shrink-0 rounded-md bg-[#FAF8F4]" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[15px] font-bold text-[#1A2B22]">{selected.product}</div>
                    <div className="text-[12px] text-[#6B7771] mb-3">{selected.dimensions}</div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {selected.tags.map((t) => <Pill key={t}>{t}</Pill>)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#E8EEE9] bg-white px-6 py-3 flex items-center justify-end gap-2">
                <button className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-[#1B5240] hover:bg-[#2A5C3F] text-white text-[12px] font-bold tracking-wide transition-colors">
                  <RefreshCw className="h-4 w-4" />
                  INSERAT VERLÄNGERN
                </button>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

const DetailCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white rounded-lg border border-[#E8EEE9] shadow-sm">
    <div className="px-4 py-2.5 bg-[#4A8B6A] text-white text-[12px] font-semibold tracking-wide rounded-t-lg">
      {title}
    </div>
    <div className="p-4 space-y-2.5">{children}</div>
  </div>
);

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="text-[13px]">
    <div className="text-[#6B7771] text-[11px] uppercase tracking-wide font-medium">{label}</div>
    <div className="text-[#1A2B22] mt-0.5">{value}</div>
  </div>
);

export default Inserate;
