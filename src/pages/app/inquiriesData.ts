export type Status = "archiviert" | "abgelaufen" | "aktiv";
export type Klasse = "A" | "B" | "Neu";

export interface Position {
  product: string;
  dimensions: string;
  tags: string[];
  qty: number;
  unit: "LKW" | "Stück";
  delivery: string;
  klasse: Klasse;
}

export interface Inquiry {
  id: number;
  date: string;
  status: Status;
  user: string;
  company: string;
  zip: string;
  city: string;
  country: string;
  offers: number;
  orders: number;
  validUntil: string;
  cooperationFrom?: string;
  cooperationTo?: string;
  delivery: {
    incoterm: string;
    address: string;
    loading: string;
    receiving: string;
    info: string;
  };
  payment: string;
  position: Position;
}

const baseAddr = {
  user: "Viktor Pehlke",
  company: "Schäfer GmbH & Co. KG",
  zip: "49324",
  city: "Melle",
  country: "Deutschland",
};

export const ANFRAGEN: Inquiry[] = [
  {
    ...baseAddr,
    id: 24912,
    date: "22.07.2025",
    status: "archiviert",
    offers: 3,
    orders: 0,
    validUntil: "25.07.2025",
    delivery: {
      incoterm: "DDP (Frei Haus)",
      address: "Schäfer GmbH & Co. KG, Industriestr. 12, 49324 Melle, Deutschland",
      loading: "Rampe / Seite",
      receiving: "Mo-Fr: 8:00 - 16:00 Uhr",
      info: "Keine zusätzlichen Anlieferungsinformationen",
    },
    payment: "14 Tage Netto",
    position: {
      product: "Einwegpalette (Klotz)",
      dimensions: "1200 MM x 1000 MM",
      tags: ["Neu", "KT 18-22%", "Verschachtelt (1-in-1)", "IPPC", "Gekappte Ecken: Nein", "Mit Fase: Nein"],
      qty: 1,
      unit: "LKW",
      delivery: "KW 2025/31: 1 LKW",
      klasse: "Neu",
    },
  },
  {
    ...baseAddr,
    id: 24911,
    date: "18.07.2025",
    status: "abgelaufen",
    offers: 2,
    orders: 0,
    validUntil: "20.07.2025",
    delivery: {
      incoterm: "DDP (Frei Haus)",
      address: "Schäfer GmbH & Co. KG, Industriestr. 12, 49324 Melle, Deutschland",
      loading: "Rampe / Seite",
      receiving: "Mo-Fr: 8:00 - 16:00 Uhr",
      info: "Keine zusätzlichen Anlieferungsinformationen",
    },
    payment: "30 Tage Netto",
    position: {
      product: "Europalette EPAL 1",
      dimensions: "1200 MM x 800 MM",
      tags: ["Klasse B", "KT 18-22%", "Pressspan/Vollholz", "IPPC", "Sortierung: EPAL/UIC"],
      qty: 2,
      unit: "LKW",
      delivery: "KW 2025/30: 2 LKW",
      klasse: "B",
    },
  },
  {
    ...baseAddr,
    id: 21987,
    date: "07.04.2025",
    status: "archiviert",
    offers: 1,
    orders: 0,
    validUntil: "10.04.2025",
    delivery: {
      incoterm: "DDP (Frei Haus)",
      address: "Schäfer GmbH & Co. KG, Industriestr. 12, 49324 Melle, Deutschland",
      loading: "Rampe / Seite",
      receiving: "Mo-Fr: 8:00 - 16:00 Uhr",
      info: "Bitte vorab telefonisch anmelden.",
    },
    payment: "14 Tage Netto",
    position: {
      product: "Europalette EPAL 1",
      dimensions: "1200 MM x 800 MM",
      tags: ["Klasse B", "KT 18-22%", "Pressspan/Vollholz", "IPPC"],
      qty: 3,
      unit: "LKW",
      delivery: "KW 2025/15: 3 LKW",
      klasse: "B",
    },
  },
];

export const AUSSCHREIBUNGEN: Inquiry[] = [
  {
    ...baseAddr,
    id: 18432,
    date: "12.06.2025",
    status: "abgelaufen",
    offers: 5,
    orders: 0,
    validUntil: "15.06.2025",
    cooperationFrom: "01.07.2025",
    cooperationTo: "31.12.2025",
    delivery: {
      incoterm: "DDP (Frei Haus)",
      address: "Schäfer GmbH & Co. KG, Industriestr. 12, 49324 Melle, Deutschland",
      loading: "Rampe / Seite",
      receiving: "Mo-Fr: 8:00 - 16:00 Uhr",
      info: "Lieferung in Teilmengen möglich.",
    },
    payment: "30 Tage Netto",
    position: {
      product: "Europalette EPAL 1",
      dimensions: "1200 MM x 800 MM",
      tags: ["Neu", "KT 18-22%", "Pressspan/Vollholz", "Entschachtelt (1-on-1)", "Sortierung: EPAL/UIC"],
      qty: 2000,
      unit: "Stück",
      delivery: "Monatlich 500 Stück",
      klasse: "Neu",
    },
  },
  {
    ...baseAddr,
    id: 18215,
    date: "28.05.2025",
    status: "abgelaufen",
    offers: 4,
    orders: 0,
    validUntil: "01.06.2025",
    cooperationFrom: "15.06.2025",
    cooperationTo: "15.12.2025",
    delivery: {
      incoterm: "DDP (Frei Haus)",
      address: "Schäfer GmbH & Co. KG, Industriestr. 12, 49324 Melle, Deutschland",
      loading: "Rampe / Seite",
      receiving: "Mo-Fr: 8:00 - 16:00 Uhr",
      info: "Keine zusätzlichen Anlieferungsinformationen",
    },
    payment: "14 Tage Netto",
    position: {
      product: "Europalette EPAL 1",
      dimensions: "1200 MM x 800 MM",
      tags: ["Klasse A", "KT 18-22%", "Pressspan/Vollholz", "Entschachtelt (1-on-1)", "Sortierung: EPAL/UIC"],
      qty: 2000,
      unit: "Stück",
      delivery: "Monatlich 400 Stück",
      klasse: "A",
    },
  },
];
