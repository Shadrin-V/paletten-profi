export type OrderStatus = "fakturiert" | "storniert";

export interface Order {
  id: number;
  status: OrderStatus;
  service: boolean;
  customer: string;
  zip: string;
  city: string;
  country: string;
  date: string;
  rating: number;
  notRated?: boolean;
  qty: number;
  unit: "LKW" | "Stück";
  product: string;
  dimensions: string;
  klasse: "A" | "B" | "Neu";
  tags: string[];
  pricePerUnit: string;
  orderNumber: string;
}

export const ORDERS_BESCHAFFUNG: Order[] = [
  {
    id: 19813,
    status: "fakturiert",
    service: true,
    customer: "Schäfer GmbH & Co. KG",
    zip: "48465",
    city: "Schüttorf",
    country: "Deutschland",
    date: "09.07.2025",
    rating: 5,
    qty: 1,
    unit: "LKW",
    product: "Europalette EPAL 1",
    dimensions: "1200 MM x 800 MM x 144 MM",
    klasse: "A",
    tags: ["Klasse A", "Keine Kammertrocknung", "Pressspan/Vollholz", "Verschachtelt (1-in-1)", "Sortierung: EPAL/UIC"],
    pricePerUnit: "9,10 €",
    orderNumber: "Keine Bestellnummer angegeben",
  },
  {
    id: 19772,
    status: "fakturiert",
    service: true,
    customer: "Müller Logistik AG",
    zip: "10115",
    city: "Berlin",
    country: "Deutschland",
    date: "02.07.2025",
    rating: 4,
    qty: 2,
    unit: "LKW",
    product: "Europalette EPAL 1",
    dimensions: "1200 MM x 800 MM x 144 MM",
    klasse: "A",
    tags: ["Klasse A", "KT 18-22%", "Pressspan/Vollholz", "Sortierung: EPAL/UIC"],
    pricePerUnit: "9,40 €",
    orderNumber: "BST-2025-0772",
  },
  {
    id: 19654,
    status: "storniert",
    service: false,
    customer: "Becker Holz KG",
    zip: "20095",
    city: "Hamburg",
    country: "Deutschland",
    date: "20.06.2025",
    rating: 0,
    notRated: true,
    qty: 1,
    unit: "LKW",
    product: "Einwegpalette (Klotz)",
    dimensions: "1200 MM x 1000 MM x 140 MM",
    klasse: "Neu",
    tags: ["Neu", "IPPC", "KT 18-22%", "Verschachtelt (1-in-1)"],
    pricePerUnit: "12,80 €",
    orderNumber: "Keine Bestellnummer angegeben",
  },
  {
    id: 19533,
    status: "fakturiert",
    service: true,
    customer: "Wien Paletten AG",
    zip: "1220",
    city: "Wien",
    country: "Österreich",
    date: "11.06.2025",
    rating: 5,
    qty: 3,
    unit: "LKW",
    product: "Europalette EPAL 1",
    dimensions: "1200 MM x 800 MM x 144 MM",
    klasse: "B",
    tags: ["Klasse B", "Pressspan/Vollholz", "Sortierung: EPAL/UIC"],
    pricePerUnit: "7,90 €",
    orderNumber: "AT-2025-533",
  },
  {
    id: 19401,
    status: "fakturiert",
    service: true,
    customer: "Klein Logistik GmbH",
    zip: "80331",
    city: "München",
    country: "Deutschland",
    date: "28.05.2025",
    rating: 4,
    qty: 2,
    unit: "LKW",
    product: "Europalette EPAL 1",
    dimensions: "1200 MM x 800 MM x 144 MM",
    klasse: "A",
    tags: ["Klasse A", "KT 18-22%", "Pressspan/Vollholz", "Sortierung: EPAL/UIC"],
    pricePerUnit: "9,25 €",
    orderNumber: "BST-2025-0401",
  },
  {
    id: 19288,
    status: "storniert",
    service: false,
    customer: "Huber AG",
    zip: "8001",
    city: "Zürich",
    country: "Schweiz",
    date: "15.05.2025",
    rating: 0,
    notRated: true,
    qty: 1,
    unit: "LKW",
    product: "Europalette EPAL 1",
    dimensions: "1200 MM x 800 MM x 144 MM",
    klasse: "B",
    tags: ["Klasse B", "Pressspan/Vollholz", "KT 18-22%"],
    pricePerUnit: "8,60 €",
    orderNumber: "CH-2025-288",
  },
];
