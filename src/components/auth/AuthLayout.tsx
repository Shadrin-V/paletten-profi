import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => (
  <div className="min-h-screen relative overflow-hidden flex flex-col">
    {/* Soft green mesh background */}
    <div className="absolute inset-0 -z-10 bg-background" />
    <div className="absolute inset-0 -z-10 opacity-70" style={{
      backgroundImage:
        "radial-gradient(circle at 15% 15%, hsl(var(--forest-light) / 0.18) 0%, transparent 45%), radial-gradient(circle at 85% 85%, hsl(var(--forest) / 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 10%, hsl(var(--wood) / 0.06) 0%, transparent 40%)",
    }} />
    <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--forest)) 1px, transparent 0)`,
      backgroundSize: "32px 32px",
    }} />

    {/* Top bar */}
    <header className="container py-6">
      <Link to="/" className="inline-flex items-center gap-2">
        <img src={logo} alt="Supplycarrier" className="h-7 w-auto" />
      </Link>
    </header>

    <main className="flex-1 flex items-center justify-center px-4 py-10">
      {children}
    </main>

    <footer className="container py-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Supplycarrier GmbH ·{" "}
      <Link to="/" className="hover:text-forest transition-colors">Datenschutz</Link> ·{" "}
      <Link to="/" className="hover:text-forest transition-colors">Impressum</Link>
    </footer>
  </div>
);

export default AuthLayout;
