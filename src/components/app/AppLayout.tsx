import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AppSidebar from "@/components/app/AppSidebar";
import AppTopbar from "@/components/app/AppTopbar";
import { mockAuth } from "@/lib/mockAuth";

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    setAuthed(!!mockAuth.getUser());
  }, []);

  if (authed === null) return null;
  if (!authed) return <Navigate to="/auth/login" replace />;

  return (
    <div className="min-h-screen bg-[#F7F9F8]">
      <AppSidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />
      <div className={`transition-all duration-200 ${collapsed ? "pl-[72px]" : "pl-[220px]"}`}>
        <AppTopbar />
        <main className="p-5 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
