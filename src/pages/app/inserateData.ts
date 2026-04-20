export type InseratStatus = "verfuegbar" | "verkauft" | "abgelaufen";

export interface Inserat {
  id: number;
  date: string;
  status: InseratStatus;
  productType: string; // header badge
  product: string;
  dimensions: string;
  klasse: "A" | "B" | "Neu";
  qty: number;
  unit: "LKW" | "Stück";
  zip: string;
  city: string;
  country: string;
  pricePerUnit: string;
  tags: string[];
}

export const INSERATE: Inserat[] = [
  {
    id: 8821,
    date: "20.04.2026",
    status: "verfuegbar",
    productType: "EUROPALETTE",
    product: "Europalette EPAL 1",
    dimensions: "1200 MM x 800 MM",
    klasse: "A",
    qty: 5,
    unit: "LKW",
    zip: "49324",
    city: "Melle",
    country: "Deutschland",
    pricePerUnit: "10,20 €",
    tags: ["Klasse A", "KT 18-22%", "Pressspan/Vollholz", "Sortierung: EPAL/UIC"],
  },
  {
    id: 8814,
    date: "18.04.2026",
    status: "verfuegbar",
    productType: "EINWEGPALETTE",
    product: "Einwegpalette (Klotz)",
    dimensions: "1200 MM x 1000 MM",
    klasse: "Neu",
    qty: 2000,
    unit: "Stück",
    zip: "20095",
    city: "Hamburg",
    country: "Deutschland",
    pricePerUnit: "11,80 €",
    tags: ["Neu", "IPPC", "Verschachtelt (1-in-1)"],
  },
  {
    id: 8798,
    date: "15.04.2026",
    status: "verkauft",
    productType: "EUROPALETTE",
    product: "Europalette EPAL 1",
    dimensions: "1200 MM x 800 MM",
    klasse: "B",
    qty: 3,
    unit: "LKW",
    zip: "10115",
    city: "Berlin",
    country: "Deutschland",
    pricePerUnit: "8,40 €",
    tags: ["Klasse B", "Pressspan/Vollholz"],
  },
  {
    id: 8782,
    date: "10.04.2026",
    status: "abgelaufen",
    productType: "GITTERBOX",
    product: "Gitterbox",
    dimensions: "1240 MM x 835 MM",
    klasse: "B",
    qty: 500,
    unit: "Stück",
    zip: "1220",
    city: "Wien",
    country: "Österreich",
    pricePerUnit: "45,00 €",
    tags: ["Klasse B", "Stahl"],
  },
];
