import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import AuthLayout from "@/components/auth/AuthLayout";
import FloatingInput from "@/components/auth/FloatingInput";
import GoogleButton from "@/components/auth/GoogleButton";
import { mockAuth } from "@/lib/mockAuth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState<"google" | "email" | null>(null);

  const completeLogin = (provider: "google" | "email") => {
    setLoading(provider);
    setTimeout(() => {
      const role = mockAuth.getUser()?.role ?? "buyer";
      mockAuth.signIn(email || "demo@supplycarrier.de", role);
      toast.success("Willkommen zurück bei Supplycarrier!");
      navigate("/app/dashboard");
    }, 1500);
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-[440px] bg-card rounded-3xl shadow-card border border-border/60 p-8 lg:p-10 animate-fade-up">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-extrabold text-ink mb-1">Willkommen zurück</h1>
          <p className="text-sm text-muted-foreground">Melden Sie sich in Ihrem Konto an</p>
        </div>

        <GoogleButton onClick={() => completeLogin("google")} loading={loading === "google"}>
          Mit Google anmelden
        </GoogleButton>

        <div className="flex items-center gap-3 my-6">
          <span className="flex-1 h-px bg-border" />
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">oder</span>
          <span className="flex-1 h-px bg-border" />
        </div>

        <form
          className="space-y-4"
          onSubmit={(e) => { e.preventDefault(); completeLogin("email"); }}
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
            autoComplete="current-password"
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

          <div className="flex justify-end">
            <Link to="/auth/login" className="text-xs font-semibold text-forest hover:text-forest-deep transition-colors">
              Passwort vergessen?
            </Link>
          </div>

          <button
            type="submit"
            disabled={!!loading}
            className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-lg bg-cta text-white font-semibold hover:bg-forest transition-all shadow-cta disabled:opacity-70 group"
          >
            {loading === "email" ? (
              <span className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
            ) : (
              <>
                Anmelden
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Noch kein Konto?{" "}
          <Link to="/auth/register" className="font-semibold text-forest hover:text-forest-deep transition-colors">
            Jetzt registrieren →
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
