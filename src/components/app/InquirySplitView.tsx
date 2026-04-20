import { useState } from "react";
import {
  Info, Plus, ArrowUpDown, ChevronDown, Filter as FilterIcon, MoreVertical,
  ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight,
  Copy, Tag, Archive, Pencil, ClipboardList, Info as InfoI,
} from "lucide-react";
import pallet from "@/assets/pallet.jpg";
import type { Inquiry, Status, Klasse } from "@/pages/app/inquiriesData";

type Variant = "anfrage" | "ausschreibung";

const statusBadge = (s: Status) => {
  const map: Record<Status, string> = {
    archiviert: "bg-[#EEF1EF] text-[#6B7771]",
    abgelaufen: "bg-[#FCE3E3] text-[#B91C1C]",
    aktiv: "bg-[#DCF1E2] text-[#1F6B3A]",
  };
  const label = s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold ${map[s]}`}>
      {label}
    </span>
  );
};

const klasseBadge = (k: Klasse) => {
  const map: Record<Klasse, string> = {
    A: "bg-[#DCF1E2] text-[#1F6B3A] border border-[#BFE3CB]",
    B: "bg-[#DDEBFA] text-[#1F4F8A] border border-[#C2DBF4]",
    Neu: "bg-[#DCF1E2] text-[#1F6B3A] border border-[#BFE3CB]",
  };
  const label = k === "Neu" ? "Neu" : `Klasse ${k}`;
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${map[k]}`}>
      {label}
    </span>
  );
};

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#EEF1EF] text-[#1A2B22] border border-[#E0E5E1]">
    {children}
  </span>
);

const FilterPill = ({ label }: { label: string }) => (
  <button className="inline-flex items-center gap-1.5 px-3 h-8 rounded-md bg-white border border-[#E8EEE9] text-[11px] font-bold tracking-wide text-[#4A8B6A] hover:border-[#4A8B6A] transition-colors">
    {label}
    <ChevronDown className="h-3 w-3" />
  </button>
);

interface Props {
  variant: Variant;
  items: Inquiry[];
  infoText: string;
  newButtonLabel: string;
  positionsTitle: string;
}

const InquirySplitView = ({ variant, items, infoText, newButtonLabel, positionsTitle }: Props) => {
  const [selectedId, setSelectedId] = useState<number>(items[0]?.id);
  const selected = items.find((i) => i.id === selectedId) ?? items[0];
  const labelPrefix = variant === "anfrage" ? "Anfrage" : "Ausschreibung";

  return (
    <div className="-m-5 lg:-m-6 h-[calc(100vh-48px)] flex flex-col bg-white">
      {/* Info banner */}
      <div className="m-4 mb-3 flex items-start gap-3 rounded-lg bg-[#EAF3F4] border border-[#CFE3E5] px-4 py-3">
        <Info className="h-5 w-5 text-[#3A7E86] shrink-0 mt-0.5" strokeWidth={2} />
        <p className="text-[13px] leading-relaxed text-[#2C4F52]">{infoText}</p>
      </div>

      <div className="flex-1 flex min-h-0 border-t border-[#E8EEE9]">
        {/* LEFT */}
        <aside className="w-[410px] shrink-0 border-r border-[#E8EEE9] flex flex-col bg-white">
          {/* Header */}
          <div className="px-4 pt-4 pb-3 border-b border-[#E8EEE9]">
            <button className="w-full inline-flex items-center justify-center gap-2 h-10 rounded-md bg-[#1B5240] hover:bg-[#2A5C3F] text-white text-[12px] font-bold tracking-wide transition-colors mb-3">
              <Plus className="h-4 w-4" />
              {newButtonLabel}
            </button>
            <div className="flex items-center gap-2 mb-2">
              <button className="inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-wide text-[#4A8B6A] hover:text-[#2A5C3F] transition-colors">
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

          {/* List */}
          <div className="flex-1 overflow-y-auto">
            {items.map((it) => {
              const active = it.id === selectedId;
              return (
                <button
                  key={it.id}
                  onClick={() => setSelectedId(it.id)}
                  className={`w-full text-left px-4 py-4 border-b border-[#E8EEE9] transition-colors relative ${
                    active ? "bg-[#F0F7F3]" : "bg-white hover:bg-[#F7F9F8]"
                  }`}
                >
                  {active && <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#2A5C3F]" />}
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2 text-[13px]">
                      <ClipboardList className="h-4 w-4 text-[#4A8B6A]" />
                      <span className="font-semibold text-[#1A2B22]">{labelPrefix} : {it.id}</span>
                      <span className="text-[#6B7771]">| {it.date}</span>
                    </div>
                    {statusBadge(it.status)}
                  </div>
                  <div className="pl-6 text-[13px] text-[#1A2B22] leading-relaxed">
                    <div className="font-medium">{it.user}</div>
                    <div className="text-[#6B7771]">{it.company} | {it.zip} | {it.city} | {it.country}</div>
                  </div>
                  <div className="pl-6 mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-semibold text-[#1A2B22]">
                        {it.position.qty} {it.position.unit} x {it.position.product}
                      </span>
                      {klasseBadge(it.position.klasse)}
                    </div>
                  </div>
                  <div className="pl-6 mt-1 flex items-center gap-4 text-[11px] text-[#6B7771]">
                    <span>Angebote: <b className="text-[#1A2B22]">{it.offers}</b></span>
                    <span>Aufträge: <b className="text-[#1A2B22]">{it.orders}</b></span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="border-t border-[#E8EEE9] px-4 py-2 flex items-center justify-between text-[12px] text-[#6B7771]">
            <span>1-{items.length} von {items.length}</span>
            <div className="flex items-center gap-1">
              <button className="h-7 w-7 inline-flex items-center justify-center rounded text-[#6B7771] hover:bg-[#F0F7F3]"><ChevronsLeft className="h-4 w-4" /></button>
              <button className="h-7 w-7 inline-flex items-center justify-center rounded text-[#6B7771] hover:bg-[#F0F7F3]"><ChevronLeft className="h-4 w-4" /></button>
              <button className="h-7 w-7 inline-flex items-center justify-center rounded text-[#6B7771] hover:bg-[#F0F7F3]"><ChevronRight className="h-4 w-4" /></button>
              <button className="h-7 w-7 inline-flex items-center justify-center rounded text-[#6B7771] hover:bg-[#F0F7F3]"><ChevronsRight className="h-4 w-4" /></button>
            </div>
          </div>
        </aside>

        {/* RIGHT */}
        {selected && (
          <section className="flex-1 flex flex-col min-w-0 bg-[#F7F9F8]">
            <div className="flex-1 overflow-y-auto p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-[18px] font-bold text-[#1A2B22]">
                  {labelPrefix} Nr. {selected.id}
                </h2>
                {statusBadge(selected.status)}
              </div>

              {/* Two-column header */}
              <div className="grid grid-cols-2 gap-5 mb-6">
                <DetailCard title="Lieferdetails">
                  <Row label="Lieferbedingung" value={selected.delivery.incoterm} />
                  <Row label="Lieferadresse" value={selected.delivery.address} />
                  <Row label="Be- und Entlademöglichkeiten" value={selected.delivery.loading} />
                  <Row label="Warenannahme" value={selected.delivery.receiving} />
                  <Row label="Anlieferungsinformationen" value={selected.delivery.info} />
                </DetailCard>
                <div className="space-y-5">
                  <DetailCard title="Zahlungsdetails">
                    <Row label="Zahlungsbedingung" value={selected.payment} />
                  </DetailCard>
                  <DetailCard title="Sonstiges">
                    <Row label="Gültig bis" value={selected.validUntil} />
                    {variant === "ausschreibung" && selected.cooperationFrom && (
                      <Row
                        label="Zeitraum der Zusammenarbeit"
                        value={`${selected.cooperationFrom} – ${selected.cooperationTo}`}
                      />
                    )}
                  </DetailCard>
                </div>
              </div>

              {/* Positions */}
              <h3 className="text-[15px] font-bold text-[#1A2B22] mb-3">{positionsTitle}</h3>
              <div className="bg-white rounded-lg border border-[#E8EEE9] shadow-sm p-5 flex gap-5 relative">
                <button className="absolute top-3 right-3 h-7 w-7 inline-flex items-center justify-center rounded-md text-[#4A8B6A] hover:bg-[#F0F7F3]">
                  <InfoI className="h-4 w-4" />
                </button>
                <img
                  src={pallet}
                  alt={selected.position.product}
                  loading="lazy"
                  width={140}
                  height={140}
                  className="h-[140px] w-[140px] object-contain shrink-0 rounded-md bg-[#FAF8F4]"
                />
                <div className="flex-1 min-w-0 pr-8">
                  <div className="text-[15px] font-bold text-[#1A2B22]">{selected.position.product}</div>
                  <div className="text-[12px] text-[#6B7771] mb-3">{selected.position.dimensions}</div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {selected.position.tags.map((t) => <Pill key={t}>{t}</Pill>)}
                  </div>
                  <div className="text-[13px] text-[#1A2B22]">
                    <div><b>Anzahl:</b> {selected.position.qty} {selected.position.unit}</div>
                    <div><b>Anlieferung:</b> {selected.position.delivery}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom action bar */}
            <div className="border-t border-[#E8EEE9] bg-white px-6 py-3 flex items-center justify-end gap-2">
              <ActionBtn icon={Copy} label="KOPIEREN" />
              {variant === "ausschreibung" && (
                <>
                  <ActionBtn icon={Archive} label="ARCHIVIEREN" />
                  <ActionBtn icon={Pencil} label="BEARBEITEN" />
                </>
              )}
              <button className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-[#1B5240] hover:bg-[#2A5C3F] text-white text-[12px] font-bold tracking-wide transition-colors">
                <Tag className="h-4 w-4" />
                ANGEBOTE VERGLEICHEN
              </button>
            </div>
          </section>
        )}
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

const ActionBtn = ({ icon: Icon, label }: { icon: typeof Copy; label: string }) => (
  <button className="inline-flex items-center gap-2 h-10 px-3 rounded-md border border-[#E8EEE9] text-[#2A5C3F] text-[12px] font-bold tracking-wide hover:bg-[#F0F7F3] transition-colors">
    <Icon className="h-4 w-4" />
    {label}
  </button>
);

export default InquirySplitView;
