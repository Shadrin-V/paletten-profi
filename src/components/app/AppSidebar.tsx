import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Home, ShoppingCart, ListChecks, ClipboardList, BarChart3, Pin, Tag,
  Package, Building2, ChevronLeft, ChevronDown, Settings,
} from "lucide-react";
import logo from "@/assets/logo.svg";
import { mockAuth } from "@/lib/mockAuth";

interface NavItem {
  label: string;
  to?: string;
  icon: typeof Home;
  children?: { label: string; to: string }[];
}

const NAV: NavItem[] = [
  { label: "Dashboard", to: "/app/dashboard", icon: Home },
  { label: "Marktplatz", to: "/app/marktplatz", icon: ShoppingCart },
  { label: "Inseratebörse", to: "/app/inserate-boerse", icon: ListChecks },
  { label: "Meine Anfragen", to: "/app/anfragen", icon: ClipboardList },
  { label: "Meine Ausschreibungen", to: "/app/ausschreibungen", icon: BarChart3 },
  { label: "Meine Inserate", to: "/app/inserate", icon: Pin },
  {
    label: "Meine Angebote", icon: Tag,
    children: [
      { label: "Anfragen", to: "/app/angebote/anfragen" },
      { label: "Ausschreibungen", to: "/app/angebote/ausschreibungen" },
      { label: "Inserate", to: "/app/angebote/inserate" },
    ],
  },
  {
    label: "Meine Aufträge", icon: Package,
    children: [
      { label: "Auslieferungen", to: "/app/auftraege/auslieferungen" },
      { label: "Beschaffung", to: "/app/auftraege/beschaffung" },
      { label: "Kontrakte", to: "/app/auftraege/kontrakte" },
    ],
  },
  {
    label: "Unternehmen", icon: Building2,
    children: [
      { label: "Stammdaten", to: "/app/unternehmen/stammdaten" },
      { label: "Produktvorlagen", to: "/app/unternehmen/produktvorlagen" },
      { label: "Angebotsservices", to: "/app/unternehmen/angebotsservices" },
      { label: "Communities", to: "/app/unternehmen/communities" },
      { label: "Reporting", to: "/app/unternehmen/reporting" },
      { label: "Mail-Einstellungen", to: "/app/unternehmen/mail" },
      { label: "Benutzer", to: "/app/unternehmen/benutzer" },
      { label: "Dokumente", to: "/app/unternehmen/dokumente" },
    ],
  },
];

interface Props {
  collapsed: boolean;
  onToggle: () => void;
}

const AppSidebar = ({ collapsed, onToggle }: Props) => {
  const location = useLocation();
  const user = mockAuth.getUser();
  const userName = user?.name ? user.name.charAt(0).toUpperCase() + user.name.slice(1) : "Viktor Pehlke";

  // Open the section that contains the active route
  const initiallyOpen = NAV.find(
    (n) => n.children?.some((c) => location.pathname.startsWith(c.to))
  )?.label;
  const [open, setOpen] = useState<string | null>(initiallyOpen ?? "Meine Angebote");

  const isActive = (to: string) => location.pathname === to;
  const isParentActive = (item: NavItem) =>
    item.children?.some((c) => location.pathname.startsWith(c.to)) ?? false;

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 bg-card border-r border-[#E8EEE9] flex flex-col transition-all duration-200 ${
        collapsed ? "w-[72px]" : "w-[220px]"
      }`}
    >
      {/* Top: brand */}
      <div className="relative px-4 py-4 border-b border-[#E8EEE9]">
        <Link to="/app/dashboard" className="flex items-center gap-2.5">
          <img src={logo} alt="Pacurion" className="h-7 w-auto shrink-0" />
          {!collapsed && (
            <div className="min-w-0">
              <div className="text-[11px] text-muted-foreground truncate font-medium">
                Schäfer GmbH & Co. KG
              </div>
            </div>
          )}
        </Link>
        <button
          onClick={onToggle}
          aria-label="Sidebar einklappen"
          className="absolute -right-3 top-6 h-6 w-6 rounded-full bg-card border border-[#E8EEE9] flex items-center justify-center text-forest hover:bg-forest hover:text-white shadow-soft transition-all"
        >
          <ChevronLeft className={`h-3.5 w-3.5 transition-transform ${collapsed ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
        {NAV.map((item) => {
          const Icon = item.icon;
          const hasChildren = !!item.children;
          const expanded = open === item.label;
          const parentActive = isParentActive(item);

          if (!hasChildren && item.to) {
            const active = isActive(item.to);
            return (
              <NavLink
                key={item.label}
                to={item.to}
                title={collapsed ? item.label : undefined}
                className={`relative flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  active
                    ? "bg-[#F0F7F3] text-forest"
                    : "text-foreground/75 hover:bg-muted/60 hover:text-forest"
                }`}
              >
                {active && <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-r bg-forest" />}
                <Icon className={`h-[18px] w-[18px] shrink-0 ${active ? "text-forest" : "text-forest-mid"}`} strokeWidth={1.75} />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </NavLink>
            );
          }

          return (
            <div key={item.label}>
              <button
                onClick={() => setOpen(expanded ? null : item.label)}
                title={collapsed ? item.label : undefined}
                className={`relative w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  parentActive
                    ? "bg-[#F0F7F3] text-forest"
                    : "text-foreground/75 hover:bg-muted/60 hover:text-forest"
                }`}
              >
                {parentActive && <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-r bg-forest" />}
                <Icon className={`h-[18px] w-[18px] shrink-0 ${parentActive ? "text-forest" : "text-forest-mid"}`} strokeWidth={1.75} />
                {!collapsed && (
                  <>
                    <span className="flex-1 text-left truncate">{item.label}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
                  </>
                )}
              </button>

              {!collapsed && (
                <div className={`grid transition-all duration-200 ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <div className="ml-9 my-1 border-l border-[#E8EEE9] pl-3 space-y-0.5">
                      {item.children!.map((c) => {
                        const active = isActive(c.to);
                        return (
                          <NavLink
                            key={c.to}
                            to={c.to}
                            className={`block px-2.5 py-1.5 rounded-md text-[13px] transition-colors ${
                              active ? "text-forest font-semibold bg-[#F0F7F3]" : "text-foreground/70 hover:text-forest hover:bg-muted/60"
                            }`}
                          >
                            {c.label}
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Bottom: user */}
      <div className="border-t border-[#E8EEE9] p-3">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-forest to-forest-mid text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-soft">
            {userName.charAt(0)}
          </div>
          {!collapsed && (
            <>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-ink truncate">{userName}</div>
                <div className="text-[11px] text-muted-foreground truncate">
                  {user?.role === "supplier" ? "Lieferant" : "Einkäufer"}
                </div>
              </div>
              <button
                onClick={() => { mockAuth.signOut(); window.location.href = "/auth/login"; }}
                className="h-8 w-8 rounded-md flex items-center justify-center text-muted-foreground hover:text-forest hover:bg-muted transition-all"
                aria-label="Einstellungen"
              >
                <Settings className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};

export default AppSidebar;
