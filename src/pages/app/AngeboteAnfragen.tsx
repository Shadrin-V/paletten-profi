import { useState } from "react";
import {
  Info, ArrowUpDown, ChevronDown, Filter as FilterIcon, MoreVertical,
  ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight,
  ClipboardList, Star, X, Square, ArrowLeftRight, Info as InfoI,
} from "lucide-react";
import pallet from "@/assets/pallet.jpg";
import { OFFERS_RECEIVED, type Offer, type OfferHistoryStep } from "./offersData";

const statusBadge = (s: Offer["status"]) => {
  const map: Record<Offer["status"], { bg: string; text: string; label: string }> = {
    storniert: { bg: "bg-[#EEF1EF]", text: "text-[#6B7771]", label: "Storniert" },
    archiviert: { bg: "bg-[#EEF1EF]", text: "text-[#6B7771]", label: "Archiviert" },
    aktiv: { bg: "bg-[#DCF1E2]", text: "text-[#1F6B3A]", label: "Aktiv" },
    akzeptiert: { bg: "bg-[#DCF1E2]", text: "text-[#1F6B3A]", label: "Akzeptiert" },
  };
  const v = map[s];
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold ${v.bg} ${v.text}`}>
      {v.label}
    </span>
  );
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

const Stars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i <= Math.round(rating) ? "fill-[#F59E0B] text-[#F59E0B]" : "text-[#D1D5DB]"}`}
        />
      ))}
    </div>
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

const HistoryStep = ({ step, last }: { step: OfferHistoryStep; last: boolean }) => {
  const isCancelled = step.status === "storniert";
  const Icon = isCancelled ? X : Square;
  return (
    <div className="flex items-center flex-1 min-w-0">
      <div className="flex flex-col items-center min-w-0">
        <div
          className={`h-9 w-9 rounded-full flex items-center justify-center ${
            isCancelled ? "bg-[#FCE3E3] text-[#B91C1C]" : "bg-[#EEF1EF] text-[#6B7771]"
          }`}
        >
          <Icon className="h-4 w-4" strokeWidth={2.5} />
        </div>
        <div className="mt-1.5 text-[11px] text-[#6B7771] text-center max-w-[140px] truncate">
          {step.label} (#{step.id} {step.status === "storniert" ? "Storniert" : step.status === "aktiv" ? "Aktiv" : "Archiviert"})
        </div>
      </div>
      {!last && <div className="flex-1 h-[2px] bg-[#E8EEE9] mx-2 -mt-6" />}
    </div>
  );
};

const AngeboteAnfragen = () => {
  const [selectedId, setSelectedId] = useState<number>(OFFERS_RECEIVED[0].id);
  const selected = OFFERS_RECEIVED.find((o) => o.id === selectedId) ?? OFFERS_RECEIVED[0];

  return (
    <div className="-m-5 lg:-m-6 h-[calc(100vh-48px)] flex flex-col bg-white">
      <div className="m-4 mb-3 flex items-center gap-2">
        <span className="inline-flex items-center gap-2 px-3 h-8 rounded-full bg-[#2A5C3F] text-white text-[12px] font-semibold">
          Angebote: Erhalten
          <X className="h-3.5 w-3.5 cursor-pointer" />
        </span>
      </div>

      <div className="flex-1 flex min-h-0 border-t border-[#E8EEE9]">
        {/* LEFT */}
        <aside className="w-[410px] shrink-0 border-r border-[#E8EEE9] flex flex-col bg-white">
          <div className="px-4 pt-4 pb-3 border-b border-[#E8EEE9]">
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
            {OFFERS_RECEIVED.map((o) => {
              const active = o.id === selectedId;
              return (
                <button
                  key={o.id}
                  onClick={() => setSelectedId(o.id)}
                  className={`w-full text-left px-4 py-4 border-b border-[#E8EEE9] transition-colors relative ${
                    active ? "bg-[#F0F7F3]" : "bg-white hover:bg-[#F7F9F8]"
                  }`}
                >
                  {active && <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#2A5C3F]" />}
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2 text-[13px]">
                      <ClipboardList className="h-4 w-4 text-[#4A8B6A]" />
                      <span className="font-semibold text-[#1A2B22]">Angebot: {o.id}</span>
                      <span className="text-[#6B7771]">| {o.country}</span>
                    </div>
                    {statusBadge(o.status)}
                  </div>
                  <div className="pl-6 text-[11px] text-[#6B7771] mb-2">Letzte Aktivität {o.lastActivity}</div>
                  <div className="pl-6 flex items-center justify-between mb-1">
                    <div className="text-[13px] font-medium text-[#1A2B22]">{o.user}</div>
                    <Stars rating={o.rating} />
                  </div>
                  <div className="pl-6 text-[11px] text-[#6B7771] mb-2">{o.rang}</div>
                  <div className="pl-6 text-[12px] text-[#1A2B22]">
                    <div>Anfrage: <b>{o.inquiryId}</b></div>
                    <div className="text-[#6B7771]">{o.company} | {o.zip} | {o.city} | {o.countryFull}</div>
                  </div>
                  <div className="pl-6 mt-2 flex items-center gap-2">
                    <span className="text-[13px] font-semibold text-[#1A2B22]">
                      {o.qty} {o.unit} x {o.product}
                    </span>
                    {klasseBadge(o.klasse)}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="border-t border-[#E8EEE9] px-4 py-2 flex items-center justify-between text-[12px] text-[#6B7771]">
            <span>1-{OFFERS_RECEIVED.length} von {OFFERS_RECEIVED.length}</span>
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
          <div className="flex-1 overflow-y-auto p-6">
            {/* Stepper */}
            <div className="bg-white rounded-lg border border-[#E8EEE9] shadow-sm p-5 mb-5">
              <div className="flex items-start">
                {selected.history.map((step, i) => (
                  <HistoryStep key={step.id} step={step} last={i === selected.history.length - 1} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mb-6">
              <DetailCard title="Lieferdetails">
                <Row label="Lieferbedingung" value={selected.delivery.incoterm} />
                <Row label="Lieferadresse" value={selected.delivery.address} />
                <Row label="Be- und Entlademöglichkeiten" value={selected.delivery.loading} />
                <Row label="Warenannahme" value={selected.delivery.receiving} />
              </DetailCard>
              <DetailCard title="Sonstiges">
                <Row label="Gültig bis" value={selected.validUntil} />
              </DetailCard>
            </div>

            <h3 className="text-[15px] font-bold text-[#1A2B22] mb-3">Anfragepositionen</h3>
            <div className="bg-white rounded-lg border border-[#E8EEE9] shadow-sm p-5 flex gap-5 relative">
              <button className="absolute top-3 right-3 h-7 w-7 inline-flex items-center justify-center rounded-md text-[#4A8B6A] hover:bg-[#F0F7F3]">
                <InfoI className="h-4 w-4" />
              </button>
              <img src={pallet} alt={selected.product} loading="lazy" width={140} height={140}
                className="h-[140px] w-[140px] object-contain shrink-0 rounded-md bg-[#FAF8F4]" />
              <div className="flex-1 min-w-0 pr-8">
                <div className="text-[15px] font-bold text-[#1A2B22]">{selected.product}</div>
                <div className="text-[12px] text-[#6B7771] mb-3">{selected.dimensions}</div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {selected.tags.map((t) => <Pill key={t}>{t}</Pill>)}
                </div>
                <div className="text-[13px] text-[#1A2B22]">
                  <b>Anzahl:</b> {selected.qty} {selected.unit}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#E8EEE9] bg-white px-6 py-3 flex items-center justify-end gap-2">
            <button className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-[#1B5240] hover:bg-[#2A5C3F] text-white text-[12px] font-bold tracking-wide transition-colors">
              <ArrowLeftRight className="h-4 w-4" />
              ANGEBOT VERHANDELN
            </button>
          </div>
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

export default AngeboteAnfragen;
