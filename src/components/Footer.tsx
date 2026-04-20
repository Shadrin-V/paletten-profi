import { Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.svg";

const cols = [
  {
    title: "Produkte",
    links: ["Europaletten", "Gitterboxen", "Einwegpaletten", "Kunststoffpaletten", "Transportverpackungen"],
  },
  {
    title: "Unternehmen",
    links: ["Über uns", "Karriere", "Presse", "Partner", "Blog"],
  },
  {
    title: "Support",
    links: ["Hilfe-Center", "Kontakt", "API-Dokumentation", "Status", "Sicherheit"],
  },
];

const Footer = () => (
  <footer className="bg-ink text-white pt-20 pb-8">
    <div className="container">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="bg-white inline-block rounded-lg px-3 py-2 mb-5">
            <img src={logo} alt="Supplycarrier" className="h-11 w-auto" />
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
            Die führende KI-gestützte B2B Plattform für Ladungsträger und Transportverpackungen in Europa.
          </p>
          <div className="flex gap-3">
            {[Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 rounded-lg bg-white/5 hover:bg-forest hover:scale-105 flex items-center justify-center transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-5 text-white">
              {col.title}
            </h4>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-white/60 hover:text-forest-light transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
            {col.title === "Support" && (
              <div className="mt-6 space-y-2 text-sm text-white/60">
                <a href="mailto:hallo@supplycarrier.de" className="flex items-center gap-2 hover:text-forest-light transition-colors">
                  <Mail className="h-4 w-4" /> hallo@supplycarrier.de
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> München, Deutschland
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xs text-white/50">
          © {new Date().getFullYear()} Supplycarrier GmbH. Alle Rechte vorbehalten.
        </div>
        <div className="flex gap-6 text-xs text-white/50">
          <a href="#" className="hover:text-forest-light transition-colors">Datenschutz</a>
          <a href="#" className="hover:text-forest-light transition-colors">Impressum</a>
          <a href="#" className="hover:text-forest-light transition-colors">AGB</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
