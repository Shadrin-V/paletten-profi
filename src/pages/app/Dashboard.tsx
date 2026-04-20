import { Link } from "react-router-dom";
import { mockAuth } from "@/lib/mockAuth";

// Placeholder dashboard so /app/dashboard isn't a 404 after auth.
const Dashboard = () => {
  const user = mockAuth.getUser();

  return (
    <div className="min-h-screen bg-muted/40 flex items-center justify-center p-6">
      <div className="bg-card max-w-lg w-full rounded-3xl shadow-card border border-border/60 p-10 text-center">
        <div className="inline-flex h-14 w-14 rounded-2xl bg-forest text-white items-center justify-center mb-5 text-2xl font-extrabold">
          {user?.name?.[0]?.toUpperCase() ?? "P"}
        </div>
        <h1 className="text-2xl font-extrabold text-ink mb-2">
          Willkommen{user?.name ? `, ${user.name}` : ""}!
        </h1>
        <p className="text-muted-foreground mb-1">
          Sie sind als <span className="font-semibold text-forest">
            {user?.role === "supplier" ? "Lieferant" : "Einkäufer"}
          </span> angemeldet.
        </p>
        <p className="text-xs text-muted-foreground mb-8">
          {user?.email ?? "Demo-Modus aktiv"}
        </p>
        <p className="text-sm text-muted-foreground mb-6">
          Hier entsteht Ihr persönliches Dashboard mit Marktplatz, Anfragen und Reporting.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-cta text-white font-semibold hover:bg-forest transition-all shadow-cta"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
