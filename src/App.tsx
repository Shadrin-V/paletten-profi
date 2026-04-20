import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Loesungen from "./pages/Loesungen.tsx";
import Lieferanten from "./pages/Lieferanten.tsx";
import Login from "./pages/auth/Login.tsx";
import Register from "./pages/auth/Register.tsx";
import AppLayout from "./components/app/AppLayout.tsx";
import Dashboard from "./pages/app/Dashboard.tsx";
import PlaceholderPage from "./pages/app/PlaceholderPage.tsx";
import Marktplatz from "./pages/app/Marktplatz.tsx";
import Anfragen from "./pages/app/Anfragen.tsx";
import Ausschreibungen from "./pages/app/Ausschreibungen.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/loesungen" element={<Loesungen />} />
          <Route path="/lieferanten" element={<Lieferanten />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />

          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="marktplatz" element={<Marktplatz />} />
            <Route path="inserate-boerse" element={<PlaceholderPage title="Inseratebörse" description="Aktuelle Inserate aus dem Pacurion-Netzwerk." />} />
            <Route path="anfragen" element={<Anfragen />} />
            <Route path="ausschreibungen" element={<Ausschreibungen />} />
            <Route path="inserate" element={<PlaceholderPage title="Meine Inserate" />} />
            <Route path="angebote/anfragen" element={<PlaceholderPage title="Angebote · Anfragen" />} />
            <Route path="angebote/ausschreibungen" element={<PlaceholderPage title="Angebote · Ausschreibungen" />} />
            <Route path="angebote/inserate" element={<PlaceholderPage title="Angebote · Inserate" />} />
            <Route path="auftraege/auslieferungen" element={<PlaceholderPage title="Aufträge · Auslieferungen" />} />
            <Route path="auftraege/beschaffung" element={<PlaceholderPage title="Aufträge · Beschaffung" />} />
            <Route path="auftraege/kontrakte" element={<PlaceholderPage title="Aufträge · Kontrakte" />} />
            <Route path="unternehmen/stammdaten" element={<PlaceholderPage title="Stammdaten" />} />
            <Route path="unternehmen/produktvorlagen" element={<PlaceholderPage title="Produktvorlagen" />} />
            <Route path="unternehmen/angebotsservices" element={<PlaceholderPage title="Angebotsservices" />} />
            <Route path="unternehmen/communities" element={<PlaceholderPage title="Communities" />} />
            <Route path="unternehmen/reporting" element={<PlaceholderPage title="Reporting" />} />
            <Route path="unternehmen/mail" element={<PlaceholderPage title="Mail-Einstellungen" />} />
            <Route path="unternehmen/benutzer" element={<PlaceholderPage title="Benutzer" />} />
            <Route path="unternehmen/dokumente" element={<PlaceholderPage title="Dokumente" />} />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
