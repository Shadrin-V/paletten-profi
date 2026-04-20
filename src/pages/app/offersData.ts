export type OfferStatus = "storniert" | "archiviert" | "aktiv" | "akzeptiert";

export interface OfferHistoryStep {
  id: number;
  label: string;
  status: "storniert" | "archiviert" | "aktiv";
  isMine?: boolean;
}

export interface Offer {
  id: number;
  country: string;
  status: OfferStatus;
  lastActivity: string;
  user: string;
  rating: number; // 0-5
  rang: string;
  inquiryId: number;
  company: string;
  zip: string;
  city: string;
  countryFull: string;
  qty: number;
  unit: "LKW" | "Stück";
  product: string;
  dimensions: string;
  klasse: "A" | "B" | "Neu";
  tags: string[];
  history: OfferHistoryStep[];
  delivery: {
    incoterm: string;
    address: string;
    loading: string;
    receiving: string;
  };
  validUntil: string;
}

export const OFFERS_RECEIVED: Offer[] = [
  {
    id: 125762,
    country: "Deutschland",
    status: "storniert",
    lastActivity: "vor 9 Monaten",
    user: "Viktor Pehlke",
    rating: 4.5,
    rang: "Rang 3+",
    inquiryId: 24912,
    company: "Schäfer GmbH & Co. KG",
    zip: "49324",
    city: "Melle",
    countryFull: "Deutschland",
    qty: 2,
    unit: "LKW",
    product: "Europalette EPAL 1",
    dimensions: "1200 MM x 800 MM",
    klasse: "B",
    tags: ["Klasse B", "Pressspan/Vollholz", "Keine Kammertrocknung", "Entschachtelt (1-on-1)", "Sortierung: EPAL/UIC"],
    history: [
      { id: 126051, label: "Angebot", status: "storniert" },
      { id: 126045, label: "Mein Angebot", status: "archiviert", isMine: true },
      { id: 125762, label: "Angebot", status: "archiviert" },
    ],
    delivery: {
      incoterm: "DDP (Frei Haus)",
      address: "Schäfer GmbH & Co. KG, Industriestr. 12, 49324 Melle, Deutschland",
      loading: "Rampe / Seite",
      receiving: "Mo-Fr: 8:00 - 16:00 Uhr",
    },
    validUntil: "30.07.2025",
  },
  {
    id: 125701,
    country: "Deutschland",
    status: "akzeptiert",
    lastActivity: "vor 3 Monaten",
    user: "Markus Weber",
    rating: 5,
    rang: "Rang 1+",
    inquiryId: 24895,
    company: "Logistik Müller GmbH",
    zip: "10115",
    city: "Berlin",
    countryFull: "Deutschland",
    qty: 1,
    unit: "LKW",
    product: "Europalette EPAL 1",
    dimensions: "1200 MM x 800 MM",
    klasse: "A",
    tags: ["Klasse A", "Pressspan/Vollholz", "KT 18-22%", "Entschachtelt (1-on-1)", "Sortierung: EPAL/UIC"],
    history: [
      { id: 125701, label: "Mein Angebot", status: "aktiv", isMine: true },
    ],
    delivery: {
      incoterm: "DDP (Frei Haus)",
      address: "Logistik Müller GmbH, Hauptstr. 5, 10115 Berlin, Deutschland",
      loading: "Rampe",
      receiving: "Mo-Fr: 7:00 - 17:00 Uhr",
    },
    validUntil: "15.10.2025",
  },
  {
    id: 125610,
    country: "Österreich",
    status: "archiviert",
    lastActivity: "vor 6 Monaten",
    user: "Anna Schmidt",
    rating: 4,
    rang: "Rang 2+",
    inquiryId: 24802,
    company: "Wien Paletten AG",
    zip: "1220",
    city: "Wien",
    countryFull: "Österreich",
    qty: 3,
    unit: "LKW",
    product: "Europalette EPAL 2",
    dimensions: "1200 MM x 1000 MM",
    klasse: "B",
    tags: ["Klasse B", "Pressspan/Vollholz", "KT 18-22%", "Sortierung: EPAL/UIC"],
    history: [
      { id: 125610, label: "Angebot", status: "archiviert" },
    ],
    delivery: {
      incoterm: "FCA",
      address: "Wien Paletten AG, Industriegasse 8, 1220 Wien, Österreich",
      loading: "Seite",
      receiving: "Mo-Fr: 8:00 - 15:00 Uhr",
    },
    validUntil: "20.06.2025",
  },
  {
    id: 125488,
    country: "Deutschland",
    status: "storniert",
    lastActivity: "vor 8 Monaten",
    user: "Thomas Becker",
    rating: 3.5,
    rang: "Rang 4+",
    inquiryId: 24711,
    company: "Becker Holz KG",
    zip: "20095",
    city: "Hamburg",
    countryFull: "Deutschland",
    qty: 4,
    unit: "LKW",
    product: "Einwegpalette (Klotz)",
    dimensions: "1200 MM x 1000 MM",
    klasse: "Neu",
    tags: ["Neu", "KT 18-22%", "IPPC", "Verschachtelt (1-in-1)"],
    history: [
      { id: 125488, label: "Angebot", status: "storniert" },
    ],
    delivery: {
      incoterm: "DDP (Frei Haus)",
      address: "Becker Holz KG, Hafenstr. 22, 20095 Hamburg, Deutschland",
      loading: "Rampe / Seite",
      receiving: "Mo-Fr: 6:00 - 18:00 Uhr",
    },
    validUntil: "10.05.2025",
  },
  {
    id: 125330,
    country: "Deutschland",
    status: "archiviert",
    lastActivity: "vor 10 Monaten",
    user: "Sabine Klein",
    rating: 4.5,
    rang: "Rang 2+",
    inquiryId: 24580,
    company: "Klein Logistik GmbH",
    zip: "80331",
    city: "München",
    countryFull: "Deutschland",
    qty: 2,
    unit: "LKW",
    product: "Europalette EPAL 1",
    dimensions: "1200 MM x 800 MM",
    klasse: "A",
    tags: ["Klasse A", "Pressspan/Vollholz", "KT 18-22%", "Sortierung: EPAL/UIC"],
    history: [
      { id: 125330, label: "Mein Angebot", status: "archiviert", isMine: true },
    ],
    delivery: {
      incoterm: "DDP (Frei Haus)",
      address: "Klein Logistik GmbH, Maxstr. 1, 80331 München, Deutschland",
      loading: "Rampe",
      receiving: "Mo-Fr: 8:00 - 16:00 Uhr",
    },
    validUntil: "01.04.2025",
  },
  {
    id: 125201,
    country: "Schweiz",
    status: "storniert",
    lastActivity: "vor 11 Monaten",
    user: "Peter Huber",
    rating: 4,
    rang: "Rang 3+",
    inquiryId: 24420,
    company: "Huber AG",
    zip: "8001",
    city: "Zürich",
    countryFull: "Schweiz",
    qty: 1,
    unit: "LKW",
    product: "Europalette EPAL 1",
    dimensions: "1200 MM x 800 MM",
    klasse: "B",
    tags: ["Klasse B", "Pressspan/Vollholz", "KT 18-22%"],
    history: [
      { id: 125201, label: "Angebot", status: "storniert" },
    ],
    delivery: {
      incoterm: "FCA",
      address: "Huber AG, Bahnhofstr. 10, 8001 Zürich, Schweiz",
      loading: "Rampe / Seite",
      receiving: "Mo-Fr: 7:30 - 16:30 Uhr",
    },
    validUntil: "20.03.2025",
  },
];
