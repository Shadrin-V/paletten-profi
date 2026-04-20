import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  Info, ArrowUpDown, ChevronDown, Filter as FilterIcon, MoreVertical,
  ClipboardList, X, Compass,
} from "lucide-react";

type Klasse = "A" | "B" | "C";
type Status = "none" | "sent";
type Kind = "anfrage" | "inserat";

interface Rfq {
  id: number;
  date: string;
  zip: string;
  city: string;
  country: string;
  qty: number;
  unit: "Stück" | "LKW";
  product: string;
  klasse: Klasse;
  status: Status;
  kind: Kind;
  lat: number;
  lng: number;
}

const RFQS: Rfq[] = [
  { id: 31748, date: "20.04.2026", zip: "1220", city: "Wien", country: "Österreich", qty: 561, unit: "Stück", product: "Europalette EPAL 1", klasse: "A", status: "none", kind: "anfrage", lat: 48.2082, lng: 16.3738 },
  { id: 31746, date: "20.04.2026", zip: "28777", city: "Bremen", country: "Deutschland", qty: 2, unit: "LKW", product: "Europalette EPAL 1", klasse: "C", status: "none", kind: "anfrage", lat: 53.0793, lng: 8.8017 },
  { id: 31742, date: "20.04.2026", zip: "46325", city: "Borken", country: "Deutschland", qty: 1, unit: "LKW", product: "Europalette EPAL 1", klasse: "B", status: "sent", kind: "anfrage", lat: 51.8439, lng: 6.8581 },
  { id: 31741, date: "20.04.2026", zip: "97486", city: "Königsberg in Bayern", country: "Deutschland", qty: 3, unit: "LKW", product: "Europalette EPAL 1", klasse: "B", status: "none", kind: "anfrage", lat: 50.0908, lng: 10.5694 },
  { id: 31740, date: "20.04.2026", zip: "59387", city: "Ascheberg", country: "Deutschland", qty: 150, unit: "Stück", product: "Europalette EPAL 1", klasse: "A", status: "none", kind: "inserat", lat: 51.7833, lng: 7.6167 },
  { id: 31739, date: "19.04.2026", zip: "10115", city: "Berlin", country: "Deutschland", qty: 2, unit: "LKW", product: "Europalette EPAL 1", klasse: "A", status: "sent", kind: "anfrage", lat: 52.5200, lng: 13.4050 },
  { id: 31738, date: "19.04.2026", zip: "20095", city: "Hamburg", country: "Deutschland", qty: 4, unit: "LKW", product: "Gitterbox", klasse: "B", status: "none", kind: "anfrage", lat: 53.5511, lng: 9.9937 },
  { id: 31737, date: "19.04.2026", zip: "80331", city: "München", country: "Deutschland", qty: 240, unit: "Stück", product: "Europalette EPAL 2", klasse: "A", status: "none", kind: "inserat", lat: 48.1351, lng: 11.5820 },
  { id: 31736, date: "18.04.2026", zip: "50667", city: "Köln", country: "Deutschland", qty: 1, unit: "LKW", product: "Europalette EPAL 1", klasse: "C", status: "none", kind: "anfrage", lat: 50.9375, lng: 6.9603 },
  { id: 31735, date: "18.04.2026", zip: "60311", city: "Frankfurt", country: "Deutschland", qty: 320, unit: "Stück", product: "Europalette EPAL 1", klasse: "B", status: "none", kind: "anfrage", lat: 50.1109, lng: 8.6821 },
  { id: 31734, date: "18.04.2026", zip: "70173", city: "Stuttgart", country: "Deutschland", qty: 2, unit: "LKW", product: "Einwegpalette", klasse: "A", status: "sent", kind: "anfrage", lat: 48.7758, lng: 9.1829 },
  { id: 31733, date: "17.04.2026", zip: "04109", city: "Leipzig", country: "Deutschland", qty: 180, unit: "Stück", product: "Europalette EPAL 1", klasse: "B", status: "none", kind: "inserat", lat: 51.3397, lng: 12.3731 },
];

const klasseStyles: Record<Klasse, string> = {
  A: "bg-[#DCF1E2] text-[#1F6B3A] border border-[#BFE3CB]",
  B: "bg-[#DDEBFA] text-[#1F4F8A] border border-[#C2DBF4]",
  C: "bg-[#FBE6CF] text-[#9A5615] border border-[#F4D2A7]",
};

const KlasseBadge = ({ k }: { k: Klasse }) => (
  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold ${klasseStyles[k]}`}>
    Klasse {k}
  </span>
);

const StatusBadge = ({ s }: { s: Status }) =>
  s === "sent" ? (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#2A5C3F] text-white">
      Angebot gesendet
    </span>
  ) : (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#EEF1EF] text-[#6B7771]">
      Kein Angebot gesendet
    </span>
  );

/* ─── Map helpers ─── */
const FlyTo = ({ target }: { target: { lat: number; lng: number; id: number } | null }) => {
  const map = useMap();
  useEffect(() => {
    if (target) map.flyTo([target.lat, target.lng], 9, { duration: 0.8 });
  }, [target, map]);
  return null;
};

/* ─── Page ─── */
const Marktplatz = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [flyTarget, setFlyTarget] = useState<{ lat: number; lng: number; id: number } | null>(null);
  const [mapType, setMapType] = useState<"map" | "sat">("map");
  const popupRefs = useRef<Record<number, L.Popup | null>>({});
  const cardRefs = useRef<Record<number, HTMLButtonElement | null>>({});

  const tileUrl = useMemo(
    () =>
      mapType === "map"
        ? "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        : "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    [mapType],
  );

  const onSelect = (rfq: Rfq) => {
    setSelectedId(rfq.id);
    setFlyTarget({ lat: rfq.lat, lng: rfq.lng, id: rfq.id });
    setTimeout(() => popupRefs.current[rfq.id]?.openOn?.((popupRefs.current[rfq.id] as any)._map), 850);
    cardRefs.current[rfq.id]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  return (
    // Negative margins cancel AppLayout's p-5/lg:p-6, then we control inner spacing
    <div className="-m-5 lg:-m-6 h-[calc(100vh-48px)] flex bg-white">
      {/* LEFT PANEL */}
      <aside className="w-[38%] min-w-[420px] max-w-[640px] border-r border-[#E8EEE9] flex flex-col bg-white">
        {/* Info banner */}
        <div className="m-4 mb-3 flex items-start gap-3 rounded-lg bg-[#EAF3F4] border border-[#CFE3E5] px-4 py-3">
          <Info className="h-5 w-5 text-[#3A7E86] shrink-0 mt-0.5" strokeWidth={2} />
          <p className="text-[13px] leading-relaxed text-[#2C4F52]">
            Hier sehen Sie alle Anfragen und Ausschreibungen von Pacurion-Partnern.
            Interessieren Sie sich für eine Anfrage oder Ausschreibung, so klicken Sie
            auf das +-Symbol und geben ein Angebot ab.
          </p>
        </div>

        {/* Filter bar */}
        <div className="px-4 pb-3 border-b border-[#E8EEE9]">
          <div className="flex items-center gap-2 mb-2">
            <button className="inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-wide text-[#4A8B6A] hover:text-[#2A5C3F] transition-colors">
              <ArrowUpDown className="h-3.5 w-3.5" />
              SORTIEREN
            </button>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <FilterPill label="STARTPUNKT" />
            <FilterPill label="PRODUKT" />
            <button className="inline-flex items-center gap-1.5 px-3 h-8 rounded-md bg-[#2A5C3F] text-white text-[11px] font-bold tracking-wide hover:bg-[#1B5240] transition-colors">
              <FilterIcon className="h-3.5 w-3.5" />
              FILTER
              <ChevronDown className="h-3 w-3" />
            </button>
            <button className="ml-auto h-8 w-8 inline-flex items-center justify-center rounded-md text-[#6B7771] hover:bg-[#F0F7F3] transition-colors">
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto">
          {RFQS.map((rfq) => {
            const active = selectedId === rfq.id;
            return (
              <button
                key={rfq.id}
                ref={(el) => (cardRefs.current[rfq.id] = el)}
                onClick={() => onSelect(rfq)}
                className={`w-full text-left px-4 py-4 border-b border-[#E8EEE9] transition-colors ${
                  active ? "bg-[#F0F7F3]" : "bg-white hover:bg-[#F7F9F8]"
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2 text-[13px] text-[#1A2B22]">
                    <ClipboardList className="h-4 w-4 text-[#4A8B6A]" />
                    <span className="font-semibold">Anfrage : {rfq.id}</span>
                    <span className="text-[#6B7771]">| {rfq.date}</span>
                  </div>
                  <StatusBadge s={rfq.status} />
                </div>
                <div className="text-[13px] text-[#1A2B22] mb-3 pl-6">
                  {rfq.zip} | {rfq.city} | {rfq.country}
                </div>
                <div className="flex items-center gap-2 pl-6">
                  <span className="text-[14px] font-semibold text-[#1A2B22]">
                    {rfq.qty} {rfq.unit} x {rfq.product}
                  </span>
                  <KlasseBadge k={rfq.klasse} />
                </div>
              </button>
            );
          })}
        </div>
      </aside>

      {/* MAP */}
      <div className="flex-1 relative">
        {/* Map/Satellite toggle */}
        <div className="absolute top-3 left-3 z-[1000] flex bg-white rounded-md shadow-md overflow-hidden border border-[#E8EEE9]">
          <button
            onClick={() => setMapType("map")}
            className={`px-4 py-1.5 text-[12px] font-semibold transition-colors ${
              mapType === "map" ? "bg-white text-[#1A2B22]" : "bg-[#F7F9F8] text-[#6B7771] hover:bg-white"
            }`}
          >
            Map
          </button>
          <button
            onClick={() => setMapType("sat")}
            className={`px-4 py-1.5 text-[12px] font-semibold transition-colors border-l border-[#E8EEE9] ${
              mapType === "sat" ? "bg-white text-[#1A2B22]" : "bg-[#F7F9F8] text-[#6B7771] hover:bg-white"
            }`}
          >
            Satellite
          </button>
        </div>

        <MapContainer
          center={[51.1657, 10.4515]}
          zoom={6}
          scrollWheelZoom
          className="h-full w-full"
          style={{ background: "#E8EEE9" }}
        >
          <TileLayer
            key={mapType}
            url={tileUrl}
            attribution='&copy; OpenStreetMap'
          />
          <FlyTo target={flyTarget} />

          {RFQS.map((rfq) => {
            const isInserat = rfq.kind === "inserat";
            const color = isInserat ? "#E85D3A" : "#2563EB";
            return (
              <CircleMarker
                key={rfq.id}
                center={[rfq.lat, rfq.lng]}
                radius={selectedId === rfq.id ? 18 : 14}
                pathOptions={{
                  color: "#FFFFFF",
                  weight: 2,
                  fillColor: color,
                  fillOpacity: 0.95,
                }}
                eventHandlers={{
                  click: () => setSelectedId(rfq.id),
                }}
              >
                <Popup
                  ref={(r) => (popupRefs.current[rfq.id] = r)}
                  closeButton={false}
                  minWidth={280}
                  maxWidth={300}
                  className="pacurion-popup"
                >
                  <PopupCard rfq={rfq} onClose={() => popupRefs.current[rfq.id]?.close()} />
                </Popup>
              </CircleMarker>
            );
          })}
        </MapContainer>

        {/* Marker number overlay (purely decorative cluster-like style) */}
        <style>{`
          .leaflet-popup-content-wrapper { border-radius: 10px; padding: 0; box-shadow: 0 8px 24px rgba(0,0,0,0.15); }
          .leaflet-popup-content { margin: 0; width: auto !important; }
          .leaflet-popup-tip { background: white; }
        `}</style>
      </div>
    </div>
  );
};

const FilterPill = ({ label }: { label: string }) => (
  <button className="inline-flex items-center gap-1.5 px-3 h-8 rounded-md bg-white border border-[#E8EEE9] text-[11px] font-bold tracking-wide text-[#4A8B6A] hover:border-[#4A8B6A] transition-colors">
    {label}
    <ChevronDown className="h-3 w-3" />
  </button>
);

const PopupCard = ({ rfq, onClose }: { rfq: Rfq; onClose: () => void }) => (
  <div className="relative p-4 w-[280px] bg-white rounded-[10px]">
    <button
      onClick={onClose}
      className="absolute top-2 right-2 h-7 w-7 inline-flex items-center justify-center rounded-md text-[#6B7771] hover:bg-[#F7F9F8]"
      aria-label="Schließen"
    >
      <X className="h-4 w-4" />
    </button>
    <div className="text-[15px] font-bold text-[#1A2B22] mb-3 pr-7">
      Anfrage Nr. {rfq.id}
    </div>
    <div className="mb-3">
      <StatusBadge s={rfq.status} />
    </div>
    <div className="text-[13px] text-[#1A2B22] mb-1">{rfq.date}</div>
    <div className="text-[13px] text-[#1A2B22] mb-3">
      {rfq.zip} | {rfq.city} | {rfq.country}
    </div>
    <div className="flex items-center gap-2 mb-4 flex-wrap">
      <span className="text-[13px] font-semibold text-[#1A2B22]">
        {rfq.qty} {rfq.unit} x {rfq.product}
      </span>
      <KlasseBadge k={rfq.klasse} />
    </div>
    <button
      disabled
      className="w-full inline-flex items-center justify-center gap-2 h-9 rounded-md bg-[#C9D2CD] text-white text-[12px] font-bold tracking-wide cursor-not-allowed"
    >
      <Compass className="h-4 w-4" />
      ROUTE ANZEIGEN
    </button>
  </div>
);

export default Marktplatz;
