import { useState } from "react";
import {
  ArrowUpDown, ChevronDown, Filter as FilterIcon, MoreVertical,
  ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight,
  ClipboardList, Star, RefreshCw, Download, Truck, Euro, HelpCircle,
} from "lucide-react";
import pallet from "@/assets/pallet.jpg";
import { ORDERS_BESCHAFFUNG, type Order } from "./ordersData";

const statusBadge = (s: Order["status"]) => {
  if (s === "fakturiert") {
    return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#2A5C3F] text-white">Fakturiert</span>;
  }
  return <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#6B7280] text-white">Storniert</span>;
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

const Stars = ({ rating, notRated }: { rating: number; notRated?: boolean }) => {
  if (notRated) return <span className="text-[11px] text-[#6B7771]">Nicht bewertet</span>;
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-3.5 w-3.5 ${i <= rating ? "fill-[#F59E0B] text-[#F59E0B]" : "text-[#D1D5DB]"}`} />
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
  <button className="inline-flex items-center gap-1.5 px-3 h-8 rounded-md bg-white border border-[#E8EEE9] text-[11px] font-bold tracking-wide text-[#4A8B6A] hover:border-[#4A8B6A]">
    {label}
    <ChevronDown className="h-3 w-3" />
  </button>
);

const ActionBtn = ({ icon: Icon, label, primary }: { icon: typeof RefreshCw; label: string; primary?: boolean }) => (
  <button className={`inline-flex items-center gap-2 h-10 px-3 rounded-md text-[12px] font-bold tracking-wide transition-colors ${
    primary
      ? "bg-[#1B5240] hover:bg-[#2A5C3F] text-white"
      : "border border-[#E8EEE9] text-[#2A5C3F] hover:bg-[#F0F7F3]"
  }`}>
    <Icon className="h-4 w-4" />
    {label}
  </button>
);

const Beschaffung = () => {
  const [selectedId, setSelectedId] = useState<number>(ORDERS_BESCHAFFUNG[0].id);
  const selected = ORDERS_BESCHAFFUNG.find((o) => o.id === selectedId) ?? ORDERS_BESCHAFFUNG[0];

  return (
    <div className="-m-5 lg:-m-6 h-[calc(100vh-48px)] flex flex-col bg-white">
      <div className="flex-1 flex min-h-0">
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
            {ORDERS_BESCHAFFUNG.map((o) => {
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
                      <span className="font-semibold text-[#1A2B22]">Auftrag: {o.id}</span>
                    </div>
                    {statusBadge(o.status)}
                  </div>
                  {o.service && <div className="pl-6 text-[11px] text-[#4A8B6A] font-semibold mb-1">Service</div>}
                  <div className="pl-6 text-[12px] text-[#1A2B22] mb-1">
                    Kunde: <b>{o.customer}</b>
                  </div>
                  <div className="pl-6 text-[11px] text-[#6B7771] mb-2">
                    {o.zip} | {o.city} | {o.country} | {o.date}
                  </div>
                  <div className="pl-6 mb-2">
                    <Stars rating={o.rating} notRated={o.notRated} />
                  </div>
                  <div className="pl-6 flex items-center gap-2">
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
            <span>1-{ORDERS_BESCHAFFUNG.length} von {ORDERS_BESCHAFFUNG.length}</span>
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
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[18px] font-bold text-[#1A2B22]">Auftrag Nr. {selected.id}</h2>
              {statusBadge(selected.status)}
            </div>

            <div className="grid grid-cols-2 gap-5 mb-6">
              <DetailCard title="Kunde">
                <Row label="Firma" value={selected.customer} />
                <Row label="Adresse" value={`${selected.zip} ${selected.city}, ${selected.country}`} />
                <Row label="Auftragsdatum" value={selected.date} />
              </DetailCard>
              <DetailCard title="Sonstige Details">
                <Row label="Kundenbestellnummer" value={selected.orderNumber} />
              </DetailCard>
            </div>

            <h3 className="text-[15px] font-bold text-[#1A2B22] mb-3">Positionen</h3>
            <div className="bg-white rounded-lg border border-[#E8EEE9] shadow-sm p-5 flex gap-5 mb-6">
              <img src={pallet} alt={selected.product} loading="lazy" width={140} height={140}
                className="h-[140px] w-[140px] object-contain shrink-0 rounded-md bg-[#FAF8F4]" />
              <div className="flex-1 min-w-0">
                <div className="text-[15px] font-bold text-[#1A2B22]">{selected.product}</div>
                <div className="text-[12px] text-[#6B7771] mb-3">{selected.dimensions}</div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {selected.tags.map((t) => <Pill key={t}>{t}</Pill>)}
                </div>
                <div className="text-[13px] text-[#1A2B22] mb-1">{selected.qty} {selected.unit}</div>
                <div className="text-[13px] text-[#1A2B22]">
                  <b>Preis pro Stück:</b> {selected.pricePerUnit}
                </div>
              </div>
            </div>

            <h3 className="text-[15px] font-bold text-[#1A2B22] mb-3 inline-flex items-center gap-1.5">
              Auftragsanhänge
              <HelpCircle className="h-4 w-4 text-[#6B7771]" />
            </h3>
            <div className="bg-white rounded-lg border border-[#E8EEE9] shadow-sm p-8 text-center text-[13px] text-[#6B7771]">
              Keine Anhänge
            </div>
          </div>

          <div className="border-t border-[#E8EEE9] bg-white px-6 py-3 flex items-center justify-end gap-2 flex-wrap">
            <ActionBtn icon={RefreshCw} label="ERNEUT ANFRAGEN" />
            <ActionBtn icon={Download} label="AUFTRAGSBESTÄTIGUNG HERUNTERLADEN" />
            <ActionBtn icon={Truck} label="LIEFERDETAILS" />
            <ActionBtn icon={Euro} label="RECHNUNGEN" primary />
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

export default Beschaffung;
