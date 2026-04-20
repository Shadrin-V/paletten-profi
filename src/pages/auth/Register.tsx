import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight, Warehouse, Truck, Check } from "lucide-react";
import { toast } from "sonner";
import AuthLayout from "@/components/auth/AuthLayout";
import FloatingInput from "@/components/auth/FloatingInput";
import GoogleButton from "@/components/auth/GoogleButton";
import { mockAuth, type UserRole } from "@/lib/mockAuth";

const RoleCard = ({
  active,
  icon: Icon,
  title,
  desc,
  onClick,
}: {
  active: boolean;
  icon: typeof Warehouse;
  title: string;
  desc: string;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`group w-full h-[120px] rounded-2xl border-2 p-5 flex items-center gap-5 text-left transition-all ${
      active
        ? "border-forest bg-forest/5 shadow-soft"
        : "border-border bg-card hover:border-forest/50 hover:bg-forest/[0.03]"
    }`}
  >
    <div className={`shrink-0 h-14 w-14 rounded-full flex items-center justify-center transition-all ${
      active ? "bg-forest text-white" : "bg-forest/10 text-forest group-hover:bg-forest/20"
    }`}>
      <Icon className="h-6 w-6" strokeWidth={1.75} />
    </div>
    <div className="flex-1 min-w-0">
      <div className="font-bold text-ink text-base">{title}</div>
      <div className="text-sm text-muted-foreground mt-0.5">{desc}</div>
    </div>
    <div className="shrink-0 flex items-center gap-3">
      <span className={`h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all ${
        active ? "border-forest bg-forest" : "border-border"
      }`}>
        {active && <span className="h-2 w-2 rounded-full bg-white" />}
      </span>
      <ArrowRight className={`h-4 w-4 transition-all ${active ? "text-forest translate-x-0.5" : "text-muted-foreground/50"}`} />
    </div>
  </button>
);

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<UserRole>("buyer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [agb, setAgb] = useState(false);
  const [loading, setLoading] = useState<"google" | "email" | null>(null);

  const completeRegister = (provider: "google" | "email") => {
    if (provider === "email" && !agb) {
      toast.error("Bitte akzeptieren Sie die AGB");
      return;
    }
    setLoading(provider);
    setTimeout(() => {
      mockAuth.signIn(email || "demo@pacurion.de", role);
      toast.success("Willkommen bei Pacurion! Ihr Konto wurde erstellt.");
      navigate("/app/dashboard");
    }, 1500);
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-[480px] bg-card rounded-3xl shadow-card border border-border/60 p-8 lg:p-10 animate-fade-up">
        <div className="text-center mb-7">
          <h1 className="text-2xl font-extrabold text-ink mb-1">Konto erstellen</h1>
          <p className="text-sm text-muted-foreground">Wählen Sie Ihren Account-Typ</p>
        </div>

        <div className="space-y-3 mb-7">
          <RoleCard
            active={role === "buyer"}
            icon={Warehouse}
            title="Ich bin Einkäufer"
            desc="Ich kaufe Ladungsträger ein"
            onClick={() => setRole("buyer")}
          />
          <RoleCard
            active={role === "supplier"}
            icon={Truck}
            title="Ich bin Lieferant"
            desc="Ich verkaufe Ladungsträger"
            onClick={() => setRole("supplier")}
          />
        </div>

        <GoogleButton onClick={() => completeRegister("google")} loading={loading === "google"}>
          Mit Google registrieren
        </GoogleButton>

        <div className="flex items-center gap-3 my-6">
          <span className="flex-1 h-px bg-border" />
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">oder</span>
          <span className="flex-1 h-px bg-border" />
        </div>

        <form
          className="space-y-4"
          onSubmit={(e) => { e.preventDefault(); completeRegister("email"); }}
        >
          <FloatingInput
            label="E-Mail"
            type="email"
            value={email}
            onChange={setEmail}
            autoComplete="email"
            required
          />
          <FloatingInput
            label="Passwort"
            type={showPw ? "text" : "password"}
            value={password}
            onChange={setPassword}
            autoComplete="new-password"
            required
            rightSlot={
              <button
                type="button"
                onClick={() => setShowPw((s) => !s)}
                className="h-8 w-8 inline-flex items-center justify-center rounded-md text-muted-foreground hover:text-forest hover:bg-forest/8 transition-all"
                aria-label={showPw ? "Passwort verbergen" : "Passwort anzeigen"}
              >
                {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            }
          />

          <label className="flex items-start gap-3 cursor-pointer group select-none">
            <span className="relative shrink-0 mt-0.5">
              <input
                type="checkbox"
                checked={agb}
                onChange={(e) => setAgb(e.target.checked)}
                className="peer sr-only"
                required
              />
              <span className={`h-5 w-5 rounded border-2 flex items-center justify-center transition-all ${
                agb ? "bg-forest border-forest" : "border-border bg-card group-hover:border-forest/50"
              }`}>
                {agb && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />}
              </span>
            </span>
            <span className="text-xs text-muted-foreground leading-relaxed">
              Ich akzeptiere die{" "}
              <Link to="/" className="text-forest font-semibold hover:underline">AGB</Link> und die{" "}
              <Link to="/" className="text-forest font-semibold hover:underline">Datenschutz­erklärung</Link>.
            </span>
          </label>

          <button
            type="submit"
            disabled={!!loading}
            className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-lg bg-cta text-white font-semibold hover:bg-forest transition-all shadow-cta disabled:opacity-70 group"
          >
            {loading === "email" ? (
              <span className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
            ) : (
              <>
                Registrieren
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Bereits ein Konto?{" "}
          <Link to="/auth/login" className="font-semibold text-forest hover:text-forest-deep transition-colors">
            Jetzt anmelden →
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Register;
